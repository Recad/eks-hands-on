# DOCKER


## Construir una imagen a partir de un Dockerfile
```sh
Docker build -t <image_name> <context> 
```

## Crear un contenedor mapeando un puerto
```sh
Docker run -p <host_port>:<container_port> <image_name> <command> <args>
```

# DOCKER COMPOSE

## Despliega las definiciones de compose
```sh
Docker-compose up -d
```

## Destruye el ambiente de compose
```sh
Docker-compose down
```