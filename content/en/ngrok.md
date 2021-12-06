---
title: Ngrok
description: 'Ngrok es un archivo que podemos executar desde linea de comandos para exponer un tunel http, para permitir el acceso a dispositivos externos'
position: 10
category: Adicionales
---

En ocasiones es necesario exponer un tunel http para probar funcionalidades en un entorno local.

## Instalación

```bash
# Descargar ultima versión
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip

# Descomprimir el archivo descargado
unzip ngrok-stable-linux-amd64.zip
```

## Autenticación
### Registro
Es necesario [Crear](https://dashboard.ngrok.com/signup) o [Ingresar](https://dashboard.ngrok.com/login) a una cuenta, para posteriormente [Consultar](https://dashboard.ngrok.com/get-started/your-authtoken) nuestro token de autenticación.

Una vez que contemos con nuestro token, lo ingresamos al archivo que descargamos anteriormente
```bash
./ngrok authtoken {Token de autenticación}
```

## Uso
```bash
# Reemplazar {mi-proyecto} por la direccion de nuestro host virtual
./ngrok http -host-header={mi-proyecto}.test 80
```

## Alias
El comando anterior requiere ser executado en el mismo directorio que el archivo ngrok, para evitar esto podemos correr el siguiente comando:
```bash
mv ./ngrok ~/ngrok; 
echo 'alias ngrok="~/ngrok"' >> ~/.bashrc
```

Desde ahora podemos executar el siguiente comando desde cualquier directorio de nuestro sistema
```bash
ngrok http -host-header=mi-proyecto.test 80
```
