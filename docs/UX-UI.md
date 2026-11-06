# Experiencia de usuario e interfaz — Dialecto

## 1. Objetivo

Definir los principios de experiencia de usuario (UX) e interfaz (UI) que orientarán el diseño de Dialecto.

La plataforma debe ofrecer una experiencia educativa clara, intuitiva y accesible, que permita al estudiante concentrarse en comprender los contenidos sin que la interfaz represente una dificultad adicional.

## 2. Principios de diseño

El diseño de Dialecto deberá seguir estos principios:

- **Claridad:** presentar la información de forma ordenada y fácil de comprender.
- **Simplicidad:** evitar elementos visuales y funcionalidades que no aporten valor al aprendizaje.
- **Accesibilidad:** contemplar diferentes dispositivos, capacidades y condiciones de uso.
- **Consistencia:** mantener criterios visuales y de interacción similares en toda la plataforma.
- **Orientación educativa:** priorizar la comprensión de los contenidos por encima de los elementos decorativos.
- **Adaptabilidad:** permitir incorporar nuevas materias y funcionalidades sin perder coherencia visual.

## 3. Identidad visual

Dialecto tendrá una identidad visual propia, relacionada con la educación y la tecnología.

La interfaz deberá transmitir:

- Confianza.
- Cercanía.
- Claridad.
- Motivación para aprender.
- Modernidad sin excesos visuales.

Se contempla incorporar una referencia visual sutil a Fokus, manteniendo la identidad independiente de ambos proyectos.

### 3.1. Concepto visual

El estilo general combinará los principios de **Modern Educational Dashboard** y **Clean Minimal**.

Se buscará una fusión entre la limpieza tipográfica de una plataforma educativa y la precisión visual de un entorno tecnológico.

La interfaz deberá ser moderna, ordenada y funcional, evitando estilos infantiles, excesivamente corporativos o recargados.

### 3.2. Paleta de colores

Se utilizarán dos temas visuales: claro y oscuro.

#### Tema claro

| Uso | Color |
|---|---|
| Fondo principal | `#F8F9FA` |
| Superficies y tarjetas | `#FFFFFF` |
| Texto principal | `#1F2937` |
| Texto secundario | `#4B5563` |
| Bordes y divisores | `#E5E7EB` |

#### Tema oscuro

| Uso | Color |
|---|---|
| Fondo principal | `#121212` |
| Superficies y tarjetas | `#1E1E22` |
| Texto principal | `#E2E8F0` |
| Texto secundario | `#94A3B8` |
| Bordes y divisores | `#3F3F46` |

#### Colores de identidad

| Uso | Color |
|---|---|
| Primario — Azul técnico | `#0E639C` |
| Secundario — Turquesa | `#0A9396` |
| Acento del asistente educativo | `#EE9B00` |

El azul será el color principal de identidad de Dialecto. El turquesa se utilizará como complemento para destacar avances, elementos secundarios y estados completados.

El ámbar identificará visualmente al asistente educativo y sus intervenciones.

#### Estados del sistema

| Estado | Color |
|---|---|
| Éxito | `#2B9348` |
| Advertencia | `#CA6702` |
| Error | `#AE2012` |

Los colores de estado deberán utilizarse de manera consistente y acompañarse de texto, iconos u otros indicadores cuando sea necesario. No se dependerá exclusivamente del color para comunicar información.

### 3.3. Tipografía

Se utilizarán tres familias tipográficas, cada una con una función específica.

#### Space Grotesk — Títulos y encabezados

- Peso 600 (Semibold): subtítulos de sección y títulos de tarjetas.
- Peso 700 (Bold): títulos principales y encabezados destacados.

Se utilizará para aportar personalidad técnica, moderna y geométrica a la identidad visual.

#### Public Sans — Interfaz y contenido

- Peso 400 (Regular): párrafos explicativos, teoría y contenido educativo.
- Peso 500 (Medium): botones, menús, etiquetas y elementos de interfaz.

Será la tipografía principal de lectura y navegación, priorizando la legibilidad en pantallas pequeñas y durante sesiones de estudio prolongadas.

#### Fira Code — Fragmentos de código

- Peso 400 (Regular): ejemplos y bloques de código.
- Peso 500 (Medium): elementos que requieran mayor énfasis.

Se utilizará en ejemplos de PSeInt, JavaScript y otros contenidos relacionados con programación.

Las ligaduras de código podrán utilizarse como recurso visual opcional, siempre que no dificulten la identificación de operadores y símbolos.

Se deberán cargar únicamente los pesos necesarios y contemplar fuentes de respaldo del sistema para mejorar el rendimiento.

