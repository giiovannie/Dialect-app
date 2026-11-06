# BACKEND

## 1. Objetivo

Este documento establece los criterios técnicos y de organización para desarrollar el backend de Dialecto.

El backend será responsable de procesar las solicitudes del frontend, administrar la información de los estudiantes, gestionar los contenidos educativos, controlar el acceso a las funcionalidades y conectar la plataforma con los servicios externos.

Se buscará construir una API organizada, segura, escalable y fácil de mantener.

## 2. Tecnologías

El backend utilizará las siguientes tecnologías:

### 2.1. JavaScript

Será el lenguaje principal para desarrollar la lógica del servidor.

Se utilizará JavaScript moderno (ES6+) y módulos ES para organizar el código.

No se utilizará TypeScript en la implementación.

### 2.2. Node.js

Se utilizará Node.js como entorno de ejecución de JavaScript en el servidor.

Permitirá ejecutar la aplicación backend y gestionar las solicitudes de los clientes.

### 2.3. Express

Se utilizará Express para construir la API y organizar las rutas, controladores y middlewares.

Será responsable de:

- Recibir solicitudes HTTP.
- Procesar solicitudes del frontend.
- Organizar las rutas de la API.
- Ejecutar middlewares.
- Enviar respuestas.
- Gestionar errores.

### 2.4. Sequelize

Se utilizará Sequelize como ORM para trabajar con la base de datos MySQL.

Permitirá definir modelos, relaciones, consultas y migraciones mediante JavaScript.

### 2.5. MySQL y mysql2

MySQL será el sistema de gestión de bases de datos.

Se utilizará el controlador `mysql2` para establecer la conexión mediante Sequelize.

La información persistente de Dialecto se administrará desde una base de datos relacional.

### 2.6. express-validator

Se utilizará express-validator para validar y sanitizar los datos recibidos mediante las solicitudes HTTP.

Las validaciones se organizarán mediante middlewares reutilizables.

### 2.7. bcryptjs

Se utilizará bcryptjs para generar hashes seguros de las contraseñas de los usuarios.

Las contraseñas nunca deberán almacenarse en texto plano.

### 2.8. jsonwebtoken

Se utilizará JSON Web Token (JWT) para implementar mecanismos de autenticación y verificar la identidad de los usuarios.

### 2.9. cors

Se utilizará CORS para configurar qué orígenes podrán comunicarse con la API.

La configuración deberá permitir únicamente los orígenes autorizados.

### 2.10. cookie-parser

Se utilizará cookie-parser para interpretar las cookies recibidas en las solicitudes HTTP.

Podrá utilizarse para gestionar cookies relacionadas con la autenticación.

### 2.11. dotenv

Se utilizará dotenv para cargar las variables de entorno necesarias para ejecutar el backend.

Las credenciales y configuraciones sensibles no deberán incluirse directamente en el código fuente.

## 3. Arquitectura del backend

El backend seguirá una organización por responsabilidades para separar la recepción de solicitudes, la lógica de negocio y el acceso a los datos.

Se propone la siguiente estructura inicial:

```text
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── validators/
├── utils/
├── migrations/
├── seeders/
├── app.js
├── server.js
├── .env.example
└── package.json
```

La estructura podrá ajustarse durante el desarrollo según las necesidades reales del proyecto.

### 3.1. Responsabilidad de las carpetas

- `config/`: configuración de la base de datos y servicios externos.
- `controllers/`: recepción de solicitudes y envío de respuestas HTTP.
- `middlewares/`: autenticación, autorización, validaciones y manejo de errores.
- `models/`: definición de modelos y relaciones de Sequelize.
- `routes/`: organización de los endpoints de la API.
- `services/`: lógica de negocio y comunicación con servicios externos.
- `validators/`: reglas de validación mediante express-validator.
- `utils/`: funciones auxiliares reutilizables.
- `migrations/`: modificaciones estructurales de la base de datos.
- `seeders/`: carga de datos iniciales o de prueba.

## 4. Responsabilidades del backend

El servidor será responsable de administrar las funcionalidades principales de Dialecto.

Se contemplan las siguientes áreas:

### 4.1. Usuarios y autenticación

- Registro de estudiantes.
- Inicio y cierre de sesión.
- Verificación de credenciales.
- Gestión de sesiones mediante JWT.
- Protección de rutas privadas.
- Administración de roles y permisos.
- Consulta y actualización de información del usuario.

### 4.2. Perfiles

Se administrará la información complementaria de los estudiantes mediante perfiles asociados a sus cuentas.

El backend deberá controlar que cada estudiante solamente pueda consultar y modificar su propia información, salvo los permisos administrativos correspondientes.

