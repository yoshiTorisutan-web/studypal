const STORAGE_KEY = "studypal-state-v1";
const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;

const QUIZ_BANK = [
  {
    id: "quiz-1",
    category: "Biologie",
    question: "Quel organite est principalement responsable de la production d'ATP ?",
    options: ["Le noyau", "La mitochondrie", "Le ribosome", "Le lysosome"],
    answer: 1,
    explanation: "La mitochondrie assure la respiration cellulaire et produit l'ATP nécessaire à la cellule."
  },
  {
    id: "quiz-2",
    category: "Biologie",
    question: "Pendant la mitose, quelle phase correspond à l'alignement des chromosomes au centre de la cellule ?",
    options: ["Prophase", "Métaphase", "Anaphase", "Télophase"],
    answer: 1,
    explanation: "Les chromosomes s'alignent sur la plaque équatoriale pendant la métaphase."
  },
  {
    id: "quiz-3",
    category: "Histoire",
    question: "Quel événement marque traditionnellement le début de la Révolution française ?",
    options: ["Le sacre de Napoléon", "La prise de la Bastille", "La fuite à Varennes", "Le congrès de Vienne"],
    answer: 1,
    explanation: "La prise de la Bastille, le 14 juillet 1789, est le symbole du déclenchement révolutionnaire."
  },
  {
    id: "quiz-4",
    category: "Maths",
    question: "Quel est le résultat de la dérivée de x² ?",
    options: ["x", "2x", "x²", "2"],
    answer: 1,
    explanation: "La dérivée de x² est 2x selon la règle de dérivation des puissances."
  },
  {
    id: "quiz-5",
    category: "Maths",
    question: "Dans un triangle rectangle, quel théorème relie les longueurs des côtés ?",
    options: ["Théorème de Thalès", "Théorème de Pythagore", "Théorème de Fermat", "Théorème de Gauss"],
    answer: 1,
    explanation: "Le théorème de Pythagore établit que c² = a² + b²."
  },
  {
    id: "quiz-6",
    category: "Droit",
    question: "Quel principe impose que nul ne peut être condamné sans texte préalable ?",
    options: ["Principe de légalité", "Principe de subsidiarité", "Principe de primauté", "Principe de neutralité"],
    answer: 0,
    explanation: "Le principe de légalité des délits et des peines exige un texte préalable."
  },
  {
    id: "quiz-7",
    category: "Langues",
    question: "Quel temps anglais exprime une action commencée dans le passé et encore liée au présent ?",
    options: ["Simple past", "Past perfect", "Present perfect", "Future continuous"],
    answer: 2,
    explanation: "Le present perfect relie une action passée à ses effets dans le présent."
  },
  {
    id: "quiz-8",
    category: "Physique",
    question: "Quelle grandeur se mesure en newtons ?",
    options: ["La puissance", "La masse", "La force", "L'énergie"],
    answer: 2,
    explanation: "Le newton est l'unité de mesure de la force."
  },
  {
    id: "quiz-9",
    category: "Physique",
    question: "Quelle loi relie tension, intensité et résistance ?",
    options: ["Loi de Boyle", "Loi d'Ohm", "Loi de Hooke", "Loi de Snell"],
    answer: 1,
    explanation: "La loi d'Ohm s'écrit U = R x I."
  },
  {
    id: "quiz-10",
    category: "Langues",
    question: "Quel mot est un faux ami fréquent en anglais pour les francophones ?",
    options: ["Actually", "Window", "Notebook", "Station"],
    answer: 0,
    explanation: "Actually signifie en réalité, et non actuellement."
  }
];

