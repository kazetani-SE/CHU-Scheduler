package server

import (
	"backend/internal/config"
	"backend/internal/database"
	"fmt"

	"github.com/caarlos0/env/v11"
	"github.com/go-fuego/fuego"
)

func NewServer() *fuego.Server {
	cfg, _ := env.ParseAs[config.ServerConfig]()
	db := database.NewPool()
	port := 8978
	fmt.Printf("INFO Server CloudBearver http://localhost:%d/\n", port)
	fmt.Printf("INFO Server Fuego test api http://localhost:%d/swagger/index.html#/\n", cfg.Port)

	server := fuego.NewServer(
		fuego.WithAddr(fmt.Sprintf("localhost:%d", cfg.Port)),
		fuego.WithEngineOptions(fuego.WithOpenAPIConfig(fuego.OpenAPIConfig{
			DisableDefaultServer: true,
			DisableMessages:      true,
		}),
		),
	)

	routes := &Routes{db: db}
	routes.RegisterRoutes(server)

	return server
}
