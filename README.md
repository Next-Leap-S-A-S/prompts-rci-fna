# Prompts RCI — Auditoría Interna FNA

Herramienta de apoyo para la capacitación en escritura de prompts bajo la
metodología **Rol · Contexto · Instrucción**, adaptada al trabajo del equipo
de Auditoría Interna del Fondo Nacional del Ahorro (FNA).

## Qué contiene

- **Biblioteca** — 36 prompts listos para usar, 9 por cada uno de los 4
  frentes de Auditoría Interna: **Financiera y contable**, **Cartera y
  crédito de vivienda**, **TI y ciberseguridad** y **Cumplimiento y control
  interno**. Los campos entre corchetes son editables en la propia página;
  al copiar se copia el texto ya editado. Cada prompt trae el "antes" (la
  versión vaga), por qué falla y un tip.
- **Laboratorio** — constructor con medidor de calidad en vivo sobre 8
  criterios, más un detector de datos personales y de identificadores
  sensibles (cédulas, NIT, números de crédito, radicados) antes de copiar.
- **Ejercicio** — clasificación de fragmentos en Rol / Contexto / Instrucción,
  con tres rondas y temporizador para facilitación en sala.

## Cómo está construido

Un único archivo `index.html` **autocontenido**: tipografías (Inter, IBM Plex
Mono) y logo van incrustados en base64. No hace ninguna petición externa, así
que funciona sin conexión. No incluye foto de portada: el hero usa un fondo
degradado sobrio, sin imagen.

El archivo es **ASCII puro**: las tildes van como entidades HTML y como
escapes `\uXXXX` en el JavaScript, de modo que se ve correctamente sin
importar la codificación con la que el navegador lo sirva.

### Editar el contenido

El `index.html` se genera desde `src/`:

```
src/
  template.html            marcado, estilos y logica (UTF-8, legible)
  prompts-financiera.js    9 prompts del area financiera y contable
  prompts-cartera.js       9 prompts de cartera y credito de vivienda
  prompts-ti.js            9 prompts de TI y ciberseguridad
  prompts-cumplimiento.js  9 prompts de cumplimiento y control interno
  rondas.js                rondas del ejercicio
  assets/                  tipografias .woff2 y logo
  build.py                 ensambla y convierte a ASCII
```

Edita los `.js` o la plantilla con tildes normales y corre:

```
python3 src/build.py
```

Cada prompt es un objeto `{a, t, r, c, i, mal, por, tip}`: área, título, rol,
contexto, instrucción, prompt "antes", por qué falla y tip. Los marcadores
editables se escriben entre corchetes: `[fecha]`.

## Manejo de información

Los prompts están diseñados para trabajar con información anonimizada. Antes
de pegar contenido en una herramienta de IA hay que reemplazar nombres,
cédulas, números de crédito y radicados de auditoría por marcadores
genéricos; no pegar información sujeta a reserva, y usar únicamente las
herramientas de IA aprobadas por la entidad. La salida del modelo es un
borrador: el juicio profesional y la conclusión de auditoría siguen siendo
del auditor responsable.

---

Next Leap S.A.S. · FNA — Auditoría Interna
