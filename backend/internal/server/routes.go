package server

import (
	"backend/internal/handlers"

	"github.com/go-fuego/fuego"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Routes struct {
	db *pgxpool.Pool
}

func (r *Routes) RegisterRoutes(app *fuego.Server) {
	// Health
	fuego.Get(app, "/health", handlers.GetHealth)

	// Users
	usersResource := handlers.NewUsersResource(r.db)
	fuego.Get(app, "/users", usersResource.ListUsers)
}
