# Node.JS

## Requesitios

- Una vez completada la prueba es importante subir el contenido de la misma a github y crear una pull request. De esta manera podre hacer un seguimiento personalizado de tu aprendizaje.

- Recuerda hacer un fork antes de empezar con el ejercicio y clonarlo desde el fork creado.

  ```
  git add .
  git commit -m "Ejercicio completado"
  git push origin master
  ```

- Por último te dejo los comandos para subir tu ejercicio.

## Introducción

Hoy hemos estado trabajando el router de express y tanto los parametros como los query params y el body.
Por lo tanto la idea de este ejercicio es reforzar los conocimientos aprendido sobre estas cosas.

## Instrucciones

Hay un archivo server.js creado dentro de la carpeta server, deberás hacer lo siguiente:

1. Inicializar un proyecto con express-generator.
2. Crear un nuevo router con el prefijo de `/posts`.
3. Añadir un endpoint para listar todos los posts, crear post, editar post y eliminar un post. (Utilizando un array y los verbos HTTP adecuados).
4. (BONUS) Llevar este array en memoria a un archivo aparte, donde además a los post se les pueda añadir y eliminar comentarios con sus endpoints correspondientes.

**Recordar que cuando guardais se os reseteará el array por lo tener datos pre-cargados nos servirá de ayuda.**
