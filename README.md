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
1. Diferencias entre una arquitectura REST y una arquitectura de microservicios
Una arquitectura REST es un estilo de diseño de servicios web basado en el uso de HTTP y recursos, donde cada recurso (como un producto, usuario, etc.) se expone a través de una URL única. Las operaciones sobre esos recursos (crear, leer, actualizar, eliminar) se realizan utilizando los métodos estándar de HTTP: GET, POST, PUT, DELETE.

Por otro lado, la arquitectura de microservicios descompone una aplicación monolítica en pequeños servicios independientes que funcionan de forma autónoma, con una responsabilidad única por cada servicio. Estos microservicios se comunican entre sí generalmente usando APIs REST o mensajería.

Las diferencias clave entre ambos son:

Escalabilidad: Mientras que una API REST puede ser escalada horizontalmente para manejar más tráfico, los microservicios pueden escalar independientemente según la necesidad de cada servicio.

Desarrollo y despliegue: En la arquitectura REST, la aplicación generalmente se construye como un bloque monolítico, mientras que los microservicios permiten que los servicios sean desplegados y actualizados por separado.

Tecnología: En una arquitectura REST, es probable que se utilice una única tecnología o stack para todo el sistema. En microservicios, cada servicio puede usar tecnologías y bases de datos diferentes, lo que permite elegir la mejor opción según el caso de uso.

2. Desafíos de dividir una aplicación REST en microservicios
Dividir una API REST monolítica en microservicios implica varios desafíos:

Complejidad de comunicación: Los microservicios deben comunicarse entre sí a través de APIs, lo que puede resultar en problemas de latencia y fallos en la comunicación si no se gestionan bien.

Manejo de la base de datos: En una arquitectura monolítica, una sola base de datos es suficiente. Con microservicios, cada servicio puede tener su propia base de datos, lo que genera sincronización y consistencia de datos más compleja.

Desarrollo distribuido: Aunque los microservicios facilitan el trabajo en equipos distribuidos, también requieren una buena gestión de equipos y coordinación, ya que el desarrollo de cada servicio puede ser gestionado de manera independiente.

Gestión de infraestructura: La infraestructura debe estar preparada para soportar una orquestación de servicios, con herramientas como Kubernetes, descubrimiento de servicios, y monitoreo centralizado.

3. Ventajas de los microservicios frente a una API REST monolítica
Las ventajas principales de los microservicios frente a una API REST monolítica son:

Escalabilidad independiente: Los microservicios permiten escalar cada parte de la aplicación de manera independiente. Si solo uno de los servicios tiene alta demanda, se puede escalar ese servicio sin tener que escalar toda la aplicación.

Mantenibilidad y actualizaciones: Al tener cada servicio aislado, se pueden hacer actualizaciones o mejoras en un servicio sin afectar a los demás. Esto facilita la mantenibilidad a largo plazo.

Resiliencia: Los microservicios permiten una mayor resiliencia: si un servicio falla, los demás pueden seguir funcionando normalmente. Esto no es tan fácil en una arquitectura monolítica, donde un fallo puede afectar a toda la aplicación.

Flexibilidad tecnológica: Como cada servicio es independiente, se pueden usar diferentes tecnologías para diferentes servicios, eligiendo la más adecuada para cada uno, mientras que en una API REST monolítica es más difícil cambiar de tecnología.

Mejor organización de equipos: Los microservicios permiten que diferentes equipos trabajen en servicios distintos de manera más eficiente, sin interferir entre sí.