### 3.4. Identidad gráfica

**Logotipo y símbolo**

Se propone un isotipo conceptual que combine estructuras geométricas de nodos o vectores con un cursor de consola (`>`), representando la relación entre matemática y programación.

**Iconografía**

Se utilizarán iconos de trazo lineal uniforme, tomando como referencia estilos como Lucide o Phosphor Icons.

Se priorizarán trazos de entre 1.5 px y 2 px, evitando iconos visualmente complejos o innecesariamente pesados.

**Ilustraciones**

Se priorizarán ilustraciones geométricas, abstractas y de estilo técnico, como:

- Planos cartesianos.
- Diagramas de flujo.
- Estructuras de nodos.
- Bloques y elementos modulares.

Se evitarán estilos infantiles o visualmente recargados.

**Imágenes y recursos audiovisuales**

Se podrán utilizar fotografías de entornos reales con tratamientos visuales limpios o desaturados, complementadas con acentos de la paleta institucional.

Las imágenes deberán estar optimizadas para no perjudicar los tiempos de carga.

### 3.5. Criterios de componentes visuales

**Bordes y radios**

- Botones y campos de entrada: 8 px.
- Tarjetas y contenedores principales: entre 12 px y 16 px.
- Etiquetas y badges: bordes completamente redondeados.

**Sombras**

Se priorizarán bordes delimitadores de 1 px y sombras mínimas, como `shadow-sm`, evitando efectos pesados que no aporten claridad.

**Tarjetas de materias y unidades**

Deberán utilizar superficies blancas en el tema claro y grises elevadas en el tema oscuro.

Se delimitarán mediante bordes sutiles, esquinas redondeadas y una jerarquía visual clara entre títulos, descripciones y acciones.

**Campos de formularios**

Se establece una altura de referencia de 44 px para facilitar la interacción táctil.

Deberán contar con bordes claros, etiquetas descriptivas y estados de enfoque visibles.

**Etiquetas y badges**

Se utilizarán píldoras compactas con tipografía Medium y fondos suaves relacionados con los colores de estado o categoría.

**Bloques de código**

Utilizarán Fira Code sobre un fondo oscuro diferenciado, incluso cuando el resto de la interfaz esté en tema claro.

Podrán incorporar numeración de líneas sutil y un control accesible para copiar el contenido.

Los ejemplos deberán mantener una presentación legible y diferenciada del texto explicativo.

**Ejercicios y actividades**

Se organizarán visualmente para distinguir el enunciado, las instrucciones y el espacio de resolución.

Cuando corresponda, podrán incorporar opciones de respuesta, ejemplos de código o mecanismos de validación.

**Gráficos matemáticos**

Se priorizarán representaciones vectoriales mediante SVG, con ejes, trazados y elementos visuales precisos.

Los gráficos utilizarán colores de la identidad de Dialecto sobre fondos neutros para evitar distracciones.

**Asistente educativo**

La interfaz tendrá un formato conversacional, con separación visual entre los mensajes del estudiante y las respuestas del asistente.

Se utilizará el ámbar como acento de identidad del asistente, sin comprometer el contraste del texto.

Deberá permitir presentar explicaciones, ejemplos, ejercicios y bloques de código dentro de una misma conversación.

### 3.6. Colores de acciones e interacciones

**Botón principal**

- Fondo: `#0E639C`.
- Texto: `#FFFFFF`.
- Hover: `#0B4E7B`.
- Active: `#083A5E`.
- Disabled: fondo `#E5E7EB` y texto `#9CA3AF`.

**Botón secundario**

Utilizará un fondo transparente o una superficie neutra, con borde de 1 px y texto del color primario.

En hover podrá incorporar un fondo con un tinte sutil del color primario.

**Enlaces**

- Tema claro: `#0E639C`.
- Tema oscuro: `#38BDF8`.

Los enlaces deberán distinguirse del texto normal y podrán incorporar subrayado al pasar el cursor.

**Indicadores de foco**

Los elementos interactivos deberán contar con un indicador de foco visible mediante teclado.

Se propone un anillo de 2 px con el color de acento `#EE9B00` y un desplazamiento de 2 px (`outline-offset`).

Las combinaciones finales deberán comprobarse para garantizar contraste suficiente en ambos temas.

**Transiciones**

Se utilizarán transiciones funcionales de entre 150 ms y 200 ms para cambios de color, opacidad y estados de interacción.

Se evitarán animaciones decorativas innecesarias.

## 4. Diseño adaptable (Responsive Design)

La plataforma se desarrollará bajo un enfoque **mobile-first**.

