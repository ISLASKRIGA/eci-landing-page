# Cómo obtener tu Link de Agenda de Google Calendar (Citas)

Para que el sistema de agendamiento funcione en tu página web y se sincronice automáticamente con tu calendario y el del cliente, sigue estos pasos:

1.  **Ve a Google Calendar** en tu computadora: [calendar.google.com](https://calendar.google.com)
2.  Arriba a la izquierda, da clic en el botón de **"Crear"** (el botón de colores `+`).
3.  Selecciona **"Calendario de citas"** (Appointment schedule).
    *   *Nota: Si no ves esta opción, asegúrate de estar usando una cuenta de Google Workspace (profesional) o una cuenta personal que tenga activada la función.*
4.  **Configura tu disponibilidad:**
    *   Elige los días y horas que quieres trabajar.
    *   Ponle título (ej: "Auditoría de Escala ECI").
    *   En "Ubicación", selecciona **"Google Meet"** (esto generará el link de la videollamada automáticamente).
5.  Da clic en **Guardar**.
6.  Una vez creado, verás el bloque de citas en tu calendario. **Dale un clic.**
7.  Se abrirá una ventanita. Busca el botón que dice **"Compartir"** (Share).
8.  Copia el **"Vínculo"** (Link) que te dan.
    *   Se verá algo como: `https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0...`

### Una vez que tengas el link:

1.  Abre el archivo `index.html` en este editor.
2.  Busca la línea **228** (aproximadamente).
3.  Verás algo así:
    ```html
    <iframe src="https://calendar.google.com/calendar/appointments/schedules/..." ...></iframe>
    ```
4.  Borra el link de ejemplo y **pega tu link nuevo** entre las comillas del `src=""`.

¡Listo! Ahora tu página agendará reuniones reales directamente en tu Google Calendar.