const elements = {
  currentDateLabel: document.getElementById("currentDateLabel"),
  heroRing: document.getElementById("heroRing"),
  heroMemoryPercent: document.getElementById("heroMemoryPercent"),
  heroDueCount: document.getElementById("heroDueCount"),
  heroStudyToday: document.getElementById("heroStudyToday"),
  heroBestScore: document.getElementById("heroBestScore"),
  heroExamCountdown: document.getElementById("heroExamCountdown"),
  heroInsight: document.getElementById("heroInsight"),
  cardsTotalStat: document.getElementById("cardsTotalStat"),
  dueTodayStat: document.getElementById("dueTodayStat"),
  memoryRateStat: document.getElementById("memoryRateStat"),
  studyTodayStat: document.getElementById("studyTodayStat"),
  goalsDoneStat: document.getElementById("goalsDoneStat"),
  daysLeftStat: document.getElementById("daysLeftStat"),
  memoryBars: document.getElementById("memoryBars"),
  dailyPlan: document.getElementById("dailyPlan"),
  masteryGrid: document.getElementById("masteryGrid"),
  achievementList: document.getElementById("achievementList"),
  dataStatus: document.getElementById("dataStatus"),
  importDataInput: document.getElementById("importDataInput"),
  exportDataBtn: document.getElementById("exportDataBtn"),
  importDataBtn: document.getElementById("importDataBtn"),
  resetDemoBtn: document.getElementById("resetDemoBtn"),
  focusModeLabel: document.getElementById("focusModeLabel"),
  cardFormTitle: document.getElementById("cardFormTitle"),
  cardSubmitLabel: document.getElementById("cardSubmitLabel"),
  cardEditCancelBtn: document.getElementById("cardEditCancelBtn"),
  cardSearch: document.getElementById("cardSearch"),
  cardFilterCategory: document.getElementById("cardFilterCategory"),
  cardFilterStatus: document.getElementById("cardFilterStatus"),
  cardSort: document.getElementById("cardSort"),
  reviewQueueCount: document.getElementById("reviewQueueCount"),
  nextReviewLabel: document.getElementById("nextReviewLabel"),
  reviewCard: document.getElementById("reviewCard"),
  reviewCategory: document.getElementById("reviewCategory"),
  reviewQuestion: document.getElementById("reviewQuestion"),
  reviewAnswer: document.getElementById("reviewAnswer"),
  reviewStrength: document.getElementById("reviewStrength"),
  dueDeckList: document.getElementById("dueDeckList"),
  cardLibrary: document.getElementById("cardLibrary"),
  quizMode: document.getElementById("quizMode"),
  quizCategoryFilter: document.getElementById("quizCategoryFilter"),
  quizQuestionCount: document.getElementById("quizQuestionCount"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  retryMistakesBtn: document.getElementById("retryMistakesBtn"),
  quizProgressBar: document.getElementById("quizProgressBar"),
  quizProgressLabel: document.getElementById("quizProgressLabel"),
  quizScoreLabel: document.getElementById("quizScoreLabel"),
  quizTimerLabel: document.getElementById("quizTimerLabel"),
  quizCategory: document.getElementById("quizCategory"),
  quizQuestion: document.getElementById("quizQuestion"),
  quizOptions: document.getElementById("quizOptions"),
  quizExplanation: document.getElementById("quizExplanation"),
  quizNextBtn: document.getElementById("quizNextBtn"),
  quizSummary: document.getElementById("quizSummary"),
  timerRing: document.getElementById("timerRing"),
  timerDisplay: document.getElementById("timerDisplay"),
  timerTargetLabel: document.getElementById("timerTargetLabel"),
  timerProgressLabel: document.getElementById("timerProgressLabel"),
  timerMode: document.getElementById("timerMode"),
  timerNote: document.getElementById("timerNote"),
  studyTotals: document.getElementById("studyTotals"),
  sessionList: document.getElementById("sessionList"),
  studyTrend: document.getElementById("studyTrend"),
  goalProgressSummary: document.getElementById("goalProgressSummary"),
  goalList: document.getElementById("goalList"),
  revisionCountdown: document.getElementById("revisionCountdown"),
  revisionUrgency: document.getElementById("revisionUrgency"),
  revisionMinutes: document.getElementById("revisionMinutes"),
  revisionWeakPoints: document.getElementById("revisionWeakPoints"),
  examChecklist: document.getElementById("examChecklist"),
  examFocusDeck: document.getElementById("examFocusDeck"),
  revisionAdvice: document.getElementById("revisionAdvice"),
  toggleRevisionBtn: document.getElementById("toggleRevisionBtn"),
  examTitle: document.getElementById("examTitle"),
  examDate: document.getElementById("examDate"),
  examTarget: document.getElementById("examTarget")
};

let timerInterval = null;
let quizInterval = null;
let reviewState = {
  currentCardId: null,
  flipped: false
};

const uiState = {
  editingCardId: null,
  flashcardQuery: "",
  flashcardCategory: "all",
  flashcardStatus: "all",
  flashcardSort: "priority",
  actionStatus: "Les données restent sauvegardées localement dans le navigateur."
};

let quizSession = createEmptyQuizSession();

const defaultState = createInitialState();
let state = loadState();

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function createDateOffset(days, hours = 0) {
  return new Date(Date.now() + days * DAY_MS + hours * HOUR_MS).toISOString();
}

function createInitialState() {
  return {
    cards: [
      {
        id: uid("card"),
        question: "Quelle est la fonction principale des mitochondries ?",
        answer: "Produire l'énergie cellulaire sous forme d'ATP via la respiration cellulaire.",
        category: "Biologie",
        ease: 2.45,
        interval: 2,
        repetition: 2,
        nextReview: createDateOffset(-1),
        successCount: 6,
        failCount: 1,
        lastReviewed: createDateOffset(-2)
      },
      {
        id: uid("card"),
        question: "Quelle date marque la prise de la Bastille ?",
        answer: "Le 14 juillet 1789.",
        category: "Histoire",
        ease: 2.2,
        interval: 3,
        repetition: 2,
        nextReview: createDateOffset(1),
        successCount: 4,
        failCount: 2,
        lastReviewed: createDateOffset(-3)
      },
      {
        id: uid("card"),
        question: "Comment dériver x² ?",
        answer: "Sa dérivée est 2x.",
        category: "Maths",
        ease: 2.55,
        interval: 5,
        repetition: 3,
        nextReview: createDateOffset(-0.25),
        successCount: 8,
        failCount: 1,
        lastReviewed: createDateOffset(-1)
      },
      {
        id: uid("card"),
        question: "Quel est le principe de légalité des délits et des peines ?",
        answer: "Aucune infraction ni peine ne peut exister sans un texte préalable qui la prévoit.",
        category: "Droit",
        ease: 2.0,
        interval: 1,
        repetition: 1,
        nextReview: createDateOffset(0, -2),
        successCount: 2,
        failCount: 2,
        lastReviewed: createDateOffset(-1)
      },
      {
        id: uid("card"),
        question: "Quel temps anglais sert à relier le passé au présent ?",
        answer: "Le present perfect.",
        category: "Langues",
        ease: 2.15,
        interval: 2,
        repetition: 1,
        nextReview: createDateOffset(2),
        successCount: 3,
        failCount: 2,
        lastReviewed: createDateOffset(-2)
      },
      {
        id: uid("card"),
        question: "Quelle loi s'écrit U = R x I ?",
        answer: "La loi d'Ohm.",
        category: "Physique",
        ease: 2.35,
        interval: 4,
        repetition: 2,
        nextReview: createDateOffset(0, -6),
        successCount: 5,
        failCount: 1,
        lastReviewed: createDateOffset(-4)
      }
    ],
    goals: [
      {
        id: uid("goal"),
        title: "Boucler les 20 cartes de biologie",
        category: "Biologie",
        current: 12,
        target: 20,
        deadline: new Date(Date.now() + 8 * DAY_MS).toISOString().slice(0, 10),
        completed: false
      },
      {
        id: uid("goal"),
        title: "Obtenir 85% au quiz maths",
        category: "Maths",
        current: 7,
        target: 10,
        deadline: new Date(Date.now() + 6 * DAY_MS).toISOString().slice(0, 10),
        completed: false
      },
      {
        id: uid("goal"),
        title: "Réviser 5 décisions clés",
        category: "Droit",
        current: 5,
        target: 5,
        deadline: new Date(Date.now() + 3 * DAY_MS).toISOString().slice(0, 10),
        completed: true
      }
    ],
    studySessions: [
      {
        id: uid("session"),
        mode: "Flashcards",
        durationMinutes: 35,
        targetMinutes: 45,
        completedAt: createDateOffset(0, -3)
      },
      {
        id: uid("session"),
        mode: "Lecture active",
        durationMinutes: 50,
        targetMinutes: 60,
        completedAt: createDateOffset(-1, -2)
      },
      {
        id: uid("session"),
        mode: "Quiz",
        durationMinutes: 22,
        targetMinutes: 25,
        completedAt: createDateOffset(-2, -1)
      },
      {
        id: uid("session"),
        mode: "Révision examen",
        durationMinutes: 65,
        targetMinutes: 60,
        completedAt: createDateOffset(-3, -4)
      }
    ],
    quizHistory: {
      attempts: [
        {
          id: uid("attempt"),
          date: createDateOffset(-2),
          mode: "mixed",
          category: "all",
          score: 80,
          rawScore: 4,
          total: 5,
          durationSeconds: 185,
          wrongIds: ["quiz-6"]
        },
        {
          id: uid("attempt"),
          date: createDateOffset(-1),
          mode: "exam",
          category: "Biologie",
          score: 60,
          rawScore: 3,
          total: 5,
          durationSeconds: 242,
          wrongIds: ["quiz-2", "quiz-7"]
        }
      ],
      bestScore: 80,
      mistakes: {
        "quiz-2": 2,
        "quiz-6": 2,
        "quiz-7": 1
      }
    },
    exam: {
      title: "Partiel de biologie cellulaire",
      date: new Date(Date.now() + 9 * DAY_MS).toISOString().slice(0, 10),
      targetScore: 85,
      focusMode: false
    },
    timer: {
      isRunning: false,
      startedAt: null,
      elapsedMs: 0,
      mode: "Lecture active",
      targetMinutes: 45,
      note: ""
    }
  };
}

function loadState() {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return JSON.parse(JSON.stringify(defaultState));
    }

    const parsed = JSON.parse(rawState);
    return normalizeState(parsed);
  } catch (error) {
    return JSON.parse(JSON.stringify(defaultState));
  }
}

function normalizeState(parsed) {
  return {
    cards: Array.isArray(parsed.cards) ? parsed.cards : defaultState.cards,
    goals: Array.isArray(parsed.goals) ? parsed.goals : defaultState.goals,
    studySessions: Array.isArray(parsed.studySessions) ? parsed.studySessions : defaultState.studySessions,
    quizHistory: {
      attempts: Array.isArray(parsed.quizHistory?.attempts) ? parsed.quizHistory.attempts : defaultState.quizHistory.attempts,
      bestScore: Number.isFinite(parsed.quizHistory?.bestScore) ? parsed.quizHistory.bestScore : defaultState.quizHistory.bestScore,
      mistakes: typeof parsed.quizHistory?.mistakes === "object" && parsed.quizHistory?.mistakes
        ? parsed.quizHistory.mistakes
        : defaultState.quizHistory.mistakes
    },
    exam: {
      ...defaultState.exam,
      ...parsed.exam
    },
    timer: {
      ...defaultState.timer,
      ...parsed.timer
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setActionStatus(message) {
  uiState.actionStatus = message;
  elements.dataStatus.textContent = message;
}

function createEmptyQuizSession() {
  return {
    active: false,
    mode: "mixed",
    category: "all",
    questionCount: 5,
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    selectedOption: null,
    results: [],
    startedAt: null,
    elapsedSeconds: 0,
    summary: null
  };
}

function formatDate(dateString, options = {}) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    ...options
  }).format(date);
}

