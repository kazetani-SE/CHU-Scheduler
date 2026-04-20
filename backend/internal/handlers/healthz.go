package handlers

import "github.com/go-fuego/fuego"

type healthzHandler struct {
	Message string `json:"message"`
}

func GetHealth(c fuego.ContextNoBody) (healthzHandler, error) {
	return healthzHandler{
		Message: "OK",
	}, nil
}
