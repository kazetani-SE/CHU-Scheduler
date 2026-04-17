package config

type ServerConfig struct {
	Port int `env:"port" envDefault:"8080"`
}
