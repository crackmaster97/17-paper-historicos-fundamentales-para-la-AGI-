import { useState } from "react";

const papers = [
  {
    id: 1,
    category: "Lógica Simbólica & GOFAI",
    categoryShort: "SIMBÓLICA",
    color: "#E8D5B7",
    accent: "#C4A35A",
    papers: [
      {
        title: "Computing Machinery and Intelligence",
        authors: "Alan Turing",
        year: 1950,
        journal: "Mind",
        doi: "10.1093/mind/LIX.236.433",
        paradigm: "Lógica & Test de Turing",
        tldr: "Propone reemplazar 'piensa una máquina' con el juego de imitación. Fundamento filosófico de toda IA simbólica. No usa estadística: usa reglas lógicas sobre símbolos discretos.",
        why: "El punto de partida histórico. Toda IA no-estadística es descendiente directa de este marco: la inteligencia como manipulación formal de símbolos, no como inferencia probabilística.",
        mechanism: "Manipulación de símbolos discretos mediante reglas formales. El 'pensamiento' es ejecución de un programa lógico.",
        limitations: "El problema del marco (frame problem): actualizar el estado del mundo ante cambios es exponencialmente costoso con reglas explícitas.",
        relevanceToday: "La neurociencia computacional moderna reinterpreta este paper: los ganglios basales funcionan como un motor de reglas simbólicas sobre representaciones corticales continuas.",
        score: 99,
        tags: ["fundacional", "simbólico", "filosófico"]
      },
      {
        title: "Programs with Common Sense",
        authors: "John McCarthy",
        year: 1959,
        journal: "Proc. Teddington Conf. on Mechanisation of Thought Processes",
        paradigm: "Advice Taker / Lógica de primer orden",
        tldr: "Propone el 'Advice Taker': un sistema que razona sobre el mundo usando sentido común codificado en lógica de predicados. El conocimiento como base de datos lógica, no como distribución de probabilidad.",
        why: "Primera articulación formal de la IA basada en representación explícita del conocimiento. Anticipa los sistemas expertos y los knowledge graphs modernos (Cyc, Wikidata, Google KG).",
        mechanism: "Lógica de primer orden (FOL). Hechos: `at(I, home)`. Reglas: `can-go(X,Y) ← at(I,X) ∧ has-car(I)`. Inferencia por resolución.",
        limitations: "No escala: el espacio de búsqueda en FOL es semi-decidible. El problema de adquisición de conocimiento ('knowledge acquisition bottleneck') nunca fue resuelto.",
        relevanceToday: "Los LLMs de razonamiento (o3, R1) son una reinvención implícita del Advice Taker: el 'knowledge base' está distribuido en pesos, no en predicados explícitos, pero el objetivo es idéntico.",
        score: 94,
        tags: ["simbólico", "lógica", "conocimiento"]
      },
      {
        title: "SOAR: An Architecture for General Intelligence",
        authors: "Laird, Newell, Rosenbloom",
        year: 1987,
        journal: "Artificial Intelligence",
        doi: "10.1016/0004-3702(87)90050-6",
        paradigm: "Arquitectura cognitiva unificada",
        tldr: "SOAR (State, Operator And Result) modela la cognición completa como búsqueda en espacios de problemas. Un único mecanismo —el 'chunking'— explica desde la percepción hasta el razonamiento abstracto.",
        why: "El intento más serio de AGI pre-DL. Influencia directa en ACT-R (Anderson) y en las arquitecturas neurosimbólicas modernas (MIT's Genesis, IBM's neuro-symbolic AI).",
        mechanism: "Ciclo: reconocimiento de estado → selección de operador → aplicación → detección de impasse → aprendizaje por chunking. Todo el aprendizaje es compilación de trazas de resolución de problemas en reglas.",
        limitations: "El aprendizaje por chunking no generaliza fuera de los dominios entrenados. La percepción sensorial fue siempre el punto débil: SOAR asume representaciones simbólicas ya formadas.",
        relevanceToday: "La integración SOAR + LLM es activa en investigación (Laird et al. 2023): el LLM provee grounding perceptual; SOAR provee razonamiento estructurado.",
        score: 91,
        tags: ["arquitectura cognitiva", "AGI", "producción de reglas"]
      }
    ]
  },
  {
    id: 2,
    category: "Computación Analógica & Física",
    categoryShort: "ANALÓGICA",
    color: "#B7D4E8",
    accent: "#4A90D9",
    papers: [
      {
        title: "Computing with DNA",
        authors: "Leonard Adleman",
        year: 1994,
        journal: "Science",
        doi: "10.1126/science.7973651",
        paradigm: "Computación molecular / biocomputación",
        tldr: "Resuelve el problema del camino hamiltoniano (NP-completo) en un tubo de ensayo usando moléculas de ADN. La computación emerge de reacciones bioquímicas masivamente paralelas, sin transistores ni aritmética binaria.",
        why: "Demuestra que la 'computación' es un fenómeno físico general, no exclusivo del silicio. Abre la puerta a sistemas cognitivos basados en dinámica molecular. Relevante para entender cómo el cerebro podría computar.",
        mechanism: "Codificación de nodos del grafo como secuencias de ADN. La hibridación selectiva implementa la búsqueda de caminos. El 'output' es detección por PCR de la molécula correcta.",
        limitations: "Tasa de error alta, difícil de programar, escala pobremente a problemas grandes. No tiene memoria persistente ni capacidad de generalización.",
        relevanceToday: "Microsoft Research y Caltech trabajan en 'molecular computing' para inferencia IA ultra-eficiente. La inspiración es directamente este paper.",
        score: 88,
        tags: ["biocomputación", "paralelo masivo", "no-binario"]
      },
      {
        title: "Reservoir Computing with a Chaotic Circuit",
        authors: "Jaeger & Haas",
        year: 2004,
        journal: "Science",
        doi: "10.1126/science.1091277",
        paradigm: "Reservoir Computing / Echo State Networks",
        tldr: "Un sistema dinámico caótico fijo (el 'reservorio') transforma entradas en representaciones de alta dimensión. Solo se entrena la capa de salida. La 'inteligencia' emerge de la dinámica física del sistema, no de pesos ajustados.",
        why: "Muestra que el aprendizaje no requiere backpropagation ni ajuste de todos los parámetros. El substrato físico (circuito analógico, red de neuronas, spins) puede ser el computador. Influencia directa en hardware neuromórfico.",
        mechanism: "Input → sistema dinámico no lineal fijo → proyección de alta dimensión → regresión lineal de salida. Solo ~10% de los parámetros se 'aprenden'. El resto es dinámica emergente.",
        limitations: "La capacidad del reservorio es fija. No generaliza más allá de la dinámica del substrato. Difícil de diseñar reservorios óptimos.",
        relevanceToday: "Los 'physical neural networks' modernos (fotónicos, mecánicos, magnéticos) son todos variantes de reservoir computing. Intel Loihi 2 implementa principios similares.",
        score: 93,
        tags: ["dinámica caótica", "analógico", "hardware neuromórfico"]
      },
      {
        title: "Analog Electronic Neural Networks",
        authors: "Hopfield & Tank",
        year: 1986,
        journal: "Science",
        doi: "10.1126/science.3755256",
        paradigm: "Redes de Hopfield / Computación por energía",
        tldr: "Implementación analógica de redes de Hopfield para resolver el problema del viajante. El 'cómputo' es la relajación física de un sistema eléctrico hacia un mínimo de energía. No hay pasos discretos ni aritmética.",
        why: "Fundamento de las máquinas de Boltzmann, los modelos de difusión (Stable Diffusion) y las memorias asociativas modernas (Ramsauer et al. 2020). La computación como optimización de energía física.",
        mechanism: "Capacitores e inductores implementan la dinámica. La solución al problema es el estado de mínima energía del circuito. La 'inferencia' es relajación física.",
        limitations: "Mínimos locales. Capacidad de memoria que escala como O(n/log n). Generalización pobre a distribuciones fuera del entrenamiento.",
        relevanceToday: "Las 'modern Hopfield networks' (2020) tienen capacidad exponencial y son la base teórica de los mecanismos de atención en Transformers. El círculo se cierra.",
        score: 96,
        tags: ["energía", "analógico", "memoria asociativa"]
      }
    ]
  },
  {
    id: 3,
    category: "Teoría de la Información & Causalidad",
    categoryShort: "CAUSAL",
    color: "#D4E8B7",
    accent: "#5A9E3A",
    papers: [
      {
        title: "A Mathematical Theory of Communication",
        authors: "Claude Shannon",
        year: 1948,
        journal: "Bell System Technical Journal",
        doi: "10.1002/j.1538-7305.1948.tb01338.x",
        paradigm: "Teoría de la información",
        tldr: "Funda la teoría de la información. Define entropía, capacidad de canal, y demuestra la posibilidad de transmisión sin error con código adecuado. No estadística bayesiana: teoría matemática de la incertidumbre.",
        why: "La entropía de Shannon es el fundamento matemático de medidas de inteligencia como la complejidad de Kolmogorov y la información integrada (IIT). Una IA 'sin estadística' pero con teoría de información es concebible.",
        mechanism: "H(X) = -Σ p(x) log p(x). Cuantifica incertidumbre sin hacer inferencia causal. El canal de comunicación es una abstracción matemática pura.",
        limitations: "La teoría de Shannon es agnóstica sobre el significado (semántica). Mide cuánto se transmite, no qué significa lo transmitido.",
        relevanceToday: "La entropía de Shannon reaparece en: cross-entropy loss de LLMs, mutual information como objetivo de disentanglement, y en la IIT de Tononi como medida de consciencia.",
        score: 99,
        tags: ["fundacional", "información", "entropía"]
      },
      {
        title: "Causality: Models, Reasoning, and Inference",
        authors: "Judea Pearl",
        year: 2000,
        journal: "Cambridge University Press",
        paradigm: "Inferencia causal / do-calculus",
        tldr: "Distingue correlación, intervención y contrafactual mediante la 'escalera de causalidad'. El do-calculus permite razonar sobre intervenciones sin hacer experimentos. Los LLMs están atrapados en el peldaño 1 (correlación).",
        why: "Define formalmente lo que falta en todos los sistemas actuales: razonamiento causal. Una AGI debe escalar la escalera: observar → intervenir → imaginar. Ningún Transformer lo hace de forma nativa.",
        mechanism: "Grafos acíclicos dirigidos (DAGs) + do-operator. P(Y|do(X=x)) ≠ P(Y|X=x). La diferencia es la esencia del razonamiento causal versus estadística.",
        limitations: "Asumir la estructura del DAG requiere conocimiento previo o métodos de descubrimiento causal que escalan mal con dimensionalidad.",
        relevanceToday: "CausalBERT, causal representation learning (Schölkopf et al.), y los world models de Yann LeCun son intentos directos de implementar la escalera de Pearl en sistemas de aprendizaje profundo.",
        score: 97,
        tags: ["causalidad", "razonamiento", "fundacional"]
      },
      {
        title: "An Introduction to Kolmogorov Complexity",
        authors: "Li & Vitányi",
        year: 1997,
        journal: "Springer (libro)",
        paradigm: "Complejidad algorítmica / Inducción de Solomonoff",
        tldr: "La complejidad de Kolmogorov K(x) de una cadena x es la longitud del programa más corto que la genera. La inteligencia óptima (AIXI de Hutter) se define como el agente que actúa para maximizar recompensa futura bajo el prior de Solomonoff.",
        why: "AIXI es la única definición matemáticamente rigurosa de inteligencia general óptima. No usa redes neuronales ni estadística frecuentista: usa teoría de la computabilidad. Es incomputable pero define el ideal.",
        mechanism: "Prior universal de Solomonoff: M(x) = Σ 2^(-l(p)) para todo p que genera x. El agente AIXI elige acciones que maximizan la recompensa esperada bajo M. La 'comprensión' es compresión algorítmica.",
        limitations: "AIXI es incomputable. Las aproximaciones (MC-AIXI) escalan exponencialmente. La complejidad de Kolmogorov es no computable en el caso general.",
        relevanceToday: "Los LLMs son aproximaciones empíricas del prior de Solomonoff sobre texto. El debate sobre si la compresión implica comprensión (Hutter Prize) está directamente relacionado.",
        score: 95,
        tags: ["complejidad", "teoría de la computación", "AGI formal"]
      }
    ]
  },
  {
    id: 4,
    category: "Neurosimbólico & Arquitecturas Híbridas",
    categoryShort: "HÍBRIDO",
    color: "#E8B7D4",
    accent: "#C45A8A",
    papers: [
      {
        title: "Neural Turing Machines",
        authors: "Graves, Wayne, Danihelka (DeepMind)",
        year: 2014,
        journal: "arXiv:1410.5401",
        paradigm: "Computación diferenciable / Memoria externa",
        tldr: "Acopla una red neuronal con una memoria direccionable externa (análoga a la cinta de Turing). La red aprende algoritmos genuinos (copia, ordenamiento) que generalizan a longitudes no vistas. El primer paso hacia computación programática aprendida.",
        why: "Rompe la limitación fundamental de las RNNs y Transformers: la incapacidad de mantener estado arbitrario y ejecutar algoritmos que escalan con la entrada. Influencia directa en Memory-Augmented Neural Networks y en los sistemas de 'tool use' de LLMs.",
        mechanism: "Controller (LSTM) → mecanismo de atención sobre memoria externa → lectura/escritura diferenciable. El gradiente fluye a través de las operaciones de memoria.",
        limitations: "Entrenamiento inestable. No escala bien a memorias grandes. La atención soft sobre la memoria entera es O(n).",
        relevanceToday: "Los mecanismos de tool-use y retrieval-augmented generation (RAG) de GPT-4/Claude son implementaciones de alto nivel de la intuición NTM. Las DNC (2016) son la versión madura.",
        score: 96,
        tags: ["memoria", "algoritmos", "diferenciable"]
      },
      {
        title: "Mastering the Game of Go with Deep Neural Networks and Tree Search",
        authors: "Silver et al. (DeepMind)",
        year: 2016,
        journal: "Nature",
        doi: "10.1038/nature16961",
        paradigm: "Neuro-simbólico: DL + búsqueda simbólica",
        tldr: "AlphaGo combina redes neuronales convolucionales (valor y política) con Monte Carlo Tree Search (MCTS). Ni la red sola ni la búsqueda sola son suficientes: la inteligencia emerge de la integración.",
        why: "El ejemplo más exitoso de integración neurosimbólica. La red neuronal provee intuición; la búsqueda simbólica provee razonamiento preciso. Esta arquitectura dual es la base de AlphaCode, AlphaFold y los sistemas de razonamiento modernos.",
        mechanism: "MCTS guiado por policy network P(a|s) y value network V(s). La búsqueda expande selectivamente estados prometedores. El resultado es una forma de 'pensamiento lento' (sistema 2) sobre intuición rápida (sistema 1).",
        limitations: "Específico al dominio. Requiere un simulador perfecto del entorno. No transfiere a dominios con reglas desconocidas.",
        relevanceToday: "AlphaCode 2 usa la misma arquitectura para código. Los modelos de razonamiento (o1, R1) implementan MCTS sobre cadenas de pensamiento en lenguaje natural.",
        score: 98,
        tags: ["neuro-simbólico", "búsqueda", "sistema dual"]
      },
      {
        title: "Towards Deep Symbolic Reinforcement Learning",
        authors: "Garnelo, Arulkumaran, Shanahan",
        year: 2016,
        journal: "arXiv:1609.05518",
        paradigm: "RL simbólico profundo",
        tldr: "Propone aprender representaciones simbólicas directamente de percepción raw y razonar sobre ellas con RL. El sistema extrae objetos, relaciones y reglas sin supervisión, luego razona simbólicamente sobre ellas.",
        why: "Articula el programa de investigación que une percepción sub-simbólica con razonamiento simbólico. Influencia directa en Object-Centric Learning, Slot Attention, y los world models basados en objetos.",
        mechanism: "Módulo perceptual → extracción de entidades y relaciones → grafo de conocimiento dinámico → razonamiento y planificación simbólica → acción.",
        limitations: "La extracción de símbolos desde percepción raw sigue siendo el cuello de botella. El número de símbolos debe pre-especificarse.",
        relevanceToday: "AlphaGeometry (2024) de DeepMind es la realización más cercana: combina LM para intuición con motor de deducción simbólica para demostrar teoremas olímpicos.",
        score: 87,
        tags: ["simbólico", "RL", "representación"]
      }
    ]
  },
  {
    id: 5,
    category: "Computación Biológica & Neuromórfica",
    categoryShort: "NEURO",
    color: "#E8E4B7",
    accent: "#B8A020",
    papers: [
      {
        title: "Predictive Coding: A Fresh View of Inhibition in the Retina",
        authors: "Horace Barlow",
        year: 1961,
        journal: "Proc. Royal Society B",
        doi: "10.1098/rspb.1961.0085",
        paradigm: "Codificación predictiva / Free Energy",
        tldr: "El cerebro no transmite lo que ve: transmite solo lo que no predijo. La retina comprime señales eliminando redundancias predecibles. La percepción es predicción continua corregida por error.",
        why: "Fundamento del 'Predictive Processing' (Karl Friston) y del 'Free Energy Principle'. Una arquitectura de IA basada en minimización de energía libre predice el mundo y solo procesa sorpresas. Radicalmente diferente de LLMs.",
        mechanism: "Cada capa cortical predice la actividad de la capa inferior. Las neuronas de error propagan solo la discrepancia entre predicción y realidad. El aprendizaje minimiza la energía libre F = KL(q||p) - log P(datos).",
        limitations: "La implementación en silicio es no trivial. La convergencia es lenta. Difícil de escalar a dominios complejos.",
        relevanceToday: "Friston et al. 2022 proponen implementar Active Inference en robots. Andy Clark ('Surfing Uncertainty') aplica esto a cognición general. Es el paradigma más radical post-Transformer.",
        score: 94,
        tags: ["predictive coding", "free energy", "cerebro"]
      },
      {
        title: "Loihi: A Neuromorphic Manycore Processor with On-Chip Learning",
        authors: "Davies et al. (Intel Labs)",
        year: 2018,
        journal: "IEEE Micro",
        doi: "10.1109/MM.2018.112130359",
        paradigm: "Hardware neuromórfico / Spiking Neural Networks",
        tldr: "Loihi implementa 130,000 neuronas de disparo con aprendizaje on-chip mediante STDP (spike-timing dependent plasticity). Procesa información como trenes de pulsos temporales, no como operaciones matriciales.",
        why: "Las Spiking Neural Networks (SNNs) codifican información en el tiempo de los spikes, no en valores de activación. Son radicalmente más eficientes energéticamente y computacionalmente análogas al cerebro real.",
        mechanism: "Neuronas IF (integrate-and-fire): integran corriente de entrada, disparan cuando superan umbral, se resetean. La comunicación es sparse (solo spikes). Aprendizaje: STDP ajusta sinapsis según co-ocurrencia temporal.",
        limitations: "Entrenar SNNs con gradientes es no trivial (el spike es no diferenciable). El rendimiento en benchmarks de DL sigue siendo inferior a ANNs convencionales.",
        relevanceToday: "Loihi 2 (2021) escala a ~1M neuronas. IBM NorthPole (2023) lleva el paradigma a inferencia de redes densas. Intel proyecta chips con 10^9 neuronas para 2028.",
        score: 90,
        tags: ["spiking", "neuromórfico", "hardware"]
      },
      {
        title: "A Theory of How Columns in the Neocortex Enable Learning the Structure of the World",
        authors: "Hawkins & Ahmad (Numenta)",
        year: 2017,
        journal: "Frontiers in Neural Circuits",
        doi: "10.3389/fncir.2017.00081",
        paradigm: "Hierarchical Temporal Memory / Cortical columns",
        tldr: "Propone que cada columna cortical aprende un modelo completo del mundo usando location signals. La inteligencia no está en ninguna área específica: emerge de miles de columnas que 'votan' sobre representaciones del mundo.",
        why: "El modelo Thousand Brains Theory (2019) de Numenta es la arquitectura de IA más explícitamente inspirada en neurociencia desde las primeras redes. Si es correcto, los LLMs son la implementación equivocada de la corteza.",
        mechanism: "Columnas corticales: sparse distributed representations (SDRs) + temporal memory (secuencias) + location signals (grid cells). El aprendizaje es Hebbian + inhibición lateral. Sin backprop.",
        limitations: "Las predicciones computacionales del modelo no han superado a DL en benchmarks estándar. La implementación a escala es pendiente.",
        relevanceToday: "Numenta's HTM está siendo integrado con LLMs para añadir memoria temporal estructurada. La Thousand Brains Theory influye en diseños de chips de Intel.",
        score: 85,
        tags: ["cortical", "HTM", "neurociencia"]
      }
    ]
  },
  {
    id: 6,
    category: "Física Cuántica & Computación Cuántica",
    categoryShort: "CUÁNTICA",
    color: "#C8B7E8",
    accent: "#7A5AC4",
    papers: [
      {
        title: "Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer",
        authors: "David Deutsch",
        year: 1985,
        journal: "Proc. Royal Society A",
        doi: "10.1098/rspa.1985.0070",
        paradigm: "Computación cuántica universal",
        tldr: "Define la computadora cuántica universal. Muestra que la física cuántica requiere una extensión del Church-Turing Thesis. El qubits en superposición permite computar en paralelo exponencialmente muchos estados.",
        why: "Si la inteligencia es fundamentalmente un fenómeno computacional, la computación cuántica representa el cambio de paradigma más radical posible. Penrose argumenta que la consciencia misma es cuántica (Orchestrated OR).",
        mechanism: "Qubits en superposición: |ψ⟩ = α|0⟩ + β|1⟩. Compuertas cuánticas rotan el estado. La medición colapsa la superposición. La interferencia cuántica amplifica caminos correctos.",
        limitations: "Decoherencia: los estados cuánticos son frágiles. FTQC requiere corrección de errores que añade overhead masivo. Ventaja cuántica demostrada solo en problemas específicos.",
        relevanceToday: "Quantum Machine Learning (QML) busca ventaja cuántica en entrenamiento. Google Willow (2024) demuestra corrección de errores cuántica escalable. El horizonte de QML útil es post-2030.",
        score: 92,
        tags: ["cuántico", "computación universal", "fundacional"]
      },
      {
        title: "Quantum Approximate Optimization Algorithm",
        authors: "Farhi, Goldstone, Gutmann",
        year: 2014,
        journal: "arXiv:1411.4028",
        paradigm: "Optimización cuántica variacional",
        tldr: "QAOA es un algoritmo cuántico-clásico híbrido para problemas de optimización combinatoria. Podría acelerar la búsqueda en espacios de hiperparámetros de redes neuronales o el diseño de arquitecturas.",
        why: "Si QAOA logra ventaja cuántica práctica en optimización, podría ser el catalizador del salto desde IA estrecha a IA general: la búsqueda de arquitecturas óptimas es un problema de optimización combinatoria.",
        mechanism: "Circuito cuántico parametrizado que alterna capas de Hamiltoniano de problema y Hamiltoniano de mezcla. Parámetros ajustados clásicamente por optimizador exterior.",
        limitations: "Ventaja cuántica sobre clásico no demostrada para problemas de tamaño práctico. Ruidoso en hardware actual. El número de capas necesario para ventaja real es desconocido.",
        relevanceToday: "IBM, Google y Quantinuum tienen programas activos de QML. Los primeros benchmarks comparativos honestos (2023–2025) sugieren que la ventaja cuántica en ML es elusiva para problemas de IA.",
        score: 78,
        tags: ["cuántico", "optimización", "variacional"]
      }
    ]
  }
];

