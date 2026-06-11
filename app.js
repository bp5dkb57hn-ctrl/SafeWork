const DB_KEY = "safework-ai-db-v1";

const AREAS = [
  "Excavacion",
  "Estructuras",
  "Soldadura",
  "Instalaciones electricas",
  "Techado",
  "Acabados",
  "Maquinaria pesada",
  "Almacen",
  "Otro"
];

const ROLES = [
  "Albanil",
  "Soldador",
  "Electricista",
  "Operador de maquinaria",
  "Carpintero",
  "Supervisor",
  "Tecnico de seguridad",
  "Ayudante general",
  "Otro"
];

const PPE = {
  casco: {
    name: "Casco de seguridad",
    icon: "CS",
    function: "Protege la cabeza contra impactos, caida de objetos y contacto accidental con elementos de obra.",
    prevents: ["Golpes craneales", "Cortes", "Caida de herramientas", "Contacto electrico indirecto"],
    steps: [
      "Revisar que la carcasa no tenga fisuras, deformaciones ni perforaciones.",
      "Ajustar la suspension interna al tamano de la cabeza.",
      "Colocar el casco recto, cubriendo frente y nuca.",
      "Asegurar el barbiquejo si hay viento, altura o movimiento intenso.",
      "No perforar, pintar ni modificar el casco sin autorizacion tecnica."
    ],
    sources: [
      ["OSHA - Personal Protective Equipment", "https://www.osha.gov/personal-protective-equipment"],
      ["NIOSH - Head protection overview", "https://www.cdc.gov/niosh/topics/head/default.html"]
    ]
  },
  botas: {
    name: "Botas de seguridad",
    icon: "BT",
    function: "Protegen pies y tobillos frente a impactos, perforaciones, resbalones y humedad.",
    prevents: ["Aplastamiento", "Pinchazos", "Resbalones", "Contacto con agua o lodo"],
    steps: [
      "Verificar puntera, suela antideslizante y costuras.",
      "Usar medias secas y ajustar bien los pasadores.",
      "Confirmar que la suela no tenga clavos, cortes o desgaste excesivo.",
      "Mantener las botas limpias para conservar la traccion.",
      "Cambiar el calzado si pierde impermeabilidad o soporte."
    ],
    sources: [
      ["OSHA - Foot protection", "https://www.osha.gov/etools/construction/ppe/foot-protection"],
      ["CCOHS - Safety footwear", "https://www.ccohs.ca/oshanswers/prevention/ppe/footwear.html"]
    ]
  },
  chaleco: {
    name: "Chaleco reflectante",
    icon: "VR",
    function: "Aumenta la visibilidad del trabajador ante operadores, conductores y equipos en movimiento.",
    prevents: ["Atropellos", "Golpes por maquinaria", "Baja visibilidad", "Errores de comunicacion visual"],
    steps: [
      "Revisar que las bandas reflectantes esten limpias y completas.",
      "Colocar el chaleco sobre la ropa exterior.",
      "Cerrar broches o cierre frontal para evitar enganches.",
      "Usar colores de alta visibilidad en zonas con maquinaria o poca luz.",
      "Reemplazarlo si las bandas pierden reflectancia."
    ],
    sources: [
      ["OSHA - Highway work zones", "https://www.osha.gov/highway-work-zones"],
      ["NIOSH - Work zone safety", "https://www.cdc.gov/niosh/topics/highwayworkzones/default.html"]
    ]
  },
  gafas: {
    name: "Gafas de seguridad",
    icon: "GF",
    function: "Protegen los ojos contra particulas, polvo, chispas, radiacion y salpicaduras.",
    prevents: ["Lesiones oculares", "Irritacion por polvo", "Impacto de particulas", "Salpicaduras"],
    steps: [
      "Elegir gafas con proteccion lateral segun la tarea.",
      "Limpiar los lentes antes de colocarlas.",
      "Ajustar patillas o banda para que no queden holguras.",
      "Usar careta adicional si hay esmerilado, soldadura o salpicaduras.",
      "Guardar las gafas en funda para evitar rayaduras."
    ],
    sources: [
      ["OSHA - Eye and face protection", "https://www.osha.gov/eye-face-protection"],
      ["NIOSH - Eye safety", "https://www.cdc.gov/niosh/topics/eye/default.html"]
    ]
  },
  guantes: {
    name: "Guantes de seguridad",
    icon: "GU",
    function: "Protegen manos contra cortes, abrasiones, calor, electricidad, quimicos o vibracion.",
    prevents: ["Cortes", "Quemaduras", "Atrapamientos menores", "Contacto con sustancias"],
    steps: [
      "Seleccionar el tipo segun el riesgo: cuero, anticorte, dielectricos o quimicos.",
      "Inspeccionar palmas, dedos y costuras.",
      "Colocar cada guante ajustando hasta la muneca.",
      "Evitar guantes sueltos cerca de partes giratorias.",
      "Retirarlos sin tocar superficies contaminadas si hubo quimicos."
    ],
    sources: [
      ["OSHA - Hand protection", "https://www.osha.gov/personal-protective-equipment/hazards-solutions"],
      ["CCOHS - Hand protection", "https://www.ccohs.ca/oshanswers/prevention/ppe/gloves.html"]
    ]
  },
  auditivos: {
    name: "Protectores auditivos",
    icon: "PA",
    function: "Reducen la exposicion a ruido de herramientas, maquinaria y procesos de corte.",
    prevents: ["Perdida auditiva", "Fatiga", "Zumbidos", "Distraccion por ruido"],
    steps: [
      "Identificar si se requieren tapones, orejeras o doble proteccion.",
      "Lavar manos antes de manipular tapones.",
      "Insertar o ajustar hasta lograr sello sin dolor.",
      "Verificar que no se aflojen al mover la mandibula.",
      "Limpiar y guardar los protectores reutilizables."
    ],
    sources: [
      ["NIOSH - Noise and hearing loss", "https://www.cdc.gov/niosh/topics/noise/default.html"],
      ["OSHA - Occupational noise exposure", "https://www.osha.gov/noise"]
    ]
  },
  mascarilla: {
    name: "Mascarilla o respirador",
    icon: "MR",
    function: "Filtra polvo, vapores o particulas segun el tipo de respirador y cartucho.",
    prevents: ["Inhalacion de polvo", "Irritacion respiratoria", "Exposicion a vapores", "Silicosis"],
    steps: [
      "Confirmar el tipo correcto para polvo, particulas o vapores.",
      "Revisar valvulas, bandas y sello facial.",
      "Colocar sobre nariz y boca, ajustando bandas superior e inferior.",
      "Hacer prueba de sello antes de ingresar al area.",
      "Cambiar filtro o mascarilla si aumenta la resistencia al respirar."
    ],
    sources: [
      ["NIOSH - Respirators", "https://www.cdc.gov/niosh/topics/respirators/default.html"],
      ["OSHA - Respiratory protection", "https://www.osha.gov/respiratory-protection"]
    ]
  },
  arnes: {
    name: "Arnes de seguridad",
    icon: "AR",
    function: "Detiene o limita caidas cuando se trabaja en altura con un sistema de anclaje certificado.",
    prevents: ["Caidas de altura", "Golpes por suspension", "Desplazamiento inseguro", "Caida desde techos"],
    steps: [
      "Revisar correas y costuras.",
      "Colocar las bandas sobre los hombros.",
      "Ajustar correas de piernas.",
      "Ajustar correa del pecho.",
      "Verificar que no existan holguras excesivas.",
      "Conectar al punto de anclaje certificado."
    ],
    sources: [
      ["OSHA - Fall protection", "https://www.osha.gov/fall-protection"],
      ["NIOSH - Falls in the workplace", "https://www.cdc.gov/niosh/topics/falls/default.html"]
    ]
  },
  careta: {
    name: "Careta facial",
    icon: "CF",
    function: "Cubre el rostro ante chispas, particulas, salpicaduras o radiacion de proceso.",
    prevents: ["Quemaduras faciales", "Impacto de particulas", "Salpicaduras", "Radiacion visible"],
    steps: [
      "Revisar visor, arnes de cabeza y transparencia.",
      "Ajustar la banda para que la careta no se deslice.",
      "Usar gafas debajo cuando exista impacto de particulas.",
      "Bajar el visor antes de iniciar corte, esmerilado o soldadura.",
      "Limpiar el visor y reemplazarlo si esta rayado."
    ],
    sources: [
      ["OSHA - Eye and face protection", "https://www.osha.gov/eye-face-protection"],
      ["CCOHS - Face shields", "https://www.ccohs.ca/oshanswers/prevention/ppe/glasses.html"]
    ]
  },
  dielectricos: {
    name: "EPP dielectrico",
    icon: "ED",
    function: "Aisla al trabajador frente a energia electrica en tareas autorizadas.",
    prevents: ["Choque electrico", "Quemaduras", "Arco electrico", "Contacto accidental"],
    steps: [
      "Confirmar que el equipo corresponda al nivel de tension autorizado.",
      "Inspeccionar guantes, botas y herramientas aisladas.",
      "Mantener el equipo seco y limpio.",
      "No usar piezas con cortes, pinchazos o vencimiento.",
      "Aplicar bloqueo y etiquetado antes de intervenir circuitos."
    ],
    sources: [
      ["OSHA - Electrical safety", "https://www.osha.gov/electrical"],
      ["NIOSH - Electrical safety", "https://www.cdc.gov/niosh/topics/electrical/default.html"]
    ]
  },
  solar: {
    name: "Proteccion solar e hidratacion",
    icon: "UV",
    function: "Reduce dano por radiacion UV, golpe de calor y deshidratacion.",
    prevents: ["Quemaduras solares", "Estres termico", "Deshidratacion", "Fatiga"],
    steps: [
      "Aplicar protector solar antes de iniciar la jornada.",
      "Usar cubrenuca o ropa de manga larga transpirable.",
      "Beber agua de forma programada, no solo al sentir sed.",
      "Tomar pausas en sombra cuando el UV o la temperatura sean altos.",
      "Reportar mareos, calambres o dolor de cabeza."
    ],
    sources: [
      ["NIOSH - Heat stress", "https://www.cdc.gov/niosh/topics/heatstress/default.html"],
      ["WHO - Ultraviolet radiation", "https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)"]
    ]
  },
  impermeable: {
    name: "Ropa impermeable",
    icon: "RI",
    function: "Mantiene seco al trabajador y reduce resbalones, enfriamiento y contacto con agua.",
    prevents: ["Hipotermia leve", "Resbalones", "Baja visibilidad", "Mala manipulacion por humedad"],
    steps: [
      "Seleccionar chaqueta y pantalon impermeables de alta visibilidad.",
      "Ajustar punos y capucha sin bloquear vision periferica.",
      "Usar botas con suela antideslizante.",
      "Secar el equipo antes de guardarlo.",
      "Suspender trabajos expuestos si hay tormenta electrica."
    ],
    sources: [
      ["OSHA - Weather safety", "https://www.osha.gov/weather"],
      ["NIOSH - Cold stress", "https://www.cdc.gov/niosh/topics/coldstress/default.html"]
    ]
  }
};

