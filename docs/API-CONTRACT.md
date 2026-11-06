# API Contract

## 1. Objetivo

Este documento define el contrato de comunicación entre el frontend y el backend de Dialecto.

Establece las convenciones que deberán respetar ambos lados para intercambiar información de manera consistente, incluyendo endpoints, métodos HTTP, datos de entrada, respuestas y manejo de errores.

## 2. Convenciones generales

- La API seguirá el estilo REST.
- El formato de intercambio será JSON.
- Todas las rutas estarán agrupadas bajo el prefijo `/api/v1`.
- Los nombres de recursos utilizarán plural.
- Los métodos HTTP representarán las operaciones correspondientes.
- Las respuestas deberán mantener una estructura consistente.
- Las rutas protegidas requerirán autenticación y autorización cuando corresponda.

### Métodos HTTP

| Método | Uso |
|---|---|
| GET | Consultar recursos. |
| POST | Crear recursos o ejecutar operaciones. |
| PUT | Reemplazar un recurso. |
| PATCH | Modificar parcialmente un recurso. |
| DELETE | Eliminar un recurso. |

## 3. Organización de endpoints

Los siguientes endpoints representan la organización inicial de la API. Su definición detallada se realizará durante la implementación.

### Autenticación

Prefijo: `/api/v1/auth`

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/register` | Registrar un usuario. |
| POST | `/login` | Iniciar sesión. |
| POST | `/logout` | Cerrar sesión. |
| GET | `/me` | Obtener el usuario autenticado. |

### Usuarios y perfiles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/v1/users` | Consultar usuarios. |
| GET | `/api/v1/users/:id` | Consultar un usuario. |
| PATCH | `/api/v1/users/:id` | Actualizar información del usuario. |
| GET | `/api/v1/profiles/:id` | Consultar un perfil. |
| POST | `/api/v1/profiles` | Crear un perfil. |
| PATCH | `/api/v1/profiles/:id` | Actualizar un perfil. |

### Contenido educativo

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/v1/subjects` | Consultar materias. |
| GET | `/api/v1/subjects/:id` | Consultar una materia. |
| GET | `/api/v1/units` | Consultar unidades. |
| GET | `/api/v1/topics` | Consultar temas. |
| GET | `/api/v1/materials` | Consultar materiales educativos. |

### Actividades

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/v1/activities` | Consultar actividades. |
| GET | `/api/v1/activities/:id` | Consultar una actividad. |
| POST | `/api/v1/activities/:id/answers` | Enviar una respuesta. |
| GET | `/api/v1/activities/:id/answers` | Consultar respuestas. |

### Inteligencia artificial

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/v1/ai/chat` | Enviar una consulta al asistente. |
| GET | `/api/v1/conversations` | Consultar conversaciones. |
| GET | `/api/v1/conversations/:id` | Consultar una conversación. |
| GET | `/api/v1/tokens/usage` | Consultar el consumo de tokens. |

### Administración

Prefijo: `/api/v1/admin`

Las rutas administrativas permitirán gestionar los recursos y operaciones que correspondan a los permisos del usuario.

Los endpoints específicos quedarán definidos cuando se establezcan los roles y las funcionalidades administrativas.

## 4. Estructura de respuestas

Las respuestas exitosas deberán utilizar códigos HTTP adecuados y mantener una estructura clara.

Ejemplo de respuesta exitosa:

```json
{
  "success": true,
  "message": "Operación realizada correctamente",
  "data": {
    "id": 1,
    "name": "Matemática"
  }
}
```

Cuando una operación no necesite devolver información adicional, `data` podrá contener `null`.

## 5. Manejo de errores

Los errores deberán utilizar códigos HTTP apropiados y devolver información comprensible para el frontend.

Ejemplo:

```json
{
  "success": false,
  "message": "Los datos enviados no son válidos",
  "errors": [
    {
      "field": "email",
      "message": "El correo electrónico no es válido"
    }
  ]
}
```

### Códigos HTTP principales

| Código | Significado |
|---|---|
| 200 | Operación exitosa. |
| 201 | Recurso creado. |
| 204 | Operación exitosa sin contenido de respuesta. |
| 400 | Solicitud incorrecta. |
| 401 | Usuario no autenticado. |
| 403 | Acceso no autorizado. |
| 404 | Recurso no encontrado. |
| 409 | Conflicto con un recurso existente. |
| 422 | Datos enviados no válidos. |
| 429 | Límite de solicitudes alcanzado. |
| 500 | Error interno del servidor. |
| 503 | Servicio temporalmente no disponible. |

## 6. Validaciones

El backend será responsable de validar los datos recibidos.

Se utilizará `express-validator` para validar:

- Parámetros de rutas.
- Parámetros de consulta.
- Datos enviados en el body.
- Formatos y tipos de datos.
- Campos obligatorios.
- Reglas específicas de cada recurso.

El frontend podrá realizar validaciones para mejorar la experiencia del usuario, pero nunca reemplazará las validaciones del backend.

## 7. Autenticación y autorización

- La autenticación utilizará JWT.
- El token se gestionará mediante cookies según la configuración de seguridad definida en `BACKEND.md`.
- Las rutas protegidas verificarán la identidad del usuario.
- Las operaciones administrativas requerirán los permisos correspondientes.
- El backend será responsable de impedir el acceso a recursos no autorizados.

## 8. Comunicación con el asistente IA

Las consultas al asistente se realizarán mediante el backend.

El frontend no tendrá acceso directo a las claves de Gemini o Groq.

El backend será responsable de:

- Recibir las consultas.
- Verificar la autenticación del usuario.
- Comprobar el presupuesto de tokens disponible.
- Recuperar el contexto educativo necesario.
- Comunicarse con el proveedor de IA.
- Registrar el consumo.
- Devolver la respuesta al frontend.

Si el usuario alcanza su límite de tokens, la API deberá comunicarlo sin perder la conversación ni el contexto disponible.

## 9. Consistencia y seguridad

- No exponer información sensible en las respuestas.
- No devolver contraseñas ni credenciales.
- No confiar en datos enviados por el frontend.
- Mantener una estructura consistente de respuestas y errores.
- Proteger las rutas según autenticación y permisos.
- Evitar exponer claves de servicios externos.
- Aplicar controles de acceso a los recursos pertenecientes a cada usuario.

## 10. Pendientes de definición

Los siguientes puntos se terminarán de definir durante el desarrollo:

- Estructura definitiva de cada endpoint.
- Campos y formatos exactos de entrada y salida.
- Paginación, filtros y ordenamiento.
- Roles y permisos definitivos.
- Estructura de las conversaciones y mensajes.
- Detalles de las respuestas del asistente IA.
- Política de límites y consumo de tokens.
- Estrategia definitiva de autenticación y protección CSRF.

## 11. Criterio de mantenimiento

Este documento deberá actualizarse cuando se agreguen, modifiquen o eliminen endpoints.

Cualquier cambio en el contrato deberá contemplar tanto el backend como el frontend para evitar incompatibilidades.

Al implementar rutas, validaciones y respuestas de la API, se deberán respetar las convenciones de código de [CONVENCIONES-CODIGO.md](./CONVENCIONES-CODIGO.md), además de este contrato.

El contrato de la API será la referencia compartida para implementar y mantener la comunicación entre ambos.