# NYC Trip Planner · 23–29 agosto 2026

PWA lista para desplegar en GitHub Pages.

## Pasos para ponerla online

### 1. Crear repositorio en GitHub
- Ve a [github.com/new](https://github.com/new)
- Nombre: `nyc-trip` (o el que quieras)
- Público
- Crea el repo

### 2. Subir los archivos
Sube estos 5 archivos a la raíz del repo:
- `index.html`
- `manifest.json`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

Puedes hacerlo arrastrando los archivos directamente en la web de GitHub (botón "Add file" → "Upload files").

### 3. Activar GitHub Pages
- Ve a **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** / carpeta **/ (root)**
- Pulsa **Save**

En 1-2 minutos tendrás la app en:
`https://tuusuario.github.io/nyc-trip`

### 4. Instalar en el móvil
Abre la URL en el móvil:
- **iPhone**: Safari → botón compartir (↑) → "Añadir a pantalla de inicio"
- **Android**: Chrome → menú (⋮) → "Instalar app" o "Añadir a pantalla de inicio"

La app funciona **offline** después de la primera carga.

### 5. Compartir
Envía la URL a tu mujer. Ella hace el mismo paso 4 en su móvil.

Cada persona tiene su propio progreso (checks, gastos, paradas añadidas) guardado localmente en su dispositivo.

## Modificar después
Edita `index.html` directamente en GitHub (botón del lápiz) y haz commit. GitHub Pages se actualiza automáticamente en 1-2 minutos. Al recargar la app en el móvil se actualiza.
