# Requisitos del proyecto — Dialecto

## 1. Objetivo

Definir las funcionalidades y condiciones que debe cumplir Dialecto para ofrecer una plataforma de apoyo educativo a los aspirantes a la carrera de Desarrollo de Software del Instituto Politécnico Formosa (IPF).

La plataforma debe facilitar el aprendizaje de Matemáticas y Programación mediante materiales organizados, explicaciones didácticas, recursos complementarios, ejercicios interactivos y asistencia mediante inteligencia artificial.

## 2. Requisitos funcionales

### RF-01. Gestión de usuarios

- El sistema debe permitir que los usuarios creen una cuenta.
- El sistema debe permitir iniciar y cerrar sesión.
- El sistema debe permitir identificar a los usuarios autenticados.
- Debe existir un perfil con información básica del usuario.
- El sistema debe contemplar diferentes permisos para usuarios administradores y estudiantes.

### RF-02. Organización del contenido académico

- El contenido debe organizarse por materias.
- Cada materia debe contener unidades temáticas.
- Cada unidad debe presentar sus contenidos de forma ordenada.
- El sistema debe permitir incorporar nuevas unidades y modificar las existentes.
- La estructura debe permitir actualizar los materiales cuando cambien los contenidos del curso de ingreso.

### RF-03. Materiales de estudio

Cada unidad podrá incluir:

- Introducción al tema.
- Explicaciones teóricas.
- Conceptos importantes.
- Ejemplos desarrollados.
- Representaciones gráficas o visuales.
- Ejercicios de práctica.
- Videos y recursos externos.
- Material complementario.

Los contenidos deben presentarse de manera clara y progresiva, procurando que el estudiante comprenda los conceptos antes de avanzar.

### RF-04. Matemáticas interactivas

El sistema debe ofrecer recursos visuales e interactivos para facilitar la comprensión de los contenidos matemáticos.

Entre los temas contemplados inicialmente se encuentran:

- Teoría de conjuntos.
- Matrices.
- Funciones.
- Lógica proposicional.

Las representaciones deben permitir visualizar conceptos y comprender cómo se aplican, no limitarse a mostrar información teórica.

### RF-05. Aprendizaje de programación

El sistema debe incluir contenidos relacionados con:

- PSeInt.
- JavaScript.
- TypeScript como continuidad del aprendizaje.

Los materiales deben combinar teoría, ejemplos y explicaciones prácticas.

También deben contemplar tutoriales sobre el uso de herramientas de desarrollo, incluyendo Visual Studio Code, tanto para quienes recién comienzan como para quienes necesitan reforzar sus conocimientos.

### RF-06. Práctica interactiva de código

- La plataforma debe permitir trabajar con ejemplos de código dentro de la experiencia de aprendizaje.
- Debe explicar cómo funciona cada fragmento de código.
- Debe permitir comprender la relación entre las instrucciones y el resultado que producen.
- La experiencia debe priorizar la explicación y el aprendizaje.

**Alcance inicial:** no se plantea desarrollar un compilador o transpilador propio. La interacción con el código debe tener un propósito didáctico.

### RF-07. Asistente educativo con inteligencia artificial

La plataforma debe incorporar un asistente orientado al aprendizaje.

El asistente debe poder:

- Explicar conceptos de diferentes maneras.
- Proporcionar ejemplos adicionales.
- Descomponer problemas complejos en pasos más pequeños.
- Ayudar a identificar en qué parte de un ejercicio aparecen las dificultades.
- Orientar al estudiante mediante preguntas.
- Detectar posibles errores de razonamiento.
- Recomendar contenidos para reforzar un tema.

La inteligencia artificial debe funcionar como un apoyo educativo y no limitarse a entregar respuestas.

### RF-08. Recursos audiovisuales y complementarios

El sistema debe permitir incorporar recursos que complementen los materiales de estudio:

- Videos explicativos.
- Tutoriales.
- Documentación oficial.
- Repositorios de GitHub.
- Enlaces a otras fuentes educativas.
- Videos explicativos elaborados para la plataforma.

Se contempla como posibilidad futura que el asistente pueda responder preguntas tomando como referencia el contenido de un video.

### RF-09. Gestión administrativa del contenido

Debe existir un espacio de administración para gestionar los materiales académicos.

El administrador debe poder:

- Crear, modificar y eliminar materias.
- Crear, modificar y eliminar unidades temáticas.
- Incorporar y actualizar materiales.
- Cargar documentos PDF.
- Redactar explicaciones manualmente.
- Utilizar inteligencia artificial para generar borradores de contenido a partir de los materiales cargados.

El contenido generado mediante inteligencia artificial debe poder revisarse y corregirse antes de publicarse.

