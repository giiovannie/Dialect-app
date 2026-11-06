# Git Workflow

## 1. Objetivo

Este documento define las reglas de trabajo con Git y GitHub durante el desarrollo de Dialecto.

Establece la organización de ramas, la creación de funcionalidades, las convenciones de commits y el proceso de integración de cambios.

El objetivo es mantener un historial claro, ordenado y fácil de comprender.

## 2. Herramientas

- **Git:** control de versiones.
- **GitHub:** alojamiento del repositorio y colaboración.
- **Engram:** registro de decisiones y contexto del proyecto.
- **RTK:** herramienta de apoyo para trabajar con comandos.

## 3. Organización de ramas

El proyecto utilizará una estructura jerárquica de ramas.

```text
main
 └── develop
      ├── frontend
      │    └── features/*
      │
      └── backend
           └── features/*
```

### Ramas principales

| Rama | Responsabilidad |
|---|---|
| `main` | Contiene las versiones estables del proyecto. |
| `develop` | Integra los cambios de frontend y backend. |
| `frontend` | Centraliza el desarrollo del frontend. |
| `backend` | Centraliza el desarrollo del backend. |
| `features/*` | Contienen funcionalidades específicas. |

### Reglas de creación

- `develop` nace de `main`.
- `frontend` y `backend` nacen de `develop`.
- Las ramas `features/*` nacen de `frontend` o `backend`, según el área correspondiente.
- Cada funcionalidad debe desarrollarse en su propia rama.
- Las ramas de funcionalidades deben integrarse primero en su rama de origen.

Ejemplos:

```bash
git switch frontend
git switch -c features/login
```

```bash
git switch backend
git switch -c features/auth
```

## 4. Convención de nombres de ramas

Se utilizarán nombres descriptivos y en minúsculas.

Formato:

```text
features/nombre-funcionalidad
```

Ejemplos:

- `features/login`
- `features/register`
- `features/dashboard`
- `features/ai-assistant`
- `features/token-management`
- `features/educational-content`

Los nombres deben identificar claramente el trabajo que se está realizando.

## 5. Convención de commits

Los commits deberán ser claros, descriptivos y estar redactados con verbos en pasado.

Se utilizará una convención basada en Conventional Commits, adaptada al idioma del proyecto.

### Formato

```text
tipo(alcance): descripción en pasado

Cuerpo opcional explicando los cambios realizados.

Pie opcional con referencias o información adicional.
```

### Tipos principales

| Tipo | Uso |
|---|---|
| `feat` | Incorporación de una funcionalidad. |
| `fix` | Corrección de errores. |
| `docs` | Modificación de documentación. |
| `style` | Cambios de formato o presentación sin modificar la lógica. |
| `refactor` | Reestructuración del código sin cambiar su comportamiento. |
| `test` | Incorporación o modificación de pruebas. |
| `chore` | Tareas de mantenimiento y configuración. |
| `perf` | Mejoras de rendimiento. |

### Ejemplos

```text
feat(auth): implementó el inicio de sesión
```

```text
fix(users): corrigió la validación del correo electrónico
```

```text
docs(backend): documentó los endpoints de autenticación
```

```text
refactor(activities): reorganizó la lógica de respuestas
```

### Cuerpo del commit

Cuando los cambios necesiten mayor explicación, se agregará un cuerpo que describa qué se modificó y por qué.

### Pie del commit (footer)

Se utilizará cuando corresponda para agregar referencias a tareas, incidencias o información relacionada.

Ejemplo:

```text
feat(auth): implementó el inicio de sesión

Se agregó la validación de credenciales y la generación
del token de autenticación.

Refs: #15
```

Los mensajes no deberán ser genéricos como `actualización`, `cambios`, `arreglos` o `finalizado`.

## 6. Integración de cambios

El flujo de integración será:

1. Crear una rama `features/*` desde `frontend` o `backend`.
2. Desarrollar la funcionalidad correspondiente.
3. Realizar commits descriptivos.
4. Verificar que los cambios funcionen correctamente.
5. Integrar la funcionalidad en su rama de origen.
6. Una vez completados los trabajos correspondientes, integrar `frontend` y `backend` en `develop`.
7. Cuando la versión esté estable, integrar `develop` en `main`.

No se deberán incorporar funcionalidades incompletas o cambios sin verificar en las ramas principales.

## 7. Sincronización con GitHub

- Mantener las ramas locales sincronizadas con sus ramas remotas.
- Subir los cambios mediante `git push`.
- Verificar el estado del repositorio antes de integrar cambios.
- Evitar sobrescribir trabajo remoto.
- Resolver conflictos antes de completar una integración.

## 8. Resolución de conflictos

Cuando aparezcan conflictos:

1. Identificar los archivos afectados.
2. Revisar las modificaciones de ambas ramas.
3. Resolver los conflictos respetando la lógica del proyecto.
4. Verificar que los archivos resultantes sean correctos.
5. Ejecutar las comprobaciones correspondientes.
6. Completar la integración.

No se deberán eliminar cambios ajenos sin revisar su propósito.

## 9. Buenas prácticas

- Trabajar siempre en la rama correspondiente.
- Evitar desarrollar funcionalidades directamente en `main` o `develop`.
- Mantener las funcionalidades separadas.
- Realizar commits pequeños y descriptivos.
- No acumular cambios sin registrar.
- No subir archivos sensibles como `.env`.
- Mantener actualizado el archivo `.gitignore`.
- Revisar los cambios antes de realizar un commit.
- Evitar mezclar funcionalidades diferentes en un mismo commit.

## 10. Mantenimiento

Este documento deberá actualizarse si se modifica la estrategia de ramas, las convenciones de commits o el proceso de integración.

Las reglas aquí establecidas serán la referencia para organizar el trabajo con Git y GitHub durante el desarrollo de Dialecto.