### 4.3. Contenidos educativos

El backend administrará la información relacionada con:

- Materias.
- Unidades.
- Temas.
- Explicaciones.
- Ejemplos.
- Recursos complementarios.
- Videos.
- Actividades y ejercicios.

La organización definitiva dependerá del análisis de los materiales del cursillo.

### 4.4. Actividades y ejercicios

Se encargará de administrar las actividades educativas y procesar las respuestas enviadas por los estudiantes.

Podrá gestionar:

- Consignas.
- Opciones de respuesta.
- Respuestas correctas.
- Correcciones.
- Devoluciones.
- Resultados de actividades.

La lógica de evaluación deberá adaptarse al tipo de actividad.

### 4.5. Inteligencia artificial

El backend será el intermediario entre Dialecto y los proveedores de IA.

Se encargará de:

- Recibir las consultas de los estudiantes.
- Verificar la identidad y los permisos.
- Comprobar el presupuesto de tokens.
- Recuperar el contexto educativo necesario.
- Seleccionar el proveedor.
- Enviar la solicitud al modelo.
- Procesar y devolver la respuesta.
- Registrar el consumo.
- Guardar las conversaciones y mensajes.
- Gestionar errores y alternativas de proveedor.

Gemini será el proveedor principal y Groq el proveedor alternativo.

Las claves API deberán permanecer exclusivamente en el servidor.

### 4.6. Administración

El backend deberá permitir gestionar las funcionalidades administrativas que se definan para Dialecto.

Se contempla la administración de:

- Usuarios.
- Roles y permisos.
- Contenidos educativos.
- Materias y unidades.
- Actividades.
- Presupuestos de tokens.
- Recursos complementarios.

Las operaciones administrativas deberán estar protegidas mediante autorización.

## 5. API y organización de rutas

La comunicación entre frontend y backend se realizará mediante una API REST.

Se utilizará una versión inicial de la API para organizar los endpoints.

Se propone el prefijo:

`/api/v1`

Las rutas se agruparán según su responsabilidad.

Ejemplos de áreas:

- `/api/v1/auth`
- `/api/v1/users`
- `/api/v1/profiles`
- `/api/v1/subjects`
- `/api/v1/units`
- `/api/v1/topics`
- `/api/v1/activities`
- `/api/v1/ai`
- `/api/v1/conversations`
- `/api/v1/tokens`
- `/api/v1/admin`

Estos nombres son propuestas iniciales y no representan endpoints implementados.

Se utilizarán métodos HTTP adecuados según la operación:

- `GET`: consultar información.
- `POST`: crear recursos o ejecutar operaciones.
- `PUT`: reemplazar o actualizar recursos.
- `PATCH`: modificar parcialmente recursos.
- `DELETE`: eliminar recursos.

## 6. Base de datos

Se utilizará MySQL como sistema de almacenamiento persistente.

Sequelize será responsable de definir los modelos y las relaciones.

La base de datos deberá permitir administrar:

- Usuarios.
- Perfiles.
- Roles.
- Materias.
- Unidades.
- Temas.
- Materiales educativos.
- Actividades.
- Respuestas de estudiantes.
- Conversaciones.
- Mensajes.
- Consumo de tokens.

El modelo de datos definitivo se definirá durante la etapa correspondiente, después de revisar los requisitos y las relaciones necesarias.

Se utilizarán migraciones para mantener un historial de los cambios estructurales de la base de datos.

## 7. Autenticación y autorización

La API deberá proteger los recursos que requieran una identidad autenticada.

Se utilizará JWT para verificar la identidad del usuario.

Se contemplarán:

- Registro.
- Inicio de sesión.
- Cierre de sesión.
- Verificación del token.
- Protección de rutas.
- Control de roles.
- Restricción de acceso a recursos privados.

Las cookies de autenticación deberán configurarse con las opciones de seguridad correspondientes, como `HttpOnly`, `Secure` y `SameSite`, según el entorno de ejecución.

También se deberán contemplar mecanismos para evitar el acceso no autorizado y la falsificación de solicitudes.

## 8. Validaciones y manejo de errores

Todas las solicitudes que reciban datos deberán ser validadas antes de ejecutar la lógica correspondiente.

Se utilizará express-validator para:

- Comprobar campos obligatorios.
- Validar tipos de datos.
- Comprobar formatos.
- Establecer longitudes mínimas y máximas.
- Sanitizar entradas cuando corresponda.
- Validar identificadores.
- Comprobar condiciones de negocio.

Las reglas de validación deberán organizarse y reutilizarse cuando sea posible.

### 8.1. Manejo de errores

Se implementará un mecanismo centralizado para manejar errores.

Se deberán contemplar situaciones como:

