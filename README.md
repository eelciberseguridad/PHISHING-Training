# LABORATORIO DE PHISHING — EEL CIBERSEGURIDAD

Un laboratorio interactivo para capacitar personal frente a situaciones de phishing, suplantación e ingeniería social.

La idea no es preguntarle al participante si conoce una definición. La idea es ponerlo frente a una situación parecida a la que podría recibir en su trabajo o en su vida cotidiana y obligarlo a decidir.

Un correo. Una llamada. Un mensaje. Un código. Un enlace. Un archivo. Un pedido urgente.

El participante debe interpretar lo que ve y elegir cómo actuar.

## Cómo funciona

El participante ingresa con su **nombre y apellido** y comienza la evaluación.

No necesita contraseña.

Las situaciones y las respuestas se presentan de forma aleatoria. Al finalizar obtiene su porcentaje, la cantidad de respuestas correctas y una devolución. También puede revisar cada situación para entender qué decisión tomó y cuál era la respuesta recomendada.

El nombre sirve para asociar el resultado con la persona que realiza la evaluación. En una capacitación supervisada, el responsable debe verificar quién está usando el equipo. El nombre escrito por sí solo no constituye una autenticación técnica de identidad.

## Área de administración

El panel de administración está protegido por contraseña.

**Clave inicial:** `EELCIBERSEGURIDAD`

Desde allí se puede:

- Crear, editar y eliminar situaciones.
- Definir tres respuestas y señalar la correcta.
- Agregar imágenes propias a las preguntas.
- Configurar la cantidad de preguntas de cada evaluación.
- Definir el porcentaje de aprobación.
- Consultar los resultados guardados.
- Abrir nuevamente una evaluación y revisar cada respuesta.
- Exportar resultados detallados a CSV.
- Importar y exportar el banco de preguntas.

## Historial de evaluaciones

Las evaluaciones nuevas guardan localmente:

- participante;
- fecha y hora;
- porcentaje;
- cantidad de respuestas correctas;
- situación presentada;
- pregunta;
- respuesta elegida;
- respuesta correcta;
- explicación.

Esto permite que el administrador no vea solamente una nota final, sino también **en qué situaciones falló o acertó cada participante**.

Los datos quedan guardados en el navegador del equipo utilizado. Esta versión no usa servidor ni base de datos central, por lo que distintas computadoras mantienen historiales separados.

## Preguntas con imágenes

El editor permite adjuntar una imagen JPG, PNG o WEBP.

Esto permite crear ejercicios visuales utilizando, por ejemplo, capturas preparadas para una capacitación y luego preguntar qué señales debería analizar el participante.

Las imágenes deben ser propias, ficticias o utilizadas con autorización. Evitá incorporar credenciales, datos personales o información sensible real.

## Uso en Windows

1. Descargá el repositorio o el ZIP.
2. Descomprimilo por completo.
3. Abrí `INICIAR_LABORATORIO.bat`.
4. También podés abrir directamente `index.html`.

## Uso en Linux

1. Descargá y descomprimí el proyecto.
2. Abrí `index.html` en el navegador.
3. También podés ejecutar `INICIAR_LABORATORIO.sh`.

## Diseño de las situaciones

Las situaciones están redactadas como podrían aparecer en la vida real, sin palabras que adelanten que existe un ataque.

Por ejemplo, no se utiliza:

> “Un supuesto asesor bancario te llama…”

La situación se presenta directamente:

> “Te llama un asesor bancario…”

La misma regla se aplica a correos, mensajes, soporte técnico, entregas, redes sociales, pagos y solicitudes laborales.

Durante la evaluación tampoco se muestra la categoría técnica de la pregunta. El participante ve únicamente **“Situación”**. Así no recibe pistas como “Vishing”, “Banca”, “QR” o “Ingeniería social” antes de decidir.

Las respuestas incorrectas también están redactadas para resultar plausibles. El objetivo es evitar que una opción correcta pueda descubrirse simplemente descartando alternativas absurdas.

## Alcance

Este proyecto es una herramienta educativa. No recopila credenciales reales, no envía respuestas a Internet y no simula sitios destinados a capturar contraseñas.

La contraseña de administración protege el uso normal de la interfaz, pero al tratarse de una aplicación HTML completamente local no debe considerarse un mecanismo de seguridad fuerte frente a una persona con acceso al código fuente.

## Créditos

**EEL CIBERSEGURIDAD**  
eelciberseguridad@gmail.com