function formatDateTime(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function pluralize(count, singular, plural) {
  return `${count} ${count > 1 ? plural : singular}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatMinutes(totalMinutes) {
  if (!totalMinutes) {
    return "0 min";
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (!hours) {
    return `${minutes} min`;
  }

  if (!minutes) {
    return `${hours} h`;
  }

  return `${hours} h ${minutes}`;
}

function formatTimer(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function formatClockSeconds(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getAvailableCategories() {
  const categories = new Set([
    ...state.cards.map((card) => card.category),
    ...QUIZ_BANK.map((question) => question.category)
  ]);

  return [...categories].filter(Boolean).sort((a, b) => a.localeCompare(b, "fr"));
}

function syncSelectOptions(select, options, selectedValue, allLabel = "Toutes") {
  const optionMarkup = [`<option value="all">${allLabel}</option>`]
    .concat(options.map((option) => `<option value="${option}">${option}</option>`))
    .join("");

  select.innerHTML = optionMarkup;
  select.value = options.includes(selectedValue) || selectedValue === "all" ? selectedValue : "all";
}

function getCardMemoryRate(card) {
  const attempts = card.successCount + card.failCount;
  if (!attempts) {
    return 50;
  }
  return Math.round((card.successCount / attempts) * 100);
}

function getDaysLeft() {
  if (!state.exam.date) {
    return null;
  }

  const end = new Date(`${state.exam.date}T23:59:59`).getTime();
  const diff = end - Date.now();
  return Math.ceil(diff / DAY_MS);
}

function getDueCards() {
  const now = Date.now();
  const daysLeft = getDaysLeft();

  return [...state.cards]
    .map((card) => {
      const dueAt = new Date(card.nextReview).getTime();
      const memoryRate = getCardMemoryRate(card);
      const due = dueAt <= now;
      const weak = memoryRate < 70 || card.failCount > card.successCount;
      let priority = due ? 5 : 0;
      priority += (100 - memoryRate) / 20;

      if (state.exam.focusMode && daysLeft !== null && daysLeft <= 10 && weak) {
        priority += 3;
      }

      return {
        ...card,
        due,
        weak,
        memoryRate,
        priority
      };
    })
    .filter((card) => card.due || (state.exam.focusMode && card.weak && getDaysLeft() !== null && getDaysLeft() <= 10))
    .sort((a, b) => b.priority - a.priority || new Date(a.nextReview) - new Date(b.nextReview));
}

function getUpcomingCards(limit = 4) {
  return [...state.cards]
    .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview))
    .slice(0, limit);
}

function getCardsByCategory() {
  return state.cards.reduce((accumulator, card) => {
    const key = card.category.trim() || "Général";
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(card);
    return accumulator;
  }, {});
}

function getWeakCards(limit = 5) {
  return [...state.cards]
    .map((card) => ({
      ...card,
      memoryRate: getCardMemoryRate(card)
    }))
    .sort((a, b) => a.memoryRate - b.memoryRate || new Date(a.nextReview) - new Date(b.nextReview))
    .slice(0, limit);
}

function getFilteredLibraryCards() {
  const query = uiState.flashcardQuery.trim().toLowerCase();

  return [...state.cards]
    .map((card) => {
      const memoryRate = getCardMemoryRate(card);
      const due = new Date(card.nextReview).getTime() <= Date.now();
      const weak = memoryRate < 70 || card.failCount > card.successCount;
      return {
        ...card,
        memoryRate,
        due,
        weak,
        priority: (due ? 12 : 0) + (100 - memoryRate) + Math.max(0, 3 - card.repetition) * 8
      };
    })
    .filter((card) => {
      if (uiState.flashcardCategory !== "all" && card.category !== uiState.flashcardCategory) {
        return false;
      }

      if (uiState.flashcardStatus === "due" && !card.due) {
        return false;
      }

      if (uiState.flashcardStatus === "weak" && !card.weak) {
        return false;
      }

      if (uiState.flashcardStatus === "new" && card.repetition !== 0) {
        return false;
      }

      if (uiState.flashcardStatus === "strong" && !(card.memoryRate >= 85 && card.repetition >= 3)) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [card.question, card.answer, card.category].some((value) => value.toLowerCase().includes(query));
    })
    .sort((a, b) => {
      if (uiState.flashcardSort === "nextReview") {
        return new Date(a.nextReview) - new Date(b.nextReview);
      }

      if (uiState.flashcardSort === "memoryDesc") {
        return b.memoryRate - a.memoryRate;
      }

      if (uiState.flashcardSort === "memoryAsc") {
        return a.memoryRate - b.memoryRate;
      }

      if (uiState.flashcardSort === "category") {
        return a.category.localeCompare(b.category, "fr") || a.question.localeCompare(b.question, "fr");
      }

      return b.priority - a.priority || new Date(a.nextReview) - new Date(b.nextReview);
    });
}

function getStudyMinutesForRange(days) {
  const threshold = Date.now() - days * DAY_MS;
  return state.studySessions
    .filter((session) => new Date(session.completedAt).getTime() >= threshold)
    .reduce((total, session) => total + session.durationMinutes, 0);
}

function getStudyMinutesToday() {
  const today = new Date().toDateString();
  return state.studySessions
    .filter((session) => new Date(session.completedAt).toDateString() === today)
    .reduce((total, session) => total + session.durationMinutes, 0);
}

function getStudyStreak() {
  const daySet = new Set(
    state.studySessions.map((session) => new Date(session.completedAt).toDateString())
  );

  let streak = 0;
  const cursor = new Date();

  while (daySet.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function getStudyTrend(days = 7) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (days - 1 - index));
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    const minutes = state.studySessions
      .filter((session) => {
        const completedAt = new Date(session.completedAt).getTime();
        return completedAt >= date.getTime() && completedAt < nextDate.getTime();
      })
      .reduce((total, session) => total + session.durationMinutes, 0);

    return {
      label: new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date),
      minutes
    };
  });
}

function getRecentAverageQuizScore(limit = 5) {
  const attempts = state.quizHistory.attempts.slice(0, limit);
  if (!attempts.length) {
    return 0;
  }

  return Math.round(attempts.reduce((sum, attempt) => sum + attempt.score, 0) / attempts.length);
}

function getAchievementItems() {
  const totalStudyMinutes = state.studySessions.reduce((sum, session) => sum + session.durationMinutes, 0);
  const streak = getStudyStreak();
  const goalStats = getGoalStats();

  return [
    {
      done: state.cards.length >= 10,
      title: "Bibliothèque solide",
      detail: `${state.cards.length} carte(s) créées`
    },
    {
      done: state.quizHistory.bestScore >= 80,
      title: "Quiz maîtrisé",
      detail: `meilleur score ${state.quizHistory.bestScore || 0}%`
    },
    {
      done: totalStudyMinutes >= 300,
      title: "Cap des 5 heures",
      detail: `${formatMinutes(totalStudyMinutes)} d'étude cumulée`
    },
    {
      done: streak >= 3,
      title: "Habitude régulière",
      detail: `${pluralize(streak, "jour", "jours")} de suite`
    },
    {
      done: goalStats.completed >= Math.max(1, Math.ceil(goalStats.total / 2)),
      title: "Objectifs sous contrôle",
      detail: `${goalStats.completed}/${goalStats.total} objectif(s) finalisés`
    }
  ];
}

function getGoalStats() {
  const total = state.goals.length;
  const completed = state.goals.filter((goal) => goal.completed || goal.current >= goal.target).length;
  return {
    total,
    completed,
    ratio: total ? Math.round((completed / total) * 100) : 0
  };
}

function getQuizMistakeCount() {
  return Object.values(state.quizHistory.mistakes).reduce((sum, value) => sum + value, 0);
}

function getRecommendedDailyMinutes() {
  const daysLeft = getDaysLeft();
  const dueCount = getDueCards().length;
  const weakCount = getWeakCards(99).filter((card) => getCardMemoryRate(card) < 75).length;
  const mistakeCount = getQuizMistakeCount();

  if (daysLeft === null) {
    return 35;
  }

  if (daysLeft <= 0) {
    return 120;
  }

  const load = dueCount * 7 + weakCount * 5 + mistakeCount * 3;
  return clamp(Math.ceil(load / Math.max(daysLeft, 1)), 20, 150);
}

function ensureReviewCard() {
  const existingSelection = state.cards.some((card) => card.id === reviewState.currentCardId);
  if (existingSelection) {
    return;
  }

  const dueCards = getDueCards();
  if (dueCards.length) {
    reviewState.currentCardId = dueCards[0].id;
    reviewState.flipped = false;
    return;
  }

  reviewState.currentCardId = null;
  reviewState.flipped = false;
}

function getCurrentReviewCard() {
  ensureReviewCard();
  return state.cards.find((card) => card.id === reviewState.currentCardId) || null;
}

function renderOverview() {
  const dueCards = getDueCards();
  const memoryRates = state.cards.map((card) => getCardMemoryRate(card));
  const averageMemory = memoryRates.length
    ? Math.round(memoryRates.reduce((sum, rate) => sum + rate, 0) / memoryRates.length)
    : 0;
  const studyToday = getStudyMinutesToday();
  const goalStats = getGoalStats();
  const bestScore = state.quizHistory.bestScore || 0;
  const daysLeft = getDaysLeft();

  elements.currentDateLabel.textContent = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());

  elements.cardsTotalStat.textContent = state.cards.length;
  elements.dueTodayStat.textContent = dueCards.length;
  elements.memoryRateStat.textContent = `${averageMemory}%`;
  elements.studyTodayStat.textContent = formatMinutes(studyToday);
  elements.goalsDoneStat.textContent = `${goalStats.completed}/${goalStats.total}`;
  elements.daysLeftStat.textContent = daysLeft === null ? "-" : daysLeft < 0 ? "Passé" : `${daysLeft} j`;

  elements.heroMemoryPercent.textContent = `${averageMemory}%`;
  elements.heroDueCount.textContent = dueCards.length;
  elements.heroStudyToday.textContent = formatMinutes(studyToday);
  elements.heroBestScore.textContent = `${bestScore}%`;
  elements.heroExamCountdown.textContent = daysLeft === null ? "-" : daysLeft < 0 ? "examen passé" : `${daysLeft} j`;
  elements.heroRing.style.setProperty("--progress", `${averageMemory}%`);

  const focusText = state.exam.focusMode
    ? "Le mode révision est actif: la file priorise les notions fragiles avant l'examen."
    : dueCards.length
      ? `Tu as ${pluralize(dueCards.length, "carte urgente", "cartes urgentes")} et un meilleur score quiz de ${bestScore}%.`
      : "Aucune carte urgente: profite-en pour renforcer les points faibles via le quiz.";
  elements.heroInsight.textContent = focusText;

  renderCategoryBars();
  renderDailyPlan(dueCards, studyToday, goalStats, daysLeft);
  renderMasteryGrid();
  renderAchievements();
  elements.dataStatus.textContent = uiState.actionStatus;
}

