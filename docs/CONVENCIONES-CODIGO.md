# CONVENCIONES DE CÓDIGO

## 1. Objetivo

Este documento establece las convenciones que deben respetarse durante el desarrollo de Dialecto.

Su objetivo es mantener un código claro, organizado, documentado y fácil de comprender para el desarrollador y para cualquier persona que participe en el proyecto.

Estas convenciones son obligatorias tanto para el **frontend como para el backend**, y deben ser respetadas por todos los agentes que intervengan en el desarrollo.

La prioridad no es escribir código sofisticado, sino construir una aplicación funcional, mantenible y comprensible.

## 2. Principios generales

Todo el código desarrollado debe cumplir los siguientes principios:

- Priorizar la claridad y la simplicidad.
- Utilizar nombres descriptivos para variables, funciones, componentes y archivos.
- Evitar abstracciones innecesarias.
- No agregar complejidad cuando una solución sencilla sea suficiente.
- Evitar duplicaciones innecesarias sin crear abstracciones prematuras.
- Mantener una separación clara de responsabilidades.
- Seguir el estilo y los patrones que ya utiliza el proyecto.
- No modificar funcionalidades existentes fuera del alcance de la tarea.
- No incorporar dependencias nuevas sin autorización.
- Manejar los errores de manera clara, sin ocultarlos ni ignorarlos.
- No exponer credenciales, secretos ni información sensible.

**El código debe ser comprensible para el desarrollador, no solamente para una IA.**

No se deben implementar soluciones excesivamente complejas, patrones avanzados o abstracciones que dificulten la comprensión cuando no exista una necesidad real que los justifique.

## 3. Funciones y controladores

Las funciones de los controladores deben utilizar funciones flecha asíncronas (`async`) y manejar sus errores mediante `try/catch`.

Estructura de referencia:

```js
export const getUser = async (req, res) => {
    try {
        // Lógica del controlador
    } catch (error) {
        // Manejo del error
    }
}
```

Criterios:

- Utilizar `async/await` para las operaciones asíncronas.
- Mantener el manejo de errores dentro de `try/catch`.
- Evitar utilizar `.then()` y `.catch()` como alternativa a esta estructura.
- Utilizar nombres descriptivos que indiquen la responsabilidad de cada función.
- No concentrar múltiples responsabilidades en un mismo controlador.

Esta convención también debe orientar la escritura de las funciones asíncronas del resto del proyecto, siempre que corresponda.

## 4. Validadores

Los validadores del backend deben organizarse mediante arrays de reglas de validación.

Ejemplo:

```js
export const userCreateValidation = [
    // Reglas de validación
]
```

Criterios:

- Cada conjunto de validaciones debe tener un nombre descriptivo.
- Las validaciones deben mantenerse separadas de la lógica de los controladores.
- Reutilizar validaciones cuando sea conveniente.
- No incorporar lógica innecesaria dentro de los arrays de validación.
- Respetar la estructura de validación establecida para cada recurso.

## 5. Exportaciones e importaciones

El proyecto utilizará exclusivamente **exportaciones nombradas (named exports)**.

No se permitirá utilizar `export default`.

Las exportaciones deben declararse de manera explícita:

```js
export const getUser = () => {
    // ...
}
```

Las importaciones correspondientes utilizarán llaves:

```js
import { getUser } from './userController.js'
```

Criterios:

- Utilizar `export const` para exportar funciones, constantes y otros elementos.
- Utilizar `import { nombre }` para importar elementos exportados.
- No utilizar exportaciones por defecto.
- Mantener nombres claros y consistentes.
- Respetar esta convención en frontend y backend.

## 6. Documentación y comentarios del código

El código debe estar documentado cuando sea necesario para comprender su funcionamiento y su relación con otros módulos.

La documentación debe permitir seguir el recorrido de la ejecución, especialmente cuando un fragmento depende de código ubicado en otro archivo.

Se debe explicar:

