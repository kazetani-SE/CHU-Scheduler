-- name: ListUsers :many
SELECT * FROM users;

-- name: GetUserByEmail :one
SELECT id, email, password FROM users WHERE email = $1;