# INTELIGENCIA ARTIFICIAL

## 1. Objetivo

Este documento establece cómo se integrará y utilizará la inteligencia artificial dentro de Dialecto.

La IA tendrá como objetivo acompañar al estudiante durante su aprendizaje, ofreciendo explicaciones, orientación, resolución guiada de dudas y actividades de práctica relacionadas con Matemática y Programación.

Se buscará implementar un asistente educativo centralizado, capaz de cubrir diferentes necesidades sin depender de una inteligencia artificial distinta para cada funcionalidad.

## 2. Proveedores de inteligencia artificial

Dialecto utilizará inicialmente dos proveedores, con responsabilidades diferenciadas.

### 2.1. Proveedor principal: Google Gemini

Se utilizará la API de Google Gemini como proveedor principal.

Se evaluará un modelo de la familia Gemini Flash por su relación entre rendimiento, velocidad y costo.

Sus responsabilidades podrán incluir:

- Responder consultas educativas.
- Explicar conceptos de Matemática y Programación.
- Analizar código y orientar sobre posibles errores.
- Generar ejercicios y preguntas.
- Corregir respuestas y ofrecer devoluciones.
- Trabajar con información procedente de los PDF del cursillo.
- Mantener conversaciones con los estudiantes.

La elección definitiva del modelo dependerá de las pruebas de calidad, disponibilidad, límites y costos.

### 2.2. Proveedor alternativo: Groq

Se utilizará Groq como alternativa ante posibles interrupciones o problemas de disponibilidad del proveedor principal.

Su función será permitir que Dialecto pueda continuar ofreciendo asistencia mediante otro modelo compatible.

Se deberá comprobar que el modelo seleccionado pueda cumplir las funciones educativas necesarias.

El cambio de proveedor no deberá perder el contexto de la conversación ni modificar el presupuesto individual del estudiante.

### 2.3. Independencia del proveedor

La integración deberá diseñarse de manera que el resto de la aplicación no dependa directamente de Gemini o Groq.

El backend será responsable de centralizar las solicitudes y administrar los proveedores.

Esto permitirá incorporar, reemplazar o modificar proveedores sin tener que cambiar la lógica principal de la plataforma.

## 3. Funcionalidades del asistente educativo

La IA podrá cumplir diferentes funciones dentro de Dialecto.

### 3.1. Asistente de consultas

Permitirá que los estudiantes realicen preguntas relacionadas con los contenidos de la plataforma.

Deberá ofrecer respuestas claras, comprensibles y relacionadas con el material educativo.

### 3.2. Explicaciones educativas

Podrá desarrollar explicaciones alternativas cuando un estudiante tenga dificultades para comprender un concepto.

Las respuestas deberán adaptarse al nivel del estudiante y evitar explicaciones innecesariamente complejas.

### 3.3. Tutor de programación

Podrá ayudar a los estudiantes a:

- Comprender fragmentos de código.
- Identificar posibles errores.
- Entender mensajes de error.
- Analizar el funcionamiento de un programa.
- Recibir orientación para resolver ejercicios.
- Comprender conceptos de programación.

El asistente deberá priorizar la orientación y el aprendizaje antes que entregar directamente una solución completa.

### 3.4. Generación de actividades

Podrá generar ejercicios, preguntas y actividades de práctica relacionadas con los temas estudiados.

Las actividades deberán respetar los contenidos y niveles establecidos por el material educativo.

### 3.5. Corrección y devolución

Podrá analizar las respuestas de los estudiantes y proporcionar devoluciones que expliquen:

- Qué aspectos fueron correctos.
- Qué errores se cometieron.
- Por qué se produjo el error.
- Cómo se puede mejorar la respuesta.

La devolución deberá tener un propósito educativo y no limitarse a indicar si una respuesta es correcta o incorrecta.

### 3.6. Consulta de materiales educativos