- De dónde proviene la ejecución o quién utiliza ese fragmento.
- Qué responsabilidad cumple.
- Qué proceso realiza.
- Hacia dónde continúa el flujo.
- Con qué otros archivos, funciones o módulos se relaciona.

Por ejemplo, una función de un controlador puede documentar que recibe una solicitud desde una ruta determinada, procesa la información y devuelve una respuesta al cliente.

También deben explicarse aquellos fragmentos cuya lógica, funcionamiento o relación con otros elementos no sea evidente.

### Criterio para los comentarios

No es necesario documentar absolutamente cada línea.

Se debe utilizar el sentido común:

- Explicar las relaciones entre archivos y módulos cuando sea necesario.
- Documentar funciones cuyo recorrido o responsabilidad no resulte evidente.
- Aclarar conceptos o decisiones técnicas que puedan resultar difíciles de comprender.
- Evitar comentarios que simplemente repitan lo que ya expresa el código.
- No llenar el código de comentarios innecesarios.

**La documentación debe ayudar a comprender el proyecto y permitir que el desarrollador pueda seguir el código sin depender de una IA.**

## 7. Condicionales

Se permite utilizar condicionales de una sola línea cuando sean sencillos y fáciles de comprender.

Ejemplo:

```js
if (!user) return
```

Cuando una condición incluya varias operaciones, lógica compleja o múltiples instrucciones, se deben utilizar bloques convencionales.

La prioridad es mantener la legibilidad.

## 8. Respeto por la estructura del proyecto

La estructura de carpetas y archivos definida en la documentación oficial de Dialecto debe respetarse obligatoriamente.

Los agentes no deben modificarla por iniciativa propia.

Está prohibido:

- Crear carpetas adicionales sin autorización.
- Mover archivos de una ubicación aprobada a otra.
- Cambiar la distribución de responsabilidades.
- Crear archivos que contradigan la arquitectura establecida.
- Introducir nuevas capas o estructuras sin justificación y aprobación.

Si un agente considera que es necesario modificar la estructura, debe explicar el motivo, los archivos afectados y las consecuencias del cambio, y solicitar autorización antes de realizarlo.

### 8.1. Rutas del backend

Está prohibido crear un `index.js` para centralizar o conectar todas las rutas.

Las rutas deben importarse y registrarse directamente en `app.js`, respetando la estructura definida en `BACKEND.md`.

### 8.2. Modelos del backend

Los modelos sí tienen permitido utilizar un `index.js` para centralizar sus exportaciones y definir sus relaciones.

Las relaciones entre modelos deben estar documentadas y explicar:

- Qué modelos participan.
- Qué tipo de relación mantienen.
- Qué representa esa relación dentro del sistema.
- Qué modelo contiene la clave foránea.
- Qué asociaciones se utilizan y qué responsabilidad tiene cada una.

Se deben identificar las relaciones correspondientes:

- Uno a uno (1:1).
- Uno a muchos (1:N).
- Muchos a muchos (N:M).

También se debe explicar el uso de asociaciones como `hasOne`, `belongsTo`, `hasMany` y `belongsToMany` cuando corresponda.

## 9. Convenciones del frontend

El frontend debe respetar los mismos principios generales de claridad, simplicidad, documentación y organización.

Criterios:

- Mantener los componentes con responsabilidades claras.
- Evitar componentes excesivamente grandes.
- Utilizar nombres descriptivos.
- Evitar duplicaciones innecesarias.
- No crear abstracciones o componentes adicionales sin una necesidad real.
- Mantener una organización coherente con la estructura aprobada en `FRONTEND.md`.
- Documentar las relaciones o los flujos entre componentes cuando no sean evidentes.
- Respetar las exportaciones nombradas y evitar `default exports`.

La implementación debe priorizar componentes fáciles de comprender, mantener y reutilizar cuando realmente corresponda.

Esta regla también se aplica a los componentes de React y a los archivos de configuración. Se deben utilizar exportaciones nombradas (named exports) e importaciones correspondientes, evitando export default.