function renderCategoryBars() {
  const groups = getCardsByCategory();
  const rows = Object.entries(groups)
    .map(([category, cards]) => {
      const avg = Math.round(cards.reduce((sum, card) => sum + getCardMemoryRate(card), 0) / cards.length);
      const dueCount = cards.filter((card) => new Date(card.nextReview).getTime() <= Date.now()).length;
      return `
        <div class="bar-row">
          <div class="bar-caption">
            <strong>${category}</strong>
            <span>${avg}% · ${pluralize(dueCount, "carte due", "cartes dues")}</span>
          </div>
          <div class="bar-track">
            <span style="width:${avg}%"></span>
          </div>
        </div>
      `;
    })
    .join("");

  elements.memoryBars.innerHTML = rows || `<p class="empty-state">Ajoute des cartes pour afficher les statistiques par matière.</p>`;
}

function renderDailyPlan(dueCards, studyToday, goalStats, daysLeft) {
  const recommendedMinutes = getRecommendedDailyMinutes();
  const weakCards = getWeakCards(3);
  const items = [
    {
      done: dueCards.length === 0,
      title: dueCards.length ? `Traiter ${pluralize(dueCards.length, "carte due", "cartes dues")}` : "Aucune carte en retard",
      detail: state.exam.focusMode ? "Le mode examen garde aussi les cartes fragiles dans la file." : "Passe par la file de révision pour recalculer les prochaines dates."
    },
    {
      done: studyToday >= recommendedMinutes,
      title: `Viser ${recommendedMinutes} min de travail aujourd'hui`,
      detail: `Temps enregistré: ${formatMinutes(studyToday)}`
    },
    {
      done: goalStats.completed === goalStats.total,
      title: `Clore ${goalStats.total - goalStats.completed} objectif(s) en cours`,
      detail: goalStats.total ? `${goalStats.completed} sur ${goalStats.total} déjà complétés.` : "Ajoute un premier objectif pour cadrer ta progression."
    },
    {
      done: weakCards.every((card) => getCardMemoryRate(card) >= 75),
      title: daysLeft !== null && daysLeft >= 0 ? `Sécuriser les points faibles avant ${daysLeft} jour(s)` : "Sécuriser les points faibles",
      detail: weakCards.length
        ? weakCards.map((card) => `${card.category} (${getCardMemoryRate(card)}%)`).join(" · ")
        : "Aucun point faible majeur détecté."
    }
  ];

  elements.dailyPlan.innerHTML = items
    .map((item) => `
      <div class="check-item">
        <div>
          <strong>${item.title}</strong>
          <span class="helper-text">${item.detail}</span>
        </div>
        <span>${item.done ? "Fait" : "À faire"}</span>
      </div>
    `)
    .join("");
}

