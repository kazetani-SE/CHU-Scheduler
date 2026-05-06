package auth

import (
	"context"
	"net/http"
	"strings"
)

type contextKey string

const (
	userIdKey     contextKey = "userID"
	authHeaderKey string     = "Authorization"
	bearerPrefix  string     = "Bearer "
)

func Auth(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get(authHeaderKey)
		if !strings.HasPrefix(authHeader, bearerPrefix) {
			http.Error(w, "Missing or invalid Authorization header", http.StatusUnauthorized)
			return
		}

		tokenStr := strings.TrimSpace(strings.TrimPrefix(authHeader, bearerPrefix))
		claims, err := ParseToken(tokenStr)
		if err != nil {
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), userIdKey, claims.UserID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func GetUserID(r *http.Request) string {
	if v := r.Context().Value(userIdKey); v != nil {
		if id, ok := v.(string); ok {
			return id
		}
	}
	return ""
}