## 10. Convenciones del backend

El backend debe respetar la separación de responsabilidades establecida en `BACKEND.md`.

Cada elemento debe cumplir su función:

- **Routes:** reciben y organizan las solicitudes HTTP y las dirigen al controlador correspondiente.
- **Controllers:** procesan las solicitudes, coordinan las operaciones necesarias y construyen las respuestas.
- **Validators:** verifican los datos recibidos mediante las reglas establecidas.
- **Models:** representan las entidades y sus relaciones con la base de datos.
- **Config:** contiene la configuración de los servicios y conexiones correspondientes.

No se deben trasladar responsabilidades de una capa a otra sin una justificación y aprobación.

Los agentes deben respetar las ubicaciones y responsabilidades definidas en la arquitectura.

## 11. Uso de RTK y consultas por terminal

Las consultas y los comandos ejecutados mediante terminal deben realizarse utilizando RTK.

Antes de utilizarlo, el agente debe comprobar que tiene acceso y que puede ejecutar los comandos necesarios.

Si RTK no está disponible, devuelve errores de acceso o no permite realizar una operación:

- No debe reemplazarlo silenciosamente por otra herramienta.
- Debe informar el problema.
- Debe detener las operaciones que dependan de esa consulta.
- Debe esperar indicaciones antes de utilizar otro mecanismo.

No se debe asumir que RTK está disponible sin verificarlo previamente.

Alternativa ante fallos de RTK: si RTK no está disponible, presenta errores de acceso o no permite ejecutar un comando, se podrá utilizar la terminal normal como alternativa. No es necesario detener el trabajo por este motivo.

## 12. Comunicación y autorización de cambios

Los agentes deben comunicar sus acciones de forma clara y comprensible.

Antes de solicitar autorización para realizar cambios, deben indicar:

1. Qué archivos se modificarán.
2. Qué archivos se crearán o eliminarán, si corresponde.
3. Qué cambios se realizarán.
4. Por qué son necesarios.
5. Qué impacto tendrán en el proyecto.
6. Si afectan alguna decisión o estructura previamente aprobada.

Los mensajes de confirmación deben ser específicos y permitir que el desarrollador entienda qué está autorizando.

Se deben evitar solicitudes ambiguas como:

- "¿Puedo aplicar los cambios?"
- "¿Quieres que continúe?"
- "¿Autorizas la implementación?"

En su lugar, deben describir concretamente la operación que necesitan realizar.

Los agentes no deben ejecutar cambios estructurales, instalar dependencias ni modificar decisiones aprobadas sin autorización.

## 13. Responsabilidad de los agentes

Todos los agentes deben respetar este documento, independientemente de su especialización.

Antes de comenzar una tarea deben:

- Consultar Engram para recuperar decisiones y antecedentes relevantes.
- Revisar la documentación relacionada con la tarea.
- Identificar la estructura existente antes de proponer modificaciones.
- Verificar que su implementación respete las decisiones aprobadas.
- Consultar antes de improvisar ante una duda arquitectónica.

Si una instrucción entra en conflicto con una decisión documentada, el agente debe informar el conflicto y solicitar una aclaración.

No debe cambiar unilateralmente la arquitectura para adaptarla a su propia preferencia.

Al finalizar una tarea, debe informar los archivos afectados, los cambios realizados y las verificaciones ejecutadas.

Las decisiones aprobadas y los aprendizajes relevantes deben registrarse en Engram cuando corresponda. La documentación Markdown continúa siendo la fuente formal del proyecto.

## 14. Regla fundamental

**Dialecto debe ser un proyecto que sus desarrolladores puedan comprender, mantener y ampliar.**

No se busca demostrar conocimientos mediante código complejo ni implementar soluciones innecesariamente sofisticadas.

Cada decisión técnica debe tener una razón, cada archivo debe respetar su responsabilidad y cada agente debe trabajar dentro de la arquitectura definida.

La calidad del código también se mide por lo fácil que resulta entenderlo para otra persona.