function renderMasteryGrid() {
  const mastery = state.cards.reduce(
    (totals, card) => {
      if (card.repetition === 0) {
        totals.newer += 1;
      } else if (card.repetition < 3 || card.interval < 7) {
        totals.growing += 1;
      } else {
        totals.solid += 1;
      }
      return totals;
    },
    { newer: 0, growing: 0, solid: 0 }
  );

  elements.masteryGrid.innerHTML = [
    { label: "Nouvelles", value: mastery.newer },
    { label: "En construction", value: mastery.growing },
    { label: "Solides", value: mastery.solid }
  ]
    .map((item) => `
      <div class="mastery-card">
        <span class="metric-label">${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");
}

function renderAchievements() {
  elements.achievementList.innerHTML = getAchievementItems()
    .map((item) => `
      <div class="check-item">
        <div>
          <strong>${item.title}</strong>
          <span class="helper-text">${item.detail}</span>
        </div>
        <span>${item.done ? "Débloqué" : "En cours"}</span>
      </div>
    `)
    .join("");
}

function renderFlashcards() {
  const dueCards = getDueCards();
  const currentCard = getCurrentReviewCard();
  const upcoming = getUpcomingCards();
  const libraryCards = getFilteredLibraryCards();

  elements.focusModeLabel.textContent = state.exam.focusMode ? "Mode révision actif" : "Mode standard";
  elements.cardFormTitle.textContent = uiState.editingCardId ? "Modifier la flashcard" : "Nouvelle flashcard";
  elements.cardSubmitLabel.textContent = uiState.editingCardId ? "Enregistrer les modifications" : "Ajouter à la bibliothèque";
  elements.cardEditCancelBtn.classList.toggle("hidden", !uiState.editingCardId);
  elements.reviewQueueCount.textContent = pluralize(dueCards.length, "carte", "cartes");
  elements.nextReviewLabel.textContent = upcoming.length ? formatDateTime(upcoming[0].nextReview) : "-";
  syncSelectOptions(elements.cardFilterCategory, getAvailableCategories(), uiState.flashcardCategory, "Toutes");

  if (document.activeElement !== elements.cardSearch) {
    elements.cardSearch.value = uiState.flashcardQuery;
  }
  elements.cardFilterStatus.value = uiState.flashcardStatus;
  elements.cardSort.value = uiState.flashcardSort;

  if (!currentCard) {
    elements.reviewCategory.textContent = "Bibliothèque vide";
    elements.reviewQuestion.textContent = "Aucune carte prioritaire pour l'instant. Ajoute une nouvelle carte ou active le mode examen.";
    elements.reviewAnswer.textContent = "Les réponses apparaîtront ici pendant la révision.";
    elements.reviewStrength.textContent = "Force mémoire: -";
    elements.reviewCard.classList.remove("is-flipped");
  } else {
    const currentMemoryRate = getCardMemoryRate(currentCard);
    elements.reviewCategory.textContent = currentCard.category;
    elements.reviewQuestion.textContent = currentCard.question;
    elements.reviewAnswer.textContent = currentCard.answer;
    elements.reviewStrength.textContent = `Force mémoire: ${currentMemoryRate}%`;
    elements.reviewCard.classList.toggle("is-flipped", reviewState.flipped);
  }

  elements.dueDeckList.innerHTML = dueCards.length
    ? dueCards
        .slice(0, 6)
        .map((card) => `
          <div class="stack-item">
            <div>
              <strong>${card.question}</strong>
              <div class="library-meta">
                <span>${card.category}</span>
                <span>${card.memoryRate}% mémoire</span>
                <span>${card.due ? "à revoir maintenant" : "renforcée par le mode examen"}</span>
              </div>
            </div>
            <button type="button" class="button button-secondary" data-review-select="${card.id}">Choisir</button>
          </div>
        `)
        .join("")
    : `<p class="empty-state">Aucune carte due. Utilise la bibliothèque pour enrichir tes révisions.</p>`;

  elements.cardLibrary.innerHTML = state.cards.length
    ? libraryCards.length
        ? libraryCards
        .map((card) => `
          <article class="library-item">
            <div>
              <span class="stack-badge">${card.category}</span>
              <h4>${card.question}</h4>
            </div>
            <p>${card.answer}</p>
            <div class="library-meta">
              <span>${getCardMemoryRate(card)}% mémoire</span>
              <span>répétition ${card.repetition}</span>
              <span>prochaine révision ${formatDateTime(card.nextReview)}</span>
            </div>
            <div class="card-actions">
              <button type="button" class="button button-secondary" data-review-select="${card.id}">Réviser</button>
              <button type="button" class="button button-primary" data-card-edit="${card.id}">Modifier</button>
              <button type="button" class="button ghost-button" data-card-delete="${card.id}">Supprimer</button>
            </div>
          </article>
        `)
        .join("")
        : `<p class="empty-state">Aucune carte ne correspond aux filtres actifs.</p>`
    : `<p class="empty-state">Crée une première flashcard pour démarrer la plateforme.</p>`;
}

function renderQuiz() {
  const selectedCategory = quizSession.active ? quizSession.category : (elements.quizCategoryFilter.value || "all");
  syncSelectOptions(elements.quizCategoryFilter, getAvailableCategories(), selectedCategory, "Toutes");

  const attempts = [...state.quizHistory.attempts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastAttempt = attempts[0];
  const averageScore = getRecentAverageQuizScore();
  const mistakeEntries = Object.entries(state.quizHistory.mistakes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([questionId, count]) => {
      const question = QUIZ_BANK.find((item) => item.id === questionId);
      return question
        ? `
          <div class="summary-block">
            <strong>${question.category}</strong>
            <div>${question.question}</div>
            <small>${count} erreur(s) repérées</small>
            <button type="button" class="button button-secondary" data-quiz-to-card="${question.id}">Créer une flashcard</button>
          </div>
        `
        : "";
    })
    .join("");

  if (!quizSession.active) {
    elements.quizProgressBar.style.width = "0%";
    elements.quizProgressLabel.textContent = "Prêt à démarrer";
    elements.quizScoreLabel.textContent = `Meilleur score: ${state.quizHistory.bestScore || 0}%`;
    elements.quizTimerLabel.textContent = `Temps: ${formatClockSeconds(lastAttempt?.durationSeconds || 0)}`;
    elements.quizCategory.textContent = "Quiz StudyPal";
    elements.quizQuestion.textContent = "Choisis un mode et lance une série pour commencer.";
    elements.quizOptions.innerHTML = "";
    elements.quizExplanation.textContent = lastAttempt
      ? `Dernière tentative: ${lastAttempt.score}% en mode ${describeQuizMode(lastAttempt.mode)} le ${formatDateTime(lastAttempt.date)}.`
      : "Aucune tentative enregistrée pour l'instant.";
    elements.quizNextBtn.classList.add("hidden");

    const currentSummary = quizSession.summary
      ? `
        <div class="summary-block">
          <strong>Dernier quiz terminé</strong>
          <div>${quizSession.summary.score}% (${quizSession.summary.rawScore}/${quizSession.summary.total})</div>
          <small>${quizSession.summary.message}</small>
        </div>
      `
      : "";
    const lastMistakes = quizSession.summary?.wrongQuestions?.length
      ? quizSession.summary.wrongQuestions
          .map((question) => `
            <div class="summary-block">
              <strong>Erreur à transformer</strong>
              <div>${question.question}</div>
              <small>${question.explanation}</small>
              <button type="button" class="button button-secondary" data-quiz-to-card="${question.id}">Créer une flashcard</button>
            </div>
          `)
          .join("")
      : "";

    elements.quizSummary.innerHTML = `
      ${currentSummary}
      <div class="summary-block">
        <strong>Banque de questions</strong>
        <div>${QUIZ_BANK.length} questions disponibles</div>
        <small>Le mode examen remonte d'abord les erreurs fréquentes.</small>
      </div>
      <div class="summary-block">
        <strong>Moyenne récente</strong>
        <div>${averageScore}%</div>
        <small>calculée sur les 5 dernières tentatives.</small>
      </div>
      <div class="summary-block">
        <strong>Points de vigilance</strong>
        <div>${getQuizMistakeCount()} erreur(s) historiques</div>
        <small>Ces notions remontent dans le sprint avant examen.</small>
      </div>
      ${lastMistakes}
      ${mistakeEntries || `<div class="summary-block"><strong>Rattrapage</strong><div>Aucune erreur persistante détectée.</div><small>Tu peux maintenir le niveau avec un quiz mixte.</small></div>`}
    `;
    return;
  }

  const currentQuestion = quizSession.questions[quizSession.index];
  const progress = Math.round((quizSession.index / quizSession.questions.length) * 100);
  elements.quizProgressBar.style.width = `${progress}%`;
  elements.quizProgressLabel.textContent = `Question ${quizSession.index + 1} sur ${quizSession.questions.length}`;
  elements.quizScoreLabel.textContent = `Score: ${quizSession.score}`;
  elements.quizTimerLabel.textContent = `Temps: ${formatClockSeconds(getQuizElapsedSeconds())}`;
  elements.quizCategory.textContent = currentQuestion.category;
  elements.quizQuestion.textContent = currentQuestion.question;
  elements.quizExplanation.textContent = quizSession.answered ? currentQuestion.explanation : "Choisis la réponse la plus juste.";
  elements.quizNextBtn.classList.toggle("hidden", !quizSession.answered);
  elements.quizMode.value = quizSession.mode;
  elements.quizCategoryFilter.value = quizSession.category;
  elements.quizQuestionCount.value = String(quizSession.questionCount);

  elements.quizOptions.innerHTML = currentQuestion.options
    .map((option, index) => {
      let className = "quiz-option";
      if (quizSession.answered && index === currentQuestion.answer) {
        className += " is-correct";
      }
      if (quizSession.answered && index === quizSession.selectedOption && index !== currentQuestion.answer) {
        className += " is-wrong";
      }
      return `<button type="button" class="${className}" data-quiz-option="${index}">${option}</button>`;
    })
    .join("");

  const targetedCategories = quizSession.questions.reduce((accumulator, question) => {
    accumulator.add(question.category);
    return accumulator;
  }, new Set());

  elements.quizSummary.innerHTML = `
    <div class="summary-block">
      <strong>Mode</strong>
      <div>${describeQuizMode(quizSession.mode)}</div>
      <small>${targetedCategories.size} matière(s) couvertes</small>
    </div>
    <div class="summary-block">
      <strong>Périmètre</strong>
      <div>${quizSession.category === "all" ? "Toutes les matières" : quizSession.category}</div>
      <small>${quizSession.questionCount} question(s) prévues</small>
    </div>
    <div class="summary-block">
      <strong>Objectif</strong>
      <div>Score cible: ${state.exam.targetScore}%</div>
      <small>Le score monte à chaque bonne réponse.</small>
    </div>
  `;
}

function renderTimer() {
  const elapsedMs = getTimerElapsedMs();
  const targetMs = state.timer.targetMinutes * 60 * 1000;
  const ratio = clamp(Math.round((elapsedMs / targetMs) * 100), 0, 100);
  const studyToday = getStudyMinutesToday();
  const studyWeek = getStudyMinutesForRange(7);
  const streak = getStudyStreak();
  const trend = getStudyTrend();
  const maxTrend = Math.max(...trend.map((day) => day.minutes), 1);

  elements.timerDisplay.textContent = formatTimer(elapsedMs);
  elements.timerTargetLabel.textContent = `Objectif: ${state.timer.targetMinutes} min`;
  elements.timerProgressLabel.textContent = state.timer.isRunning
    ? `${state.timer.mode} en cours · ${ratio}% de l'objectif atteint`
    : elapsedMs
      ? `Session en pause · ${ratio}% de l'objectif atteint`
      : "Aucune session en cours.";
  elements.timerRing.style.setProperty("--progress", `${ratio}%`);
  elements.timerMode.value = state.timer.mode;
  if (document.activeElement !== elements.timerNote) {
    elements.timerNote.value = state.timer.note || "";
  }

  document.querySelectorAll("[data-target-minutes]").forEach((button) => {
    const isActive = Number(button.dataset.targetMinutes) === state.timer.targetMinutes;
    button.classList.toggle("is-active", isActive);
  });

  elements.studyTotals.innerHTML = `
    <article class="metric-card">
      <span class="metric-label">Aujourd'hui</span>
      <strong>${formatMinutes(studyToday)}</strong>
      <small>temps cumulé</small>
    </article>
    <article class="metric-card">
      <span class="metric-label">7 jours</span>
      <strong>${formatMinutes(studyWeek)}</strong>
      <small>charge récente</small>
    </article>
    <article class="metric-card">
      <span class="metric-label">Streak</span>
      <strong>${pluralize(streak, "jour", "jours")}</strong>
      <small>consécutifs</small>
    </article>
  `;

  const recentSessions = [...state.studySessions]
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, 6);

  elements.sessionList.innerHTML = recentSessions.length
    ? recentSessions
        .map((session) => `
          <div class="session-item">
            <div>
              <strong>${session.mode}</strong>
              <div class="session-meta">
                <span>${formatMinutes(session.durationMinutes)}</span>
                <span>objectif ${session.targetMinutes} min</span>
                <span>${formatDateTime(session.completedAt)}</span>
              </div>
              ${session.note ? `<p class="helper-text">${session.note}</p>` : ""}
            </div>
          </div>
        `)
        .join("")
    : `<p class="empty-state">Aucune session enregistrée. Lance le chronomètre pour commencer.</p>`;

  elements.studyTrend.innerHTML = trend
    .map((day) => `
      <div class="bar-row">
        <div class="bar-caption">
          <strong>${day.label}</strong>
          <span>${formatMinutes(day.minutes)}</span>
        </div>
        <div class="bar-track">
          <span style="width:${Math.round((day.minutes / maxTrend) * 100)}%"></span>
        </div>
      </div>
    `)
    .join("");
}

