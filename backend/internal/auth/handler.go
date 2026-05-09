package auth

import (
	"errors"
	"fmt"
	"regexp"
	"strings"

	"github.com/go-fuego/fuego"
)

type Handler struct {
	service *Service
}

func NewHandler(s *Service) *Handler {
	return &Handler{service: s}
}

var emailRegex = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)

func (h *Handler) Login(c fuego.ContextWithBody[LoginPayload]) (LoginResponse, error) {
	body, err := c.Body()
	if err != nil {
		return LoginResponse{}, fuego.BadRequestError{Detail: err.Error()}
	}

	if err := validateLoginPayload(body); err != nil {
		return LoginResponse{}, fuego.BadRequestError{Detail: err.Error()}
	}

	token, err := h.service.Login(c.Context(), body)
	if err != nil {
		switch {
		case errors.Is(err, ErrUserNotFound):
			return LoginResponse{}, fuego.NotFoundError{Detail: "user not found"}
		case errors.Is(err, ErrInvalidPassword):
			return LoginResponse{}, fuego.UnauthorizedError{Detail: "invalid credentials"}
		default:
			return LoginResponse{}, fmt.Errorf("login failed: %w", err)
		}
	}

	return LoginResponse{
		Token: token,
	}, nil
}

func validateLoginPayload(body LoginPayload) error {
	body.Email = strings.TrimSpace(body.Email)

	if body.Email == "" {
		return fmt.Errorf("email is required")
	}
	if !emailRegex.MatchString(body.Email) {
		return fmt.Errorf("invalid email format")
	}
	if body.Password == "" {
		return fmt.Errorf("password is required")
	}

	return nil
}
