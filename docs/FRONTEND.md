# FRONTEND

## 1. Objetivo

Este documento define los criterios técnicos y de organización para desarrollar el frontend de Dialecto.

El frontend será la interfaz mediante la cual los estudiantes podrán acceder a los contenidos educativos, consultar materiales, realizar actividades, utilizar el asistente de inteligencia artificial y navegar por las diferentes secciones de la plataforma.

Se buscará construir una aplicación clara, accesible, responsive y fácil de mantener.

## 2. Tecnologías

El desarrollo del frontend utilizará las siguientes tecnologías:

### 2.1. JavaScript

Será el lenguaje principal para implementar la lógica de la interfaz.

Se utilizará JavaScript moderno (ES6+) para trabajar con componentes, funciones, eventos, estados y comunicación con el backend.

No se utilizará TypeScript en la implementación del proyecto.

### 2.2. React

Se utilizará React para construir la interfaz mediante componentes reutilizables.

Permitirá organizar la aplicación en diferentes partes, administrar estados y representar dinámicamente la información.

Se priorizará una arquitectura basada en componentes que facilite el mantenimiento y la ampliación de la plataforma.

### 2.3. Vite

Se utilizará Vite como herramienta de desarrollo y construcción de la aplicación.

Sus responsabilidades serán:

- Inicializar y configurar el proyecto.
- Proporcionar un servidor de desarrollo.
- Gestionar la compilación para producción.
- Facilitar el proceso de desarrollo mediante actualización rápida.
- Administrar las dependencias del frontend.

### 2.4. Tailwind CSS

Se utilizará Tailwind CSS para desarrollar los estilos de la aplicación.

Permitirá mantener una interfaz consistente mediante clases utilitarias y facilitará la adaptación a diferentes tamaños de pantalla.

Los colores, tipografías, espacios y componentes deberán respetar los criterios definidos en `UX-UI.md`.

## 3. Organización del frontend

El frontend se organizará mediante componentes, páginas y módulos que permitan separar las responsabilidades de la interfaz.

