package server

import (
	"backend/internal/auth"
	"backend/internal/database"
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

	// Auth
	authHandler := auth.NewHandler(auth.NewService(auth.NewUserRepo(database.New(r.db))))
	fuego.Post(app, "/login", authHandler.Login)
}
