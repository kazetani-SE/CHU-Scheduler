package database

import (
	"backend/internal/config"
	"context"
	"fmt"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/jackc/pgx/v5/pgxpool"
)

var instance *pgxpool.Pool

func NewPool() *pgxpool.Pool {
	if instance != nil {
		return instance
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cfg, _ := env.ParseAs[config.Database]()
	pgxConfig, err := pgxpool.ParseConfig(cfg.DatabaseURL())
	if err != nil {
		fmt.Printf("Unable database config: %v\n", err)
	}

	instance, err := pgxpool.NewWithConfig(ctx, pgxConfig)
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
	}

	if err = instance.Ping(ctx); err != nil {
		fmt.Printf("Unable to ping database: %v\n", err)
	}
	return instance
}