function renderGoals() {
  const stats = getGoalStats();
  const completionRate = stats.total ? Math.round((stats.completed / stats.total) * 100) : 0;

  elements.goalProgressSummary.innerHTML = `
    <div class="metric-card">
      <span class="metric-label">Progression globale</span>
      <strong>${completionRate}%</strong>
      <small>${stats.completed} objectif(s) terminés sur ${stats.total}</small>
    </div>
    <div class="goal-progress">
      <span style="width:${completionRate}%"></span>
    </div>
  `;

  elements.goalList.innerHTML = state.goals.length
    ? [...state.goals]
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .map((goal) => {
          const percent = clamp(Math.round((goal.current / goal.target) * 100), 0, 100);
          const completed = goal.completed || goal.current >= goal.target;
          return `
            <article class="goal-item">
              <div>
                <span class="stack-badge">${goal.category}</span>
                <h4>${goal.title}</h4>
                <div class="goal-meta">
                  <span>${goal.current}/${goal.target}</span>
                  <span>échéance ${formatDate(goal.deadline, { year: "numeric" })}</span>
                  <span>${completed ? "complété" : "en cours"}</span>
                </div>
              </div>
              <div class="goal-progress">
                <span style="width:${percent}%"></span>
              </div>
              <div class="goal-actions">
                <button type="button" class="button button-secondary" data-goal-action="minus" data-goal-id="${goal.id}">-1</button>
                <button type="button" class="button button-primary" data-goal-action="plus" data-goal-id="${goal.id}">+1</button>
                <button type="button" class="button tone-success" data-goal-action="complete" data-goal-id="${goal.id}">Valider</button>
              </div>
            </article>
          `;
        })
        .join("")
    : `<p class="empty-state">Ajoute un objectif pour matérialiser ta progression d'apprentissage.</p>`;
}

function renderRevision() {
  const daysLeft = getDaysLeft();
  const recommendedMinutes = getRecommendedDailyMinutes();
  const weakCards = getWeakCards();
  const weakQuizItems = Object.entries(state.quizHistory.mistakes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([questionId, count]) => {
      const question = QUIZ_BANK.find((item) => item.id === questionId);
      return question ? { label: question.question, detail: `${count} erreur(s) en ${question.category}` } : null;
    })
    .filter(Boolean);

  elements.examTitle.value = state.exam.title;
  elements.examDate.value = state.exam.date;
  elements.examTarget.value = state.exam.targetScore;
  elements.revisionCountdown.textContent = daysLeft === null ? "-" : daysLeft < 0 ? "Examen passé" : `${daysLeft} jour(s)`;
  elements.revisionUrgency.textContent = getRevisionUrgency(daysLeft);
  elements.revisionMinutes.textContent = `${recommendedMinutes} min/jour`;
  elements.revisionWeakPoints.textContent = weakCards.length + weakQuizItems.length;
  elements.toggleRevisionBtn.textContent = state.exam.focusMode ? "Désactiver le mode révision" : "Activer le mode révision";

  const checklist = [
    {
      title: `Réviser ${pluralize(getDueCards().length, "carte prioritaire", "cartes prioritaires")}`,
      detail: state.exam.focusMode ? "La file inclut aussi les cartes fragiles non encore dues." : "Active le mode examen pour élargir la file."
    },
    {
      title: `Lancer 1 quiz ${state.exam.focusMode ? "ciblé" : "mixte"} aujourd'hui`,
      detail: `${getQuizMistakeCount()} erreur(s) historiques à corriger`
    },
    {
      title: `Atteindre ${recommendedMinutes} minutes de travail`,
      detail: `Objectif final: ${state.exam.targetScore}% sur ${state.exam.title || "l'examen"}`
    },
    {
      title: "Clore les objectifs proches",
      detail: state.goals.length
        ? state.goals
            .filter((goal) => !goal.completed)
            .slice(0, 2)
            .map((goal) => goal.title)
            .join(" · ") || "Tous les objectifs sont clôturés."
        : "Aucun objectif en cours."
    }
  ];

  elements.examChecklist.innerHTML = checklist
    .map((item) => `
      <div class="check-item">
        <div>
          <strong>${item.title}</strong>
          <span class="helper-text">${item.detail}</span>
        </div>
      </div>
    `)
    .join("");

  const focusDeck = [
    ...weakCards.map((card) => ({
      label: card.question,
      detail: `${card.category} · mémoire ${getCardMemoryRate(card)}% · prochaine révision ${formatDateTime(card.nextReview)}`,
      id: card.id
    })),
    ...weakQuizItems.map((item) => ({
      label: item.label,
      detail: item.detail,
      id: ""
    }))
  ].slice(0, 6);

  elements.examFocusDeck.innerHTML = focusDeck.length
    ? focusDeck
        .map((item) => `
          <div class="stack-item">
            <div>
              <strong>${item.label}</strong>
              <span class="helper-text">${item.detail}</span>
            </div>
            ${item.id ? `<button type="button" class="button button-secondary" data-review-select="${item.id}">Réviser</button>` : ""}
          </div>
        `)
        .join("")
    : `<p class="empty-state">Aucun point chaud détecté. Continue à consolider avec des quiz réguliers.</p>`;

  elements.revisionAdvice.innerHTML = `
    <p><strong>Cap visé:</strong> ${state.exam.targetScore}% sur ${state.exam.title || "ton examen"}.</p>
    <p>${getRevisionAdvice(daysLeft, recommendedMinutes)}</p>
    <p>${state.exam.focusMode
      ? "Le mode révision redistribue les priorités vers les cartes les plus fragiles."
      : "Active le mode révision pour pousser les notions fragiles au premier plan."}</p>
  `;
}

function getRevisionUrgency(daysLeft) {
  if (daysLeft === null) {
    return "Ajoute une date d'examen pour générer une cadence personnalisée.";
  }
  if (daysLeft < 0) {
    return "L'échéance est dépassée. Tu peux repositionner la date pour relancer un sprint.";
  }
  if (daysLeft <= 3) {
    return "Urgence élevée: concentre-toi sur les cartes faibles et les erreurs récurrentes.";
  }
  if (daysLeft <= 10) {
    return "Fenêtre active: il faut stabiliser les points faibles maintenant.";
  }
  return "Bonne marge: consolide progressivement et maintiens une cadence régulière.";
}

function getRevisionAdvice(daysLeft, recommendedMinutes) {
  if (daysLeft === null) {
    return "Sans date d'examen, StudyPal garde un mode d'apprentissage standard. Définis une échéance pour basculer sur un plan plus agressif.";
  }
  if (daysLeft <= 0) {
    return "Passe en simulation courte: enchaîne flashcards prioritaires puis un quiz ciblé pour garder l'information disponible immédiatement.";
  }
  if (daysLeft <= 3) {
    return `Vise ${recommendedMinutes} minutes par jour, uniquement sur les cartes dues, les erreurs de quiz et les objectifs inachevés.`;
  }
  return `Maintiens un rythme de ${recommendedMinutes} minutes par jour et déclenche un quiz ciblé dès qu'une matière descend sous 70% de mémorisation.`;
}

function renderAll() {
  renderOverview();
  renderFlashcards();
  renderQuiz();
  renderTimer();
  renderGoals();
  renderRevision();
}

function describeQuizMode(mode) {
  if (mode === "exam") {
    return "Révision avant examen";
  }

  if (mode === "mistakes") {
    return "Erreurs fréquentes";
  }

  return "Mixte";
}

function buildQuizQuestions(mode, category = "all", count = 5) {
  const mistakeMap = state.quizHistory.mistakes;
  const weakCategories = new Set(getWeakCards(99).filter((card) => getCardMemoryRate(card) < 75).map((card) => card.category));
  const scopedBank = category === "all"
    ? [...QUIZ_BANK]
    : QUIZ_BANK.filter((question) => question.category === category);

  const sorted = [...scopedBank].sort((a, b) => {
    const aScore = (mistakeMap[a.id] || 0) * 3 + (weakCategories.has(a.category) ? 2 : 0);
    const bScore = (mistakeMap[b.id] || 0) * 3 + (weakCategories.has(b.category) ? 2 : 0);
    return bScore - aScore;
  });

  if (mode === "exam") {
    return shuffle(sorted.slice(0, Math.max(count + 2, count))).slice(0, Math.min(count, sorted.length));
  }

  if (mode === "mistakes") {
    const mistakesOnly = sorted.filter((question) => (mistakeMap[question.id] || 0) > 0);
    const fallback = mistakesOnly.length ? mistakesOnly : sorted;
    return shuffle(fallback).slice(0, Math.min(count, fallback.length));
  }

  return shuffle(scopedBank).slice(0, Math.min(count, scopedBank.length));
}

function getQuizElapsedSeconds() {
  if (!quizSession.startedAt) {
    return quizSession.elapsedSeconds || 0;
  }

  return quizSession.elapsedSeconds + Math.floor((Date.now() - quizSession.startedAt) / 1000);
}