El asistente podrá utilizar los PDF y materiales educativos de Dialecto para fundamentar sus respuestas.

Se buscará que las respuestas relacionadas con el cursillo estén respaldadas por los documentos correspondientes.

Cuando no encuentre información suficiente en los materiales, deberá indicarlo y evitar inventar información o presentarla como contenido oficial.

## 4. Integración de documentos y recuperación de información

Los documentos del cursillo serán una fuente fundamental para el funcionamiento del asistente educativo.

Se evaluará implementar un mecanismo de recuperación de información que permita:

1. Incorporar los documentos educativos.
2. Extraer y procesar su contenido.
3. Dividir la información en fragmentos consultables.
4. Recuperar los fragmentos relacionados con una pregunta.
5. Enviar el contexto relevante al modelo de IA.
6. Generar una respuesta basada en la información recuperada.

Este enfoque permitirá construir un sistema de generación aumentada por recuperación (RAG).

Se deberá evaluar la necesidad de utilizar herramientas especializadas como LlamaIndex u otras alternativas. No se incorporarán dependencias adicionales sin comprobar que aporten un beneficio real.

Las respuestas deberán poder identificar el documento o material utilizado como referencia cuando sea posible.

## 5. Control de consumo de tokens

Dialecto deberá implementar un sistema de administración de consumo individual para cada estudiante.

El objetivo será controlar el uso de la inteligencia artificial, evitar consumos desmedidos y permitir una administración adecuada de los recursos disponibles.

### 5.1. Presupuesto individual

Cada estudiante tendrá un presupuesto de tokens asignado.

El sistema deberá registrar:

- Identificador del estudiante.
- Tokens utilizados en cada solicitud.
- Tokens de entrada.
- Tokens de salida.
- Proveedor y modelo utilizado.
- Fecha de consumo.
- Presupuesto disponible.
- Consumo acumulado.

El presupuesto deberá ser administrado desde el backend.

### 5.2. Renovación y asignación de tokens

El sistema permitirá establecer límites de consumo y períodos de renovación.

Se contempla:

- Renovación automática del presupuesto según el período configurado.
- Asignación de tokens adicionales por parte de un administrador.
- Consulta del consumo acumulado.
- Consulta de los tokens disponibles.

Los límites y períodos definitivos deberán establecerse durante la implementación.

### 5.3. Avisos de consumo

El estudiante deberá recibir avisos cuando se acerque al límite de consumo.

Se podrán establecer umbrales configurables para informar el porcentaje utilizado.

Por ejemplo:

- Aviso preventivo al alcanzar el 80 %.
- Aviso al alcanzar el 100 %.

Los porcentajes son valores iniciales propuestos y podrán modificarse.

### 5.4. Agotamiento de tokens

Cuando un estudiante alcance su límite:

- El sistema deberá impedir nuevas solicitudes a la IA.
- Se deberá informar que el presupuesto fue agotado.
- Se deberá mostrar cuándo podrá volver a utilizar el servicio, si existe una renovación programada.
- Se permitirá que un administrador asigne tokens adicionales.
- Las conversaciones deberán conservarse.

El estudiante no deberá perder el progreso realizado ni el historial de sus consultas.

### 5.5. Continuación de conversaciones

Cuando el estudiante recupere disponibilidad de tokens, podrá continuar una conversación anterior.

Para lograrlo, el backend deberá recuperar los mensajes y el contexto necesario para reconstruir la interacción.

Se deberá controlar qué información se envía nuevamente al modelo para evitar consumos innecesarios.

## 6. Arquitectura de integración

La inteligencia artificial se integrará mediante el backend de Dialecto.

El frontend no deberá comunicarse directamente con las API de los proveedores ni tener acceso a sus claves.

Responsabilidades:

**Frontend (React):**
- Mostrar la interfaz del asistente.
- Permitir enviar consultas.
- Mostrar las respuestas.
- Presentar el consumo de tokens.
- Informar sobre los límites disponibles.
- Mostrar el historial de conversaciones.

