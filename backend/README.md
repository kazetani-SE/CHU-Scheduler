
# CHU Schedule Backend

Nothing much just some information and the workflow


## Tech Stack
- Go 1.26
- PostgreSQL
- pgx (database driver)
- sqlc (type-safe SQL)
- fuego (web framework)
- OpenAPI (API documentation)
- validator (request validation)
- JWT (authentication)
- Docker (environment)
- CloudBeaver (Database web GUI)


## Structure

```txt
backend
|
+-- cmd/
|   +-- api/
    |   +-- main.go
    |   +-- Dockerfile
+-- doc/
+-- internal/
    +-- config/ (dont touch)
    +-- database/
    |   +-- queries/
    |   +-- schema/
    +-- handlers/
    +-- middlewares/ (not yet)
    +-- server/ 
```
## Setup
Remember Download Docker and sqlc before start

### 1. Create .env file

- Create `.env`
- Follow `.env.example` format

### 2. Run Docker

```txt
docker compose down -v
docker compose up -d
```
- Check:
```txt
docker ps
```
- it should look like this
```txt
CONTAINER ID   IMAGE                        COMMAND                  CREATED       STATUS       PORTS                                         NAMES
101160aa3630   postgres:17                  "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   CHU-schedule-database
14ee0828630c   dbeaver/cloudbeaver:latest   "./launch-product.sh"    2 hours ago   Up 2 hours   0.0.0.0:8978->8978/tcp, [::]:8978->8978/tcp   course-sphere-cloudbeaver
```

### 3. Login CloudBeaver
- use this link:
```txt
http://localhost:8979
```
- it will let you create account for the first time
- click icon in the right top corner to login if you already have account

### 4. Create database
- After login click '+' icon on top left corner
- Choose New Connection - PostgreSQL
- Fill:
```txt
Host: CHU-schedule-database
Port: 5432
Database: ${DB_DATABASE}
Username: ${DB_USERNAME}
Password: ${DB_PASSWORD}
```
- Test
- Create
### 5. Create SQL 
- click SQL to create and write




## Development Workflow

### 1. Define Database Schema

- Create or update schema in:
  - `internal/database/schema/`

Examples:
```sql
CREATE TABLE examples (
    id SERIAL PRIMARY KEY,
    description TEXT
);
```

### 2. Write Queries

- Write SQL in:
  - `internal/database/queries/*.sql`

- then run: 
```txt
sqlc generate
```

### 3. Database Layer
- use functions in the generated code in:
    - `internal/database/`

### 4. Write API
- write api code in:
    - `internal/handlers/`

### 5. Run Server
- run:
```txt
go run cmd/api/main.go
```

### 6. Sumary

```txt
Schema - Query (.sql) - sqlc generate - code Handler - API
```