const AREA_RULES = {
  Excavacion: { mandatory: ["casco", "botas", "chaleco", "guantes"], recommended: ["gafas", "mascarilla"], risk: 2 },
  Estructuras: { mandatory: ["casco", "botas", "chaleco", "arnes"], recommended: ["guantes", "gafas"], risk: 2 },
  Soldadura: { mandatory: ["casco", "botas", "guantes", "careta", "gafas"], recommended: ["mascarilla", "auditivos"], risk: 3 },
  "Instalaciones electricas": { mandatory: ["casco", "botas", "dielectricos", "gafas"], recommended: ["guantes", "chaleco"], risk: 3 },
  Techado: { mandatory: ["casco", "botas", "arnes", "chaleco"], recommended: ["solar", "guantes"], risk: 3 },
  Acabados: { mandatory: ["casco", "botas", "gafas", "guantes"], recommended: ["mascarilla", "auditivos"], risk: 1 },
  "Maquinaria pesada": { mandatory: ["casco", "botas", "chaleco", "auditivos"], recommended: ["gafas", "guantes"], risk: 3 },
  Almacen: { mandatory: ["casco", "botas", "chaleco", "guantes"], recommended: ["gafas"], risk: 1 },
  Otro: { mandatory: ["casco", "botas", "chaleco"], recommended: ["guantes", "gafas"], risk: 1 }
};