function syncQuizInterval() {
  if (quizInterval) {
    clearInterval(quizInterval);
    quizInterval = null;
  }

  if (quizSession.active) {
    quizInterval = setInterval(() => {
      renderQuiz();
    }, 1000);
  }
}

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function startQuiz(customMode = null) {
  const mode = customMode || elements.quizMode.value;
  const category = elements.quizCategoryFilter.value || "all";
  const requestedCount = Number(elements.quizQuestionCount.value) || 5;
  const questions = buildQuizQuestions(mode, category, requestedCount);

  if (!questions.length) {
    setActionStatus("Aucune question disponible pour la configuration choisie.");
    return;
  }

  quizSession = createEmptyQuizSession();
  quizSession.active = true;
  quizSession.mode = mode;
  quizSession.category = category;
  quizSession.questionCount = requestedCount;
  quizSession.questions = questions;
  quizSession.startedAt = Date.now();
  quizSession.elapsedSeconds = 0;
  elements.quizMode.value = mode;
  syncQuizInterval();
  renderQuiz();
}

function handleQuizOption(optionIndex) {
  if (!quizSession.active || quizSession.answered) {
    return;
  }

  const currentQuestion = quizSession.questions[quizSession.index];
  const isCorrect = optionIndex === currentQuestion.answer;

  quizSession.selectedOption = optionIndex;
  quizSession.answered = true;
  if (isCorrect) {
    quizSession.score += 1;
  }

  quizSession.results.push({
    id: currentQuestion.id,
    correct: isCorrect
  });

  renderQuiz();
}

function goToNextQuizQuestion() {
  if (!quizSession.active || !quizSession.answered) {
    return;
  }

  if (quizSession.index === quizSession.questions.length - 1) {
    finishQuiz();
    return;
  }

  quizSession.index += 1;
  quizSession.answered = false;
  quizSession.selectedOption = null;
  renderQuiz();
}

function finishQuiz() {
  const total = quizSession.questions.length;
  const score = Math.round((quizSession.score / total) * 100);
  const wrongIds = quizSession.results.filter((result) => !result.correct).map((result) => result.id);
  const correctIds = quizSession.results.filter((result) => result.correct).map((result) => result.id);
  const durationSeconds = getQuizElapsedSeconds();

  wrongIds.forEach((questionId) => {
    state.quizHistory.mistakes[questionId] = (state.quizHistory.mistakes[questionId] || 0) + 1;
  });

  correctIds.forEach((questionId) => {
    if (!state.quizHistory.mistakes[questionId]) {
      return;
    }

    state.quizHistory.mistakes[questionId] = Math.max(0, state.quizHistory.mistakes[questionId] - 1);
    if (state.quizHistory.mistakes[questionId] === 0) {
      delete state.quizHistory.mistakes[questionId];
    }
  });

  state.quizHistory.attempts.unshift({
    id: uid("attempt"),
    date: new Date().toISOString(),
    mode: quizSession.mode,
    category: quizSession.category,
    score,
    rawScore: quizSession.score,
    total,
    durationSeconds,
    wrongIds
  });
  state.quizHistory.bestScore = Math.max(state.quizHistory.bestScore || 0, score);

  quizSession.summary = {
    score,
    rawScore: quizSession.score,
    total,
    questionCount: quizSession.questionCount,
    durationSeconds,
    wrongQuestions: wrongIds.map((questionId) => QUIZ_BANK.find((question) => question.id === questionId)).filter(Boolean),
    message: wrongIds.length
      ? `${wrongIds.length} question(s) sont remontées dans le mode révision.`
      : "Aucune erreur: le sprint examen reste propre."
  };
  quizSession.active = false;
  quizSession.startedAt = null;
  quizSession.elapsedSeconds = durationSeconds;
  syncQuizInterval();
  saveState();
  renderAll();
}

function setCurrentReviewCard(cardId) {
  reviewState.currentCardId = cardId;
  reviewState.flipped = false;
  renderFlashcards();
}

function scheduleCard(card, rating) {
  const now = Date.now();
  card.lastReviewed = new Date(now).toISOString();

  if (rating === "again") {
    card.repetition = 0;
    card.interval = 0.25;
    card.ease = clamp(card.ease - 0.2, 1.3, 3.2);
    card.failCount += 1;
    card.nextReview = new Date(now + 6 * HOUR_MS).toISOString();
    return;
  }

  card.successCount += 1;
  card.repetition += 1;

  if (rating === "hard") {
    card.ease = clamp(card.ease - 0.05, 1.3, 3.2);
    card.interval = card.repetition <= 1 ? 1 : Math.max(1, Math.round(card.interval * 1.2));
  }

  if (rating === "good") {
    card.ease = clamp(card.ease + 0.05, 1.3, 3.2);
    card.interval = card.repetition === 1 ? 1 : card.repetition === 2 ? 3 : Math.max(2, Math.round(card.interval * card.ease));
  }

  if (rating === "easy") {
    card.ease = clamp(card.ease + 0.12, 1.3, 3.2);
    card.interval = card.repetition === 1 ? 2 : Math.max(3, Math.round(card.interval * (card.ease + 0.5)));
  }

  card.nextReview = new Date(now + card.interval * DAY_MS).toISOString();
}

function rateCurrentCard(rating) {
  const card = state.cards.find((item) => item.id === reviewState.currentCardId);
  if (!card) {
    return;
  }

  scheduleCard(card, rating);
  reviewState.currentCardId = null;
  reviewState.flipped = false;
  saveState();
  renderAll();
}

function getTimerElapsedMs() {
  if (!state.timer.isRunning || !state.timer.startedAt) {
    return state.timer.elapsedMs;
  }
  return state.timer.elapsedMs + (Date.now() - new Date(state.timer.startedAt).getTime());
}

function syncTimerInterval() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (state.timer.isRunning) {
    timerInterval = setInterval(() => {
      renderTimer();
    }, 1000);
  }
}

function startTimer() {
  if (state.timer.isRunning) {
    return;
  }
  state.timer.isRunning = true;
  state.timer.startedAt = new Date().toISOString();
  saveState();
  syncTimerInterval();
  renderTimer();
}

function pauseTimer() {
  if (!state.timer.isRunning) {
    return;
  }

  state.timer.elapsedMs = getTimerElapsedMs();
  state.timer.isRunning = false;
  state.timer.startedAt = null;
  saveState();
  syncTimerInterval();
  renderTimer();
}

function resetTimer() {
  state.timer.isRunning = false;
  state.timer.startedAt = null;
  state.timer.elapsedMs = 0;
  state.timer.note = "";
  saveState();
  syncTimerInterval();
  renderTimer();
}

function saveStudySession() {
  const elapsedMs = getTimerElapsedMs();
  if (elapsedMs < 30000) {
    return;
  }
  const minutes = Math.max(1, Math.round(elapsedMs / 60000));

  state.studySessions.unshift({
    id: uid("session"),
    mode: state.timer.mode,
    durationMinutes: minutes,
    targetMinutes: state.timer.targetMinutes,
    note: state.timer.note?.trim() || "",
    completedAt: new Date().toISOString()
  });
  resetTimer();
  setActionStatus(`Session enregistrée: ${minutes} min en mode ${state.studySessions[0].mode}.`);
  saveState();
  renderAll();
}

function updateGoal(goalId, action) {
  const goal = state.goals.find((item) => item.id === goalId);
  if (!goal) {
    return;
  }

  if (action === "minus") {
    goal.current = Math.max(0, goal.current - 1);
    goal.completed = goal.current >= goal.target;
  }

  if (action === "plus") {
    goal.current = Math.min(goal.target, goal.current + 1);
    goal.completed = goal.current >= goal.target;
  }

  if (action === "complete") {
    goal.current = goal.target;
    goal.completed = true;
  }

  saveState();
  renderAll();
}

function clearCardForm() {
  document.getElementById("cardForm").reset();
  uiState.editingCardId = null;
}

function openCardEditor(cardId) {
  const card = state.cards.find((item) => item.id === cardId);
  if (!card) {
    return;
  }

  uiState.editingCardId = cardId;
  document.getElementById("cardQuestion").value = card.question;
  document.getElementById("cardAnswer").value = card.answer;
  document.getElementById("cardCategory").value = card.category;
  renderFlashcards();
  document.getElementById("cardQuestion").focus();
}

function cancelCardEditing() {
  clearCardForm();
  renderFlashcards();
}

function deleteCard(cardId) {
  const card = state.cards.find((item) => item.id === cardId);
  if (!card) {
    return;
  }

  if (!window.confirm(`Supprimer la carte "${card.question}" ?`)) {
    return;
  }

  state.cards = state.cards.filter((item) => item.id !== cardId);
  if (reviewState.currentCardId === cardId) {
    reviewState.currentCardId = null;
    reviewState.flipped = false;
  }
  if (uiState.editingCardId === cardId) {
    clearCardForm();
  }
  saveState();
  setActionStatus("Flashcard supprimée.");
  renderAll();
}

