package auth

import (
	"backend/internal/database"
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

type UserRepository interface {
	FindByEmail(ctx context.Context, email string) (*User, error)
}

type userRepo struct {
	q *database.Queries
}

func NewUserRepo(q *database.Queries) UserRepository {
	return &userRepo{q: q}
}

func (r *userRepo) FindByEmail(ctx context.Context, email string) (*User, error) {
	pgEmail := pgtype.Text{String: email, Valid: true}

	row, err := r.q.GetUserByEmail(ctx, pgEmail)
	if err != nil {
		return nil, err
	}

	return &User{
		Id:       row.ID.String(),
		Email:    row.Email.String,
		Password: row.Password,
	}, nil
}