const ROLE_RULES = {
  Albanil: { mandatory: ["casco", "botas", "guantes"], recommended: ["gafas"], risk: 2 },
  Soldador: { mandatory: ["careta", "guantes", "gafas", "botas"], recommended: ["mascarilla", "auditivos"], risk: 3 },
  Electricista: { mandatory: ["dielectricos", "casco", "botas", "gafas"], recommended: ["guantes"], risk: 3 },
  "Operador de maquinaria": { mandatory: ["casco", "botas", "chaleco", "auditivos"], recommended: ["gafas"], risk: 3 },
  Carpintero: { mandatory: ["casco", "botas", "gafas", "guantes"], recommended: ["auditivos", "mascarilla"], risk: 2 },
  Supervisor: { mandatory: ["casco", "botas", "chaleco"], recommended: ["gafas"], risk: 1 },
  "Tecnico de seguridad": { mandatory: ["casco", "botas", "chaleco"], recommended: ["gafas", "guantes"], risk: 1 },
  "Ayudante general": { mandatory: ["casco", "botas", "chaleco", "guantes"], recommended: ["gafas"], risk: 2 },
  Otro: { mandatory: ["casco", "botas", "chaleco"], recommended: ["guantes"], risk: 1 }
};

const defaults = {
  projects: ["Edificio San Martin", "Puente Norte", "Proyecto Industrial Lima"],
  history: [],
  profile: {},
  theme: "light"
};

