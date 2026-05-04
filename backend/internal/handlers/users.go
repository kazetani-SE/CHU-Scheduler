package handlers

import (
	"backend/internal/database"
	"context"

	"github.com/go-fuego/fuego"
	"github.com/jackc/pgx/v5/pgxpool"
)

type UsersResource struct {
	db *pgxpool.Pool
}

func NewUsersResource(db *pgxpool.Pool) *UsersResource {
	return &UsersResource{db: db}
}

func (ur *UsersResource) ListUsers(c fuego.ContextNoBody) ([]database.User, error) {
	ctx := context.Background()

	queries := database.New(ur.db)
	users, _ := queries.ListUsers(ctx)

	return users, nil

}