Se propone la siguiente organización inicial:

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── ui/
│   ├── pages/
│   ├── routes/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── package.json
└── vite.config.js
```

Esta estructura es una propuesta inicial y podrá ajustarse según las necesidades reales del proyecto.

### 3.1. Responsabilidad de las carpetas

- `assets/`: imágenes, recursos gráficos y archivos estáticos importados desde la aplicación.
- `components/`: componentes reutilizables de la interfaz.
- `components/common/`: componentes compartidos entre distintas secciones.
- `components/layout/`: estructuras generales de la aplicación.
- `components/ui/`: elementos visuales reutilizables, como botones, tarjetas e inputs.
- `pages/`: páginas principales de la aplicación.
- `routes/`: configuración y organización de las rutas.
- `hooks/`: hooks personalizados de React.
- `services/`: comunicación con el backend y servicios externos permitidos.
- `context/`: contextos para compartir estados cuando sea necesario.
- `utils/`: funciones auxiliares reutilizables.
- `styles/`: estilos globales y configuraciones complementarias.

No será obligatorio utilizar todas las carpetas desde el inicio. La estructura deberá crecer según las necesidades del proyecto.

## 4. Componentes reutilizables

La interfaz deberá construirse mediante componentes que puedan utilizarse en diferentes páginas.

Se priorizará la reutilización de elementos como:

- Botones.
- Inputs.
- Formularios.
- Tarjetas.
- Modales.
- Navegación.
- Menús.
- Indicadores de progreso.
- Mensajes de estado.
- Bloques de contenido.
- Componentes de actividades educativas.

Los componentes deberán tener responsabilidades claras y evitar concentrar demasiada lógica en un único archivo.

Se utilizarán props para compartir información y personalizar su comportamiento cuando sea necesario.

## 5. Páginas y navegación

La aplicación contará con páginas y secciones organizadas según las funcionalidades de Dialecto.

Se contemplan inicialmente:

- Landing Page: presentación de la plataforma.
- Inicio de sesión y registro.
- Panel principal del estudiante.
- Sección de Matemática.
- Sección de Programación.
- Unidades y temas educativos.
- Visualización de materiales.
- Actividades y ejercicios.
- Asistente de inteligencia artificial.
- Perfil del estudiante.
- Herramientas y recursos externos para practicar.

La organización definitiva de las páginas dependerá de los requisitos funcionales y del diseño UX/UI.

### 5.1. Navegación

Se implementará un sistema de navegación que permita desplazarse entre las diferentes secciones sin recargar innecesariamente la aplicación.

Se deberán contemplar:

- Rutas públicas.
- Rutas privadas.
- Redirecciones según el estado de autenticación.
- Página de error para rutas inexistentes.
- Navegación adaptada a dispositivos móviles.

La biblioteca y configuración definitiva de rutas se establecerán durante la implementación.

## 6. Gestión de estados

React será responsable de administrar los estados necesarios para representar y actualizar la interfaz.

Se utilizarán los mecanismos nativos de React, como `useState`, `useEffect` y Context API, cuando correspondan.

Se deberá evitar compartir estados globalmente cuando solamente sean necesarios dentro de un componente.

La incorporación de herramientas externas para administrar estados se evaluará únicamente si la complejidad de la aplicación lo justifica.

## 7. Comunicación con el backend

El frontend se comunicará con el backend mediante solicitudes HTTP a la API de Dialecto.

La comunicación permitirá:

- Autenticación y registro.
- Consulta de información del estudiante.
- Obtención de contenidos educativos.
- Consulta de actividades.
- Envío de respuestas.
- Acceso al historial de conversaciones.
- Envío de consultas al asistente de IA.
- Consulta del consumo de tokens.

Las solicitudes deberán organizarse mediante servicios para evitar repetir lógica de comunicación en diferentes componentes.

### 7.1. Manejo de respuestas

El frontend deberá contemplar diferentes estados al comunicarse con el backend:

- Cargando.
- Operación exitosa.
- Error.
- Sin resultados.
- Sesión expirada.
- Sin conexión.

Los mensajes deberán ser comprensibles y proporcionar información útil para el estudiante.

### 7.2. Variables de entorno

Las direcciones de los servicios y configuraciones necesarias se administrarán mediante variables de entorno de Vite.

Las variables públicas del frontend no deberán contener contraseñas, claves privadas ni credenciales de proveedores de inteligencia artificial.

## 8. Formularios y validaciones

Los formularios deberán facilitar la carga de información y comunicar claramente los errores.

Se contemplarán validaciones para:

- Campos obligatorios.
- Formatos de correo electrónico.
- Longitud de los campos.
- Contraseñas.
- Datos de registro.
- Respuestas de actividades.

Las validaciones realizadas en el frontend tendrán como objetivo mejorar la experiencia del usuario.

El backend será responsable de realizar las validaciones definitivas y proteger la integridad de los datos.

## 9. Integración del asistente de inteligencia artificial

El frontend ofrecerá una interfaz para interactuar con el asistente educativo de Dialecto.

La integración se realizará exclusivamente a través del backend.

Se contemplan las siguientes funcionalidades:

- Enviar consultas.
- Mostrar respuestas.
- Mantener el historial de conversaciones.
- Mostrar estados de carga.
- Informar errores de comunicación.
- Permitir continuar conversaciones anteriores.
- Mostrar el consumo de tokens.
- Informar el presupuesto disponible.
- Avisar cuando el estudiante esté cerca de alcanzar su límite.
- Informar cuando se hayan agotado los tokens.

El frontend no deberá almacenar ni exponer las claves API de Gemini o Groq.

La administración del consumo y la selección de proveedores serán responsabilidades del backend.

## 10. Contenidos y herramientas educativas

El frontend deberá presentar los materiales de manera organizada y facilitar el acceso a los recursos de aprendizaje.

Se contemplan:

- Explicaciones teóricas.
- Ejemplos prácticos.
- Fragmentos de código.
- Videos educativos.
- Diagramas y recursos visuales.
- Actividades y ejercicios.
- Documentación complementaria.
- Herramientas externas de programación.

### 10.1. Herramientas externas de programación

Dialecto no desarrollará inicialmente un editor de código propio.

En su lugar, ofrecerá enlaces a plataformas externas que permitan practicar y ejecutar código desde el navegador.

Entre las alternativas consideradas se encuentran:

- freeCodeCamp.
- W3Schools.
- MDN Web Docs.
- CodePen.
- Replit.
- JSFiddle.
- StackBlitz.

Los recursos deberán seleccionarse según el tema educativo y estar acompañados de una descripción que explique su utilidad.

### 10.2. Videos educativos

Los videos seleccionados de YouTube podrán mostrarse como recursos complementarios dentro de los temas correspondientes.

Se deberá identificar el contenido y su relación con la explicación educativa.

La incorporación de videos deberá respetar los criterios definidos en `CONTENIDO-EDUCATIVO.md`.

## 11. Diseño responsive

La aplicación se desarrollará siguiendo un enfoque mobile-first.

La interfaz deberá adaptarse correctamente a:

- Teléfonos móviles.
- Tablets.
- Computadoras de escritorio.
- Diferentes resoluciones de pantalla.

Se prestará especial atención a la navegación, lectura de contenidos, formularios, actividades y uso del asistente en dispositivos pequeños.

Los puntos de quiebre definitivos se establecerán durante la implementación visual.

## 12. Accesibilidad y experiencia de usuario

El frontend deberá respetar los principios de accesibilidad establecidos en `UX-UI.md`.

Se contemplarán:

- Contraste adecuado entre texto y fondo.
- Jerarquía correcta de títulos.
- Etiquetas asociadas a los campos de formularios.
- Navegación mediante teclado.
- Indicadores visibles de foco.
- Textos alternativos para imágenes informativas.
- Mensajes de error comprensibles.
- Elementos interactivos con tamaños adecuados.
- Compatibilidad con lectores de pantalla cuando corresponda.

Se tomará WCAG 2.2 nivel AA como referencia para evaluar la accesibilidad.

## 13. Rendimiento

Se buscará mantener una aplicación rápida y eficiente.

Se contemplarán las siguientes prácticas:

- Componentes reutilizables y bien organizados.
- Carga diferida de páginas y recursos cuando sea conveniente.
- Optimización de imágenes.
- Evitar renderizados innecesarios.
- Evitar dependencias que no aporten valor.
- Controlar el tamaño de los recursos descargados.
- Mostrar estados de carga durante operaciones prolongadas.

## 14. Calidad y mantenimiento

El código del frontend deberá mantenerse organizado, legible y fácil de modificar.

La implementación deberá respetar las convenciones de [CONVENCIONES-CODIGO.md](./CONVENCIONES-CODIGO.md), especialmente las aplicables a componentes, responsabilidades y documentación de recorridos no evidentes. Se utilizarán exclusivamente exportaciones nombradas en los módulos, componentes React y archivos de configuración; no se utilizará `export default`.

Se establecen los siguientes criterios:

- Utilizar nombres descriptivos para componentes y funciones.
- Mantener una responsabilidad clara por componente.
- Evitar duplicación innecesaria de código.
- Separar la lógica de comunicación con la API.
- Reutilizar componentes cuando tenga sentido.
- Mantener coherencia con las convenciones del proyecto.
- Comprobar el funcionamiento después de incorporar cambios.
- Evitar dependencias y abstracciones innecesarias.

## 15. Alcance y aspectos pendientes

Este documento establece los criterios generales para construir el frontend de Dialecto.

Quedan pendientes de definición durante la implementación:

- Estructura definitiva de carpetas.
- Biblioteca y configuración de rutas.
- Organización final de las páginas.
- Estrategia definitiva de gestión de estados.
- Componentes visuales definitivos.
- Integración de autenticación.
- Diseño de la interfaz del asistente.
- Visualización y ejecución de actividades.
- Integración de videos y recursos externos.
- Estrategia de pruebas del frontend.
- Configuración de despliegue.

Las decisiones deberán respetar el stack aprobado y los documentos de requisitos, arquitectura y UX/UI.

---
