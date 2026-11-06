# Arquitectura del proyecto — Dialecto

## 1. Objetivo

Definir la organización técnica de Dialecto, sus componentes principales y la forma en que se relacionan.

La arquitectura debe permitir desarrollar y mantener la plataforma de manera ordenada, facilitar futuras ampliaciones y priorizar el rendimiento en dispositivos de recursos limitados.

## 2. Stack tecnológico

El proyecto utilizará las siguientes tecnologías:

| Área | Tecnología | Responsabilidad |
|---|---|---|
| Lenguaje | JavaScript | Lenguaje principal del proyecto |
| Frontend | React | Construcción de la interfaz |
| Herramienta frontend | Vite | Entorno de desarrollo y compilación |
| Estilos | Tailwind CSS | Diseño y estilos de la interfaz |
| Backend | Node.js | Entorno de ejecución del servidor |
| Servidor | Express | Gestión de rutas y solicitudes HTTP |
| Validaciones | express-validator | Validación de datos recibidos |
| Contraseñas | bcryptjs | Hash y comparación de contraseñas |
| ORM | Sequelize | Modelado y acceso a datos |
| Base de datos | MySQL | Almacenamiento de información |
| Driver | mysql2 | Conexión entre Sequelize y MySQL |
| Autenticación | jsonwebtoken | Creación y verificación de tokens |
| Middleware | cors | Configuración del acceso entre orígenes |
| Middleware | cookie-parser | Lectura de cookies |
| Configuración | dotenv | Gestión de variables de entorno |

## 3. Arquitectura general

Dialecto utilizará una arquitectura cliente-servidor.

La aplicación estará dividida en dos partes principales:

### 3.1. Frontend

Desarrollado con React, Vite y Tailwind CSS.

Será responsable de:

- Mostrar la interfaz de usuario.
- Presentar materias, unidades y materiales de estudio.
- Gestionar la navegación.
- Mostrar ejercicios y recursos interactivos.
- Permitir la interacción con el asistente educativo.
- Enviar solicitudes al backend.
- Mostrar los resultados y mensajes correspondientes.

El frontend no debe conectarse directamente a la base de datos. Toda operación que requiera acceder o modificar información persistente deberá realizarse mediante el backend.

### 3.2. Backend

Desarrollado con Node.js y Express.

Será responsable de:

- Exponer la API del sistema.
- Gestionar las solicitudes provenientes del frontend.
- Validar los datos recibidos.
- Gestionar la autenticación y autorización.
- Ejecutar la lógica de negocio.
- Consultar y modificar la información mediante Sequelize.
- Gestionar las operaciones administrativas.
- Coordinar las funcionalidades que requieran servicios externos, como la inteligencia artificial.

## 4. Base de datos

Se utilizará MySQL como sistema de gestión de bases de datos y Sequelize como ORM.

La base de datos deberá almacenar la información necesaria para el funcionamiento de la plataforma.

Entre las áreas de información contempladas se encuentran:

- Usuarios.
- Perfiles.
- Roles y permisos.
- Materias.
- Unidades temáticas.
- Materiales de estudio.
- Recursos complementarios.
- Ejercicios y preguntas.
- Información relacionada con el aprendizaje.

La estructura definitiva de tablas, campos y relaciones se definirá en el documento de modelo de datos.

## 5. Comunicación entre componentes

La comunicación seguirá este recorrido general:

1. El usuario interactúa con la interfaz de React.
2. El frontend realiza una solicitud HTTP al backend.
3. Express recibe la solicitud y ejecuta los controles correspondientes.
4. Se realizan las validaciones necesarias.
5. El backend ejecuta la lógica de negocio.
6. Si se requiere información persistente, Sequelize consulta o modifica MySQL.
7. El backend devuelve una respuesta.
8. El frontend presenta el resultado al usuario.

El backend será el punto de entrada para las operaciones que involucren información del sistema.

## 6. Organización lógica del backend

El backend deberá mantener separadas las responsabilidades para facilitar su mantenimiento.

Se contemplan las siguientes áreas:

- **Routes:** definición de las rutas de la API.
- **Controllers:** recepción de solicitudes y construcción de respuestas.
- **Services:** lógica de negocio y operaciones principales.
- **Models:** definición de modelos y relaciones mediante Sequelize.
- **Middlewares:** autenticación, autorización y controles intermedios.
- **Validators:** validación de parámetros y datos recibidos.
- **Config:** configuración de la aplicación y conexión a la base de datos.

