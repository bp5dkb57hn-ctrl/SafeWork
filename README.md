# SafeWork AI

SafeWork AI es una aplicacion web academica para apoyar la gestion de seguridad en obras de construccion. El sistema ayuda a un trabajador o supervisor a identificar riesgos laborales, consultar el clima en tiempo real, obtener una lista de EPP obligatorio/recomendado y revisar instrucciones de uso para cada implemento.

## Objetivo

Reducir la incertidumbre sobre que equipos de proteccion personal se deben usar segun la obra, area, puesto laboral y condiciones climaticas. La aplicacion funciona como un asistente inteligente preventivo para decisiones rapidas antes de iniciar una tarea.

## Funcionalidades principales

- Registro y seleccion de varias obras.
- Seleccion de area de trabajo y puesto laboral.
- Ubicacion por geolocalizacion o ingreso manual de ciudad/pais.
- Clima en tiempo real mediante Open-Meteo:
  - temperatura,
  - humedad,
  - velocidad del viento,
  - indice UV,
  - probabilidad de lluvia,
  - alertas preventivas generadas por umbrales.
- Calculo automatico de:
  - EPP obligatorio,
  - EPP recomendado,
  - riesgo laboral,
  - riesgo climatico,
  - indice general de seguridad.
- Semaforo de riesgo:
  - verde: bajo,
  - amarillo: medio,
  - rojo: alto.
- Modulo de recomendaciones tipo IA con explicacion de riesgo, posible consecuencia, prevencion y EPP.
- Biblioteca de EPP con funcion, riesgos que previene, pasos de uso y fuentes confiables.
- Historial inteligente persistente para reutilizar configuraciones anteriores.
- Perfil del trabajador con puestos, obras frecuentes, certificaciones y equipos comunes.
- Modo claro/oscuro y diseno responsive.

## Arquitectura

La aplicacion esta construida con HTML, CSS y JavaScript puro para facilitar su ejecucion en cualquier navegador moderno.

```text
.
├── index.html   # Estructura de la aplicacion
├── styles.css   # Diseno visual responsive y modo oscuro
├── app.js       # Logica de clima, riesgo, EPP, historial y perfil
└── README.md    # Documentacion academica
```

## Base de datos

Para una entrega academica liviana, la persistencia se implementa con `localStorage` del navegador. Se guardan:

- obras registradas,
- perfil del trabajador,
- historial de consultas,
- configuracion de tema visual.

Esto permite cerrar y volver a abrir la aplicacion sin perder la informacion en el mismo navegador.

## Integracion meteorologica

Se usa la API publica de Open-Meteo, que no requiere clave:

- geocodificacion: `https://geocoding-api.open-meteo.com/v1/search`
- pronostico: `https://api.open-meteo.com/v1/forecast`

Si la API no responde, la aplicacion activa un escenario conservador para no dejar al usuario sin recomendacion.

## Sistema de riesgo

El riesgo laboral se calcula segun la combinacion de area y puesto. El riesgo climatico se calcula por umbrales de temperatura, UV, lluvia, viento y humedad. El riesgo general toma el nivel mas alto entre ambos y ajusta el indice de seguridad segun la cantidad de controles requeridos.

Ejemplos:

- Soldadura y trabajos electricos elevan el riesgo por energia, chispas y lesiones oculares.
- Techado y estructuras elevan el riesgo por trabajo en altura.
- Viento fuerte obliga a reforzar proteccion contra caidas.
- UV o temperatura alta recomienda proteccion solar, hidratacion y pausas.
- Lluvia alta recomienda ropa impermeable y revision de superficies resbalosas.

## Biblioteca de EPP

Incluye:

- casco,
- arnes,
- gafas,
- protectores auditivos,
- guantes,
- mascarilla/respirador,
- botas,
- chaleco reflectante,
- careta facial,
- EPP dielectrico,
- proteccion solar,
- ropa impermeable.

Cada ficha contiene instrucciones paso a paso y enlaces a fuentes confiables como OSHA, NIOSH, CCOHS y OMS. Tambien incluye accesos a busquedas educativas de imagenes, diagramas, manuales y videos.

## Como ejecutar

Opcion recomendada:

```bash
python3 -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

Tambien se puede abrir `index.html` directamente, aunque algunas funciones del navegador, como geolocalizacion, suelen funcionar mejor desde `localhost`.

## Publicarla en internet

Esta app ya esta lista para publicarse como una pagina estatica y PWA.

Pasos recomendados para GitHub Pages:

1. Sube este proyecto a un repositorio de GitHub.
2. En la pestaña Settings > Pages, selecciona Source = GitHub Actions.
3. Confirma que el archivo .github/workflows/deploy.yml exista.
4. Haz push a la rama main.
5. GitHub Pages generara una URL publica como:
   https://<usuario>.github.io/<nombre-del-repo>/

Una vez publicada:
- cualquiera puede abrirla desde la URL publica;
- si el navegador lo soporta, aparecera la opcion de instalarla como app;
- la app funciona con HTTPS, que es lo que hace que la instalacion PWA sea valida.

## Uso para exposicion universitaria

1. Presionar "Cargar demo" para llenar un caso de prueba.
2. Revisar el clima obtenido para Lima, Peru.
3. Explicar el semaforo y el indice general.
4. Mostrar la lista de EPP obligatorio y recomendado.
5. Abrir una ficha de EPP para ver capacitacion interactiva.
6. Mostrar el historial y reutilizar una consulta.
7. Editar el perfil del trabajador.

## Limitaciones y mejoras futuras

- La base de datos actual es local al navegador; en produccion podria migrarse a Firebase, Supabase, PostgreSQL o IndexedDB avanzado.
- Las recomendaciones son generadas por reglas expertas locales; una version futura podria integrarse con un modelo de IA conectado a politicas internas de seguridad.
- La busqueda de recursos educativos se abre en fuentes externas; una version empresarial podria usar una API de busqueda aprobada por la organizacion.
- Las alertas meteorologicas se infieren por umbrales preventivos; se podria integrar un proveedor oficial de alertas por pais.

## Creditos de fuentes consultables

- OSHA: https://www.osha.gov/
- NIOSH/CDC: https://www.cdc.gov/niosh/
- CCOHS: https://www.ccohs.ca/
- OMS: https://www.who.int/
- Open-Meteo: https://open-meteo.com/
