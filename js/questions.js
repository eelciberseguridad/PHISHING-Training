window.DEFAULT_QUESTIONS = [
  {
    "id": "q001",
    "category": "Correo electrónico",
    "scenario": "Recibís un correo de Microsoft 365 indicando que tu contraseña vence hoy. Incluye un botón para conservar la contraseña actual.",
    "question": "¿Qué hacés?",
    "answers": [
      "Entrás a Microsoft 365 desde tu acceso habitual y verificás allí el estado de la cuenta.",
      "Usás el botón del correo y revisás la dirección de la página antes de completar los datos.",
      "Respondés el correo para confirmar si el aviso corresponde a tu cuenta."
    ],
    "correct": 0,
    "explanation": "Los atacantes pueden copiar logos y estilos; el dominio y el destino real del enlace son señales críticas.",
    "image": ""
  },
  {
    "id": "q002",
    "category": "Correo electrónico",
    "scenario": "Un proveedor con el que trabajás habitualmente te envía una factura en un archivo .zip y solicita que la revises durante el día.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el envío con el proveedor por el canal que usás normalmente antes de abrir el archivo.",
      "Abrís el archivo porque proviene de un proveedor conocido y después verificás el contenido.",
      "Guardás el archivo y lo abrís desde otra computadora para no afectar tu equipo de trabajo."
    ],
    "correct": 0,
    "explanation": "Una solicitud inesperada con archivo comprimido debe verificarse por un canal independiente.",
    "image": ""
  },
  {
    "id": "q003",
    "category": "Correo electrónico",
    "scenario": "Soporte TI te envía un correo indicando que necesita tu contraseña para sincronizar nuevamente la cuenta corporativa.",
    "question": "¿Qué hacés?",
    "answers": [
      "Consultás al soporte por el canal interno habitual y no enviás la contraseña por correo.",
      "Enviás la contraseña y la cambiás cuando termine la sincronización.",
      "Respondés con una contraseña temporal para que puedan completar el procedimiento."
    ],
    "correct": 0,
    "explanation": "Un soporte legítimo no debería solicitar tu contraseña por correo.",
    "image": ""
  },
  {
    "id": "q004",
    "category": "Correo electrónico",
    "scenario": "Recibís un correo informando que tu buzón llegó al límite de almacenamiento. Incluye un botón para ampliar la capacidad.",
    "question": "¿Qué hacés?",
    "answers": [
      "Accedés al correo desde el portal habitual de la organización y verificás allí el almacenamiento.",
      "Usás el botón del mensaje si el diseño coincide con el correo corporativo.",
      "Respondés al remitente para pedir que confirme cuánto espacio tenés disponible."
    ],
    "correct": 0,
    "explanation": "La identidad visual puede imitarse; el dominio del remitente debe verificarse.",
    "image": ""
  },
  {
    "id": "q005",
    "category": "Correo electrónico",
    "scenario": "Te llega una invitación para revisar un documento compartido mediante un enlace acortado.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás quién compartió el documento y accedés al servicio desde su dirección habitual.",
      "Abrís el enlace desde el teléfono porque allí tenés menos información corporativa.",
      "Abrís el enlace en una ventana privada y verificás el documento antes de iniciar sesión."
    ],
    "correct": 0,
    "explanation": "El modo incógnito o el dispositivo no vuelve confiable un enlace sospechoso.",
    "image": ""
  },
  {
    "id": "q006",
    "category": "Correo electrónico",
    "scenario": "El gerente te envía un correo pidiendo comprar tarjetas de regalo y mandarle los códigos antes de entrar a una reunión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el pedido con el gerente por otro canal corporativo que ya utilizás con él.",
      "Comprás las tarjetas y antes de enviar los códigos respondés el mismo correo para confirmar.",
      "Comprás una tarjeta de menor valor para comprobar primero que el pedido sea correcto."
    ],
    "correct": 0,
    "explanation": "Una solicitud financiera inusual debe verificarse por un canal independiente. El nombre, la firma o el tono del correo no prueban quién lo envió.",
    "image": ""
  },
  {
    "id": "q007",
    "category": "Correo electrónico",
    "scenario": "Recibís un correo indicando que tu cuenta será cerrada dentro de 15 minutos si no iniciás sesión desde el botón incluido.",
    "question": "¿Qué hacés?",
    "answers": [
      "Entrás al servicio desde tu acceso habitual y verificás si existe alguna notificación en la cuenta.",
      "Usás el botón porque el plazo es corto y después revisás la actividad de la cuenta.",
      "Respondés el mensaje solicitando una extensión del plazo antes de iniciar sesión."
    ],
    "correct": 0,
    "explanation": "La urgencia es una táctica común para impulsar decisiones apresuradas.",
    "image": ""
  },
  {
    "id": "q008",
    "category": "Correo electrónico",
    "scenario": "Un contacto con el que hablás seguido te envía por correo un enlace y un mensaje escrito de una manera distinta a la habitual.",
    "question": "¿Qué hacés?",
    "answers": [
      "Le consultás por otro canal si realmente te envió ese enlace antes de abrirlo.",
      "Abrís el enlace porque el mensaje llegó desde su dirección habitual.",
      "Abrís el enlace y, si pide datos, recién ahí confirmás con tu contacto."
    ],
    "correct": 0,
    "explanation": "Las cuentas legítimas también pueden ser comprometidas y usadas para distribuir phishing.",
    "image": ""
  },
  {
    "id": "q009",
    "category": "Correo electrónico",
    "scenario": "Recibís un correo de Recursos Humanos anunciando una actualización salarial. Adjunta el archivo “EscalaSalarial.html”.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás el anuncio por el canal interno habitual antes de abrir el archivo.",
      "Abrís el archivo y evitás completar datos si aparece algún formulario.",
      "Descargás el archivo y lo abrís sin conexión a Internet."
    ],
    "correct": 0,
    "explanation": "Los archivos HTML pueden redirigir o mostrar formularios falsos; la verificación previa es clave.",
    "image": ""
  },
  {
    "id": "q010",
    "category": "Correo electrónico",
    "scenario": "Un correo contiene un botón para ingresar a un servicio que utilizás habitualmente.",
    "question": "¿Qué hacés antes de ingresar tus datos?",
    "answers": [
      "Revisás la dirección real a la que dirige el botón y la comparás con el dominio habitual.",
      "Comprobás que el nombre visible del remitente coincida con el servicio.",
      "Abrís la página y verificás que tenga el mismo diseño que usás normalmente."
    ],
    "correct": 0,
    "explanation": "El texto visible puede falsearse; el destino real del enlace aporta información decisiva.",
    "image": ""
  },
  {
    "id": "q011",
    "category": "Banca y pagos",
    "scenario": "Recibís un SMS del banco indicando que una transferencia quedó retenida y que podés cancelarla desde un enlace.",
    "question": "¿Qué hacés?",
    "answers": [
      "Abrís la app bancaria desde tu teléfono y verificás allí los movimientos.",
      "Abrís el enlace del SMS y, si reconoce tus datos, continuás con la cancelación.",
      "Respondés el mensaje para pedir el número de operación antes de realizar cualquier acción."
    ],
    "correct": 0,
    "explanation": "Los mensajes pueden falsificar nombres; conviene iniciar la consulta desde la app o sitio habitual.",
    "image": ""
  },
  {
    "id": "q012",
    "category": "Banca y pagos",
    "scenario": "Te llama un asesor bancario por una transferencia y te pide el código que acaba de llegarte por SMS para bloquear la operación.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cortás la llamada y contactás al banco desde la app, el sitio o el número que usás habitualmente.",
      "Le das el código si primero te confirma tus datos personales y los últimos movimientos.",
      "Le pedís que espere en línea mientras revisás en la app si la transferencia existe y luego continuás."
    ],
    "correct": 0,
    "explanation": "Los códigos de verificación no deben compartirse; el identificador de llamada también puede falsificarse.",
    "image": ""
  },
  {
    "id": "q013",
    "category": "Banca y pagos",
    "scenario": "Recibís por WhatsApp un mensaje del banco con un archivo APK para instalar una actualización de seguridad.",
    "question": "¿Qué hacés?",
    "answers": [
      "Buscás la app del banco en la tienda oficial o consultás desde los canales oficiales antes de instalar nada.",
      "Instalás el APK si el mensaje incluye el logo, tu nombre y datos de tu cuenta.",
      "Descargás el archivo y comprobás qué permisos pide antes de decidir si instalarlo."
    ],
    "correct": 0,
    "explanation": "Instalar software por enlaces o archivos recibidos es una señal de alto riesgo.",
    "image": ""
  },
  {
    "id": "q014",
    "category": "Banca y pagos",
    "scenario": "Te llama un asesor bancario para ayudarte a recuperar el acceso a tu cuenta y te pide activar la función de compartir pantalla.",
    "question": "¿Qué hacés?",
    "answers": [
      "Finalizás la llamada y retomás la gestión desde un canal oficial del banco.",
      "Compartís la pantalla pero evitás mostrar contraseñas o códigos.",
      "Continuás si el asesor puede indicarte información correcta sobre tu cuenta."
    ],
    "correct": 0,
    "explanation": "Compartir pantalla puede exponer información sensible y permitir que otra persona guíe operaciones. La identidad debe verificarse por un canal oficial.",
    "image": ""
  },
  {
    "id": "q015",
    "category": "Banca y pagos",
    "scenario": "Recibís un aviso de devolución de impuestos. Para acreditar el dinero te solicita número de tarjeta, vencimiento y código de seguridad.",
    "question": "¿Qué hacés?",
    "answers": [
      "Ingresás por tu cuenta al portal oficial correspondiente y verificás allí si existe la devolución.",
      "Completás los datos si la página muestra HTTPS y un certificado válido.",
      "Ingresás los datos de una tarjeta con poco saldo para comprobar el trámite."
    ],
    "correct": 0,
    "explanation": "HTTPS no prueba legitimidad; un sitio fraudulento también puede usar cifrado.",
    "image": ""
  },
  {
    "id": "q016",
    "category": "Banca y pagos",
    "scenario": "Vendés un producto y el comprador te envía por chat una imagen del comprobante de transferencia. Te pide retirarlo en ese momento.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás en tu propia cuenta que el dinero esté acreditado antes de entregar el producto.",
      "Aceptás el comprobante si incluye número de operación, fecha y tus datos.",
      "Le pedís una segunda captura desde la app del banco antes de entregar el producto."
    ],
    "correct": 0,
    "explanation": "Las capturas pueden alterarse; la acreditación debe comprobarse en el canal bancario propio.",
    "image": ""
  },
  {
    "id": "q017",
    "category": "Banca y pagos",
    "scenario": "Recibís un correo de cobranzas con el detalle de una deuda y un QR para pagarla.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás la deuda y los datos de pago desde los canales oficiales de la empresa antes de pagar.",
      "Escaneás el QR para revisar quién figura como destinatario y decidís desde allí.",
      "Pagás un importe mínimo primero para comprobar que el destinatario sea correcto."
    ],
    "correct": 0,
    "explanation": "Los QR pueden ocultar destinos; una deuda inesperada requiere verificación independiente.",
    "image": ""
  },
  {
    "id": "q018",
    "category": "Banca y pagos",
    "scenario": "Te llama un asesor del banco y te indica que, para proteger tus fondos, tenés que transferirlos temporalmente a una cuenta de resguardo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cortás la comunicación y consultás directamente al banco desde sus canales habituales.",
      "Transferís solo una parte del dinero mientras verificás el procedimiento.",
      "Le pedís al asesor el CBU y su número de legajo antes de realizar la transferencia."
    ],
    "correct": 0,
    "explanation": "La transferencia a una supuesta cuenta segura es una táctica recurrente de ingeniería social.",
    "image": ""
  },
  {
    "id": "q019",
    "category": "Banca y pagos",
    "scenario": "Recibís una alerta de compra con un número telefónico para comunicarte si no reconocés la operación.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás la operación desde la app o web del banco y usás los canales de contacto que ya conocés.",
      "Llamás al número incluido en la alerta y pedís que bloqueen la tarjeta.",
      "Respondés el mensaje con los últimos cuatro números de la tarjeta para que identifiquen la operación."
    ],
    "correct": 0,
    "explanation": "Los datos de contacto incluidos en mensajes sospechosos pueden llevar al atacante.",
    "image": ""
  },
  {
    "id": "q020",
    "category": "Banca y pagos",
    "scenario": "Entrás a una página de pago que tiene el mismo diseño que la del proveedor que utilizás habitualmente.",
    "question": "¿Qué revisás antes de pagar?",
    "answers": [
      "La dirección completa del sitio y que corresponda exactamente al dominio habitual.",
      "Que el sitio tenga candado y certificado HTTPS.",
      "Que aparezcan el logo, los colores y los datos comerciales del proveedor."
    ],
    "correct": 0,
    "explanation": "Los dominios visualmente similares son una técnica frecuente para suplantar servicios.",
    "image": ""
  },
  {
    "id": "q021",
    "category": "MFA y cuentas",
    "scenario": "Te llegan varias solicitudes para aprobar un inicio de sesión con MFA y unos minutos después recibís una llamada del área de soporte.",
    "question": "¿Qué hacés?",
    "answers": [
      "Rechazás las solicitudes y contactás al soporte por el canal interno que usás normalmente.",
      "Atendés la llamada y aprobás una solicitud si pueden confirmar tus datos.",
      "Esperás a que llegue una nueva solicitud y aprobás solo la que coincida con la hora de la llamada."
    ],
    "correct": 0,
    "explanation": "Las solicitudes MFA inesperadas pueden indicar intento de acceso o fatiga MFA.",
    "image": ""
  },
  {
    "id": "q022",
    "category": "MFA y cuentas",
    "scenario": "Al iniciar sesión en un servicio, la página solicita usuario, contraseña y uno de tus códigos de recuperación.",
    "question": "¿Qué hacés?",
    "answers": [
      "Salís y volvés a entrar desde la dirección oficial del servicio para comprobar el procedimiento.",
      "Completás los tres datos si la página muestra el diseño habitual.",
      "Ingresás el código de recuperación pero cambiás la contraseña inmediatamente después."
    ],
    "correct": 0,
    "explanation": "Los códigos de recuperación son secretos de emergencia y no deberían solicitarse en un flujo normal.",
    "image": ""
  },
  {
    "id": "q023",
    "category": "MFA y cuentas",
    "scenario": "Un compañero del área de sistemas te escribe por chat y te pide el código de autenticación que acaba de llegarte porque están haciendo una prueba.",
    "question": "¿Qué hacés?",
    "answers": [
      "No compartís el código y confirmás la prueba por el canal oficial del área de sistemas.",
      "Se lo pasás si te confirma el número de ticket o la tarea en la que está trabajando.",
      "Le pedís que te llame y, si reconocés su voz, le dictás el código."
    ],
    "correct": 0,
    "explanation": "Los códigos MFA son personales y temporales; no deben compartirse.",
    "image": ""
  },
  {
    "id": "q024",
    "category": "MFA y cuentas",
    "scenario": "Entrás a una página para iniciar sesión y tu gestor de contraseñas no completa automáticamente las credenciales que normalmente usa en ese servicio.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás cuidadosamente el dominio antes de escribir la contraseña manualmente.",
      "Escribís la contraseña manualmente porque el autocompletado puede fallar.",
      "Actualizás la contraseña guardada para que coincida con esa página."
    ],
    "correct": 0,
    "explanation": "La falta de autocompletado en un dominio similar puede ser una señal útil de suplantación.",
    "image": ""
  },
  {
    "id": "q025",
    "category": "MFA y cuentas",
    "scenario": "Recibís un correo de restablecimiento de contraseña de un servicio que utilizás, aunque vos no pediste cambiarla.",
    "question": "¿Qué hacés?",
    "answers": [
      "Entrás al servicio por tu acceso habitual y revisás la seguridad de la cuenta.",
      "Abrís el enlace del correo para comprobar quién inició el restablecimiento.",
      "Ignorás el correo porque mientras no confirmes el cambio no puede pasar nada."
    ],
    "correct": 0,
    "explanation": "Puede indicar intentos de acceso; conviene revisar actividad y seguridad desde el canal habitual.",
    "image": ""
  },
  {
    "id": "q026",
    "category": "MFA y cuentas",
    "scenario": "Una página de un servicio que usás te indica que desactives temporalmente el segundo factor para resolver un problema de compatibilidad.",
    "question": "¿Qué hacés?",
    "answers": [
      "Consultás la documentación o el soporte oficial antes de modificar la seguridad de la cuenta.",
      "Desactivás el segundo factor, resolvés el problema y lo activás nuevamente.",
      "Desactivás el segundo factor solo desde el dispositivo que usás habitualmente."
    ],
    "correct": 0,
    "explanation": "Desactivar MFA disminuye la protección y no debería exigirse para una operación común.",
    "image": ""
  },
  {
    "id": "q027",
    "category": "MFA y cuentas",
    "scenario": "Recibís un correo con un QR para validar nuevamente tu cuenta. Al escanearlo aparece una pantalla de inicio de sesión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás esa pantalla y accedés al servicio desde la app o dirección que usás normalmente.",
      "Ingresás las credenciales si la página conserva el mismo diseño del servicio.",
      "Escaneás el QR desde otro dispositivo para separar la validación de tu teléfono principal."
    ],
    "correct": 0,
    "explanation": "Los QR pueden dirigir a sitios fraudulentos igual que un enlace.",
    "image": ""
  },
  {
    "id": "q028",
    "category": "MFA y cuentas",
    "scenario": "Recibís una notificación indicando que se agregó un nuevo método de recuperación a tu cuenta.",
    "question": "¿Qué hacés?",
    "answers": [
      "Entrás a la configuración de seguridad desde el servicio oficial y revisás los métodos registrados.",
      "Esperás a recibir otra notificación antes de modificar la cuenta.",
      "Respondés la notificación para preguntar quién agregó el nuevo método."
    ],
    "correct": 0,
    "explanation": "Cambios no reconocidos en métodos de recuperación pueden indicar compromiso de cuenta.",
    "image": ""
  },
  {
    "id": "q029",
    "category": "MFA y cuentas",
    "scenario": "Durante un inicio de sesión te solicitan uno de los códigos de respaldo de la cuenta, aunque tu segundo factor funciona normalmente.",
    "question": "¿Qué hacés?",
    "answers": [
      "Volvés a entrar al servicio desde su dirección habitual y comprobás si realmente necesita ese código.",
      "Usás un código de respaldo porque son precisamente para completar inicios de sesión.",
      "Generás un código nuevo y utilizás el anterior en esa pantalla."
    ],
    "correct": 0,
    "explanation": "Los códigos de respaldo deben protegerse como credenciales y usarse solo cuando corresponde.",
    "image": ""
  },
  {
    "id": "q030",
    "category": "MFA y cuentas",
    "scenario": "Recibís un aviso de inicio de sesión en tu cuenta desde una ubicación que no reconocés.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás la actividad desde la aplicación o sitio oficial y asegurás la cuenta si corresponde.",
      "Usás el botón del aviso para bloquear la ubicación y después revisás la cuenta.",
      "Esperás a ver si aparece un segundo acceso antes de cambiar algo."
    ],
    "correct": 0,
    "explanation": "Las alertas deben verificarse desde el canal oficial, no desde enlaces no confirmados.",
    "image": ""
  },
  {
    "id": "q031",
    "category": "Mensajería",
    "scenario": "Un contacto de WhatsApp te escribe desde un número nuevo. Te dice que perdió el teléfono y necesita que le transfieras dinero.",
    "question": "¿Qué hacés?",
    "answers": [
      "Lo contactás por otra vía que ya tenías antes de hacer la transferencia.",
      "Le transferís un importe pequeño y esperás que confirme que lo recibió.",
      "Le hacés dos o tres preguntas personales y, si responde bien, realizás la transferencia."
    ],
    "correct": 0,
    "explanation": "La verificación fuera del mismo canal reduce el riesgo de suplantación.",
    "image": ""
  },
  {
    "id": "q032",
    "category": "Mensajería",
    "scenario": "Recibís un código de registro de WhatsApp por SMS. Poco después, un contacto te escribe diciendo que ese código le llegó a tu teléfono por error.",
    "question": "¿Qué hacés?",
    "answers": [
      "No compartís el código y revisás la seguridad de tu cuenta.",
      "Se lo enviás si el contacto confirma el número desde el que intentó registrarse.",
      "Le mandás una captura del SMS ocultando parte del código para que compare."
    ],
    "correct": 0,
    "explanation": "El código puede permitir registrar tu cuenta en otro dispositivo.",
    "image": ""
  },
  {
    "id": "q033",
    "category": "Mensajería",
    "scenario": "Soporte de WhatsApp te escribe por mensajería para revisar un inconveniente y te solicita el PIN de verificación en dos pasos.",
    "question": "¿Qué hacés?",
    "answers": [
      "No compartís el PIN y gestionás el problema desde las opciones de ayuda de WhatsApp.",
      "Compartís el PIN si el perfil tiene nombre, logo y datos de contacto de WhatsApp.",
      "Pedís que te envíen primero un correo y luego compartís el PIN por ese canal."
    ],
    "correct": 0,
    "explanation": "El PIN de verificación en dos pasos protege la cuenta y no debe compartirse por mensajes, llamadas ni formularios.",
    "image": ""
  },
  {
    "id": "q034",
    "category": "Mensajería",
    "scenario": "En un grupo de trabajo comparten una encuesta con premio. Para participar tenés que iniciar sesión con tu correo corporativo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás la encuesta por los canales internos antes de usar la cuenta corporativa.",
      "Ingresás porque el enlace fue compartido dentro de un grupo de trabajo.",
      "Participás usando el correo corporativo pero una contraseña distinta a la habitual."
    ],
    "correct": 0,
    "explanation": "Los incentivos pueden usarse para llevar a formularios de captura de credenciales.",
    "image": ""
  },
  {
    "id": "q035",
    "category": "Mensajería",
    "scenario": "Un director de la empresa te escribe por mensaje directo. Te pide que no comentes el pedido con nadie y que compres algo antes de una reunión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el pedido por otro canal corporativo antes de realizar la compra.",
      "Cumplís el pedido y luego le enviás el comprobante para que lo valide.",
      "Le pedís por el mismo chat que confirme el monto y, si responde, hacés la compra."
    ],
    "correct": 0,
    "explanation": "Pedir secreto puede ser parte de una maniobra para impedir que consultes con otros.",
    "image": ""
  },
  {
    "id": "q036",
    "category": "Mensajería",
    "scenario": "Un conocido te envía por chat un archivo llamado “foto.exe” y te dice que es una imagen que quiere mostrarte.",
    "question": "¿Qué hacés?",
    "answers": [
      "No lo abrís y le consultás por otro medio qué archivo quiso enviarte.",
      "Lo descargás y lo abrís si el sistema muestra un ícono de imagen.",
      "Lo guardás y lo abrís con el visor de fotos en lugar de hacer doble clic."
    ],
    "correct": 0,
    "explanation": "La extensión real del archivo es más relevante que el nombre descriptivo.",
    "image": ""
  },
  {
    "id": "q037",
    "category": "Mensajería",
    "scenario": "Recibís un mensaje que ofrece entradas gratuitas si lo reenviás a diez contactos y completás un formulario.",
    "question": "¿Qué hacés?",
    "answers": [
      "Buscás la promoción en los canales oficiales antes de completar o reenviar nada.",
      "Completás el formulario pero no ingresás datos financieros.",
      "Reenviás primero el mensaje y después verificás la promoción."
    ],
    "correct": 0,
    "explanation": "Los incentivos virales pueden combinarse con recolección fraudulenta de información.",
    "image": ""
  },
  {
    "id": "q038",
    "category": "Mensajería",
    "scenario": "Un compañero te manda por su chat personal el enlace a una nueva intranet que empezaría a usarse desde hoy.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el cambio por los canales internos y accedés desde el enlace publicado oficialmente.",
      "Entrás al enlace porque proviene de un compañero de la organización.",
      "Abrís la página y comprobás que muestre el logo y el directorio interno antes de iniciar sesión."
    ],
    "correct": 0,
    "explanation": "La cuenta del compañero puede estar comprometida o el mensaje puede ser falso.",
    "image": ""
  },
  {
    "id": "q039",
    "category": "Mensajería",
    "scenario": "Recibís una llamada de WhatsApp desde un perfil con foto corporativa. Te piden activar compartir pantalla para resolver un problema de acceso.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cortás la llamada y contactás al área correspondiente mediante el canal corporativo habitual.",
      "Compartís la pantalla sin abrir aplicaciones con información sensible.",
      "Aceptás la asistencia si quien llama puede describir correctamente el problema de tu cuenta."
    ],
    "correct": 0,
    "explanation": "La foto de perfil no prueba identidad; compartir pantalla puede exponer datos.",
    "image": ""
  },
  {
    "id": "q040",
    "category": "Mensajería",
    "scenario": "Recibís una promoción que te pide abrir WhatsApp, entrar en “Dispositivos vinculados” y escanear un QR para activarla.",
    "question": "¿Qué hacés?",
    "answers": [
      "No escaneás el QR y verificás la promoción desde los canales oficiales.",
      "Escaneás el QR y revisás después qué dispositivo quedó asociado.",
      "Escaneás el QR si la promoción proviene de un contacto conocido."
    ],
    "correct": 0,
    "explanation": "Los QR de vinculación pueden autorizar acceso a sesiones si se aceptan sin verificar.",
    "image": ""
  },
  {
    "id": "q041",
    "category": "Entorno laboral",
    "scenario": "Recibís un correo de Recursos Humanos con una planilla para actualizar DNI, domicilio, cuenta bancaria y contraseña del correo corporativo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Consultás con Recursos Humanos por el canal interno y no entregás la contraseña.",
      "Completás los datos personales y dejás la contraseña para el final.",
      "Completás todo si la planilla tiene membrete y el correo salió de una dirección corporativa."
    ],
    "correct": 0,
    "explanation": "Las contraseñas no deben solicitarse en planillas administrativas.",
    "image": ""
  },
  {
    "id": "q042",
    "category": "Entorno laboral",
    "scenario": "Recibís una propuesta laboral y, antes de coordinar la entrevista, te piden pagar una tasa administrativa para continuar con el proceso.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás la empresa y el proceso de selección antes de realizar cualquier pago.",
      "Pagás la tasa si te envían una factura o comprobante a nombre de la empresa.",
      "Pagás un importe mínimo y esperás la confirmación de la entrevista."
    ],
    "correct": 0,
    "explanation": "Las ofertas fraudulentas suelen introducir cobros o compras previas injustificadas.",
    "image": ""
  },
  {
    "id": "q043",
    "category": "Entorno laboral",
    "scenario": "Te invitan a una videollamada de trabajo. Antes de ingresar, el enlace indica que tenés que instalar un complemento.",
    "question": "¿Qué hacés?",
    "answers": [
      "Abrís la plataforma desde su aplicación o sitio oficial y verificás si realmente necesita el complemento.",
      "Instalás el complemento si la invitación llegó desde un contacto de trabajo.",
      "Lo instalás y luego lo desinstalás cuando termine la reunión."
    ],
    "correct": 0,
    "explanation": "La instalación inesperada de software es una señal de riesgo.",
    "image": ""
  },
  {
    "id": "q044",
    "category": "Entorno laboral",
    "scenario": "Recibís un correo sobre un bono laboral. El documento adjunto indica que tenés que habilitar macros para ver el monto.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el documento con el área que lo emitió antes de habilitar contenido.",
      "Habilitás las macros porque el archivo necesita esa función para mostrar la información.",
      "Abrís el archivo desde otra computadora y habilitás las macros allí."
    ],
    "correct": 0,
    "explanation": "Las macros pueden ejecutar contenido activo; la fuente y necesidad deben verificarse.",
    "image": ""
  },
  {
    "id": "q045",
    "category": "Entorno laboral",
    "scenario": "Un proveedor con el que la empresa trabaja habitualmente te informa por correo que cambió el CBU para los próximos pagos.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el cambio usando un contacto del proveedor que ya tenías registrado.",
      "Actualizás el CBU si el correo incluye membrete, razón social y firma.",
      "Hacés una transferencia pequeña al nuevo CBU para verificarlo antes del pago completo."
    ],
    "correct": 0,
    "explanation": "Los cambios de cuentas bancarias son objetivo frecuente de fraude de correo empresarial.",
    "image": ""
  },
  {
    "id": "q046",
    "category": "Entorno laboral",
    "scenario": "Un gerente te envía una orden de transferencia fuera del procedimiento habitual y aclara que no puede atender llamadas porque está en una reunión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Aplicás el procedimiento de verificación previsto antes de transferir.",
      "Realizás la transferencia porque la instrucción proviene del gerente y documentás el pedido.",
      "Respondés el mismo mensaje para que confirme el importe y luego ejecutás la transferencia."
    ],
    "correct": 0,
    "explanation": "Los procedimientos existen para resistir presión y suplantaciones.",
    "image": ""
  },
  {
    "id": "q047",
    "category": "Entorno laboral",
    "scenario": "Un técnico de soporte te llama y te pide instalar una herramienta de acceso remoto para solucionar un problema del equipo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás la asistencia por el canal oficial de soporte antes de instalar o permitir acceso.",
      "Instalás la herramienta si el técnico conoce tu nombre, sector y número de equipo.",
      "Le permitís acceso por unos minutos y supervisás en pantalla todo lo que hace."
    ],
    "correct": 0,
    "explanation": "Conocer datos básicos no confirma identidad. El acceso remoto debe realizarse únicamente mediante procedimientos y herramientas autorizadas.",
    "image": ""
  },
  {
    "id": "q048",
    "category": "Entorno laboral",
    "scenario": "Recibís desde una cuenta externa un archivo llamado “Nomina_Confidencial.pdf.exe”.",
    "question": "¿Qué hacés?",
    "answers": [
      "No lo abrís y verificás con el remitente qué archivo debía enviarte.",
      "Lo abrís con un lector de PDF para impedir que se ejecute como programa.",
      "Lo renombrás quitando “.exe” y después lo abrís como PDF."
    ],
    "correct": 0,
    "explanation": "Windows puede ocultar extensiones; revisar la extensión real ayuda a detectar engaños.",
    "image": ""
  },
  {
    "id": "q049",
    "category": "Entorno laboral",
    "scenario": "Recibís un correo indicando que, por problemas del servidor, reenvíes una conversación confidencial a una cuenta personal.",
    "question": "¿Qué hacés?",
    "answers": [
      "Consultás el procedimiento con TI o con el responsable antes de reenviar información.",
      "Reenviás el hilo si la dirección personal pertenece a la misma persona que lo solicita.",
      "Copiás únicamente la parte necesaria de la conversación y la enviás a la cuenta indicada."
    ],
    "correct": 0,
    "explanation": "El desvío de información fuera de canales autorizados puede formar parte de un ataque.",
    "image": ""
  },
  {
    "id": "q050",
    "category": "Entorno laboral",
    "scenario": "Para descargar una política interna, un formulario web te pide iniciar sesión con tus credenciales corporativas.",
    "question": "¿Qué hacés?",
    "answers": [
      "Comprobás que el dominio y el servicio estén autorizados por la organización antes de ingresar.",
      "Ingresás si el formulario utiliza los colores, el logo y el nombre de la empresa.",
      "Ingresás usando una ventana privada para que las credenciales no queden guardadas."
    ],
    "correct": 0,
    "explanation": "La apariencia no valida el sitio; el dominio y el flujo autorizado sí son relevantes.",
    "image": ""
  },
  {
    "id": "q051",
    "category": "QR y nube",
    "scenario": "En un comercio vas a pagar desde un cartel con QR y observás que hay una etiqueta con otro QR colocada encima.",
    "question": "¿Qué hacés?",
    "answers": [
      "No usás ese QR hasta confirmar con el comercio cuál es el medio de pago correcto.",
      "Escaneás el QR y verificás el nombre del destinatario antes de confirmar el pago.",
      "Hacés un pago de importe mínimo para comprobar que el destinatario sea el comercio."
    ],
    "correct": 0,
    "explanation": "Los QR pueden ser sustituidos físicamente para desviar pagos o navegación.",
    "image": ""
  },
  {
    "id": "q052",
    "category": "QR y nube",
    "scenario": "Recibís un correo con un QR para actualizar la contraseña de tu cuenta.",
    "question": "¿Qué hacés?",
    "answers": [
      "Entrás al servicio desde la aplicación o dirección habitual y realizás allí cualquier cambio.",
      "Escaneás el QR y verificás que la página tenga HTTPS antes de continuar.",
      "Escaneás el QR desde otro teléfono para no usar el dispositivo donde tenés abierta la cuenta."
    ],
    "correct": 0,
    "explanation": "Un QR oculta el destino visualmente y debe tratarse como un enlace.",
    "image": ""
  },
  {
    "id": "q053",
    "category": "QR y nube",
    "scenario": "Abrís una invitación a una carpeta compartida en la nube y aparece una pantalla para iniciar sesión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás el dominio y, si tenés dudas, entrás al servicio de nube desde tu acceso habitual.",
      "Iniciás sesión si reconocés el nombre de la persona que compartió la carpeta.",
      "Iniciás sesión si la página muestra el mismo logo y diseño del proveedor de nube."
    ],
    "correct": 0,
    "explanation": "Los portales falsos suelen imitar servicios de nube para capturar credenciales.",
    "image": ""
  },
  {
    "id": "q054",
    "category": "QR y nube",
    "scenario": "Te llega una notificación de un archivo compartido llamado “Factura pendiente” desde una cuenta que no tenés agendada.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el contexto y el remitente antes de abrir el archivo o iniciar sesión.",
      "Abrís la vista previa porque los archivos compartidos en la nube se analizan automáticamente.",
      "Descargás el archivo y lo revisás sin iniciar sesión en el servicio."
    ],
    "correct": 0,
    "explanation": "El alojamiento en una plataforma legítima no vuelve confiable un archivo o invitación.",
    "image": ""
  },
  {
    "id": "q055",
    "category": "QR y nube",
    "scenario": "Al abrir un enlace de almacenamiento en la nube, la página indica que necesitás instalar una extensión del navegador para visualizar un PDF.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás la página y tratás de abrir el documento desde el servicio oficial o con un lector habitual.",
      "Instalás la extensión si tiene buenas reseñas en la tienda del navegador.",
      "Instalás la extensión, abrís el PDF y después la eliminás."
    ],
    "correct": 0,
    "explanation": "Las extensiones pueden acceder a datos del navegador; una solicitud inesperada es riesgosa.",
    "image": ""
  },
  {
    "id": "q056",
    "category": "QR y nube",
    "scenario": "Abrís un documento online y al tocar “Ver documento” aparece otra pantalla que solicita tu usuario y contraseña.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás esa pantalla y buscás el documento entrando directamente al servicio desde su dirección habitual.",
      "Ingresás las credenciales si el documento muestra el nombre correcto de quien lo compartió.",
      "Ingresás y, si el documento no aparece, cambiás la contraseña después."
    ],
    "correct": 0,
    "explanation": "Las páginas intermedias pueden formar parte de una cadena de phishing.",
    "image": ""
  },
  {
    "id": "q057",
    "category": "QR y nube",
    "scenario": "Una aplicación conectada a tu cuenta en la nube solicita permisos para leer correo, contactos y archivos.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás quién publica la aplicación y si esos permisos son necesarios para lo que querés hacer.",
      "Aceptás los permisos si la aplicación está integrada con el servicio de nube.",
      "Aceptás los permisos y después desactivás los que no use desde la configuración."
    ],
    "correct": 0,
    "explanation": "El abuso de consentimiento puede dar acceso amplio sin robar directamente una contraseña.",
    "image": ""
  },
  {
    "id": "q058",
    "category": "QR y nube",
    "scenario": "Completás una encuesta corporativa y, después de iniciar sesión, el formulario vuelve a pedirte la contraseña antes de mostrar las preguntas.",
    "question": "¿Qué hacés?",
    "answers": [
      "Interrumpís el proceso y verificás el formulario desde los canales internos.",
      "Ingresás nuevamente la contraseña porque algunos servicios confirman dos veces la identidad.",
      "Volvés a ingresar pero usando una contraseña temporal que después cambiarás."
    ],
    "correct": 0,
    "explanation": "Solicitudes repetidas de credenciales pueden ser una señal de un portal falso.",
    "image": ""
  },
  {
    "id": "q059",
    "category": "QR y nube",
    "scenario": "Recibís por correo un archivo protegido con contraseña y la contraseña está escrita en el mismo mensaje.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás remitente y contexto antes de abrirlo, igual que con cualquier otro adjunto.",
      "Lo abrís porque la protección con contraseña indica que fue enviado de forma segura.",
      "Lo abrís desde el teléfono para mantenerlo separado del equipo de trabajo."
    ],
    "correct": 0,
    "explanation": "Los atacantes pueden usar archivos protegidos para dificultar inspecciones automáticas.",
    "image": ""
  },
  {
    "id": "q060",
    "category": "QR y nube",
    "scenario": "Una aplicación web te pide autorizar acceso a tu cuenta corporativa mediante una pantalla de permisos.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás la aplicación, el editor y los permisos antes de autorizar.",
      "Autorizás si la pantalla de permisos pertenece al proveedor oficial de la cuenta.",
      "Autorizás y después revisás qué permisos quedaron activos desde la configuración."
    ],
    "correct": 0,
    "explanation": "Otorgar permisos puede permitir acceso a datos aun sin compartir la contraseña.",
    "image": ""
  },
  {
    "id": "q061",
    "category": "Redes sociales",
    "scenario": "Un directivo de tu organización te escribe por LinkedIn y te pide información interna para preparar una reunión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás el pedido por un canal corporativo antes de compartir información.",
      "Respondés si el perfil tiene foto, cargo y trayectoria coincidentes.",
      "Compartís solo una parte de la información y pedís confirmación antes de enviar el resto."
    ],
    "correct": 0,
    "explanation": "Las imágenes y nombres públicos pueden reutilizarse para suplantar identidad.",
    "image": ""
  },
  {
    "id": "q062",
    "category": "Redes sociales",
    "scenario": "Una promoción en Instagram anuncia un premio y el enlace de la biografía lleva a una página donde tenés que iniciar sesión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Buscás la promoción desde la cuenta y el sitio oficial antes de iniciar sesión.",
      "Ingresás si la cuenta tiene muchos seguidores y publicaciones anteriores.",
      "Ingresás con la cuenta y luego cambiás la contraseña si no recibís el premio."
    ],
    "correct": 0,
    "explanation": "Seguidores y comentarios pueden manipularse; el dominio y la fuente oficial son más importantes.",
    "image": ""
  },
  {
    "id": "q063",
    "category": "Redes sociales",
    "scenario": "Un conocido te escribe por redes sociales y te pregunta cuál fue tu primera mascota para completar un juego de preguntas.",
    "question": "¿Qué hacés?",
    "answers": [
      "Evitás compartir datos que puedan usarse como respuestas de recuperación o seguridad.",
      "Respondés porque no se trata de una contraseña ni de un código.",
      "Respondés con el nombre real pero sin dar otros datos personales."
    ],
    "correct": 0,
    "explanation": "Datos personales aparentemente inocentes pueden usarse para recuperación de cuentas.",
    "image": ""
  },
  {
    "id": "q064",
    "category": "Redes sociales",
    "scenario": "Una publicación propone generar tu “nombre de hacker” combinando tu fecha de nacimiento con el apellido materno.",
    "question": "¿Qué hacés?",
    "answers": [
      "No publicás información personal real para participar.",
      "Participás pero ocultás el año de nacimiento.",
      "Participás si la publicación proviene de una cuenta conocida."
    ],
    "correct": 0,
    "explanation": "Los desafíos virales pueden recopilar datos útiles para perfilar usuarios.",
    "image": ""
  },
  {
    "id": "q065",
    "category": "Redes sociales",
    "scenario": "Una cuenta verificada publica una oferta y el enlace lleva a una página externa.",
    "question": "¿Qué hacés?",
    "answers": [
      "Comprobás que el dominio corresponda al sitio oficial antes de continuar.",
      "Confiás en el enlace porque la cuenta tiene insignia de verificación.",
      "Abrís la página y comprobás que la oferta, el logo y los precios coincidan."
    ],
    "correct": 0,
    "explanation": "Una cuenta puede ser comprometida; la verificación de dominio sigue siendo necesaria.",
    "image": ""
  },
  {
    "id": "q066",
    "category": "Redes sociales",
    "scenario": "Un periodista te contacta por mensaje directo y te pide un documento interno para una nota. Te ofrece mantener tu identidad en reserva.",
    "question": "¿Qué hacés?",
    "answers": [
      "Seguís el procedimiento de la organización y verificás la solicitud antes de compartir información.",
      "Enviás una versión parcial del documento para comprobar la autenticidad del contacto.",
      "Compartís el documento si el periodista tiene publicaciones y perfil público verificables."
    ],
    "correct": 0,
    "explanation": "La presión o promesa de confidencialidad no reemplaza las políticas de manejo de información.",
    "image": ""
  },
  {
    "id": "q067",
    "category": "Redes sociales",
    "scenario": "Te etiquetan en una publicación que dice “mirá quién murió”. Al abrirla aparece una pantalla para iniciar sesión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás la página y entrás a la red social desde la app o sitio habitual para revisar la publicación.",
      "Iniciás sesión porque la publicación te etiquetó directamente.",
      "Volvés atrás y abrís nuevamente el enlace desde una ventana privada."
    ],
    "correct": 0,
    "explanation": "Los cebos emocionales pueden usarse para dirigir a portales falsos.",
    "image": ""
  },
  {
    "id": "q068",
    "category": "Redes sociales",
    "scenario": "Después de publicar una queja en una red social, una cuenta de soporte de la marca te responde y te envía un enlace para continuar la gestión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Buscás la cuenta y el canal de soporte desde el sitio oficial de la empresa.",
      "Abrís el enlace si la cuenta respondió inmediatamente y conoce el motivo de tu reclamo.",
      "Continuás por mensaje privado y compartís solo los datos mínimos que te pidan."
    ],
    "correct": 0,
    "explanation": "Los atacantes monitorean menciones públicas y crean cuentas de falso soporte.",
    "image": ""
  },
  {
    "id": "q069",
    "category": "Redes sociales",
    "scenario": "Un reclutador te contacta por redes sociales y te pide foto del frente y dorso de tu DNI antes de enviarte la descripción completa del puesto.",
    "question": "¿Qué hacés?",
    "answers": [
      "Pedís información verificable sobre la empresa y el proceso antes de enviar documentación.",
      "Enviás el DNI con una marca de agua indicando el nombre de la empresa.",
      "Enviás primero solo el frente y esperás confirmación para mandar el dorso."
    ],
    "correct": 0,
    "explanation": "La recolección temprana de documentos puede ser señal de fraude o suplantación.",
    "image": ""
  },
  {
    "id": "q070",
    "category": "Redes sociales",
    "scenario": "Recibís un mensaje indicando que tu cuenta será suspendida por una denuncia de derechos de autor e incluye un enlace para presentar un descargo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás las notificaciones dentro de la propia plataforma antes de usar el enlace recibido.",
      "Abrís el enlace y completás el descargo porque existe un plazo para responder.",
      "Respondés el mensaje pidiendo el número de denuncia antes de ingresar al formulario."
    ],
    "correct": 0,
    "explanation": "Las amenazas de suspensión son un pretexto frecuente para capturar credenciales.",
    "image": ""
  },
  {
    "id": "q071",
    "category": "Vishing",
    "scenario": "Te llaman desde un número que coincide con el de tu empresa y te solicitan datos de acceso para resolver un inconveniente.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cortás y devolvés el contacto mediante el directorio o canal interno habitual.",
      "Continuás si el número mostrado coincide exactamente con el de la empresa.",
      "Pedís a quien llama que confirme tu número de legajo y, si lo conoce, continuás."
    ],
    "correct": 0,
    "explanation": "El caller ID no es prueba suficiente de identidad.",
    "image": ""
  },
  {
    "id": "q072",
    "category": "Vishing",
    "scenario": "Recibís una llamada automática informando una deuda. Te indica que marques una opción y luego ingreses datos bancarios para consultar el monto.",
    "question": "¿Qué hacés?",
    "answers": [
      "Finalizás la llamada y consultás la deuda directamente con la entidad por sus canales oficiales.",
      "Ingresás los datos para conocer el monto pero no autorizás ningún pago.",
      "Marcás la opción y pedís hablar con un operador antes de ingresar información."
    ],
    "correct": 0,
    "explanation": "Los sistemas automatizados también pueden formar parte de campañas fraudulentas.",
    "image": ""
  },
  {
    "id": "q073",
    "category": "Vishing",
    "scenario": "Un técnico te llama para asistirte y te pide el código que aparece en la herramienta de acceso remoto de tu computadora.",
    "question": "¿Qué hacés?",
    "answers": [
      "Confirmás primero que la asistencia fue solicitada y autorizada por el canal oficial de soporte.",
      "Le dictás el código si el técnico conoce el problema por el que pediste ayuda.",
      "Le dictás el código y supervisás en pantalla todas las acciones que realice."
    ],
    "correct": 0,
    "explanation": "Los códigos de sesión remota pueden permitir el control del equipo. Deben tratarse como credenciales temporales y verificarse antes de compartirlos.",
    "image": ""
  },
  {
    "id": "q074",
    "category": "Vishing",
    "scenario": "Te llama un fiscal y te informa que existe una denuncia a tu nombre. Te indica que podés evitar una medida inmediata haciendo una transferencia.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cortás y verificás la comunicación directamente con el organismo por sus canales públicos.",
      "Pedís número de expediente, nombre del fiscal y dependencia antes de decidir si transferir.",
      "Realizás el pago si te envían una constancia oficial por correo."
    ],
    "correct": 0,
    "explanation": "Las amenazas de consecuencias legales pueden usarse para generar miedo y urgencia.",
    "image": ""
  },
  {
    "id": "q075",
    "category": "Vishing",
    "scenario": "Participás de una encuesta telefónica y te preguntan tus horarios habituales, quién vive en tu casa y en qué fechas pensás viajar.",
    "question": "¿Qué hacés?",
    "answers": [
      "Evitás brindar información sobre rutinas y convivencia sin verificar finalidad e identidad.",
      "Respondés de manera aproximada porque no te están pidiendo contraseñas.",
      "Respondés solo los horarios laborales y evitás informar fechas de viaje."
    ],
    "correct": 0,
    "explanation": "La información de contexto puede utilizarse para preparar ataques de ingeniería social.",
    "image": ""
  },
  {
    "id": "q076",
    "category": "Vishing",
    "scenario": "Te llama un empleado del servicio de entregas. Tiene un paquete para vos y te pide el código que acaba de llegarte por SMS para poder entregarlo.",
    "question": "¿Qué hacés?",
    "answers": [
      "No compartís el código y verificás el envío desde la app, el sitio o el teléfono oficial del servicio.",
      "Le dictás el código si efectivamente estás esperando un paquete a tu nombre.",
      "Le pedís que confirme remitente y domicilio y, si coinciden, le dictás el código."
    ],
    "correct": 0,
    "explanation": "Un código recibido por SMS puede pertenecer a otro servicio o proceso de autenticación. Debe verificarse el pedido antes de compartir cualquier código.",
    "image": ""
  },
  {
    "id": "q077",
    "category": "Vishing",
    "scenario": "Durante una llamada de atención al cliente te indican que instales una aplicación para completar una verificación de identidad por video.",
    "question": "¿Qué hacés?",
    "answers": [
      "Verificás el procedimiento desde el sitio o la app oficial y solo instalás software desde la tienda oficial.",
      "Instalás la aplicación desde el enlace recibido si tiene el nombre y logo de la empresa.",
      "Instalás la aplicación y negás los permisos que no parezcan necesarios."
    ],
    "correct": 0,
    "explanation": "El origen del software y el procedimiento oficial deben verificarse.",
    "image": ""
  },
  {
    "id": "q078",
    "category": "Vishing",
    "scenario": "Durante una llamada, la persona conoce los últimos cuatro números de tu documento y otros datos personales.",
    "question": "¿Cómo actuás?",
    "answers": [
      "No tomás esos datos como prueba suficiente de identidad y verificás por un canal conocido.",
      "Continuás porque esa información demuestra que tiene acceso al sistema de la entidad.",
      "Le pedís que confirme otro dato personal más antes de seguir con la gestión."
    ],
    "correct": 0,
    "explanation": "Datos parciales pueden estar disponibles por múltiples fuentes y no autentican al interlocutor.",
    "image": ""
  },
  {
    "id": "q079",
    "category": "Vishing",
    "scenario": "Te llaman del banco por una operación y te piden que mantengas la llamada mientras abrís la aplicación bancaria para revisar los movimientos.",
    "question": "¿Qué hacés?",
    "answers": [
      "Finalizás la llamada y revisás la cuenta por tu cuenta antes de contactar al banco desde un canal oficial.",
      "Mantenés la llamada pero no compartís contraseñas ni códigos.",
      "Abrís la aplicación mientras hablás y solo informás si reconocés o no cada movimiento."
    ],
    "correct": 0,
    "explanation": "Mantener a la víctima aislada es una táctica frecuente de ingeniería social.",
    "image": ""
  },
  {
    "id": "q080",
    "category": "Vishing",
    "scenario": "Te llama desde un número nuevo un compañero de trabajo. Te dice que cambió de teléfono y necesita información de un cliente para continuar una gestión.",
    "question": "¿Qué hacés?",
    "answers": [
      "Lo contactás mediante el directorio o un canal corporativo que ya conocías antes de enviar la información.",
      "Le das la información si conoce detalles del cliente y del trabajo que están realizando.",
      "Le pedís que confirme datos personales y laborales que solo un compañero debería conocer."
    ],
    "correct": 0,
    "explanation": "La información contextual puede haberse obtenido previamente. Para entregar datos se necesita una verificación independiente.",
    "image": ""
  },
  {
    "id": "q081",
    "category": "Dispositivos",
    "scenario": "Mientras navegás aparece una ventana que informa que se detectó un virus y muestra un número de soporte para llamar.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás la pestaña y usás las herramientas de seguridad o soporte habituales del equipo.",
      "Llamás al número para confirmar qué amenaza fue detectada antes de instalar nada.",
      "Dejás la ventana abierta y ejecutás un análisis con el antivirus para comprobar si el aviso coincide."
    ],
    "correct": 0,
    "explanation": "Los avisos web pueden simular alertas de seguridad para inducir llamadas o instalaciones.",
    "image": ""
  },
  {
    "id": "q082",
    "category": "Dispositivos",
    "scenario": "Un sitio te pide habilitar notificaciones del navegador para demostrar que no sos un robot.",
    "question": "¿Qué hacés?",
    "answers": [
      "No habilitás notificaciones y verificás si el sitio ofrece un método normal de validación.",
      "Las habilitás porque después podés revocar el permiso desde el navegador.",
      "Las habilitás y continuás mientras el sitio no solicite datos personales."
    ],
    "correct": 0,
    "explanation": "El permiso de notificaciones puede usarse para spam y mensajes engañosos posteriores.",
    "image": ""
  },
  {
    "id": "q083",
    "category": "Dispositivos",
    "scenario": "Encontrás un pendrive en una sala de la oficina.",
    "question": "¿Qué hacés?",
    "answers": [
      "Lo entregás al área responsable sin conectarlo a ningún equipo.",
      "Lo conectás a una computadora que no tenga información sensible para identificar al dueño.",
      "Lo conectás sin Internet y revisás únicamente los nombres de los archivos."
    ],
    "correct": 0,
    "explanation": "Un dispositivo USB desconocido puede contener software malicioso o comportarse como otro tipo de dispositivo.",
    "image": ""
  },
  {
    "id": "q084",
    "category": "Dispositivos",
    "scenario": "Mientras navegás aparece un aviso indicando que tu navegador está desactualizado y ofrece descargar “UpdateBrowser.exe”.",
    "question": "¿Qué hacés?",
    "answers": [
      "Actualizás el navegador desde su propio menú o desde el sitio oficial.",
      "Descargás el archivo y comprobás su firma digital antes de ejecutarlo.",
      "Descargás la actualización y la analizás con el antivirus antes de instalarla."
    ],
    "correct": 0,
    "explanation": "Las falsas actualizaciones son un vector común para distribuir software no deseado o malicioso.",
    "image": ""
  },
  {
    "id": "q085",
    "category": "Dispositivos",
    "scenario": "Entrás a un sitio con HTTPS y candado. La dirección es parecida, pero no idéntica, a la que usás normalmente.",
    "question": "¿Qué hacés?",
    "answers": [
      "No ingresás datos hasta confirmar que el dominio sea exactamente el oficial.",
      "Continuás porque HTTPS y el candado indican que la conexión es segura.",
      "Comparás el diseño del sitio con el habitual y, si coincide, continuás."
    ],
    "correct": 0,
    "explanation": "Los sitios fraudulentos también pueden usar certificados válidos.",
    "image": ""
  },
  {
    "id": "q086",
    "category": "Dispositivos",
    "scenario": "Instalás una extensión del navegador y solicita permiso para leer y modificar información en todos los sitios que visitás.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás si ese permiso es necesario para su función y quién publica la extensión antes de aceptarlo.",
      "Aceptás el permiso y luego limitás la extensión desde la configuración si funciona correctamente.",
      "Aceptás porque los permisos amplios son normales en extensiones que interactúan con páginas web."
    ],
    "correct": 0,
    "explanation": "Los permisos amplios pueden exponer navegación y datos introducidos en sitios.",
    "image": ""
  },
  {
    "id": "q087",
    "category": "Dispositivos",
    "scenario": "Una página pasa a pantalla completa y muestra un escritorio con una ventana de inicio de sesión igual a la que utiliza tu organización.",
    "question": "¿Qué hacés?",
    "answers": [
      "Salís de pantalla completa y revisás la barra del navegador y la dirección real antes de ingresar datos.",
      "Ingresás si el escritorio, el fondo y la ventana coinciden con los que ves normalmente.",
      "Probás con el usuario pero no escribís la contraseña hasta ver cómo responde la página."
    ],
    "correct": 0,
    "explanation": "Una página web puede imitar un escritorio o una ventana de inicio de sesión. La interfaz real del navegador y el dominio ayudan a distinguir la simulación.",
    "image": ""
  },
  {
    "id": "q088",
    "category": "Dispositivos",
    "scenario": "Abrís un PDF y aparece un mensaje indicando que necesitás habilitar contenido o instalar un componente para verlo correctamente.",
    "question": "¿Qué hacés?",
    "answers": [
      "Cerrás el archivo y confirmás con quien lo envió o con soporte antes de habilitar o instalar algo.",
      "Habilitás el contenido si el PDF proviene de una persona conocida.",
      "Instalás el componente desde el enlace y lo eliminás cuando termines de leer el documento."
    ],
    "correct": 0,
    "explanation": "Un PDF normal no debería requerir componentes inesperados desde fuentes desconocidas.",
    "image": ""
  },
  {
    "id": "q089",
    "category": "Dispositivos",
    "scenario": "Una aplicación móvil solicita permiso de accesibilidad para completar una función.",
    "question": "¿Qué hacés?",
    "answers": [
      "Revisás si la función realmente necesita ese permiso y si la aplicación es confiable antes de concederlo.",
      "Concedés el permiso y observás después si la aplicación funciona de manera normal.",
      "Concedés el permiso si la aplicación fue descargada desde la tienda oficial."
    ],
    "correct": 0,
    "explanation": "Los permisos de accesibilidad pueden permitir observar o controlar interacciones en el dispositivo.",
    "image": ""
  },
  {
    "id": "q090",
    "category": "Dispositivos",
    "scenario": "Entrás a un sitio y el navegador completa automáticamente tu usuario y contraseña guardados para ese dominio.",
    "question": "¿Cómo actuás?",
    "answers": [
      "Tomás el autocompletado como una señal útil, pero igualmente verificás el contexto y la dirección si algo no coincide.",
      "Continuás porque el gestor solo completa credenciales en sitios legítimos.",
      "Continuás si además el sitio tiene HTTPS y el mismo diseño de siempre."
    ],
    "correct": 0,
    "explanation": "El autocompletado puede ayudar, pero ninguna señal aislada reemplaza la evaluación completa.",
    "image": ""
  },
  {
    "id": "q091",
    "category": "Respuesta y cultura",
    "scenario": "Abriste un enlace de un correo y después te quedó la duda sobre si correspondía al servicio que decía representar. No ingresaste datos.",
    "question": "¿Qué hacés?",
    "answers": [
      "Lo reportás por el canal previsto para que pueda revisarse el evento.",
      "Cerrás la página y no hacés nada más porque no ingresaste información.",
      "Borrás el historial y las cookies del navegador y continuás trabajando."
    ],
    "correct": 0,
    "explanation": "Reportar temprano permite revisar el alcance y proteger a otros usuarios.",
    "image": ""
  },
  {
    "id": "q092",
    "category": "Respuesta y cultura",
    "scenario": "Ingresaste tu contraseña en una página y, después de cerrar, advertís que la dirección no era la habitual del servicio.",
    "question": "¿Qué hacés primero?",
    "answers": [
      "Entrás al servicio desde su acceso oficial, cambiás la contraseña, cerrás sesiones y reportás lo ocurrido.",
      "Volvés a la página para comprobar si la contraseña realmente fue aceptada.",
      "Esperás a recibir una alerta de acceso antes de cambiar la contraseña."
    ],
    "correct": 0,
    "explanation": "La respuesta rápida puede reducir el impacto de una credencial comprometida.",
    "image": ""
  },
  {
    "id": "q093",
    "category": "Respuesta y cultura",
    "scenario": "Abrís un archivo recibido por correo y poco después el equipo empieza a comportarse de manera inusual.",
    "question": "¿Qué hacés?",
    "answers": [
      "Seguís el procedimiento de incidentes y contactás a TI o seguridad cuanto antes.",
      "Guardás tu trabajo, reiniciás el equipo y verificás si el problema desaparece.",
      "Ejecutás un análisis antivirus y solo avisás si encuentra una amenaza."
    ],
    "correct": 0,
    "explanation": "La escalada temprana evita propagar el problema y permite preservar información útil.",
    "image": ""
  },
  {
    "id": "q094",
    "category": "Respuesta y cultura",
    "scenario": "Un compañero te cuenta que ingresó sus datos en una página que ahora cree que no correspondía.",
    "question": "¿Qué hacés?",
    "answers": [
      "Lo ayudás a reportarlo y a seguir el procedimiento de contención cuanto antes.",
      "Le pedís que primero cambie sus contraseñas y solo reporte si detecta actividad en la cuenta.",
      "Esperás a confirmar que hubo un acceso no autorizado antes de involucrar a seguridad."
    ],
    "correct": 0,
    "explanation": "Una cultura de reporte temprano mejora la capacidad de respuesta y aprendizaje.",
    "image": ""
  },
  {
    "id": "q095",
    "category": "Respuesta y cultura",
    "scenario": "Recibís un mensaje y no lográs determinar si corresponde realmente a la organización que dice enviarlo.",
    "question": "¿Qué hacés?",
    "answers": [
      "Consultás por el canal de seguridad o soporte previsto antes de interactuar con el mensaje.",
      "Abrís el enlace sin ingresar datos para obtener más información.",
      "Se lo reenviás a un compañero de confianza para que lo pruebe desde su equipo."
    ],
    "correct": 0,
    "explanation": "La duda debe resolverse con procedimientos seguros, no interactuando con el contenido.",
    "image": ""
  },
  {
    "id": "q096",
    "category": "Respuesta y cultura",
    "scenario": "Un mensaje tiene el logo correcto, tu nombre y una referencia real a tu cuenta, pero la dirección web no coincide con la que usás normalmente.",
    "question": "¿Qué hacés?",
    "answers": [
      "No continuás y verificás la gestión desde el sitio o la aplicación habitual.",
      "Continuás porque varios datos del mensaje coinciden con información real.",
      "Abrís la página y verificás si reconoce automáticamente tu usuario antes de decidir."
    ],
    "correct": 0,
    "explanation": "En seguridad no se votan señales; una inconsistencia relevante puede ser suficiente para verificar.",
    "image": ""
  },
  {
    "id": "q097",
    "category": "Respuesta y cultura",
    "scenario": "Un superior te pide saltear un control del procedimiento porque necesita resolver una gestión en ese momento.",
    "question": "¿Qué hacés?",
    "answers": [
      "Mantenés el control previsto o utilizás el mecanismo formal de excepción si existe.",
      "Cumplís el pedido y dejás documentado que fue autorizado por un superior.",
      "Omitís el control solo esta vez y después pedís que regularicen la excepción."
    ],
    "correct": 0,
    "explanation": "La ingeniería social explota excepciones improvisadas; los controles deben sostenerse bajo presión.",
    "image": ""
  },
  {
    "id": "q098",
    "category": "Respuesta y cultura",
    "scenario": "Seguridad informa que un correo enviado durante la mañana formaba parte de una campaña de phishing. Vos recordás haberlo abierto.",
    "question": "¿Qué hacés?",
    "answers": [
      "Informás que interactuaste con el mensaje y describís exactamente qué acciones realizaste.",
      "Eliminás el correo y esperás por si seguridad necesita más información.",
      "Revisás tu equipo y solo reportás si encontrás algo fuera de lo normal."
    ],
    "correct": 0,
    "explanation": "La información precisa sobre la interacción ayuda a determinar el alcance del incidente.",
    "image": ""
  },
  {
    "id": "q099",
    "category": "Respuesta y cultura",
    "scenario": "Durante una capacitación te muestran la captura de un correo y te preguntan cómo decidirías si corresponde actuar sobre el mensaje.",
    "question": "¿Qué analizás?",
    "answers": [
      "Remitente, dominio, enlaces, contexto, pedido realizado y coherencia con el canal habitual.",
      "Principalmente la ortografía, el diseño y la calidad del logo.",
      "El nombre visible del remitente y si el mensaje incluye datos reales sobre vos."
    ],
    "correct": 0,
    "explanation": "El análisis efectivo combina múltiples señales técnicas y contextuales.",
    "image": ""
  },
  {
    "id": "q100",
    "category": "Respuesta y cultura",
    "scenario": "Recibís un mensaje perfectamente redactado, con buen diseño y sin errores ortográficos.",
    "question": "¿Cómo decidís si actuar sobre lo que pide?",
    "answers": [
      "Verificás identidad, dominio, enlaces, contexto y el canal por el que debería realizarse esa gestión.",
      "Confiás si además usa el nombre correcto de la organización y tus datos.",
      "Confiás si el mensaje mantiene el mismo tono y formato que comunicaciones anteriores."
    ],
    "correct": 0,
    "explanation": "Los ataques modernos pueden estar perfectamente redactados; la ortografía no es un indicador suficiente.",
    "image": ""
  }
];
