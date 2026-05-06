package auth

import (
	"backend/internal/config"
	"fmt"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/golang-jwt/jwt/v5"
)

type ClaimSetup struct {
	ExpiresTime int
	ExpiresUnit string
	UserID      string
}

type Claims struct {
	jwt.RegisteredClaims
	UserID string `json:"uid"`
}

func NewSecretKey() []byte {
	cfg, err := env.ParseAs[config.KeyConfig]()
	if err != nil {
		panic(fmt.Sprintf("failed to load config: %v", err))
	}
	if cfg.Secret_key == "" {
		panic("secret key must not be empty")
	}
	return []byte(cfg.Secret_key)
}

var secretKey = NewSecretKey()

// NewClaimSetup creates a new ClaimSetup for JWT configuration.
//
// Parameters:
//   - expiresTime: duration value, e.g. 15, 30, 60
//   - expiresUnit: time unit, accepts "hour", "minute", "second"
//   - userID: unique identifier of the authenticated user
func NewClaimSetup(expiresTime int, expiresUnit string, userId string) (ClaimSetup, error) {
	if !checkValidExpiresUnit(expiresUnit) {
		return ClaimSetup{}, fmt.Errorf("expiresUnit must be hour, minute, or second")
	}

	if userId == "" {
		return ClaimSetup{}, fmt.Errorf("userID must not be empty")
	}

	return ClaimSetup{
		ExpiresTime: expiresTime,
		ExpiresUnit: expiresUnit,
		UserID:      userId,
	}, nil
}

func CreateTokenString(claimSetup ClaimSetup) (string, error) {
	timeDuration, err := getExpiresDuration(claimSetup.ExpiresTime, claimSetup.ExpiresUnit)
	if err != nil {
		return "", err
	}

	claim := Claims{
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().
				Add(timeDuration)),
			IssuedAt: jwt.NewNumericDate(time.Now()),
			Subject:  claimSetup.UserID,
		},
		UserID: claimSetup.UserID,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claim)
	return token.SignedString(secretKey) // tokenString
}

func ParseToken(tokenStr string) (*Claims, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &Claims{}, func(t *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})
	if err != nil {
		return nil, err
	}

	claims, ok := token.Claims.(*Claims)
	if !ok || !token.Valid {
		return nil, fmt.Errorf("invalid token claims")
	}

	return claims, nil
}

func getExpiresDuration(expiresTime int, expiresUnit string) (time.Duration, error) {
	switch expiresUnit {
	case "hour":
		return time.Duration(expiresTime) * time.Hour, nil
	case "minute":
		return time.Duration(expiresTime) * time.Minute, nil
	case "second":
		return time.Duration(expiresTime) * time.Second, nil
	default:
		return 0, fmt.Errorf("invalid unit: %s", expiresUnit)
	}
}

func checkValidExpiresUnit(expiresUnit string) bool {
	switch expiresUnit {
	case "minute", "hour", "second":
		return true
	}
	return false
}
