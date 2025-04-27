# API REST de Productos

## Características que hacen que esta sea una API REST

- Se utiliza el protocolo HTTP estándar.
- Se trabaja con recursos (`productos`) a través de URLs bien definidas.
- Se usan métodos HTTP: **GET**, **POST**, **PUT**, **DELETE**.
- Se mantiene comunicación **sin estado** (stateless).
- El formato de respuesta es **JSON**.

## Diferencias respecto de la arquitectura de 3 capas anterior

| Aspecto                | Arquitectura Anterior         | API REST Actual                      |
|-------------------------|--------------------------------|--------------------------------------|
| Entrega de contenido     | HTML + datos embebidos         | Solo datos (JSON)                    |
| Consumo                  | Navegador directo             | Frontend o clientes HTTP externos    |
| Rutas                    | Basadas en páginas (/agregar) | Basadas en recursos REST (/productos) |
| Separación de capas      | Básica                         | Clara separación en modelo-controlador-rutas |
| Estado                   | Sesión implícita               | Sin estado (stateless)               |

## Instalación y ejecución

1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `node app.js`.
4. Acceder a `http://localhost:3000/api/productos`.

---