- Datos inválidos.
- Usuario inexistente.
- Credenciales incorrectas.
- Falta de permisos.
- Recursos no encontrados.
- Conflictos de información.
- Errores de conexión.
- Errores de proveedores externos.

Las respuestas deberán utilizar códigos HTTP adecuados y mensajes comprensibles.

En producción no se deberán exponer detalles internos, consultas SQL, credenciales ni trazas de ejecución.

## 9. Gestión del consumo de inteligencia artificial

El backend será responsable de controlar el consumo individual de cada estudiante.

Cada solicitud deberá verificar el presupuesto disponible antes de comunicarse con el proveedor.

Se registrarán los tokens de entrada y salida informados por el proveedor, junto con el modelo y la fecha de utilización.

Se deberán contemplar:

- Presupuesto individual.
- Consumo acumulado.
- Tokens disponibles.
- Avisos de consumo.
- Agotamiento del presupuesto.
- Renovaciones.
- Asignaciones adicionales por administradores.

El sistema deberá evitar que dos solicitudes simultáneas provoquen un consumo superior al presupuesto permitido.

También deberá contemplar diferencias entre los tokens contabilizados por el proveedor y los límites internos establecidos para cada estudiante.

## 10. Seguridad

El backend deberá aplicar medidas para proteger la información de Dialecto y sus usuarios.

Se contemplarán:

- Almacenamiento seguro de contraseñas.
- Protección de credenciales mediante variables de entorno.
- Validación de datos recibidos.
- Autenticación y autorización.
- Configuración controlada de CORS.
- Protección de rutas privadas.
- Control de acceso a recursos.
- Limitación de solicitudes cuando corresponda.
- Manejo seguro de errores.
- Protección de las claves API.
- Restricción de consultas y operaciones administrativas.

También se deberá evitar que los estudiantes puedan consultar o modificar información perteneciente a otros usuarios.

## 11. Comunicación con servicios externos

El backend podrá comunicarse con proveedores externos para ofrecer funcionalidades complementarias.

Inicialmente se contemplan:

### 11.1. Google Gemini

Proveedor principal de inteligencia artificial.

Se utilizará para generar respuestas educativas, analizar consultas y realizar las tareas definidas en `INTELIGENCIA-ARTIFICIAL.md`.

### 11.2. Groq

Proveedor alternativo para mantener la disponibilidad del asistente cuando Gemini presente inconvenientes.

El backend deberá administrar el cambio de proveedor y registrar correctamente el modelo utilizado.

### 11.3. Recuperación de información educativa

Se podrá incorporar una herramienta especializada para procesar documentos y recuperar información relevante de los PDF del cursillo.

La selección de dicha herramienta dependerá de las pruebas y necesidades de la integración de IA.

## 12. Rendimiento y disponibilidad

El backend deberá responder de manera eficiente y controlar las operaciones que puedan consumir recursos elevados.

Se contemplarán:

- Consultas optimizadas a la base de datos.
- Paginación cuando corresponda.
- Manejo de operaciones asíncronas.
- Control de errores en servicios externos.
- Límites de solicitudes.
- Gestión de conexiones.
- Evitar consultas innecesarias.
- Control de solicitudes concurrentes.

Las operaciones relacionadas con IA deberán contemplar tiempos de espera y posibles interrupciones de los proveedores.

## 13. Calidad y mantenimiento

El código deberá mantenerse organizado y seguir criterios de simplicidad y legibilidad.

Se establecen las siguientes prácticas:

- Separar responsabilidades.
- Mantener controladores claros.
- Reutilizar servicios y middlewares.
- Evitar duplicación de lógica.
- Utilizar nombres descriptivos.
- Mantener las validaciones organizadas.
- Documentar endpoints cuando sea necesario.
- Utilizar migraciones para los cambios de base de datos.
- Comprobar el funcionamiento después de cada modificación.
- Evitar dependencias innecesarias.

## 14. Alcance y aspectos pendientes

Este documento establece los criterios generales para desarrollar el backend de Dialecto.

Quedan pendientes de definición durante la implementación:

- Estructura definitiva de carpetas.
- Modelos y relaciones de la base de datos.
- Diseño definitivo de endpoints.
- Estrategia de autenticación y renovación de tokens.
- Roles y permisos definitivos.
- Organización de los servicios de IA.
- Integración específica de Gemini y Groq.
- Recuperación de información de los PDF.
- Sistema definitivo de administración de tokens.
- Estrategia de pruebas.
- Configuración de despliegue.
- Políticas de respaldo y recuperación de datos.

Las decisiones deberán respetar los requisitos, la arquitectura y los documentos técnicos aprobados del proyecto.

---

