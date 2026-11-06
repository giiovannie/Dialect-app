# BACKEND.md

# Backend — Documentación y estándares de desarrollo

## 1. Objetivo

Este documento establece los criterios técnicos y de organización para desarrollar el Backend de Dialecto.

El Backend será responsable de procesar las solicitudes del Frontend, administrar la información de los estudiantes, gestionar los contenidos educativos, controlar el acceso a las funcionalidades y conectar la plataforma con los servicios externos.

Se buscará construir una API organizada, segura, escalable y fácil de mantener.

## 2. Tecnologías

El Backend utilizará las siguientes tecnologías:

### 2.1. JavaScript

Será el lenguaje principal para desarrollar la lógica del servidor.

Se utilizará JavaScript moderno (ES6+) y módulos ES para organizar el código.

No se utilizará TypeScript en la implementación.

### 2.2. Node.js

Se utilizará Node.js como entorno de ejecución de JavaScript en el servidor.

Permitirá ejecutar la aplicación Backend y gestionar las solicitudes de los clientes.

### 2.3. Express

Se utilizará Express para construir la API y organizar las rutas, controladores y middlewares.

Será responsable de:

- Recibir solicitudes HTTP.
- Procesar solicitudes del Frontend.
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

Las validaciones se organizarán mediante archivos independientes dentro de `middlewares/validators/` y se ejecutarán mediante un middleware general.

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

Se utilizará dotenv para cargar las variables de entorno necesarias para ejecutar el Backend.

Las credenciales y configuraciones sensibles no deberán incluirse directamente en el código fuente.

## 3. Arquitectura del Backend

El Backend seguirá una organización por responsabilidades para separar la recepción de solicitudes, la lógica de negocio y el acceso a los datos.

La estructura acordada será:

```text
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── models/
│   │
│   ├── controllers/
│   │
│   ├── routes/
│   │
│   ├── middlewares/
│   │   ├── validators/
│   │   │   ├── auth.js
│   │   │   ├── user.js
│   │   │   └── ...
│   │   │
│   │   └── validate.js
│   │
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   │
│   └── app.js
│
├── .env
├── .env.example
└── package.json
```

La estructura podrá ampliarse si las necesidades reales del proyecto lo justifican, respetando la organización acordada y evitando crear carpetas o capas innecesarias.

### 3.1. Responsabilidad de las carpetas y archivos

- `src/`: contiene el código fuente principal del Backend.
- `config/`: contiene las configuraciones necesarias para el funcionamiento de la aplicación.
- `config/database.js`: configura Sequelize y establece la conexión con MySQL. La configuración de la base de datos permanecerá centralizada en este único archivo.
- `controllers/`: contiene la lógica encargada de procesar las solicitudes y preparar las respuestas HTTP.
- `middlewares/`: contiene los middlewares utilizados por la aplicación, como autenticación, autorización, validación y manejo de errores.
- `middlewares/validators/`: contiene las reglas de validación de express-validator, organizadas por recurso o funcionalidad.
- `middlewares/validate.js`: comprueba los resultados de las validaciones y gestiona los errores encontrados antes de continuar con la solicitud.
- `models/`: contiene las definiciones de los modelos y las relaciones de Sequelize.
- `routes/`: organiza los endpoints de la API y conecta las rutas con sus controladores y middlewares.
- `database/`: contiene los archivos relacionados con la evolución y los datos iniciales de la base de datos.
- `database/migrations/`: contiene las migraciones para crear y modificar la estructura de las tablas.
- `database/seeders/`: contiene los procesos para cargar datos iniciales o de prueba.
- `app.js`: configura Express, registra los middlewares, conecta las rutas, establece la conexión con la base de datos e inicia el servidor mediante `app.listen()`.
- `.env`: contiene las variables de entorno privadas.
- `.env.example`: documenta las variables de entorno necesarias sin incluir credenciales reales.
- `package.json`: contiene las dependencias y los scripts del proyecto.

No se utilizará un archivo `server.js`. La configuración de Express y el inicio del servidor permanecerán centralizados en `src/app.js`.

La conexión con MySQL permanecerá centralizada en `src/config/database.js`, evitando distribuir su configuración en diferentes archivos.

Las validaciones no tendrán una carpeta independiente en la raíz de `src/`: se organizarán dentro de `middlewares/validators/`.

### 3.2. Organización por responsabilidades

Cada carpeta y archivo deberá mantener una responsabilidad clara.

El flujo general de una solicitud será:

```text
Request
   ↓
Route
   ↓
Validator
   ↓
Middleware de validación
   ↓
Middleware de autenticación/autorización (cuando corresponda)
   ↓
Controller
   ↓
Model / Sequelize
   ↓
Response
```

