# Instrucciones para instalar y ejecutar el proyecto backend


## Ambientación
### Este proyecto necesita el JDK 17 de java para su ejecución
Sigue las siguientes instrucciones para ejecutar este proyecto.

### Crear los certificados
En caso de no existir el folder /keys en /resources debemos crearlo.

1. cambia al directorio /resources
```shell
cd projects/menubites-backend-app/src/main/resources
mkdir keys
cd keys
```

2. Crea las llaves
```shell
  openssl genrsa -out keypair.pem 2048
  openssl rsa -in keypair.pem -pubout -out public.pem
  openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out private.pem
```

### Crea la instancia de la base de datos en docker
```shell
docker run --name menubites_db -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=menubites_db -p 33026:3306 -d mysql:8.0.33
```

Este comando crea una base de datos de tipo mysql expuesta en el puerto 33036

Para poder conectarte el jdbc url se vería así: `jdbc:mysql://localhost:33026/menubites_db`

### Instala SDK Man

Ejecuta los siguientes comandos para instalar SDKMAN
```sh
   cd scripts/
   ./install_sdkman_windows.bash
```

Verifica la instalacion con:
```sh
  sdk -v
```

Instala la version del JDK necesaria para el proyecto con:
```sh
  sdk install java 17.0.10-amzn
```

### Colocar el JDK en el proyecto
1. En IntelliJ abre Configurations > Project Structure > Project.
2. Selecciona la ruta donde está instalado el JDK
3. Selecciona el JDK anteriormente instalado (java 17.0.10-amzn)


### Instala las extenciones para el proyecto
Abre Settings > Plugins > Marketplace

Luego busca e instala:
- JPA Buddy
- Codeium
- Rainbow brackets
- Detekt

### Agrega las variables de entorno del sistema.
1. Dirigente a ***configurations > edit configurations > modify options***
2. Selecciona la opcion ***Enviroment variables***
3. Agrega las variables de entorno que son proporcionadas por el equipo.
4. Da clic en ***Apply***

### Limitar recursos de docker (WSL2, Windows)

1. Crear un archivo de configuración de docker `.wslconfig` en la carpeta de usuario de windows:
   `C:\Users\{username}\.wslconfig`
2. Copiar y pegar:

```sh
   memory=1GB   # Limita la memoria de la MV a 1GB.
   processors=1  # Hace que WSL utilice solo 1 procesadodr virtual.
```

3. Abrir PowerShell con permisos de administrador y ejecutar:
```sh
    Restart-Service LxssManager`
```
4. Reiniciar computadora

### Paso final
Ejecuta la suite de pruebas para verificar que todo el proyecto esta correcto y puede ejecutarse. 

