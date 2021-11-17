---
title: Instalación
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
position: 2
category: Comenzando
---

Agrega `@controlla/cli` globalmente a tu maquina:

<code-group>
  <code-block label="NPM" active>

  ```bash
  npm install @controlla/cli
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn global add @controlla/cli
  ```

  </code-block>
</code-group>


Después de la instalación, tendrá acceso al binario vue en su línea de comando. Puede verificar que esté instalado correctamente simplemente ejecutando vue, que debería presentarle un mensaje de ayuda con una lista de todos los comandos disponibles.

Puede comprobar que tiene la versión correcta con este comando:

```bash
controlla --version
```