const allPapers = papers.flatMap(cat => cat.papers.map(p => ({ ...p, category: cat.category, categoryShort: cat.categoryShort, color: cat.color, accent: cat.accent })));

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [view, setView] = useState("grid");

  const filtered = activeCategory
    ? allPapers.filter(p => p.category === activeCategory)
    : allPapers;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8e0d0",
      overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=JetBrains+Mono:wght@300;400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { background: #0a0a0f; }

        .paper-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 2px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .paper-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 0;
          transition: height 0.3s ease;
        }
        .paper-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.15);
        }
        .paper-card:hover::before {
          height: 100%;
        }
        
        .cat-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(232,224,208,0.6);
          padding: 6px 14px;
          border-radius: 1px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.2s;
        }
        .cat-btn:hover, .cat-btn.active {
          background: rgba(255,255,255,0.08);
          color: #e8e0d0;
          border-color: rgba(255,255,255,0.3);
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .modal-content {
          background: #111118;
          border: 1px solid rgba(255,255,255,0.12);
          max-width: 760px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          border-radius: 2px;
          animation: slideUp 0.3s cubic-bezier(0.4,0,0.2,1);
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        
        .score-bar {
          height: 2px;
          background: rgba(255,255,255,0.05);
          border-radius: 1px;
          overflow: hidden;
          margin-top: 8px;
        }
        .score-fill {
          height: 100%;
          border-radius: 1px;
          transition: width 1s ease;
        }
        
        .tag {
          display: inline-block;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(232,224,208,0.5);
          padding: 2px 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          border-radius: 1px;
          margin: 2px;
        }
        
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.4;
          margin-bottom: 6px;
        }
        
        .detail-section {
          padding: 16px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 32px 28px",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
        }} />
        
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(232,224,208,0.35)",
            marginBottom: 14
          }}>
            Análisis de Papers Fundacionales — IA Post-Estadística
          </div>
          
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "#f0e8d8",
            marginBottom: 12
          }}>
            Más Allá de los<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(240,232,216,0.6)" }}>
              Transformers
            </span>
          </h1>
          
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "rgba(232,224,208,0.45)",
            maxWidth: 560,
            lineHeight: 1.7
          }}>
            {allPapers.length} papers históricos fundamentales para construir inteligencias que no dependen
            de nodos estadísticos ni arquitecturas autorregresivas.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        padding: "20px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
        maxWidth: 1100,
        margin: "0 auto"
      }}>
        <button className={`cat-btn ${!activeCategory ? 'active' : ''}`} onClick={() => setActiveCategory(null)}>
          Todos ({allPapers.length})
        </button>
        {papers.map(cat => (
          <button
            key={cat.id}
            className={`cat-btn ${activeCategory === cat.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
            style={{ borderColor: activeCategory === cat.category ? cat.accent + '80' : undefined }}
          >
            {cat.categoryShort} ({cat.papers.length})
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "28px 32px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 12
      }}>
        {filtered.map((paper, i) => (
          <div
            key={i}
            className="paper-card"
            style={{ "--accent": paper.accent } as React.CSSProperties}
            onClick={() => setSelected(paper)}
          >
            <style>{`.paper-card:hover::before { background: ${paper.accent}; }`}</style>
            
            {/* Category badge */}
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: paper.accent,
              marginBottom: 12,
              opacity: 0.8
            }}>
              {paper.categoryShort}
            </div>

            {/* Year */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 48,
              fontWeight: 900,
              color: "rgba(255,255,255,0.04)",
              position: "absolute",
              right: 16,
              top: 10,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none"
            }}>
              {paper.year}
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#f0e8d8",
              marginBottom: 6,
              paddingRight: 20
            }}>
              {paper.title}
            </h3>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "rgba(232,224,208,0.4)",
              marginBottom: 12
            }}>
              {paper.authors} · {paper.year}
            </div>

            <p style={{
              fontSize: 12,
              lineHeight: 1.65,
              color: "rgba(232,224,208,0.55)",
              marginBottom: 14,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
              {paper.tldr}
            </p>

            {/* Score */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: paper.accent,
                letterSpacing: "0.1em"
              }}>
                RELEVANCIA {paper.score}/100
              </div>
            </div>
            <div className="score-bar">
              <div className="score-fill" style={{
                width: `${paper.score}%`,
                background: `linear-gradient(90deg, ${paper.accent}80, ${paper.accent})`
              }} />
            </div>

            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap" }}>
              {paper.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal header */}
            <div style={{
              padding: "28px 28px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              position: "sticky",
              top: 0,
              background: "#111118",
              zIndex: 10
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: selected.accent,
                  marginBottom: 10,
                  textTransform: "uppercase"
                }}>
                  {selected.categoryShort} · {selected.year} · Relevancia {selected.score}/100
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(232,224,208,0.4)",
                    width: 28,
                    height: 28,
                    cursor: "pointer",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1
                  }}
                >×</button>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#f0e8d8",
                lineHeight: 1.25,
                marginBottom: 8
              }}>
                {selected.title}
              </h2>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "rgba(232,224,208,0.45)"
              }}>
                {selected.authors} — <span style={{ fontStyle: "italic" }}>{selected.journal}</span>
              </div>
            </div>

            <div style={{ padding: "0 28px 28px" }}>
              {/* Paradigm pill */}
              <div style={{
                display: "inline-block",
                background: selected.accent + "15",
                border: `1px solid ${selected.accent}40`,
                color: selected.accent,
                padding: "4px 12px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                borderRadius: 1,
                marginTop: 20,
                marginBottom: 20
              }}>
                PARADIGMA: {selected.paradigm}
              </div>

              {[
                { label: "TL;DR — Contribución central", content: selected.tldr },
                { label: "Por qué es fundamental para IA no-estadística", content: selected.why },
                { label: "Mecanismo técnico", content: selected.mechanism },
                { label: "Limitaciones conocidas", content: selected.limitations },
                { label: "Relevancia en 2024–2026", content: selected.relevanceToday }
              ].map((section, i) => (
                <div key={i} className="detail-section">
                  <div className="section-label">{section.label}</div>
                  <p style={{
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: "rgba(232,224,208,0.72)"
                  }}>
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Score bar large */}
              <div style={{ marginTop: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(232,224,208,0.35)", letterSpacing: "0.15em" }}>RELEVANCIA HISTÓRICA</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: selected.accent }}>{selected.score}/100</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 1 }}>
                  <div style={{
                    height: "100%",
                    width: `${selected.score}%`,
                    background: `linear-gradient(90deg, ${selected.accent}60, ${selected.accent})`,
                    borderRadius: 1
                  }} />
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap" }}>
                {selected.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {selected.doi && (
                <div style={{ marginTop: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(232,224,208,0.2)" }}>
                  DOI: {selected.doi}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
