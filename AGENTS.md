# AGENTS.md

# Dialecto — Instrucciones generales para agentes

## 1. Identidad del proyecto

**Dialecto** es una plataforma educativa independiente destinada a aspirantes a ingresar a la carrera de Desarrollo de Software del Instituto Politécnico Formosa (IPF).

Su propósito es facilitar la comprensión de los contenidos del cursillo de ingreso, especialmente Matemáticas y Programación, mediante explicaciones didácticas, recursos visuales, ejercicios interactivos y asistencia mediante inteligencia artificial.

La plataforma nace de la experiencia de un estudiante que atravesó el proceso de ingreso y busca ofrecer una herramienta de acompañamiento académico a futuros aspirantes.

## 2. Objetivo de los agentes

Todos los agentes deben colaborar en la construcción, mantenimiento y evolución de Dialecto.

Su trabajo debe priorizar:

- La comprensión del estudiante.
- La claridad y calidad del contenido educativo.
- La accesibilidad y facilidad de uso.
- La mantenibilidad del código.
- La coherencia entre frontend, backend y base de datos.
- El cumplimiento de los requisitos documentados.

Los agentes no deben implementar funcionalidades únicamente porque parezcan interesantes. Toda implementación debe responder a una necesidad del proyecto.

## 3. Stack tecnológico

El desarrollo de Dialecto utiliza JavaScript como lenguaje principal.

### Herramientas de desarrollo

- Engram: memoria y registro de decisiones del proyecto.
- RTK: herramienta de trabajo y optimización de operaciones desde terminal.

### Frontend

- React.
- Vite.
- Tailwind CSS.

### Backend

- Node.js.
- Express.
- Sequelize.
- express-validator.
- bcryptjs.
- jsonwebtoken.
- cors.
- cookie-parser.
- dotenv.

### Base de datos

- MySQL.
- mysql2 como driver de conexión.
- Sequelize utilizando el dialecto MySQL.

No incorporar TypeScript, MongoDB, otros frameworks o dependencias sin autorización del responsable del proyecto.

## 4. Principios de desarrollo

### 4.1. Simplicidad

- Priorizar soluciones simples y mantenibles.
- Evitar abstracciones innecesarias.
- No introducir patrones complejos cuando una solución sencilla sea suficiente.
- Mantener una estructura coherente y organizada.
- Evitar duplicación de código.

### 4.2. JavaScript

- Utilizar JavaScript en frontend y backend.
- Mantener consistencia en nombres, convenciones y estructuras.
- Aprovechar las características del lenguaje sin introducir complejidad innecesaria.

### 4.3. Experiencia educativa

Las funcionalidades deben estar pensadas para facilitar el aprendizaje.

No alcanza con mostrar información: es necesario ayudar al alumno a comprenderla.

Las explicaciones deben ser claras, progresivas y acompañadas de ejemplos cuando corresponda.

### 4.4. Rendimiento y accesibilidad

La plataforma debe funcionar correctamente en:

- Celulares de recursos limitados.
- Notebooks antiguas.
- Computadoras de escritorio.
- Tablets.

Priorizar:

- Cargas rápidas.
- Bajo consumo de recursos.
- Interfaces adaptables.
- Optimización de imágenes y videos.
- Uso eficiente de las solicitudes al servidor.
- Experiencia tolerante a conexiones inestables.

## 5. Reglas de trabajo

Antes de implementar una funcionalidad, el agente debe:

1. Comprender el objetivo de la tarea.
2. Consultar la documentación relacionada.
3. Revisar la estructura y el código existente.
4. Identificar dependencias con otros módulos.
5. Proponer una solución coherente con la arquitectura.
6. Evitar modificar funcionalidades ajenas a la tarea.

Durante la implementación:

- Respetar las decisiones previamente aprobadas.
- No modificar la lógica existente sin justificación.
- No duplicar funcionalidades.
- No inventar endpoints, modelos o contratos.
- No agregar dependencias sin autorización.
- No exponer credenciales ni información sensible.
- Mantener actualizada la documentación cuando corresponda.

Al finalizar:

1. Verificar los cambios realizados.
2. Ejecutar las pruebas disponibles y comprobaciones pertinentes.
3. Informar los archivos modificados.
4. Indicar posibles problemas o tareas pendientes.
5. Documentar nuevas decisiones cuando corresponda.

## 6. Documentación y memoria

La documentación oficial del proyecto se encuentra en `/docs`.

Antes de realizar cambios importantes, consultar los documentos relacionados con la tarea.

Engram se utiliza para conservar decisiones, contexto técnico y avances importantes que deban recuperarse entre sesiones.

RTK se utiliza como herramienta auxiliar de terminal. Si presenta errores o problemas de acceso, utilizar comandos nativos cuando sea necesario.

No considerar una propuesta como una decisión confirmada hasta que el responsable del proyecto la apruebe.

## 7. Límites funcionales del producto

Los agentes deben respetar las siguientes condiciones:

- Dialecto es una plataforma educativa independiente, no una plataforma oficial del IPF.
- No administra calificaciones institucionales.
- No garantiza el ingreso a la carrera.
- Su función es acompañar y facilitar temporalmente la preparación académica.
- Los contenidos pueden cambiar según las actualizaciones del cursillo.
- El material educativo debe poder actualizarse sin reconstruir toda la aplicación.

## 8. Inteligencia artificial

La inteligencia artificial debe tener un enfoque educativo.

Su objetivo es ayudar al alumno a comprender los temas y detectar posibles dificultades de aprendizaje.

No debe limitarse a proporcionar respuestas: debe orientar, explicar y acompañar.

Las funcionalidades relacionadas con IA deben respetar la documentación de `INTELIGENCIA-ARTIFICIAL.md`.

No asumir proveedores, modelos, costos ni servicios externos que todavía no hayan sido aprobados.

## 9. Autoridad y decisiones

El responsable del proyecto es quien aprueba las decisiones funcionales, técnicas y de diseño.

Los agentes pueden:

- Analizar problemas.
- Proponer mejoras.
- Identificar riesgos.
- Recomendar soluciones.
- Implementar tareas autorizadas.

Los agentes no pueden:

- Cambiar el stack tecnológico por iniciativa propia.
- Ampliar el alcance sin autorización.
- Eliminar funcionalidades aprobadas.
- Modificar decisiones arquitectónicas sin informar.
- Dar por implementada una funcionalidad que solamente fue propuesta.

## 10. Regla principal

**Cada decisión y cada implementación deben contribuir al objetivo central de Dialecto: ayudar a los aspirantes a comprender y prepararse mejor para el cursillo de ingreso.**