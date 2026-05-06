package auth

import (
	"context"
	"fmt"
)

type Service struct {
	repo UserRepository
}

func NewService(r UserRepository) *Service {
	return &Service{repo: r}
}

const (
	expiresTime = 1
	expiresUnit = "hour"
)

var (
	ErrUserNotFound    = fmt.Errorf("Account does not exist!")
	ErrInvalidPassword = fmt.Errorf("Password is not corect!")
)

func (s *Service) Login(ctx context.Context, loginPayload LoginPayload) (string, error) {
	account, err := s.repo.FindByEmail(ctx, loginPayload.Email)
	if err != nil {
		return "", ErrUserNotFound
	}

	if err := CheckPassword(loginPayload.Password, account.Password); err != nil {
		return "", ErrInvalidPassword
	}

	claim, _ := NewClaimSetup(expiresTime, expiresUnit, account.Id)

	return CreateTokenString(claim)
}