function createCardFromQuiz(questionId) {
  const question = QUIZ_BANK.find((item) => item.id === questionId);
  if (!question) {
    return;
  }

  const alreadyExists = state.cards.some((card) => card.question === question.question);
  if (alreadyExists) {
    setActionStatus("Une flashcard existe déjà pour cette question de quiz.");
    renderAll();
    return;
  }

  state.cards.unshift({
    id: uid("card"),
    question: question.question,
    answer: `${question.options[question.answer]} — ${question.explanation}`,
    category: question.category,
    ease: 2.3,
    interval: 0,
    repetition: 0,
    nextReview: new Date().toISOString(),
    successCount: 0,
    failCount: 0,
    lastReviewed: null
  });
  saveState();
  setActionStatus("Une flashcard a été créée depuis le quiz.");
  renderAll();
}

function exportStateBackup() {
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const dateLabel = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `studypal-backup-${dateLabel}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setActionStatus("Export JSON généré avec succès.");
  renderOverview();
}

function importStateFile(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = normalizeState(parsed);
      quizSession = createEmptyQuizSession();
      reviewState = { currentCardId: null, flipped: false };
      clearCardForm();
      uiState.flashcardQuery = "";
      uiState.flashcardCategory = "all";
      uiState.flashcardStatus = "all";
      uiState.flashcardSort = "priority";
      saveState();
      syncTimerInterval();
      syncQuizInterval();
      setActionStatus("Import terminé. Les données StudyPal ont été remplacées.");
      initDefaultsInForms();
      renderAll();
    } catch (error) {
      setActionStatus("Import impossible: le fichier JSON est invalide.");
      renderOverview();
    } finally {
      elements.importDataInput.value = "";
    }
  };
  reader.readAsText(file);
}

function resetDemoData() {
  if (!window.confirm("Réinitialiser toutes les données et revenir au jeu de démonstration ?")) {
    return;
  }

  state = createInitialState();
  quizSession = createEmptyQuizSession();
  reviewState = { currentCardId: null, flipped: false };
  clearCardForm();
  uiState.flashcardQuery = "";
  uiState.flashcardCategory = "all";
  uiState.flashcardStatus = "all";
  uiState.flashcardSort = "priority";
  saveState();
  syncTimerInterval();
  syncQuizInterval();
  setActionStatus("La démo StudyPal a été réinitialisée.");
  initDefaultsInForms();
  renderAll();
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const payload = {
    question: formData.get("question").trim(),
    answer: formData.get("answer").trim(),
    category: formData.get("category").trim()
  };

  if (uiState.editingCardId) {
    const card = state.cards.find((item) => item.id === uiState.editingCardId);
    if (card) {
      card.question = payload.question;
      card.answer = payload.answer;
      card.category = payload.category;
      setActionStatus("Flashcard mise à jour.");
    }
  } else {
    state.cards.unshift({
      id: uid("card"),
      question: payload.question,
      answer: payload.answer,
      category: payload.category,
      ease: 2.3,
      interval: 0,
      repetition: 0,
      nextReview: new Date().toISOString(),
      successCount: 0,
      failCount: 0,
      lastReviewed: null
    });
    setActionStatus("Nouvelle flashcard ajoutée.");
  }

  form.reset();
  uiState.editingCardId = null;
  saveState();
  renderAll();
}

function handleGoalFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const current = Number(formData.get("current"));
  const target = Number(formData.get("target"));

  state.goals.unshift({
    id: uid("goal"),
    title: formData.get("title").trim(),
    category: formData.get("category").trim(),
    current,
    target,
    deadline: formData.get("deadline"),
    completed: current >= target
  });

  form.reset();
  document.getElementById("goalCurrent").value = 0;
  document.getElementById("goalTarget").value = 10;
  document.getElementById("goalDeadline").value = new Date(Date.now() + 7 * DAY_MS).toISOString().slice(0, 10);
  setActionStatus("Nouvel objectif ajouté.");
  saveState();
  renderAll();
}

function handleExamFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.exam.title = formData.get("title").trim();
  state.exam.date = formData.get("date");
  state.exam.targetScore = Number(formData.get("target"));
  setActionStatus("Plan d'examen mis à jour.");
  saveState();
  renderAll();
}

function toggleRevisionMode() {
  state.exam.focusMode = !state.exam.focusMode;
  setActionStatus(state.exam.focusMode ? "Mode révision activé." : "Mode révision désactivé.");
  saveState();
  renderAll();
}

function bindEvents() {
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTo);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.getElementById("cardForm").addEventListener("submit", handleCardFormSubmit);
  document.getElementById("goalForm").addEventListener("submit", handleGoalFormSubmit);
  document.getElementById("examForm").addEventListener("submit", handleExamFormSubmit);
  elements.cardEditCancelBtn.addEventListener("click", cancelCardEditing);
  elements.exportDataBtn.addEventListener("click", exportStateBackup);
  elements.importDataBtn.addEventListener("click", () => elements.importDataInput.click());
  elements.resetDemoBtn.addEventListener("click", resetDemoData);
  elements.importDataInput.addEventListener("change", (event) => {
    importStateFile(event.target.files?.[0]);
  });

  elements.cardSearch.addEventListener("input", (event) => {
    uiState.flashcardQuery = event.target.value;
    renderFlashcards();
  });
  elements.cardFilterCategory.addEventListener("change", (event) => {
    uiState.flashcardCategory = event.target.value;
    renderFlashcards();
  });
  elements.cardFilterStatus.addEventListener("change", (event) => {
    uiState.flashcardStatus = event.target.value;
    renderFlashcards();
  });
  elements.cardSort.addEventListener("change", (event) => {
    uiState.flashcardSort = event.target.value;
    renderFlashcards();
  });

  elements.reviewCard.addEventListener("click", () => {
    if (!getCurrentReviewCard()) {
      return;
    }
    reviewState.flipped = !reviewState.flipped;
    renderFlashcards();
  });

  document.querySelectorAll("[data-review-rate]").forEach((button) => {
    button.addEventListener("click", () => {
      rateCurrentCard(button.dataset.reviewRate);
    });
  });

  elements.dueDeckList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-select]");
    if (button) {
      setCurrentReviewCard(button.dataset.reviewSelect);
    }
  });

  elements.cardLibrary.addEventListener("click", (event) => {
    const reviewButton = event.target.closest("[data-review-select]");
    const editButton = event.target.closest("[data-card-edit]");
    const deleteButton = event.target.closest("[data-card-delete]");

    if (reviewButton) {
      setCurrentReviewCard(reviewButton.dataset.reviewSelect);
    }
    if (editButton) {
      openCardEditor(editButton.dataset.cardEdit);
    }
    if (deleteButton) {
      deleteCard(deleteButton.dataset.cardDelete);
    }
  });

  elements.examFocusDeck.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-select]");
    if (button) {
      setCurrentReviewCard(button.dataset.reviewSelect);
      document.getElementById("flashcards").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  elements.startQuizBtn.addEventListener("click", startQuiz);
  elements.retryMistakesBtn.addEventListener("click", () => startQuiz("mistakes"));
  elements.quizOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quiz-option]");
    if (button) {
      handleQuizOption(Number(button.dataset.quizOption));
    }
  });
  elements.quizNextBtn.addEventListener("click", goToNextQuizQuestion);
  elements.quizSummary.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quiz-to-card]");
    if (button) {
      createCardFromQuiz(button.dataset.quizToCard);
    }
  });

  document.querySelectorAll("[data-target-minutes]").forEach((button) => {
    button.addEventListener("click", () => {
      state.timer.targetMinutes = Number(button.dataset.targetMinutes);
      saveState();
      renderTimer();
    });
  });

  elements.timerMode.addEventListener("change", (event) => {
    state.timer.mode = event.target.value;
    saveState();
    renderTimer();
  });
  elements.timerNote.addEventListener("input", (event) => {
    state.timer.note = event.target.value;
    saveState();
  });

  document.getElementById("startTimerBtn").addEventListener("click", startTimer);
  document.getElementById("pauseTimerBtn").addEventListener("click", pauseTimer);
  document.getElementById("saveSessionBtn").addEventListener("click", saveStudySession);
  document.getElementById("resetTimerBtn").addEventListener("click", resetTimer);
  elements.toggleRevisionBtn.addEventListener("click", toggleRevisionMode);

  elements.goalList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-action]");
    if (button) {
      updateGoal(button.dataset.goalId, button.dataset.goalAction);
    }
  });
}

function initDefaultsInForms() {
  document.getElementById("goalDeadline").value = new Date(Date.now() + 7 * DAY_MS).toISOString().slice(0, 10);
  elements.timerMode.value = state.timer.mode;
  elements.timerNote.value = state.timer.note || "";
  elements.dataStatus.textContent = uiState.actionStatus;
}

function init() {
  initDefaultsInForms();
  bindEvents();
  syncTimerInterval();
  renderAll();
}

init();
