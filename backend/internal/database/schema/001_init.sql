-- +goose Up
CREATE TABLE examples (
    id SERIAL PRIMARY KEY,
    description TEXT
);

-- +goose Down
DROP TABLE examples;