## Prueba Técnica Front-End Zulú

## Descripción
  Construir aplicación que permita buscar, listar y detallar los productos basado en la api https://fakestoreapi.com/

## Installation

```bash
npm i 
```
Si se requiere forzar la instalación de alguna dependencia puede ejecutar 

```bash
npm i --force
```

## Run Project

```bash
npm run dev 
```
La aplicación se abrirá en http://localhost:5173/

## Consideraciones

  - Uso de VITE para la creación del proyecto para la estructura de proyecto sin tener que realizar configuraciones adicionales.

  - Uso de React TypeScript: Typescript se implementa para facilitar el uso de los Props haciendo un código más legible y más limpio y mejorar la experiencia de desarrollo gracias a la compatibilidad con IntelliSense de VS.
 
 - Clean Architecture: Se implementa parte de este tipo de arquitectura siguiendo la implementación recomendada para React para tener un código mucho más organizado y que sea altamente escalable.
 
 ![github](https://github.com/MbL40/Test-Front-Zulu/blob/master/clean-architecture.png)

- Uso de styledComponents: Se implementa styledComponents ya que a nivel personal siento que es una libreria que contiene varias ventajas a la hora de implementar CSS a nuestra aplicación. Se implementa un LayoutContainer la cual se encuentra en la carpeta de styledComponentes a nivel de SRC ya qué es un recurso global que nos ayudará a estructurar nuestra aplicación.

- Uso de axios para las peticiones: Se implementa porque la sintaxis es más sencilla que fetch y para ahorrar de líneas de código, nos evitamos hacerle un .json() a la respuesta como se debería hacer con fetch para obtener la data.
- Uso de variables de entorno (environments): Se implementa dotenv para setear la api base a la que nos vamos a conectar con fakeStoreApi.
- Configuración de alias: Se configura un alias '@' para facilitar las importaciones que realizamos dentro del proyecto y hacer un código más limpio. Este se encuentra en el archivo vite.config.ts
- Uso de React MUI: Se implementa React MUI para implementar un menú hamburguesa en la barra de búsqueda que nos permitirá llevar a las páginas de agregar, editar y eliminar producto. 