let db = loadDB();
let currentWeather = null;
let lastAssessment = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.toggle("dark", db.theme === "dark");
  fillSelect($("#areaSelect"), AREAS);
  fillSelect($("#roleSelect"), ROLES);
  renderProjects();
  renderProfile();
  renderHistory();
  renderLibrary();
  bindEvents();
  setInitialTraining();
  registerPwa();
});

function loadDB() {
  try {
    const saved = JSON.parse(localStorage.getItem(DB_KEY));
    return { ...defaults, ...saved };
  } catch {
    return { ...defaults };
  }
}

function saveDB() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function bindEvents() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    db.theme = document.body.classList.contains("dark") ? "dark" : "light";
    $("#themeToggle").textContent = db.theme === "dark" ? "☀" : "☾";
    saveDB();
  });

  $("#saveProject").addEventListener("click", saveProjectFromInput);
  $("#geoBtn").addEventListener("click", useGeolocation);
  $("#assessmentForm").addEventListener("submit", runAssessment);
  $("#profileForm").addEventListener("submit", saveProfile);
  $("#librarySearch").addEventListener("input", renderLibrary);
  $("#quickDemo").addEventListener("click", loadDemo);
}

function setView(viewName) {
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewName));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === `view-${viewName}`));
}

function saveProjectFromInput() {
  const name = $("#projectName").value.trim();
  if (!name) return;
  if (!db.projects.includes(name)) db.projects.unshift(name);
  $("#projectName").value = "";
  saveDB();
  renderProjects(name);
}

function renderProjects(selected = db.projects[0]) {
  const select = $("#projectSelect");
  select.innerHTML = db.projects.map((project) => `<option value="${project}">${project}</option>`).join("");
  if (selected) select.value = selected;

  const projectCards = db.projects.length
    ? db.projects.map((project) => `<article class="project-item"><strong>${project}</strong><small>Guardada en base local</small></article>`).join("")
    : `<div class="empty">Aun no hay obras registradas.</div>`;

  $("#projectList").innerHTML = projectCards;
  if ($("#projectListSecondary")) {
    $("#projectListSecondary").innerHTML = projectCards;
  }
}

function registerPwa() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.warn("No se pudo registrar el service worker", error);
      });
    });
  }

  const installBtn = $("#installBtn");
  if (!installBtn) return;

  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.hidden = false;
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) {
      installBtn.textContent = "No disponible";
      return;
    }

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    installBtn.textContent = choice.outcome === "accepted" ? "Instalada" : "Cancelada";
    deferredPrompt = null;
    installBtn.disabled = true;
  });
}

