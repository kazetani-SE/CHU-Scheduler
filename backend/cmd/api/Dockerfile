# build
FROM golang:1.25.6-alpine AS build
WORKDIR /app

# working space
COPY go.mod go.sum ./
RUN go mod download

# copt source code
COPY . .

#build
RUN go build -o main cmd/api/main.go

#Production
FROM alpine:latest
RUN adduser -D -g '' appuser
WORKDIR /app

COPY --from=build /app/main /app/main

RUN chown -R appuser:appuser /app
USER appuser

EXPOSE ${PORT}
CMD ["./main"]