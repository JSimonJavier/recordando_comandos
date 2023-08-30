/*
  DEPLOY -> vamos a compartir nuestro proyecto al mundo -> RENDER
  objetivos:
    - hacer el deploy
    - variables de entorno -> libreria dotenv
    - armar un readme
    - refactorizar nuestro codigo para evitar repetir logica

? DEPLOY
  - proceso de llevar una app o pagina de su estado de desarrollo a un ambiente donde puede ser utilizado por usuario finales
  - tarea compleja y desafiante
  - importa => porque programar entrega su trabajo final
  - ayuda al armado del PORTFOLIO -> coleccion de trabajos o proyectos de una persona
  - una vez ya deployado -> CUALQUIER PERSONA PUEDE VER EL PROYECTO

  *github -> sitio donde solemos consultar los trabajo realizados de un desarrollor
    - recordotario de comandos:
      git add
      git status 
      git commit -m "mensaje"
      git push

    - buenas practicas commits:
      -> verbo de acciones = agregar, cambiar, remover
      -> corto y conciso
      -> agregar prefijo:
        chore: hace referencia a la realizacion de una nueva tarea
        fix: arreglas bugs

? VARIABLES DE ENTORNO
  - deploy -> codigo puede ser visto por cualquier persona -> no dejar expuesta inf
  - ejemplo:
    -> contraseñas
    -> nombres usuarios
    -> mail personal
    -> secrets JWT
    -> comentarios ocultos

    -asegurarnos => QUE NUESTRA INFORMACION NO QUEDE COMPROMETIDA

    *- que son las variables de entorno??
      - valores que se almacena fuera del codigo fuente de la app, en el sistena operativo o en un archivo de config externo.
      - almacenamos informacion sensible:
        -> contraseñas
        -> nobmres de usuarios
        -> tokens
        -> otras datos
      
      ! como vamos a utilizarlas??
        1) debemos definirlas en un archivo de configuracion externo
          - a traves de una interfaz de usuario o mediante una linea de comando
          - se define un archivo especifico -> .env -> almacena en la raiz del proyecto

        supongamos:
          -> guardar un string de conexion db -> DATABASE_URL
          -> guardar un secret -> SECRET_KEY
            *=> ARCHIVO .env
              DATABASE_URL = mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/
              SECRET_KEY = miApiKeySecreta

              -> una vez defindas -> acceder a las variables -> sintaxis espefica
              process.env.PASSWORD
                => PROCESS -> objeto global de Node que es responsable de facilitar la interacion con el sistema operativo y obtener informacion sobre la app en ejecucion dentro del entorno de node

          * dotenv -> libreria para guardar nuestra variables de entorno y poder acceder a ellas
                1) intala => npm i dotenv
                2) agregamos un archivo .env -> agregar variables
                3) usar la libreria
                4) ejecutamos la funcion dotenv.config() -> va a a traer todas las variable de .env y lo va a cargar en process.env
                5) llamamos y utilizamo las variables
                6) antes de pushear en github -> .gitignore -> .env
? README
  - archivo de texto -> informacion sobre el proyecto
  - incluye:
    -> descripcion general del proyecto
    -> instrucciones para instalarlo y utilizarlo
    -> funcionalidades principales
    -> autores y agradecimientos
    
  */