El diseño deberá contemplar:

- Teléfonos celulares.
- Tablets.
- Notebooks.
- Computadoras de escritorio.

La experiencia debe adaptarse al tamaño de pantalla sin perder funcionalidades importantes.

Se deberá evitar que el contenido educativo requiera desplazamientos horizontales innecesarios, especialmente en dispositivos móviles.

Las interfaces complejas, como editores de código y vistas divididas, deberán reorganizarse en bloques verticales cuando el espacio disponible sea limitado.

Los elementos interactivos deberán contar con áreas táctiles de referencia de al menos 44 × 44 px.

## 5. Navegación y organización

La navegación debe permitir que el estudiante encuentre rápidamente los contenidos que necesita.

La organización principal contemplará:

1. Acceso a la plataforma.
2. Espacio principal del estudiante.
3. Selección de materias.
4. Selección de unidades temáticas.
5. Acceso a los materiales y actividades.
6. Acceso al asistente educativo.

La estructura visual deberá mantener una jerarquía clara entre materias, unidades y contenidos.

La navegación debe ser consistente y permitir volver fácilmente a las secciones anteriores.

### 5.1. Navegación según dispositivo

En pantallas de escritorio se contempla una barra lateral que pueda expandirse o contraerse.

En dispositivos móviles se priorizará una navegación adaptada al espacio disponible, mediante un menú optimizado o una barra inferior de acceso rápido cuando resulte conveniente.

No todas las opciones deberán estar necesariamente visibles al mismo tiempo. Se priorizarán las acciones más frecuentes del estudiante.

## 6. Experiencia de aprendizaje

La interfaz debe acompañar el proceso de aprendizaje y evitar presentar grandes cantidades de información sin organización.

Los contenidos deberán combinar, según las necesidades de cada tema:

- Explicaciones teóricas.
- Ejemplos.
- Gráficos y representaciones visuales.
- Ejercicios.
- Recursos audiovisuales.
- Material complementario.

Se deberá utilizar una jerarquía visual que permita distinguir títulos, explicaciones, ejemplos, advertencias y actividades.

Las explicaciones deben ser legibles y estar divididas en secciones comprensibles.

## 7. Interacciones y recursos visuales

Dialecto incorporará elementos interactivos para facilitar la comprensión de los contenidos.

Se contemplan:

- Gráficos matemáticos interactivos.
- Representaciones visuales de conceptos.
- Ejemplos de código con explicaciones.
- Actividades de práctica.
- Elementos de interacción con el asistente educativo.

Las interacciones deben tener un propósito educativo y ser fáciles de utilizar.

Se evitarán animaciones excesivas o efectos que distraigan al estudiante.

En los contenidos de programación se deberá distinguir entre la presentación de ejemplos, la escritura de código y los mecanismos de validación o ejecución de actividades.

La interfaz visual no implica por sí misma la implementación de un compilador o entorno de ejecución propio.

## 8. Experiencia inicial y orientación

La primera vez que un usuario ingrese, la plataforma deberá ofrecer una introducción a sus principales funcionalidades.

Se contempla utilizar **Driver.js** para implementar un recorrido guiado.

Este recorrido deberá:

- Presentar las secciones principales.
- Explicar cómo encontrar materias y unidades.
- Mostrar dónde acceder a los recursos educativos.
- Orientar sobre el uso del asistente.
- Permitir finalizar u omitir el recorrido.

La orientación debe ser breve y no convertirse en un obstáculo para comenzar a utilizar la plataforma.

## 9. Accesibilidad

La interfaz deberá contemplar criterios de accesibilidad tomando como referencia las pautas WCAG 2.2 nivel AA.

Se deberá priorizar:

- Contraste mínimo de 4.5:1 para texto normal.
- Contraste mínimo de 3:1 para texto grande y componentes visuales de interfaz cuando corresponda.
- Tamaños de texto legibles.
- Elementos interactivos con áreas de selección adecuadas.
- Etiquetas claras en formularios y controles.
- Navegación mediante teclado.
- Indicadores visibles de foco.
- Estados visuales comprensibles.
- No depender exclusivamente del color para transmitir información.

Las combinaciones de colores deberán comprobarse en los temas claro y oscuro, incluyendo botones, enlaces, textos, badges, bordes e indicadores de foco.

También se deberá procurar que los recursos audiovisuales cuenten con alternativas accesibles cuando sea posible, como subtítulos o transcripciones.

## 10. Rendimiento visual

La experiencia debe ser liviana, especialmente para estudiantes que utilicen celulares o computadoras con recursos limitados.

Se deberá priorizar:

