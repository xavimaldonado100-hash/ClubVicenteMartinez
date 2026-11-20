# Club Deportivo Vicente Martínez · Villa Alemana

Sitio web (app móvil) del club. HTML + JavaScript puro, sin instalar nada.

## Dónde editar cada cosa

| Quiero cambiar…                                              | Archivo                |
|--------------------------------------------------------------|------------------------|
| Dirección, correo, precio de cancha, clave inicial, presidente | `config.js`         |
| Divisiones, clubes de la asociación, directiva, logros, noticias, fotos, horarios | `data.js`           |
| Colores de marca (naranja, crema, carbón)                    | `tailwind-config.js`|
| Animaciones / estilos extra                                  | `styles.css`       |
| Estructura de pantallas, modales, textos fijos               | `index.html`           |
| Lógica (pestañas, reservas, tesorería, guardado)             | `app.js`            |

## Ver el sitio en tu computador

Como usa módulos de JavaScript, no abre con doble clic. Desde esta carpeta:

    python3 -m http.server 8000

y abre http://localhost:8000

## Publicarlo gratis con GitHub Pages

1. Sube todo el contenido de esta carpeta a un repositorio.
2. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)` → **Save**.
4. En 1–2 minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Guardar cambios para todos (Firebase + administrador real)

1. Crea un proyecto en https://console.firebase.google.com
2. **Build → Authentication → Sign-in method**: activa **Correo/contraseña** (nada más).
   En la pestaña *Users* crea tu usuario admin (el correo de `adminEmail` en `config.js`).
3. **Build → Firestore Database → Crear base de datos** (modo producción).
4. En Firestore, pestaña **Reglas**: pega el contenido de `firestore.rules` y **Publicar**.
   (Si cambias `adminEmail`, cámbialo también dentro de las reglas.)
5. **Configuración del proyecto → Tus apps → Web (</>)**: copia `firebaseConfig` y pégalo en `config.js`.
6. **Authentication → Settings → Authorized domains**: agrega `TU-USUARIO.github.io`.
7. Sube todo a GitHub Pages. Entra a ⚙️ → *Modo Edición Admin* con tu correo y contraseña.

Qué ve cada quien:

- Público: noticias, fotos, tablas, directiva, agenda de cancha (sin teléfonos).
- Solo admin: tesorería (ganancias/pérdidas), teléfonos de reservas, solicitudes de reserva.
- Las personas envían una *solicitud* de reserva; al entrar tú, aparece como "Por cobrar".

Sin Firebase (`firebaseConfig: null`) la app funciona en modo prueba y guarda solo en tu navegador.

## Instalarla en el celular (PWA)

- Android (Chrome): menú ⋮ → *Instalar app* / *Agregar a pantalla de inicio*.
- iPhone (Safari): botón Compartir → *Agregar a pantalla de inicio*.
- Cambia los íconos de la carpeta `icons/` por el escudo del club (192, 512, maskable 512 y 180 px).