async function useGeolocation() {
  if (!navigator.geolocation) {
    setWeatherError("Geolocalizacion no disponible en este navegador.");
    return;
  }
  $("#geoBtn").textContent = "Ubicando...";
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      await fetchWeather(position.coords.latitude, position.coords.longitude, "Ubicacion actual");
      $("#geoBtn").textContent = "Usar ubicacion actual";
    },
    () => {
      setWeatherError("No se pudo acceder a la ubicacion. Ingresa ciudad y pais.");
      $("#geoBtn").textContent = "Usar ubicacion actual";
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

async function runAssessment(event) {
  event.preventDefault();
  saveProjectFromInput();

  const payload = getFormPayload();
  if (!currentWeather || payload.city) {
    await getWeatherByCity(payload.city, payload.country);
  }
  const result = calculateAssessment(payload, currentWeather);
  lastAssessment = result;
  renderAssessment(result);
  saveAssessment(result);
}

function getFormPayload() {
  return {
    project: $("#projectSelect").value,
    area: $("#areaSelect").value,
    role: $("#roleSelect").value,
    city: $("#cityInput").value.trim(),
    country: $("#countryInput").value.trim()
  };
}

async function getWeatherByCity(city, country) {
  const queryCity = city || "Lima";
  const queryCountry = country || "Peru";
  try {
    setWeatherLoading(`${queryCity}, ${queryCountry}`);
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(queryCity)}&count=1&language=es&format=json`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();
    const place = geoData.results?.[0];
    if (!place) throw new Error("Ciudad no encontrada");
    await fetchWeather(place.latitude, place.longitude, `${place.name}, ${place.country}`);
  } catch (error) {
    setWeatherError("No se pudo obtener el clima. Se usara un escenario conservador.");
    currentWeather = fallbackWeather(queryCity);
  }
}

async function fetchWeather(latitude, longitude, label) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    timezone: "auto",
    current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
    hourly: "uv_index,precipitation_probability",
    forecast_days: "1"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  const data = await response.json();
  const hourIndex = nearestHourIndex(data.hourly?.time || []);
  const weather = {
    label,
    temperature: data.current?.temperature_2m ?? 24,
    humidity: data.current?.relative_humidity_2m ?? 65,
    wind: data.current?.wind_speed_10m ?? 10,
    uv: Math.round((data.hourly?.uv_index?.[hourIndex] ?? 6) * 10) / 10,
    rain: data.hourly?.precipitation_probability?.[hourIndex] ?? 20,
    code: data.current?.weather_code ?? 0,
    updatedAt: new Date().toISOString()
  };
  weather.alerts = buildWeatherAlerts(weather);
  currentWeather = weather;
  renderWeather(weather);
}

function nearestHourIndex(times) {
  if (!times.length) return 0;
  const now = Date.now();
  let closest = 0;
  let diff = Infinity;
  times.forEach((time, index) => {
    const nextDiff = Math.abs(new Date(time).getTime() - now);
    if (nextDiff < diff) {
      diff = nextDiff;
      closest = index;
    }
  });
  return closest;
}

function fallbackWeather(label) {
  const weather = {
    label,
    temperature: 26,
    humidity: 70,
    wind: 18,
    uv: 7,
    rain: 35,
    code: 1,
    alerts: ["Datos estimados: validar clima antes de iniciar la tarea."],
    updatedAt: new Date().toISOString()
  };
  renderWeather(weather);
  return weather;
}

function buildWeatherAlerts(weather) {
  const alerts = [];
  if (weather.temperature >= 30 || weather.uv >= 8) alerts.push("Riesgo de estres termico o radiacion UV alta.");
  if (weather.wind >= 35) alerts.push("Viento fuerte: revisar izajes, techos y trabajos en altura.");
  if (weather.rain >= 60 || [61, 63, 65, 80, 81, 82, 95].includes(weather.code)) alerts.push("Probabilidad alta de lluvia o tormenta.");
  if (weather.humidity >= 85) alerts.push("Humedad elevada: vigilar fatiga y superficies resbalosas.");
  return alerts.length ? alerts : ["Sin alertas criticas."];
}

function setWeatherLoading(label) {
  $("#weatherLocation").textContent = `Consultando ${label}`;
  ["#tempValue", "#humidityValue", "#windValue", "#uvValue", "#rainValue", "#alertValue"].forEach((id) => {
    $(id).textContent = "...";
  });
}

function setWeatherError(message) {
  $("#weatherLocation").textContent = message;
}

function renderWeather(weather) {
  $("#weatherLocation").textContent = weather.label;
  $("#tempValue").textContent = `${Math.round(weather.temperature)}°C`;
  $("#humidityValue").textContent = `${Math.round(weather.humidity)}%`;
  $("#windValue").textContent = `${Math.round(weather.wind)} km/h`;
  $("#uvValue").textContent = weather.uv;
  $("#rainValue").textContent = `${Math.round(weather.rain)}%`;
  $("#alertValue").textContent = weather.alerts.length > 1 ? `${weather.alerts.length}` : weather.alerts[0].startsWith("Sin") ? "0" : "1";
}

function calculateAssessment(payload, weather) {
  const areaRule = AREA_RULES[payload.area];
  const roleRule = ROLE_RULES[payload.role];
  const mandatory = unique([...areaRule.mandatory, ...roleRule.mandatory]);
  const recommended = unique([...areaRule.recommended, ...roleRule.recommended]);
  const climateAdds = climatePpe(weather);
  mandatory.push(...climateAdds.mandatory.filter((id) => !mandatory.includes(id)));
  climateAdds.recommended.forEach((id) => {
    if (!mandatory.includes(id) && !recommended.includes(id)) recommended.push(id);
  });

  const workLevel = Math.max(areaRule.risk, roleRule.risk);
  const climateLevel = climateAdds.level;
  const overallLevel = Math.max(workLevel, climateLevel);
  const rawScore = 100 - ((workLevel - 1) * 18 + (climateLevel - 1) * 18 + Math.max(0, mandatory.length - 4) * 3);
  const score = Math.max(35, Math.min(96, rawScore));

  return {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    ...payload,
    weather,
    mandatory,
    recommended,
    workLevel,
    climateLevel,
    overallLevel,
    score,
    workReason: explainWorkRisk(payload.area, payload.role, workLevel),
    climateReason: climateAdds.reason,
    ai: buildRecommendation(payload, weather, mandatory, recommended, workLevel, climateLevel, overallLevel)
  };
}

function climatePpe(weather) {
  if (!weather) {
    return {
      mandatory: [],
      recommended: ["solar"],
      level: 2,
      reason: "Sin clima confirmado; se recomienda criterio preventivo hasta actualizar datos."
    };
  }

  const mandatory = [];
  const recommended = [];
  const reasons = [];
  let level = 1;

  if (weather.uv >= 8 || weather.temperature >= 30) {
    recommended.push("solar");
    level = Math.max(level, 3);
    reasons.push("temperatura o radiacion UV elevada");
  } else if (weather.uv >= 6 || weather.temperature >= 27) {
    recommended.push("solar");
    level = Math.max(level, 2);
    reasons.push("exposicion solar moderada");
  }

  if (weather.rain >= 60) {
    recommended.push("impermeable");
    level = Math.max(level, 3);
    reasons.push("probabilidad alta de lluvia");
  } else if (weather.rain >= 35) {
    recommended.push("impermeable");
    level = Math.max(level, 2);
    reasons.push("posibilidad de lluvia");
  }

  if (weather.wind >= 35) {
    mandatory.push("arnes");
    level = Math.max(level, 3);
    reasons.push("viento fuerte en zonas expuestas");
  } else if (weather.wind >= 25) {
    level = Math.max(level, 2);
    reasons.push("viento moderado");
  }

  if (weather.humidity >= 85) {
    level = Math.max(level, 2);
    reasons.push("humedad elevada");
  }

  return {
    mandatory,
    recommended,
    level,
    reason: reasons.length ? `Se detecta ${reasons.join(", ")}.` : "Condiciones climaticas sin senales criticas."
  };
}

function explainWorkRisk(area, role, level) {
  const text = level === 3 ? "alto" : level === 2 ? "medio" : "bajo";
  return `El riesgo laboral es ${text} por la combinacion de area ${area} y puesto ${role}. Se priorizan controles antes del ingreso.`;
}

function buildRecommendation(payload, weather, mandatory, recommended, workLevel, climateLevel, overallLevel) {
  const level = labelRisk(overallLevel).toLowerCase();
  const weatherText = weather
    ? `${Math.round(weather.temperature)}°C, UV ${weather.uv}, viento ${Math.round(weather.wind)} km/h y ${Math.round(weather.rain)}% de lluvia`
    : "clima no confirmado";
  return [
    `<p><strong>Riesgo existente:</strong> nivel ${level} para ${payload.role} en ${payload.area}. El escenario combina exposicion propia de la tarea con condiciones climaticas actuales: ${weatherText}.</p>`,
    `<p><strong>Que podria ocurrir:</strong> sin controles pueden presentarse golpes, caidas, contacto con energia, lesiones oculares, fatiga termica o perdida de visibilidad, segun el frente de trabajo.</p>`,
    `<p><strong>Como prevenirlo:</strong> realizar charla de 5 minutos, inspeccionar herramientas, delimitar el area, confirmar permisos de trabajo y suspender actividades expuestas si el clima empeora.</p>`,
    `<p><strong>EPP a utilizar:</strong> obligatorio: ${names(mandatory).join(", ")}. Recomendado: ${names(recommended).join(", ")}.</p>`,
    `<p><strong>Decision operativa:</strong> ${decisionText(workLevel, climateLevel, overallLevel)}</p>`
  ].join("");
}

function decisionText(workLevel, climateLevel, overallLevel) {
  if (overallLevel === 3) return "ingreso condicionado a verificacion del supervisor, permiso de trabajo y controles instalados.";
  if (workLevel === 2 || climateLevel === 2) return "se puede iniciar con control activo, pausas programadas y revision de EPP.";
  return "se puede iniciar con supervision rutinaria y cumplimiento del EPP base.";
}

function renderAssessment(result) {
  renderWeather(result.weather);
  renderPpeList("#mandatoryList", result.mandatory);
  renderPpeList("#recommendedList", result.recommended);

  const risk = labelRisk(result.overallLevel);
  $("#overallTitle").textContent = `Riesgo ${risk}`;
  $("#overallText").textContent = result.overallLevel === 3
    ? "Se requiere control previo y validacion del supervisor antes de iniciar."
    : result.overallLevel === 2
      ? "Operacion permitida con controles activos y seguimiento durante la jornada."
      : "Operacion en condiciones favorables con EPP basico completo.";
  $("#scoreValue").textContent = result.score;
  $(".gauge").style.setProperty("--score", result.score);

  setMetric("#workRisk", "#workDot", "#workReason", result.workLevel, result.workReason);
  setMetric("#climateRisk", "#climateDot", "#climateReason", result.climateLevel, result.climateReason);
  setMetric("#ppeRisk", "#ppeDot", "#ppeReason", result.overallLevel, `${result.mandatory.length} equipos obligatorios y ${result.recommended.length} recomendados.`);
  setTraffic(result.overallLevel);
  $("#aiRecommendation").innerHTML = result.ai;
  $("#miniScore").textContent = result.score;
  $("#miniSignal").className = `signal ${riskClass(result.overallLevel)}`;
  $("#miniSummary").textContent = `${result.project}: ${result.role} en ${result.area}.`;
}

function setMetric(labelSelector, dotSelector, reasonSelector, level, reason) {
  $(labelSelector).textContent = labelRisk(level);
  $(dotSelector).className = `metric-dot ${riskClass(level)}`;
  $(reasonSelector).textContent = reason;
}

function setTraffic(level) {
  $("#trafficLight .red").classList.toggle("active", level === 3);
  $("#trafficLight .yellow").classList.toggle("active", level === 2);
  $("#trafficLight .green").classList.toggle("active", level === 1);
}

function labelRisk(level) {
  return level === 3 ? "Alto" : level === 2 ? "Medio" : "Bajo";
}

function riskClass(level) {
  return level === 3 ? "high" : level === 2 ? "medium" : "low";
}

function renderPpeList(selector, ids) {
  const container = $(selector);
  container.innerHTML = ids.map((id) => ppeCard(id)).join("");
  container.querySelectorAll(".ppe-card").forEach((card) => {
    card.addEventListener("click", () => {
      setView("biblioteca");
      showTraining(card.dataset.id);
    });
  });
}

function ppeCard(id) {
  const item = PPE[id];
  if (!item) return "";
  return `
    <button class="ppe-card" type="button" data-id="${id}">
      <span class="ppe-icon">${item.icon}</span>
      <strong>${item.name}</strong>
      <small>${item.function}</small>
    </button>
  `;
}

function renderLibrary() {
  const query = ($("#librarySearch")?.value || "").toLowerCase();
  const ids = Object.keys(PPE).filter((id) => {
    const item = PPE[id];
    return `${item.name} ${item.function} ${item.prevents.join(" ")}`.toLowerCase().includes(query);
  });
  $("#libraryGrid").innerHTML = ids.map((id) => {
    const item = PPE[id];
    return `
      <button class="library-item" type="button" data-id="${id}">
        <span class="library-visual">${item.icon}</span>
        <strong>${item.name}</strong>
        <small>${item.prevents.slice(0, 3).join(" · ")}</small>
      </button>
    `;
  }).join("");
  $$(".library-item").forEach((button) => button.addEventListener("click", () => showTraining(button.dataset.id)));
}

function setInitialTraining() {
  showTraining("casco");
}

function showTraining(id) {
  const item = PPE[id];
  if (!item) return;
  $$(".library-item").forEach((button) => button.classList.toggle("active", button.dataset.id === id));
  const query = encodeURIComponent(`${item.name} uso correcto seguridad construccion manual video`);
  $("#trainingDetail").innerHTML = `
    <div class="training-grid">
      <div>
        <p class="eyebrow">Ficha de capacitacion</p>
        <h2>${item.name}</h2>
        <p><strong>Funcion:</strong> ${item.function}</p>
        <p><strong>Riesgos que previene:</strong> ${item.prevents.join(", ")}.</p>
        <h3>Instrucciones de uso</h3>
        <ol class="steps">${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </div>
      <aside>
        <p class="eyebrow">Recursos educativos</p>
        <div class="resource-list">
          ${item.sources.map(([title, url]) => `<a href="${url}" target="_blank" rel="noopener">${title}<br><small>Fuente confiable</small></a>`).join("")}
          <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener">Videos explicativos<br><small>Busqueda educativa filtrable</small></a>
          <a href="https://duckduckgo.com/?q=${query}" target="_blank" rel="noopener">Imagenes, diagramas y manuales<br><small>Busqueda automatica en internet</small></a>
        </div>
      </aside>
    </div>
  `;
}

function saveAssessment(result) {
  db.history.unshift(result);
  db.history = db.history.slice(0, 20);
  if (!db.projects.includes(result.project)) db.projects.unshift(result.project);
  saveDB();
  renderHistory();
  renderProjects(result.project);
}

function renderHistory() {
  $("#historyList").innerHTML = db.history.length
    ? db.history.map((item) => `
      <article class="history-item">
        <strong>${item.project}</strong>
        <small>${new Date(item.date).toLocaleString("es-PE")} · ${item.role} · ${item.area}</small>
        <span>Indice ${item.score} · Riesgo ${labelRisk(item.overallLevel)}</span>
        <div class="history-actions">
          <button type="button" data-action="reuse" data-id="${item.id}">Reutilizar</button>
          <button type="button" data-action="training" data-id="${item.mandatory[0]}">Ver EPP clave</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty">Aun no hay consultas. Realiza el primer analisis para crear historial.</div>`;

  $("#historyList").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "reuse") reuseHistory(button.dataset.id);
      if (button.dataset.action === "training") {
        setView("biblioteca");
        showTraining(button.dataset.id);
      }
    });
  });
}

