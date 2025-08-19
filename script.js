// Datos de emociones
const emociones = {
  happy: {
    nombre: "Alegría",
    descripcion: "La alegría es una emoción positiva que se experimenta ante situaciones placenteras. Aumenta tu energía y te hace ver el mundo con optimismo.",
    tipo: "Primaria",
    categoria: "Positiva"
  },
  sad: {
    nombre: "Tristeza",
    descripcion: "La tristeza es una emoción natural que aparece ante pérdidas o decepciones. Reduce la energía y motiva a la reflexión interna.",
    tipo: "Primaria",
    categoria: "Negativa"
  },
  angry: {
    nombre: "Ira",
    descripcion: "La ira es una reacción intensa ante la injusticia o amenaza. Aunque es negativa, puede usarse como motor de cambio si se regula bien.",
    tipo: "Primaria",
    categoria: "Negativa"
  },
  fear: {
    nombre: "Miedo",
    descripcion: "El miedo aparece ante situaciones peligrosas o desconocidas. Es una emoción que ayuda a protegernos y sobrevivir.",
    tipo: "Primaria",
    categoria: "Negativa"
  },
  surprise: {
    nombre: "Sorpresa",
    descripcion: "La sorpresa es una emoción ambigua que se experimenta ante lo inesperado. Puede volverse positiva o negativa según el contexto.",
    tipo: "Primaria",
    categoria: "Ambigua"
  },
  neutral: {
    nombre: "Neutral",
    descripcion: "El estado emocional neutro refleja equilibrio. No se experimenta una emoción dominante en ese momento.",
    tipo: "—",
    categoria: "—"
  }
};

// Emociones relacionadas
const secundarias = {
  happy: ["😊 Euforia", "💗 Gratitud", "🎉 Diversión"],
  sad: ["😞 Decepción", "💔 Soledad", "😭 Melancolía"],
  angry: ["😤 Frustración", "😡 Impotencia", "💢 Irritabilidad"],
  fear: ["😰 Ansiedad", "😨 Inseguridad", "😱 Pánico"],
  surprise: ["🤩 Asombro", "😯 Desconcierto", "😳 Admiración"],
  neutral: []
};

// Cambiar emoción
function setEmotion(emocionKey) {
  const emocion = emociones[emocionKey];

  // Cambiar clase del body y robot
  document.body.className = emocionKey;
  const robot = document.getElementById('robot');
  robot.className = 'robot ' + emocionKey;

  // Actualizar contenido
  document.getElementById('info-emocion').innerHTML = `
    <h2>${emocion.nombre}</h2>
    <p>${emocion.descripcion}</p>
  `;

  document.getElementById('info-clasificacion').innerHTML = `
    <h3>Clasificación</h3>
    <p><strong>Tipo:</strong> ${emocion.tipo}</p>
    <p><strong>Categoría:</strong> ${emocion.categoria}</p>
  `;

  // Actualizar emociones relacionadas
  const lista = document.getElementById("secundarias-lista");
  if (lista) {
    lista.innerHTML = "";
    secundarias[emocionKey].forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      lista.appendChild(li);
    });
  }
}

// Emoción aleatoria
function emocionAleatoria() {
  const keys = Object.keys(emociones);
  const aleatoria = keys[Math.floor(Math.random() * keys.length)];
  setEmotion(aleatoria);
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  setEmotion("neutral");

  // Agregar elementos dinámicos si no están
  const robot = document.getElementById("robot");

  if (!robot.querySelector(".cejas")) {
    const cejas = document.createElement("div");
    cejas.classList.add("cejas");

    const cejaIzq = document.createElement("div");
    cejaIzq.classList.add("ceja", "izquierda");

    const cejaDer = document.createElement("div");
    cejaDer.classList.add("ceja", "derecha");

    cejas.appendChild(cejaIzq);
    cejas.appendChild(cejaDer);

    robot.querySelector(".cara").prepend(cejas);
  }

  if (!robot.querySelector(".pupila")) {
    const ojos = robot.querySelectorAll(".ojo");
    ojos.forEach(ojo => {
      const pupila = document.createElement("div");
      pupila.classList.add("pupila");
      ojo.appendChild(pupila);
    });
  }
});
