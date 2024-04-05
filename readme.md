## Como levantar el proyecto de forma local

#### 1. Clonar el repo/posicionate en tu directorio del proyecto por consola.

#### 2. Instalamos los paquetes y dependencias .

```
npm i
```
#### 3. Docker

Instalamos Docker desde el siguiente link:

[Docker Docs](https://docs.docker.com/engine/install/)

Una vez instalado nos paramos en el directorio raíz del repo de ser necesario y ejecutamos:

```
docker-compose up -d
```

#### 4. Environment

Tenemos que crear una copia del archivo .env.example en .env.

Ejecutamos el código:

```
./run_dev.sh
```

#### 5. Pruebas en Insomnia

Importamos el archivo API_COMUNIDAD_V3.json

---
#### 6. Documentacion 

http://localhost:3000/api-docs/