function reuseHistory(id) {
  const item = db.history.find((entry) => entry.id === id);
  if (!item) return;
  $("#projectSelect").value = item.project;
  $("#areaSelect").value = item.area;
  $("#roleSelect").value = item.role;
  $("#cityInput").value = item.city || "";
  $("#countryInput").value = item.country || "";
  setView("consulta");
  $("#assessmentForm").requestSubmit();
}

function saveProfile(event) {
  event.preventDefault();
  db.profile = {
    name: $("#workerName").value.trim(),
    roles: $("#usualRoles").value.trim(),
    projects: $("#frequentProjects").value.trim(),
    certifications: $("#certifications").value.trim(),
    equipment: $("#frequentEquipment").value.trim()
  };
  saveDB();
  renderProfile();
}

function renderProfile() {
  const profile = db.profile || {};
  $("#workerName").value = profile.name || "";
  $("#usualRoles").value = profile.roles || "";
  $("#frequentProjects").value = profile.projects || "";
  $("#certifications").value = profile.certifications || "";
  $("#frequentEquipment").value = profile.equipment || "";
  $("#profileName").textContent = profile.name || "Trabajador sin nombre";
  const tags = [
    ...(profile.roles || "").split(","),
    ...(profile.projects || "").split(","),
    ...(profile.equipment || "").split(",")
  ].map((tag) => tag.trim()).filter(Boolean);
  $("#profileTags").innerHTML = tags.length
    ? tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
    : `<span class="empty">Agrega puestos, obras o equipos frecuentes.</span>`;
  $("#profileNote").textContent = profile.certifications
    ? `Certificaciones registradas: ${profile.certifications}`
    : "El perfil se guarda en la base local del navegador.";
}

function loadDemo() {
  if (!db.projects.includes("Obra Norte")) db.projects.unshift("Obra Norte");
  renderProjects("Obra Norte");
  $("#areaSelect").value = "Instalaciones electricas";
  $("#roleSelect").value = "Electricista";
  $("#cityInput").value = "Lima";
  $("#countryInput").value = "Peru";
  db.profile = {
    name: "Carlos Ramirez",
    roles: "Electricista, Supervisor",
    projects: "Obra Norte, Edificio San Martin",
    certifications: "Trabajo en altura, bloqueo y etiquetado, primeros auxilios",
    equipment: "Casco, botas dielectricas, gafas, guantes"
  };
  saveDB();
  renderProfile();
  $("#assessmentForm").requestSubmit();
}

function unique(values) {
  return [...new Set(values)];
}

function names(ids) {
  return ids.map((id) => PPE[id]?.name).filter(Boolean);
}