La estructura definitiva de carpetas y archivos se establecerá durante la configuración inicial del proyecto.

## 7. Organización lógica del frontend

El frontend deberá organizarse de manera que las distintas funcionalidades puedan mantenerse y evolucionar sin mezclar responsabilidades.

Se contemplan las siguientes áreas:

- **Pages:** páginas principales de la aplicación.
- **Components:** componentes reutilizables de interfaz.
- **Layouts:** estructuras visuales compartidas.
- **Services:** comunicación con la API.
- **Hooks:** lógica reutilizable relacionada con React.
- **Routes:** configuración de navegación.
- **Assets:** imágenes, iconos y otros recursos estáticos.

La organización podrá ajustarse a medida que se definan las funcionalidades y crezca el proyecto.

## 8. Inteligencia artificial e integraciones externas

La inteligencia artificial formará parte de las funcionalidades educativas de Dialecto.

Su integración deberá realizarse desde el backend, evitando exponer credenciales o claves privadas en el frontend.

El backend será responsable de:

- Recibir las consultas del estudiante.
- Preparar el contexto necesario para responder.
- Comunicarse con el servicio de inteligencia artificial elegido.
- Procesar la respuesta.
- Devolver el resultado al frontend.

Todavía no se define un proveedor, modelo, servicio de almacenamiento de documentos ni estrategia de procesamiento de PDF. Estas decisiones deberán documentarse cuando se evalúen las alternativas.

## 9. Seguridad

La arquitectura deberá contemplar:

- Contraseñas almacenadas mediante hash con bcryptjs.
- Autenticación mediante JSON Web Tokens.
- Validación de datos con express-validator.
- Protección de rutas y operaciones administrativas.
- Manejo seguro de cookies.
- Variables sensibles almacenadas mediante variables de entorno.
- Control de permisos según el tipo de usuario.

Los mecanismos definitivos de autenticación, duración de sesiones y almacenamiento de tokens se definirán en el diseño de autenticación.

## 10. Rendimiento y accesibilidad

La arquitectura debe favorecer una aplicación liviana y adaptable.

Se deberán considerar:

- Carga eficiente de recursos.
- Reducción de solicitudes innecesarias.
- Optimización de imágenes y contenidos multimedia.
- Interfaces adaptables a dispositivos móviles.
- Manejo adecuado de conexiones lentas.
- Evitar dependencias y procesos innecesarios.

Las funcionalidades que dependan de servicios externos deberán contemplar errores de conexión y respuestas no disponibles.

## 11. Herramientas de trabajo

El desarrollo contará con las siguientes herramientas de apoyo:

- **Engram:** almacenamiento de contexto y decisiones importantes del proyecto.
- **RTK:** asistencia para trabajar con comandos y operaciones de terminal.

Las herramientas de apoyo no reemplazan la documentación oficial del proyecto ni el control de versiones.

## 12. Decisiones técnicas pendientes

Las siguientes decisiones no quedan establecidas en este documento:

- Estructura definitiva de carpetas.
- Diseño de tablas y relaciones de MySQL.
- Estrategia definitiva de autenticación y manejo de sesiones.
- Proveedor y modelo de inteligencia artificial.
- Procesamiento y almacenamiento de archivos PDF.
- Servicio de alojamiento y despliegue.
- Estrategia de pruebas.
- Sistema de almacenamiento de imágenes y videos, si fuera necesario.

Estas decisiones deberán evaluarse y documentarse antes de implementar las funcionalidades que dependan de ellas.

## 13. Principio arquitectónico

La arquitectura de Dialecto debe mantenerse simple, organizada y preparada para crecer.

Cada componente debe tener una responsabilidad clara. Las decisiones técnicas deben responder a las necesidades reales del proyecto y no agregar complejidad sin una justificación concreta.

La implementación deberá respetar las convenciones de código de [CONVENCIONES-CODIGO.md](./CONVENCIONES-CODIGO.md), especialmente la separación de responsabilidades y la estructura aprobada.

La prioridad será construir una plataforma mantenible, segura y accesible que cumpla con sus objetivos educativos.