Las rutas deberán limitarse a definir endpoints y asociar los middlewares y controladores correspondientes.

Los controladores deberán encargarse de procesar las solicitudes y coordinar las operaciones necesarias.

Las reglas de validación deberán mantenerse separadas de los controladores y organizadas por funcionalidad.

No se deberán concentrar todas las responsabilidades dentro de un único archivo.

## 4. Responsabilidades del Backend

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

El Backend deberá controlar que cada estudiante solamente pueda consultar y modificar su propia información, salvo los permisos administrativos correspondientes.

### 4.3. Contenidos educativos

El Backend administrará la información relacionada con:

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

El Backend será el intermediario entre Dialecto y los proveedores de IA.

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

El Backend deberá permitir gestionar las funcionalidades administrativas que se definan para Dialecto.

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

La comunicación entre Frontend y Backend se realizará mediante una API REST.

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

La configuración y conexión con la base de datos se encontrarán en:

`src/config/database.js`

Este archivo centralizará la instancia de Sequelize y los parámetros necesarios para conectarse a MySQL, obteniendo las credenciales desde las variables de entorno.

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

Las migraciones y los seeders se organizarán dentro de `src/database/`, separados en sus respectivas carpetas.

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

Los middlewares de autenticación y autorización deberán mantenerse dentro de `src/middlewares/`, separados de las reglas de validación.

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

Las reglas de validación deberán organizarse dentro de:

```text
src/middlewares/validators/
```

Cada archivo contendrá las reglas correspondientes a un recurso o funcionalidad.

Por ejemplo:

```text
validators/
├── auth.js
├── user.js
└── ...
```

El archivo:

`src/middlewares/validate.js`

será responsable de comprobar los resultados generados por express-validator, gestionar los errores de validación y permitir que las solicitudes continúen únicamente cuando corresponda.

Las validaciones deberán mantenerse reutilizables y separadas de los controladores.

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

El Backend será responsable de controlar el consumo individual de cada estudiante.

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

El Backend deberá aplicar medidas para proteger la información de Dialecto y sus usuarios.

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

El Backend podrá comunicarse con proveedores externos para ofrecer funcionalidades complementarias.

Inicialmente se contemplan:

### 11.1. Google Gemini

Proveedor principal de inteligencia artificial.

Se utilizará para generar respuestas educativas, analizar consultas y realizar las tareas definidas en `docs/INTELIGENCIA-ARTIFICIAL.md`.

### 11.2. Groq

Proveedor alternativo para mantener la disponibilidad del asistente cuando Gemini presente inconvenientes.

El Backend deberá administrar el cambio de proveedor y registrar correctamente el modelo utilizado.

### 11.3. Recuperación de información educativa

Se podrá incorporar una herramienta especializada para procesar documentos y recuperar información relevante de los PDF del cursillo.

La selección de dicha herramienta dependerá de las pruebas y necesidades de la integración de IA.

## 12. Rendimiento y disponibilidad

El Backend deberá responder de manera eficiente y controlar las operaciones que puedan consumir recursos elevados.

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
- Reutilizar middlewares y lógica existente.
- Evitar duplicación de lógica.
- Utilizar nombres descriptivos.
- Mantener las validaciones organizadas por recurso dentro de `middlewares/validators/`.
- Documentar endpoints cuando sea necesario.
- Utilizar migraciones para los cambios de base de datos.
- Comprobar el funcionamiento después de cada modificación.
- Evitar dependencias innecesarias.
- Respetar la estructura de carpetas acordada.
- Mantener la configuración de la base de datos centralizada en `config/database.js`.
- Mantener la configuración de Express y el inicio del servidor en `app.js`.

## 14. Alcance y aspectos pendientes

Este documento establece los criterios generales para desarrollar el Backend de Dialecto y define su organización inicial de carpetas.

Quedan pendientes de definición durante la implementación:

- Modelos y relaciones de la base de datos.
- Diseño definitivo de endpoints.
- Estrategia de autenticación y renovación de tokens.
- Roles y permisos definitivos.
- Organización interna de la integración de IA.
- Integración específica de Gemini y Groq.
- Recuperación de información de los PDF.
- Sistema definitivo de administración de tokens.
- Estrategia de pruebas.
- Configuración de despliegue.
- Políticas de respaldo y recuperación de datos.

Las decisiones deberán respetar los requisitos, la arquitectura y los documentos técnicos aprobados del proyecto.

La estructura general de carpetas definida en este documento deberá respetarse durante la implementación. Cualquier modificación deberá justificarse según las necesidades reales del proyecto y acordarse antes de incorporarse.

---