**Backend (Node.js + Express):**
- Recibir las solicitudes.
- Validar al estudiante y sus permisos.
- Comprobar el presupuesto disponible.
- Seleccionar el proveedor de IA.
- Enviar las consultas al modelo.
- Registrar el consumo real.
- Gestionar los errores y cambios de proveedor.
- Guardar las conversaciones.
- Controlar la continuidad de las sesiones.

**Base de datos (MySQL):**

Se almacenará la información necesaria para administrar usuarios, conversaciones, mensajes y consumo de tokens.

El diseño definitivo de las tablas y relaciones se establecerá durante la etapa de modelado de datos.

La implementación de los componentes de IA deberá respetar las convenciones de código de [CONVENCIONES-CODIGO.md](./CONVENCIONES-CODIGO.md), junto con la separación de responsabilidades definida en este documento.

## 7. Seguridad y protección

La integración deberá contemplar medidas de seguridad para proteger tanto a los estudiantes como a los recursos de Dialecto.

Criterios principales:

- Mantener las claves API exclusivamente en el backend.
- Utilizar variables de entorno para las credenciales.
- Validar las solicitudes recibidas.
- Verificar la autenticación y autorización del estudiante.
- Evitar que un usuario consulte conversaciones ajenas.
- Controlar el consumo para prevenir solicitudes abusivas.
- Limitar la cantidad y el tamaño de las solicitudes.
- Manejar errores sin exponer información sensible.
- Evitar que el contenido de documentos o mensajes pueda modificar las instrucciones internas del asistente.

## 8. Comportamiento y criterios educativos

El asistente deberá mantener un comportamiento coherente con los objetivos educativos de Dialecto.

Se establecen los siguientes criterios:

- Utilizar un lenguaje claro y comprensible.
- Priorizar la enseñanza antes que la entrega de respuestas directas.
- Explicar los procedimientos cuando sea necesario.
- Respetar los contenidos definidos para cada materia.
- Diferenciar información respaldada por documentos de explicaciones complementarias.
- Reconocer cuando no tiene información suficiente.
- Evitar inventar definiciones, procedimientos o contenidos oficiales.
- No reemplazar las explicaciones y materiales educativos de la plataforma.
- Mantener un trato respetuoso y adecuado para estudiantes.

## 9. Manejo de errores y disponibilidad

La integración deberá contemplar diferentes situaciones:

- Proveedor principal temporalmente no disponible.
- Límites de solicitudes alcanzados.
- Presupuesto individual agotado.
- Error durante la generación de una respuesta.
- Problemas de conexión.
- Respuesta incompleta.
- Información insuficiente en los documentos.

Cuando Gemini no esté disponible, el backend podrá intentar utilizar Groq si el proveedor alternativo está operativo y la solicitud es compatible.

Si ninguno de los proveedores está disponible, se deberá informar al estudiante y conservar su conversación para permitir que continúe posteriormente.

Los errores no deberán provocar consumos duplicados ni registros incorrectos.

## 10. Alcance y aspectos pendientes

Este documento establece los criterios generales para integrar inteligencia artificial en Dialecto.

Las siguientes decisiones deberán definirse durante la implementación:

- Modelo específico de Gemini.
- Modelo específico de Groq.
- Límites gratuitos y costos de los proveedores.
- Presupuesto inicial de tokens por estudiante.
- Períodos de renovación.
- Umbrales definitivos de aviso.
- Diseño de conversaciones y mensajes en MySQL.
- Estrategia de recuperación de información de los PDF.
- Necesidad de incorporar LangChain, LlamaIndex u otras herramientas.
- Pruebas de calidad de respuestas educativas.
- Pruebas de consumo y cambio de proveedor.

La integración deberá comenzar con una solución sencilla, segura y fácil de mantener, permitiendo incorporar mejoras a medida que avance el proyecto.

---