### RF-10. Ejercicios y evaluaciones de práctica

La plataforma debe ofrecer actividades que permitan reforzar los conocimientos adquiridos.

Se contempla:

- Ejercicios relacionados con cada unidad.
- Preguntas de práctica generadas a partir de los materiales.
- Preguntas aleatorias para repasar los contenidos.

La finalidad es que el estudiante pueda comprobar su comprensión y reconocer qué temas necesita reforzar.

### RF-11. Experiencia inicial y navegación

- La plataforma debe ofrecer una experiencia inicial que explique cómo utilizar sus principales funcionalidades.
- Se contempla utilizar Driver.js para guiar al usuario durante su primer recorrido.
- La navegación debe ser intuitiva y mantener una organización coherente entre materias, unidades y recursos.

### RF-12. Información sobre el uso de datos

El sistema debe informar al usuario qué datos se recopilan y con qué finalidad se utilizan.

La información debe presentarse de manera clara y accesible.

## 3. Requisitos no funcionales

### RNF-01. Diseño adaptable

La plataforma debe funcionar correctamente en:

- Teléfonos celulares.
- Tablets.
- Computadoras de escritorio.
- Notebooks.

El diseño debe priorizar una experiencia mobile-first.

### RNF-02. Rendimiento y accesibilidad

- La aplicación debe ser liviana y evitar cargas innecesarias.
- Debe procurar funcionar en dispositivos de recursos limitados.
- Debe optimizar la carga de imágenes, videos y otros recursos.
- Debe contemplar conexiones a internet lentas o inestables.
- Los contenidos deben poder leerse y utilizarse cómodamente desde pantallas pequeñas.

### RNF-03. Usabilidad

- La interfaz debe ser clara y consistente.
- Los contenidos deben tener una jerarquía visual comprensible.
- Las funcionalidades principales deben ser fáciles de encontrar.
- Las interacciones deben ser sencillas y estar acompañadas de indicaciones cuando sea necesario.

### RNF-04. Mantenibilidad

- El proyecto debe mantener una estructura organizada.
- El código debe ser legible y facilitar futuras modificaciones.
- El código deberá respetar las convenciones establecidas en [CONVENCIONES-CODIGO.md](./CONVENCIONES-CODIGO.md).
- La organización del contenido debe permitir incorporar nuevas unidades y materiales sin tener que rediseñar toda la plataforma.
- Las decisiones técnicas deben quedar documentadas.

### RNF-05. Seguridad

- Las contraseñas no deben almacenarse en texto plano.
- Las rutas y operaciones administrativas deben contar con controles de acceso.
- Los datos enviados por el usuario deben validarse.
- La información sensible debe manejarse de forma segura.

### RNF-06. Evolución del contenido

La plataforma debe poder adaptarse a futuras modificaciones de los materiales de ingreso y permitir incorporar nuevos temas, recursos y actividades.

## 4. Reglas y límites del producto

1. Dialecto es un proyecto independiente y no representa oficialmente al IPF.
2. La plataforma no garantiza el ingreso a la carrera.
3. No administra calificaciones oficiales ni reemplaza los mecanismos académicos de la institución.
4. Su finalidad es acompañar y reforzar el aprendizaje.
5. La inteligencia artificial debe utilizarse como herramienta de apoyo y no como sustituto del proceso de aprendizaje.
6. Los materiales generados mediante IA deben pasar por una revisión antes de su publicación.
7. La plataforma no debe depender de que el estudiante tenga una computadora de altas prestaciones.
8. Los contenidos deben poder actualizarse para acompañar los cambios del curso de ingreso.

## 5. Funcionalidades futuras o sujetas a evaluación

Las siguientes ideas forman parte de la visión del proyecto, pero no deben considerarse funcionalidades confirmadas para la primera versión:

- Asistente de IA capaz de analizar videos y responder preguntas sobre fragmentos específicos.
- Generación automática de preguntas aleatorias a partir de documentos PDF.
- Seguimiento detallado del progreso de aprendizaje.
- Recomendaciones personalizadas de unidades y ejercicios.
- Ampliación de materias y contenidos más allá de Matemáticas y Programación.

Su incorporación dependerá de la planificación y de las decisiones que se tomen durante el desarrollo.

## 6. Criterio general de aceptación

Una funcionalidad se considerará adecuada cuando cumpla su objetivo educativo, sea comprensible para el estudiante y pueda utilizarse correctamente desde los dispositivos y conexiones contemplados por el proyecto.

La prioridad no es incorporar la mayor cantidad posible de funcionalidades, sino construir una herramienta útil que ayude a comprender los contenidos y preparar al estudiante para el curso de ingreso.