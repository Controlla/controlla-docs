---
title: Crear proyecto
description: 'Controlla CLI es una linea de commandos que provee herramientas que facilitan el desarrollo al equipo de Controlla.'
position: 3
category: Comandos
---

Para crear un nuevo proyecto es tan sencillo como correr el siguiente comando en tu terminal:

```bash
controlla new hello-world
```

<alert type="warning">

El nombre del proyecto debera de ser en minisculas y separadas por guiones

</alert>

Se le pedirá que elija el tipo de proyecto. 

<img src="/create-light.png" class="light-img" alt="Create Cli light" />
<img src="/create-dark.png" class="dark-img" alt="Create Cli dark" />

El comando `controlla new` tiene varias opciones y puede explorarlas todas ejecutando:

```bash
controlla new --help
```

```
Usage: controlla new [options] <app-name>

create a new project powered by controlla-service

Options:
  -p, --preset <presetName>       Used specified controlla project
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -g, --git [message]             Force git initialization with initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  -h, --help                      display help for command
```