- Imágenes optimizadas.
- Carga progresiva de recursos cuando corresponda.
- Animaciones moderadas.
- Evitar componentes visuales innecesariamente pesados.
- Evitar cargar videos automáticamente.
- Mantener una interfaz funcional incluso con conexiones lentas.
- Cargar únicamente los recursos tipográficos necesarios.
- Evitar dependencias visuales innecesarias.

La experiencia visual no debe comprometer el rendimiento general de la plataforma.

## 11. Estados de interfaz

Los componentes deberán contemplar los diferentes estados que pueden presentarse durante el uso.

Entre ellos:

- **Carga:** indicar cuando se está obteniendo información.
- **Vacío:** explicar qué ocurre cuando todavía no hay contenido.
- **Error:** informar cuando una operación no pudo completarse.
- **Éxito:** confirmar cuando una acción se realizó correctamente.
- **Deshabilitado:** indicar cuándo una acción no está disponible.
- **Hover:** proporcionar una respuesta visual al pasar el cursor.
- **Focus:** identificar el elemento seleccionado mediante teclado.
- **Active:** mostrar cuándo un elemento está siendo presionado o activado.

Los mensajes deben ser claros y orientar al usuario sobre cómo continuar cuando sea posible.

## 12. Diseño de formularios

Los formularios deberán ser sencillos y fáciles de completar.

Se deberá contemplar:

- Etiquetas descriptivas.
- Indicaciones cuando un campo requiera un formato específico.
- Validaciones comprensibles.
- Mensajes de error próximos al campo correspondiente.
- Confirmación de las acciones realizadas.
- Adaptación a pantallas pequeñas.
- Indicadores visuales de campos enfocados, inválidos o deshabilitados.

No se deberán utilizar mensajes técnicos que el estudiante no pueda comprender.

## 13. Experiencia del asistente educativo

El asistente deberá integrarse visualmente con el resto de la plataforma.

Su interfaz deberá facilitar una conversación natural y permitir que el estudiante consulte dudas relacionadas con los contenidos.

Se deberá contemplar:

- Presentación clara de las respuestas.
- Separación entre explicaciones, ejemplos y ejercicios.
- Indicadores cuando el asistente esté procesando una consulta.
- Mensajes cuando no sea posible obtener una respuesta.
- Acceso sencillo desde los espacios de aprendizaje.
- Presentación diferenciada de fragmentos de código.
- Controles accesibles para copiar ejemplos cuando corresponda.

La interfaz debe transmitir que se trata de una herramienta de acompañamiento educativo.

## 14. Diseño para dispositivos y conexiones limitadas

Dado que una parte de los estudiantes puede utilizar dispositivos antiguos o conexiones inestables, la experiencia deberá priorizar el acceso al contenido esencial.

Se deberá evitar:

- Videos que comiencen automáticamente.
- Animaciones pesadas.
- Efectos innecesarios.
- Interfaces que dependan exclusivamente de conexiones rápidas.
- Recursos multimedia que bloqueen el acceso al contenido principal.

Cuando existan recursos audiovisuales, se deberá ofrecer información complementaria en formato de texto siempre que sea posible.

## 15. Criterio general de aceptación

Una interfaz se considerará adecuada cuando:

- Sea comprensible para un estudiante que utiliza la plataforma por primera vez.
- Permita encontrar los contenidos sin dificultad.
- Funcione correctamente en celulares, tablets y computadoras.
- Mantenga una experiencia coherente en las diferentes secciones.
- Facilite la lectura y comprensión de los materiales.
- No perjudique el rendimiento en dispositivos de recursos limitados.
- Cumpla con los criterios de accesibilidad establecidos.
- Mantenga una correcta diferenciación entre los estados de los componentes.
- Respete la identidad visual definida para Dialecto.

La prioridad del diseño será que el estudiante pueda aprender y utilizar la plataforma sin dificultades innecesarias.

## 16. Consideraciones pendientes de implementación

Las siguientes cuestiones deberán definirse o verificarse durante el desarrollo:

- Diseño definitivo del logotipo y sus variantes.
- Comprobación de contraste de todas las combinaciones de colores.
- Definición de los breakpoints y comportamientos responsive concretos.
- Implementación y validación de los componentes visuales.
- Definición de los mecanismos de ejecución y validación de ejercicios de programación.
- Confirmación de las funcionalidades de seguimiento del progreso del estudiante.
- Verificación del comportamiento de los recursos audiovisuales en conexiones limitadas.

Estas consideraciones no representan funcionalidades confirmadas para la primera versión. Su incorporación deberá respetar los requisitos y decisiones generales del proyecto.