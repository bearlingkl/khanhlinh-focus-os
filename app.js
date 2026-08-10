/**
 * Khánh Linh cố lên — Main Application Engine (v7.0)
 * Pure English UI (Except "Khánh Linh cố lên"), Modern Plus Jakarta Sans Header,
 * Fixed Interactive Area Manager Modal, Fixed Daily Energy Selector,
 * Focus Timer +10m Extension, and 2-Tab Minimalist Navigation (Workspace & Analytics).
 */

// Global Minimalist Blue-Green Themes (World Attraction High-Res URLs)
const MOOD_THEMES = {
  calm: {
    name: "🌸 Peaceful & Calm",
    bodyClass: "mood-calm",
    bannerImg: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85", // Kyoto Cherry Blossoms
    location: "Kyoto Cherry Blossoms, Japan"
  },
  energetic: {
    name: "⚡ High Energy & Ambitious",
    bodyClass: "mood-energetic",
    bannerImg: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1800&q=85", // Times Square NYC
    location: "Times Square, New York"
  },
  focus: {
    name: "🍃 Deep Focus & Flow",
    bodyClass: "mood-focus",
    bannerImg: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1800&q=85", // Swiss Alps
    location: "Swiss Alps, Switzerland"
  },
  reflective: {
    name: "🌙 Quiet & Reflective",
    bodyClass: "mood-reflective",
    bannerImg: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=85", // Northern Lights
    location: "Aurora Borealis, Tromsø"
  },
  creative: {
    name: "🎨 Inspired & Creative",
    bodyClass: "mood-creative",
    bannerImg: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=85", // Santorini
    location: "Santorini Island, Greece"
  }
};

// Interactive Pet Companion Profiles (Tabby Cat Extension Style — Pure English)
const PET_PROFILES = {
  dog: {
    id: 'dog',
    name: 'Gooby Tubbs',
    species: 'Glasses Puppy',
    avatars: { sleeping: '🐶 💤', playing: '🐶 🎾', eating: '🐶 🍓', dancing: '🐶 💃' },
    speeches: {
      sleeping: 'Gooby Tubbs is taking a sweet nap zzz... Stay focused, Khanh Linh! 😴',
      playing: 'Gooby Tubbs is playing ball happily with Khanh Linh! 🎾',
      eating: 'Gooby Tubbs is enjoying delicious strawberries 🍓',
      dancing: 'Gooby Tubbs is dancing to celebrate Khanh Linh! 💃'
    }
  },
  cat: {
    id: 'cat',
    name: 'Luna',
    species: 'Cute Kitten',
    avatars: { sleeping: '🐱 💤', playing: '🐱 🧶', eating: '🐱 🐟', dancing: '🐱 🎈' },
    speeches: {
      sleeping: 'Luna is curled up sleeping soundly zzz... 😴',
      playing: 'Luna is chasing blue yarn ball 🧶',
      eating: 'Luna is enjoying grilled salmon 🐟',
      dancing: 'Luna is dancing with colorful balloons 🎈'
    }
  },
  duck: {
    id: 'duck',
    name: 'Quackers',
    species: 'Yellow Duckling',
    avatars: { sleeping: '🦆 💤', playing: '🦆 🌊', eating: '🦆 🌾', dancing: '🦆 🎵' },
    speeches: {
      sleeping: 'Quackers is taking a peaceful nap zzz... 😴',
      playing: 'Quackers is swimming happily in the water 🌊',
      eating: 'Quackers is eating delicious cereals 🌾',
      dancing: 'Quackers is quacking and singing joyfully 🎵'
    }
  }
};

const BEAUTY_SPOTS = Object.values(MOOD_THEMES);
const TODAY_STR = new Date().toISOString().split('T')[0];

// Global App State
const state = {
  activeTab: 'workspace',
  currentMood: localStorage.getItem('lauren_mood') || 'calm',
  selectedDate: TODAY_STR,
  customAreas: JSON.parse(localStorage.getItem('lauren_custom_areas')) || [
    '💼 OAC Working',
    '🎓 Apply Master',
    '🇬🇧 IELTS Learning',
    '🇫🇷 DELF Learning',
    '👩‍🏫 Coaching Ms. Hien Eng',
    '🌟 Personal Growth'
  ],
  filterPriority: 'ALL',
  filterCognitive: 'ALL',
  filterArea: 'ALL',
  settings: JSON.parse(localStorage.getItem('ruoc_settings')) || {
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    webhookUrl: ''
  },
  petState: JSON.parse(localStorage.getItem('lauren_pet_state')) || {
    petId: 'dog',
    customName: 'Gooby Tubbs',
    actionState: 'sleeping'
  },
  dailyContext: JSON.parse(localStorage.getItem('lauren_daily_context')) || {
    energyLevel: 'High',
    goals: [
      'Sourcing 30 candidate profiles on LinkedIn for Omnistream',
      'Complete IELTS Writing Task 2 essay outline',
      'Coach Ms. Hien English speaking 1 hr'
    ],
    hardDeadlines: [
      { id: 'dl-1', title: 'Team Sync Meeting', time: '10:30' },
      { id: 'dl-2', title: 'Submit Milestone Report', time: '15:00' }
    ]
  },
  autocompleteHistory: JSON.parse(localStorage.getItem('ruoc_autocomplete')) || {
    projects: ['Omnistream Data Sourcing', 'Master Application Essay', 'IELTS Writing Task 2', 'DELF B2 Grammar', 'English Coaching Plan', 'Life Journal'],
    tasks: ['Sourcing 30 Candidate Profiles', 'Outline Statement of Purpose', 'Practice Speaking Part 2', 'Review Past Tense Verbs', 'Draft Lesson Plan']
  },
  tasks: JSON.parse(localStorage.getItem('ruoc_tasks')) || [
    {
      id: 'task-1',
      date: TODAY_STR,
      name: 'Sourcing 30 candidate profiles on LinkedIn',
      area: '💼 OAC Working',
      project: 'Omnistream Data Sourcing',
      session: 'morning',
      priority: 'P1',
      cognitiveLoad: 'Brain-heavy',
      pomsCount: 2,
      pomsDone: 1,
      details: 'Focus on Senior Data Analysts in Retail Analytics domain',
      goal: 'Find & shortlist 30 quality candidate profiles',
      outcome: 'Sourced 22 profiles with valid contacts',
      nextSteps: 'Complete remaining 8 profiles in afternoon session',
      completionPct: 75,
      estDurationMins: 50,
      startTime: '09:00',
      endTime: '09:50',
      refLinks: 'https://linkedin.com/recruiter',
      outputLinks: ''
    }
  ],
  activeTaskId: 'task-1',
  timer: {
    mode: 'work',
    status: 'idle',
    secondsLeft: 25 * 60,
    totalSeconds: 25 * 60,
    intervalId: null
  },
  distraction: {
    isDisturbed: false,
    startTime: null,
    elapsedSeconds: 0,
    stopwatchInterval: null,
    reason: '',
    type: 'useless'
  },
  logs: JSON.parse(localStorage.getItem('ruoc_logs')) || [],
  gamification: JSON.parse(localStorage.getItem('ruoc_gamification')) || {
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: TODAY_STR,
    badges: ['First Step']
  },
  rewards: JSON.parse(localStorage.getItem('lauren_rewards')) || {
    hourly: "15 mins music break / Favorite song stretch",
    daily: "1 Bubble Milk Tea / 1 Netflix Episode",
    weekly: "Relaxing Spa Massage / Japanese Dinner",
    monthly: "Treat yourself to a pretty reward / Short getaway trip"
  },
  youtubeUrl: localStorage.getItem('lauren_yt_url') || '',
  pipWindow: null,
  scratchpad: localStorage.getItem('ruoc_scratchpad') || ''
};

// Web Audio Ambient Soundscapes
class SoundScapeManager {
  constructor() {
    this.ctx = null;
    this.nodes = {};
    this.isPlaying = { rain: false, waves: false, lofi: false, cafe: false };
  }

  initContext() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  toggleSound(type) {
    this.initContext();
    if (this.isPlaying[type]) this.stopSound(type);
    else this.startSound(type);
    return this.isPlaying[type];
  }

  startSound(type) {
    if (this.nodes[type]) return;
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    const gainNode = this.ctx.createGain();

    if (type === 'rain') {
      filter.type = 'lowpass'; filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
    } else if (type === 'waves') {
      filter.type = 'bandpass'; filter.frequency.setValueAtTime(400, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);
    } else if (type === 'lofi') {
      filter.type = 'lowpass'; filter.frequency.setValueAtTime(350, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime);
    } else if (type === 'cafe') {
      filter.type = 'bandpass'; filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(0.1, this.ctx.currentTime);
    }

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);
    whiteNoise.start();

    this.nodes[type] = { source: whiteNoise, filter, gainNode };
    this.isPlaying[type] = true;
  }

  stopSound(type) {
    if (this.nodes[type]) {
      try {
        this.nodes[type].source.stop();
        this.nodes[type].source.disconnect();
      } catch (e) {}
      delete this.nodes[type];
      this.isPlaying[type] = false;
    }
  }

  setVolume(type, val) {
    if (this.nodes[type] && this.nodes[type].gainNode) {
      this.nodes[type].gainNode.gain.setValueAtTime(parseFloat(val), this.ctx.currentTime);
    }
  }
}

const audioManager = new SoundScapeManager();

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initClockAndMood();
  renderApp();
});

// Clock & Mood Engine
function initClockAndMood() {
  function updateClock() {
    const now = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', optionsDate);
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const clockDateEl = document.getElementById('live-date');
    const clockTimeEl = document.getElementById('live-clock');

    if (clockDateEl) clockDateEl.textContent = dateStr;
    if (clockTimeEl) clockTimeEl.textContent = timeStr;

    applyMoodTheme(state.currentMood);
  }

  updateClock();
  setInterval(updateClock, 1000);
}

function applyMoodTheme(moodKey) {
  const theme = MOOD_THEMES[moodKey] || MOOD_THEMES.calm;
  state.currentMood = moodKey;
  localStorage.setItem('lauren_mood', moodKey);

  document.body.className = theme.bodyClass;
  const headerBanner = document.getElementById('header-banner-bg');
  if (headerBanner) {
    headerBanner.style.backgroundImage = `url('${theme.bannerImg}')`;
  }
  const badgeEl = document.getElementById('scenery-location-badge');
  if (badgeEl) badgeEl.textContent = `📍 ${theme.location}`;
}

function setMood(moodKey) {
  applyMoodTheme(moodKey);
  renderApp();
}

function nextScenery() {
  const moodKeys = Object.keys(MOOD_THEMES);
  const currentIdx = moodKeys.indexOf(state.currentMood);
  const nextKey = moodKeys[(currentIdx + 1) % moodKeys.length];
  setMood(nextKey);
}

function openLocationInsightModal() {
  const theme = MOOD_THEMES[state.currentMood];
  const modal = document.getElementById('location-insight-modal');
  if (!modal) return;

  document.getElementById('location-modal-title').textContent = `📍 ${theme.location}`;
  document.getElementById('location-modal-fact').textContent = `${theme.name} — Scenic aesthetic tailored for Khanh Linh. Enjoy deep work with high-contrast minimalist harmony.`;
  document.getElementById('location-google-link').href = `https://www.google.com/search?q=${encodeURIComponent(theme.location)}`;

  modal.classList.remove('hidden');
}

function closeLocationInsightModal() {
  document.getElementById('location-insight-modal').classList.add('hidden');
}

// Render Navigation and Main Layout (Strict 2 Tabs: Workspace & Analytics)
function renderApp() {
  renderNavigation();
  renderTabContent();
  updateXPDisplay();
}

function renderNavigation() {
  const navContainer = document.getElementById('nav-container');
  if (!navContainer) return;

  const tabs = [
    { id: 'workspace', label: 'Workspace', icon: '⚡' },
    { id: 'analytics', label: 'Analytics & Export', icon: '📊' }
  ];

  navContainer.innerHTML = tabs.map(t => `
    <button class="nav-btn ${state.activeTab === t.id ? 'active' : ''}" onclick="switchTab('${t.id}')">
      <span>${t.icon}</span> ${t.label}
    </button>
  `).join('');
}

function switchTab(tabId) {
  state.activeTab = tabId;
  renderNavigation();
  renderTabContent();
}

function renderTabContent() {
  const container = document.getElementById('main-content-container');
  if (!container) return;

  if (state.activeTab === 'workspace') {
    container.innerHTML = renderWorkspaceTab();
    initAutocompleteInputs();
    updateTimerDisplay();
  } else if (state.activeTab === 'analytics') {
    container.innerHTML = renderAnalyticsTab();
  }
}

// WORKSPACE TAB RENDERER — PURE ENGLISH & HIGH CONTRAST
function renderWorkspaceTab() {
  const activeTask = state.tasks.find(t => t.id === state.activeTaskId) || state.tasks[0] || null;
  
  if (activeTask && activeTask.estDurationMins && state.timer.status === 'idle') {
    const targetSeconds = activeTask.estDurationMins * 60;
    state.timer.secondsLeft = targetSeconds;
    state.timer.totalSeconds = targetSeconds;
  }

  const areaFilters = ['ALL', ...state.customAreas];

  return `
    <div class="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
      
      <!-- Top Daily Check-in Card -->
      <div class="glass-card p-5 space-y-4">
        <!-- Top Row: Energy Selector, Work Date & Auto-fill -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200 pb-3">
          <!-- Daily Energy Level Selector -->
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold uppercase text-slate-900 flex items-center gap-1">⚡ Daily Energy Level:</span>
            <div class="flex gap-1.5">
              <button id="energy-btn-high" onclick="setEnergyLevel('High')" class="energy-btn ${state.dailyContext.energyLevel === 'High' ? 'active' : ''}">🔥 High</button>
              <button id="energy-btn-medium" onclick="setEnergyLevel('Medium')" class="energy-btn ${state.dailyContext.energyLevel === 'Medium' ? 'active' : ''}">⚡ Medium</button>
              <button id="energy-btn-low" onclick="setEnergyLevel('Low')" class="energy-btn ${state.dailyContext.energyLevel === 'Low' ? 'active' : ''}">🕯️ Low</button>
            </div>
          </div>

          <!-- Work Date Picker & Auto-fill Markdown -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-sky-400 shadow-sm">
              <label for="work-date-picker" class="text-xs font-extrabold text-sky-800 flex items-center gap-1">📅 Work Date:</label>
              <input type="date" id="work-date-picker" value="${state.selectedDate}" onchange="setWorkDate(this.value)" class="bg-transparent text-xs font-bold outline-none cursor-pointer text-slate-900">
            </div>

            <button onclick="openAutoFillModal()" class="px-3.5 py-1.5 rounded-xl bg-sky-100 border border-sky-500 text-sky-900 text-xs font-extrabold hover:bg-sky-200 transition">
              📋 Auto-fill from Markdown / AG
            </button>
          </div>
        </div>

        <!-- Bottom Grid: Top 3 Priorities & Hard Deadlines -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
          <!-- Top 3 Goals (7 cols) -->
          <div class="md:col-span-7 space-y-2">
            <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1">
              🏆 TOP 3 PRIORITIES / GOALS TODAY:
            </h4>
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <input type="text" value="${state.dailyContext.goals[0] || ''}" onchange="saveDailyGoal(0, this.value)" class="input-bright w-full text-xs font-bold text-slate-900" placeholder="Goal #1 (North Star Priority)...">
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <input type="text" value="${state.dailyContext.goals[1] || ''}" onchange="saveDailyGoal(1, this.value)" class="input-bright w-full text-xs font-bold text-slate-900" placeholder="Goal #2...">
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <input type="text" value="${state.dailyContext.goals[2] || ''}" onchange="saveDailyGoal(2, this.value)" class="input-bright w-full text-xs font-bold text-slate-900" placeholder="Goal #3...">
              </div>
            </div>
          </div>

          <!-- Hard Deadlines (5 cols) -->
          <div class="md:col-span-5 space-y-2 border-t md:border-t-0 md:border-l border-sky-200 pt-3 md:pt-0 md:pl-4">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-extrabold uppercase tracking-wider text-red-700 flex items-center gap-1">
                ⚠️ TIMELINE & HARD DEADLINES TODAY:
              </h4>
              <button onclick="openDeadlineModal()" class="text-[11px] bg-red-600 text-white px-2.5 py-1 rounded-lg font-bold hover:bg-red-500 transition">
                + Add Deadline
              </button>
            </div>
            
            <div class="space-y-1.5 max-h-28 overflow-y-auto">
              ${state.dailyContext.hardDeadlines.length === 0 ? `
                <div class="text-xs text-slate-500 font-semibold italic">No hard deadlines set.</div>
              ` : state.dailyContext.hardDeadlines.map((dl, idx) => `
                <div class="flex justify-between items-center p-2 rounded-lg bg-red-50 border border-red-300 text-xs font-bold text-red-900">
                  <span class="truncate" title="${dl.title}">${dl.title}</span>
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-extrabold bg-red-600 text-white px-2 py-0.5 rounded text-[11px]">${dl.time}</span>
                    <button onclick="deleteDeadline(${idx})" class="text-red-600 hover:text-red-800 font-extrabold text-xs">✕</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Main Columns Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Left Column: Filter Bar & Sessions Manager (7 Cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Interactive Pet Companion Widget -->
          ${renderPetWidget()}

          <!-- Gamification Banner -->
          <div onclick="openRewardsModal()" class="glass-card p-4 flex items-center justify-between cursor-pointer hover:scale-[1.01] transition">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                L${state.gamification.level}
              </div>
              <div>
                <div class="font-extrabold text-sm flex items-center gap-2 text-slate-900">
                  Khanh Linh's Focus Level <span class="text-xs text-sky-700 font-extrabold">ℹ️ Rules & Rewards</span>
                </div>
                <div class="text-xs font-extrabold text-slate-700">🔥 ${state.gamification.streak} Day Streak • ${state.gamification.xp} XP</div>
              </div>
            </div>
            <div class="flex gap-2">
              ${state.gamification.badges.map(b => `<span class="text-xs bg-sky-100 text-sky-900 px-2.5 py-1 rounded-full border border-sky-400 font-bold">🏆 ${b}</span>`).join('')}
            </div>
          </div>

          <!-- Task Planning Filter & Dynamic Area Manager Bar -->
          <div class="glass-card p-4 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200 pb-2">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-extrabold text-slate-900">🔍 Filter:</span>
                
                <!-- Priority Filter -->
                <select id="filter-priority" onchange="setPriorityFilter(this.value)" class="input-bright text-xs py-1 px-2 font-bold text-slate-900">
                  <option value="ALL" ${state.filterPriority === 'ALL' ? 'selected' : ''}>All Priorities</option>
                  <option value="P1" ${state.filterPriority === 'P1' ? 'selected' : ''}>🔴 P1 Urgent</option>
                  <option value="P2" ${state.filterPriority === 'P2' ? 'selected' : ''}>🟡 P2 Deep Work</option>
                  <option value="P3" ${state.filterPriority === 'P3' ? 'selected' : ''}>🟢 P3 Quick Win</option>
                </select>

                <!-- Cognitive Load Filter -->
                <select id="filter-cognitive" onchange="setCognitiveFilter(this.value)" class="input-bright text-xs py-1 px-2 font-bold text-slate-900">
                  <option value="ALL" ${state.filterCognitive === 'ALL' ? 'selected' : ''}>All Cognitive Loads</option>
                  <option value="Brain-heavy" ${state.filterCognitive === 'Brain-heavy' ? 'selected' : ''}>🧠 Brain-heavy</option>
                  <option value="Routine" ${state.filterCognitive === 'Routine' ? 'selected' : ''}>⚙️ Routine</option>
                  <option value="Light" ${state.filterCognitive === 'Light' ? 'selected' : ''}>☕ Light</option>
                </select>
              </div>

              <!-- Time Auto-Order & Cascade Buttons -->
              <div class="flex items-center gap-1.5">
                <button onclick="autoOrderTasksByStartTime()" class="text-xs bg-sky-100 hover:bg-sky-200 text-sky-900 font-extrabold px-2.5 py-1 rounded-lg border border-sky-400 transition" title="Sort tasks chronologically by start time">
                  ⏰ Auto-Order
                </button>
                <button onclick="autoCascadeTimelines()" class="text-xs bg-gradient-to-r from-sky-600 to-emerald-600 text-white font-extrabold px-2.5 py-1 rounded-lg shadow-sm transition" title="Auto-calculate start & end times consecutively">
                  ⚡ Auto-Cascade Timelines
                </button>
              </div>
            </div>

            <!-- Dynamic Area Filter Tabs + Manage Areas Button -->
            <div id="area-tabs-container" class="flex flex-wrap items-center gap-1.5 pt-1">
              ${areaFilters.map(a => `
                <button onclick="setAreaFilter('${a}')" class="px-3 py-1 rounded-lg text-xs font-extrabold transition border ${state.filterArea === a ? 'bg-sky-600 text-white border-sky-600 shadow-sm' : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200'}">
                  ${a}
                </button>
              `).join('')}
              <button onclick="openAreaManagerModal()" class="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white transition border border-emerald-500" title="Add, edit or delete area categories">
                ⚙️ Manage Areas
              </button>
            </div>
          </div>

          <!-- Session Tasks (Morning, Afternoon, Evening) -->
          ${renderSessionBlock('morning', '🌅 Morning Session', '06:00 - 11:59')}
          ${renderSessionBlock('afternoon', '☀️ Afternoon Session', '12:00 - 17:59')}
          ${renderSessionBlock('evening', '🌙 Evening Session', '18:00 - 05:59')}

          <!-- Quick Brain Dump Scratchpad -->
          <div class="glass-card p-4 space-y-2">
            <div class="flex justify-between items-center">
              <h4 class="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span>📝</span> Quick Brain Dump Scratchpad
              </h4>
              <span class="text-xs text-slate-500 font-bold">Auto-saved</span>
            </div>
            <textarea id="scratchpad-input" oninput="saveScratchpad(this.value)" rows="3" 
              class="w-full bg-slate-50 border border-sky-400 rounded-xl p-3 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Jot down random thoughts, ideas, or quick notes without interrupting your focus...">${state.scratchpad}</textarea>
          </div>

        </div>

        <!-- Right Column: Focus Timer (+10m Button), Early Finish & Soundscapes (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Focus Timer Card -->
          <div class="glass-card p-6 text-center space-y-5">
            <div class="flex justify-between items-center border-b border-sky-200 pb-3">
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-900">FOCUS SESSION</span>
              <span class="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-400">
                ${state.timer.mode.toUpperCase()}
              </span>
            </div>

            <!-- Active Task Summary Card -->
            ${activeTask ? `
              <div class="bg-white rounded-xl p-4 text-left border-2 border-sky-400 space-y-2 shadow-sm">
                <div class="flex items-center justify-between">
                  <span class="badge-area">${activeTask.area} • ${activeTask.project}</span>
                  ${activeTask.startTime ? `<span class="text-xs font-mono font-extrabold text-sky-800">⏱️ ${activeTask.startTime} - ${activeTask.endTime}</span>` : ''}
                </div>
                <div class="font-extrabold text-base text-slate-900 line-clamp-2">${activeTask.name}</div>
                <div class="text-xs font-extrabold text-slate-700">🎯 Goal: ${activeTask.goal || 'Not specified'}</div>
                ${activeTask.refLinks ? `
                  <div class="text-xs font-extrabold text-sky-800 truncate">
                    🔗 Reference: <a href="${activeTask.refLinks}" target="_blank" class="underline hover:text-emerald-700">${activeTask.refLinks}</a>
                  </div>
                ` : ''}
              </div>
            ` : '<div class="text-xs text-slate-500 font-bold">No task selected. Click on a task to load into timer.</div>'}

            <!-- Circular Timer Ring -->
            <div class="timer-ring-container">
              <svg class="timer-ring-svg" viewBox="0 0 100 100">
                <circle class="timer-ring-bg" cx="50" cy="50" r="42"></circle>
                <circle id="timer-progress-circle" class="timer-ring-progress" cx="50" cy="50" r="42" stroke-dasharray="263.89" stroke-dashoffset="0"></circle>
              </svg>
              <div class="timer-display">
                <div id="timer-digits" class="timer-digits">${formatTime(state.timer.secondsLeft)}</div>
                <div class="text-xs font-extrabold mt-1 text-slate-800">
                  ${activeTask ? `${activeTask.pomsDone} / ${activeTask.pomsCount} Pomodoros Done` : '0 / 0 Pomodoros'}
                </div>
              </div>
            </div>

            <!-- Timer Controls (+10m Button) -->
            <div class="flex flex-wrap justify-center items-center gap-2">
              ${state.timer.status === 'running' ? `
                <button onclick="pauseTimer()" class="btn-primary-blue text-xs"><span>⏸️</span> Pause</button>
              ` : `
                <button onclick="startTimer()" class="btn-primary-blue text-xs"><span>▶️</span> Start Focus</button>
              `}
              <button onclick="addTimerMinutes(10)" class="px-3 py-2 rounded-xl bg-amber-500 text-white font-extrabold hover:bg-amber-400 text-xs shadow-sm" title="Need more time? Add +10 minutes!">
                ⏱️ +10m
              </button>
              <button onclick="resetTimer()" class="px-3 py-2 rounded-xl bg-slate-200 text-slate-900 border border-slate-300 hover:bg-slate-300 text-xs font-bold">
                🔄 Reset
              </button>
              <button onclick="finishTaskEarly()" class="px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold shadow-sm" title="Finished early? Log outcome now!">
                🎉 Finish Early
              </button>
              <button onclick="openPipTimer()" class="px-3 py-2 rounded-xl bg-slate-200 text-slate-900 border border-slate-300 hover:bg-slate-300 text-xs font-bold" title="Pop Out Floating Timer">
                🗗 PiP
              </button>
            </div>

            <!-- Red Distraction Shield Button -->
            <div>
              <button onclick="triggerDistraction()" class="btn-disturbed w-full text-xs py-2.5">
                ⚠️ DISTURBED (Pause & Track Interruption)
              </button>
            </div>

            <!-- Motivational Quote Banner (Pure English) -->
            <div class="bg-sky-50 border border-sky-400 rounded-xl p-3.5 text-left space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-xs font-extrabold text-sky-900">💡 Focus Motivation</span>
              </div>
              <p id="ai-coach-text" class="text-xs font-bold text-slate-900 leading-relaxed italic">
                "Stay strong, Khanh Linh! Every focused minute brings your biggest goals to life."
              </p>
            </div>
          </div>

          <!-- Ambient Soundscapes & YouTube Mini Player -->
          <div class="glass-card p-4 space-y-3">
            <h4 class="font-bold text-xs uppercase tracking-wider flex items-center justify-between text-slate-900">
              <span class="flex items-center gap-2"><span>🎧</span> Ambient Soundscapes & YouTube</span>
            </h4>

            <!-- YouTube URL Input -->
            <div class="space-y-2">
              <div class="flex gap-2">
                <input type="text" id="yt-url-input" value="${state.youtubeUrl}" placeholder="Paste YouTube link (e.g. Lofi live stream)..." class="w-full input-bright text-xs font-bold text-slate-900">
                <button onclick="loadYouTubeVideo()" class="btn-primary-blue text-xs px-3 py-1.5">Load</button>
              </div>
              <div id="yt-player-container">
                ${renderYouTubePlayer(state.youtubeUrl)}
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-sky-200">
              ${renderSoundButton('rain', '🌧️ Rain')}
              ${renderSoundButton('waves', '🌊 Waves')}
              ${renderSoundButton('lofi', '🎵 Lo-Fi Synth')}
              ${renderSoundButton('cafe', '☕ Cafe')}
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- MODAL: MANAGE CUSTOM AREAS (ADD / EDIT / DELETE FIXED) -->
    <div id="area-manager-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-lg p-6 space-y-4">
        <div class="flex justify-between items-center border-b border-sky-200 pb-3">
          <h3 class="font-extrabold text-lg text-sky-800">⚙️ Manage Custom Life Areas</h3>
          <button onclick="closeAreaManagerModal()" class="text-sm font-bold opacity-60 hover:opacity-100">✕</button>
        </div>

        <p class="text-xs font-semibold text-slate-700">Add new categories or edit/delete existing areas to match your personal life and career goals.</p>

        <!-- Add New Area Input -->
        <div class="flex gap-2">
          <input type="text" id="new-area-input" class="input-bright w-full text-slate-900 font-bold" placeholder="e.g. 🎨 Hobby & Art / 🏃 Fitness & Health">
          <button onclick="addNewCustomArea()" class="btn-emerald text-xs px-4 py-2 shrink-0">+ Add Area</button>
        </div>

        <!-- Current Areas List (Rendered dynamically) -->
        <div id="area-manager-list-container" class="space-y-2 max-h-60 overflow-y-auto pt-2">
          <!-- Dynamically populated by renderAreaManagerList() -->
        </div>

        <div class="flex justify-end pt-2 border-t border-slate-200">
          <button onclick="closeAreaManagerModal()" class="btn-primary-blue text-xs">Done & Save</button>
        </div>
      </div>
    </div>

    <!-- MODAL: ADD / EDIT TASK -->
    <div id="task-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-lg p-6 space-y-4">
        <h3 id="task-modal-title" class="font-extrabold text-lg text-sky-800">Add New Task</h3>
        <input type="hidden" id="modal-task-id">
        <input type="hidden" id="modal-task-session" value="morning">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Area (*)</label>
            <select id="modal-area-select" class="input-bright w-full font-bold text-slate-900">
              ${state.customAreas.map(a => `<option value="${a}">${a}</option>`).join('')}
            </select>
          </div>

          <div class="relative">
            <label class="block text-xs font-bold mb-1 text-slate-900">Project (*)</label>
            <input type="text" id="modal-project-input" class="input-bright w-full text-slate-900" placeholder="e.g. Omnistream Data Sourcing">
            <div id="project-autocomplete-list" class="autocomplete-dropdown hidden"></div>
          </div>
        </div>

        <div class="relative">
          <label class="block text-xs font-bold mb-1 text-slate-900">Task Name (*)</label>
          <input type="text" id="modal-task-input" class="input-bright w-full text-slate-900" placeholder="e.g. Sourcing 30 candidate profiles">
          <div id="task-autocomplete-list" class="autocomplete-dropdown hidden"></div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Priority (*)</label>
            <select id="modal-priority-select" class="input-bright w-full font-bold text-slate-900">
              <option value="P1">🔴 P1 Urgent</option>
              <option value="P2" selected>🟡 P2 Deep Work</option>
              <option value="P3">🟢 P3 Quick Win</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Cognitive Load (*)</label>
            <select id="modal-cognitive-select" class="input-bright w-full font-bold text-slate-900">
              <option value="Brain-heavy">🧠 Brain-heavy</option>
              <option value="Routine" selected>⚙️ Routine</option>
              <option value="Light">☕ Light</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Assigned Pomodoros</label>
            <input type="number" id="modal-poms-input" min="1" max="12" value="2" onchange="autoCalcTimes()" class="input-bright w-full font-bold text-slate-900">
          </div>
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Session (*)</label>
            <select id="modal-session-select" class="input-bright w-full font-bold text-slate-900">
              <option value="morning">Morning (06:00-11:59)</option>
              <option value="afternoon">Afternoon (12:00-17:59)</option>
              <option value="evening">Evening (18:00-05:59)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Est. Duration (Mins) (*)</label>
            <input type="number" id="modal-duration-input" value="50" onchange="autoCalcTimes()" class="input-bright w-full font-extrabold text-sky-800">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Est. Start Time (*)</label>
            <input type="time" id="modal-start-time" value="09:00" onchange="autoCalcTimes()" class="input-bright w-full font-mono text-slate-900 font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold mb-1 text-slate-900">Auto End Time</label>
            <input type="time" id="modal-end-time" value="09:50" readonly class="input-bright w-full font-mono bg-sky-50 font-extrabold text-sky-800">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Pre-Session Goal (*)</label>
          <input type="text" id="modal-goal-input" class="input-bright w-full text-slate-900" placeholder="What do you want to achieve before starting?">
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Reference Docs & Links (Optional)</label>
          <input type="url" id="modal-reflinks-input" class="input-bright w-full font-mono text-xs text-slate-900" placeholder="https://docs.google.com/document/d/...">
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Details & Description (Optional)</label>
          <textarea id="modal-details-input" rows="2" class="input-bright w-full text-slate-900" placeholder="Additional details..."></textarea>
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button onclick="closeTaskModal()" class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-bold text-slate-900">Cancel</button>
          <button onclick="saveTaskModal()" class="btn-primary-blue text-xs">Save Task</button>
        </div>
      </div>
    </div>

    <!-- MODAL: PET COMPANION SELECTOR -->
    <div id="pet-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-md p-6 space-y-4">
        <h3 class="font-extrabold text-lg text-sky-800">🐾 Choose Your Pet Companion</h3>
        <p class="text-xs text-slate-700 font-semibold">Select your favorite pet companion and give them a cute nickname!</p>
        
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Pet Character</label>
          <div class="grid grid-cols-3 gap-2">
            <button id="pet-opt-dog" onclick="selectPetType('dog')" class="p-3 rounded-xl border-2 ${state.petState.petId === 'dog' ? 'border-sky-600 bg-sky-50 font-bold' : 'border-slate-300'} text-xs text-center text-slate-900">
              <div class="text-3xl mb-1">🐶</div>
              <div>Gooby Tubbs</div>
            </button>
            <button id="pet-opt-cat" onclick="selectPetType('cat')" class="p-3 rounded-xl border-2 ${state.petState.petId === 'cat' ? 'border-sky-600 bg-sky-50 font-bold' : 'border-slate-300'} text-xs text-center text-slate-900">
              <div class="text-3xl mb-1">🐱</div>
              <div>Luna</div>
            </button>
            <button id="pet-opt-duck" onclick="selectPetType('duck')" class="p-3 rounded-xl border-2 ${state.petState.petId === 'duck' ? 'border-sky-600 bg-sky-50 font-bold' : 'border-slate-300'} text-xs text-center text-slate-900">
              <div class="text-3xl mb-1">🦆</div>
              <div>Quackers</div>
            </button>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Pet Nickname</label>
          <input type="text" id="pet-name-input" value="${state.petState.customName}" class="input-bright w-full text-slate-900 font-bold">
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button onclick="closePetModal()" class="px-4 py-2 rounded-xl bg-slate-200 text-xs font-bold text-slate-900">Cancel</button>
          <button onclick="savePetModal()" class="btn-primary-blue text-xs">Save Pet</button>
        </div>
      </div>
    </div>

    <!-- MODAL: LOCATION INSIGHT -->
    <div id="location-insight-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-md p-6 space-y-4">
        <h3 id="location-modal-title" class="font-extrabold text-lg text-sky-800">📍 Location Insight</h3>
        <p id="location-modal-fact" class="text-xs leading-relaxed font-bold text-slate-900"></p>
        <div class="flex justify-between items-center pt-2">
          <a id="location-google-link" href="#" target="_blank" class="text-xs font-extrabold text-sky-800 hover:underline">
            🔍 Explore more on Google Travel & Search →
          </a>
          <button onclick="closeLocationInsightModal()" class="btn-primary-blue text-xs">Close</button>
        </div>
      </div>
    </div>

    <!-- MODAL: ADD HARD DEADLINE -->
    <div id="deadline-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-md p-6 space-y-4">
        <h3 class="font-extrabold text-base text-red-600">⚠️ Add Hard Deadline Today</h3>
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Deadline Title (*)</label>
          <input type="text" id="deadline-title-input" class="input-bright w-full text-slate-900 font-bold" placeholder="e.g. Weekly Strategy Sync Meeting">
        </div>
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Time (*)</label>
          <input type="time" id="deadline-time-input" value="10:30" class="input-bright w-full font-mono text-slate-900 font-bold">
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button onclick="closeDeadlineModal()" class="px-4 py-2 rounded-xl bg-slate-200 text-xs font-bold text-slate-900">Cancel</button>
          <button onclick="saveDeadline()" class="btn-primary-blue text-xs">Save Deadline</button>
        </div>
      </div>
    </div>

    <!-- MODAL: AUTO-FILL FROM MARKDOWN / AG -->
    <div id="autofill-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-lg p-6 space-y-4">
        <h3 class="font-extrabold text-base text-sky-800">📋 Auto-fill Tasks from Markdown / AG</h3>
        <p class="text-xs text-slate-700 font-semibold">Paste any AG check-in markdown table or task text below to automatically import tasks into your workspace.</p>
        <textarea id="autofill-text-input" rows="6" class="input-bright w-full font-mono text-xs text-slate-900" placeholder="| Khung Giờ | Mã Task | Mảng | Chi Tiết | Thời Lượng |..."></textarea>
        <div class="flex justify-between items-center pt-2">
          <button onclick="pasteSampleMarkdown()" class="text-xs text-sky-800 font-bold underline">Paste Sample AG Markdown</button>
          <div class="flex gap-2">
            <button onclick="closeAutoFillModal()" class="px-4 py-2 rounded-xl bg-slate-200 text-xs font-bold text-slate-900">Cancel</button>
            <button onclick="processAutoFill()" class="btn-primary-blue text-xs">Import Tasks</button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL: POST-SESSION OUTCOME REFLECTION -->
    <div id="outcome-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-md p-6 space-y-4">
        <h3 class="font-extrabold text-base text-sky-800">Post-Session Task Reflection</h3>
        <p class="text-xs text-slate-700 font-semibold">Log your completion percentage, outcome, and next steps before closing session.</p>
        
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Completion Percentage (%) (*)</label>
          <input type="number" id="outcome-pct-input" min="0" max="100" value="100" class="input-bright w-full font-extrabold text-slate-900">
        </div>
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Actual Outcome Description (*)</label>
          <input type="text" id="outcome-desc-input" class="input-bright w-full text-slate-900 font-bold" placeholder="What was actually achieved?">
        </div>
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Next Steps (*)</label>
          <input type="text" id="outcome-next-input" class="input-bright w-full text-slate-900 font-bold" placeholder="What should be done next?">
        </div>
        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Output Documents & Deliverable Links (Optional)</label>
          <input type="url" id="outcome-links-input" class="input-bright w-full font-mono text-xs text-slate-900" placeholder="https://docs.google.com/spreadsheets/d/...">
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button onclick="closeOutcomeModal()" class="px-4 py-2 rounded-xl bg-slate-200 text-xs font-bold text-slate-900">Cancel</button>
          <button onclick="saveOutcomeModal()" class="btn-primary-blue text-xs">Save Outcome & Log</button>
        </div>
      </div>
    </div>

    <!-- MODAL: REWARDS & GAME RULES -->
    <div id="rewards-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-xl p-6 space-y-4">
        <div class="flex justify-between items-center border-b border-sky-200 pb-3">
          <h3 class="font-extrabold text-lg text-sky-800 flex items-center gap-2">
            🏆 Gamification Rules & Khanh Linh's Rewards
          </h3>
          <button onclick="closeRewardsModal()" class="text-sm font-bold opacity-60 hover:opacity-100">✕</button>
        </div>

        <div class="bg-sky-50 p-3 rounded-xl border border-sky-300 text-xs text-slate-900 space-y-1 font-bold">
          <div class="font-extrabold text-sm text-sky-900">📜 Game Rules & XP Earning:</div>
          <div>• ⏱️ Complete 1 Pomodoro Focus Session = <b>+50 XP</b></div>
          <div>• 🎉 Finish & Log Task Outcome = <b>+20 XP</b></div>
          <div>• 🔥 Maintain Daily Streak = <b>+30 XP</b></div>
          <div>• Every 200 XP = <b>Level Up!</b></div>
        </div>

        <div class="space-y-3 pt-2">
          <h4 class="font-extrabold text-sm text-slate-900">🎁 Customize Your Motivation Rewards:</h4>
          
          <div>
            <label class="block text-xs font-bold text-sky-900 mb-1">⏰ Hourly Break Reward</label>
            <input type="text" id="reward-hourly" value="${state.rewards.hourly}" onchange="saveRewards()" class="input-bright w-full text-slate-900 font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-sky-900 mb-1">☀️ Daily Accomplishment Reward</label>
            <input type="text" id="reward-daily" value="${state.rewards.daily}" onchange="saveRewards()" class="input-bright w-full text-slate-900 font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-sky-900 mb-1">🗓️ Weekly Champion Reward</label>
            <input type="text" id="reward-weekly" value="${state.rewards.weekly}" onchange="saveRewards()" class="input-bright w-full text-slate-900 font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-sky-900 mb-1">🏆 Monthly Crown Reward</label>
            <input type="text" id="reward-monthly" value="${state.rewards.monthly}" onchange="saveRewards()" class="input-bright w-full text-slate-900 font-bold">
          </div>
        </div>

        <div class="flex justify-between items-center pt-2 border-t border-slate-200">
          <button onclick="clearAllData()" class="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold shadow-sm">
            🧹 Reset Progress to Level 1
          </button>
          <button onclick="closeRewardsModal()" class="btn-primary-blue text-xs">Save Rewards & Close</button>
        </div>
      </div>
    </div>

    <!-- MODAL: DISTRACTION SHIELD -->
    <div id="distraction-modal" class="modal-backdrop hidden">
      <div class="modal-card-bright w-full max-w-md p-6 space-y-4 border-2 border-red-500">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-base text-red-600 flex items-center gap-2">
            <span>⚠️</span> Distraction Shield Active
          </h3>
          <div id="distraction-stopwatch" class="font-mono font-bold text-xl text-red-500">00:00</div>
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">What distracted you?</label>
          <input type="text" id="distraction-reason-input" class="input-bright w-full text-slate-900 font-bold" placeholder="e.g. Urgent message / Checked social media">
        </div>

        <div>
          <label class="block text-xs font-bold mb-1 text-slate-900">Categorize Interruption</label>
          <div class="grid grid-cols-2 gap-3">
            <button id="btn-type-useful" onclick="setDistractionType('useful')" class="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-900 text-left">
              🟢 Useful
              <div class="text-[10px] font-normal opacity-80">Urgent/Valid business interruption</div>
            </button>
            <button id="btn-type-useless" onclick="setDistractionType('useless')" class="p-3 rounded-xl border-2 border-red-500 bg-red-50 text-xs font-bold text-red-900 text-left ring-2 ring-red-500">
              🔴 Useless
              <div class="text-[10px] font-normal opacity-80">Mindless distraction</div>
            </button>
          </div>
        </div>

        <button onclick="resumeFromDistraction()" class="btn-primary-blue w-full justify-center text-xs py-2.5">
          Resume Task & Save Interruption
        </button>
      </div>
    </div>
  `;
}

// PET COMPANION WIDGET RENDERER (PURE ENGLISH SPEECHES)
function renderPetWidget() {
  const profile = PET_PROFILES[state.petState.petId] || PET_PROFILES.dog;
  const avatar = profile.avatars[state.petState.actionState] || profile.avatars.sleeping;
  const speech = profile.speeches[state.petState.actionState] || profile.speeches.sleeping;
  const name = state.petState.customName || profile.name;

  return `
    <div onclick="cyclePetAction()" class="pet-card shadow-sm border-2 border-sky-400">
      <div class="flex items-center justify-between">
        <div class="text-left">
          <div class="font-extrabold text-xs text-sky-900 uppercase tracking-wider flex items-center gap-1">
            <span>🐾</span> ${name} (${profile.species})
          </div>
          <div class="pet-speech-bubble mt-1">
            ${speech}
          </div>
        </div>
        <div class="pet-avatar">
          ${avatar}
        </div>
      </div>
      <div class="mt-2 flex justify-between items-center text-[11px] text-slate-700 font-extrabold border-t border-sky-200 pt-1.5">
        <span>💡 Touch pet to play, feed, dance, or sleep!</span>
        <button onclick="event.stopPropagation(); openPetModal()" class="text-sky-800 hover:underline font-extrabold">🐾 Switch Pet</button>
      </div>
    </div>
  `;
}

function cyclePetAction() {
  const states = ['sleeping', 'playing', 'eating', 'dancing'];
  const currentIdx = states.indexOf(state.petState.actionState);
  state.petState.actionState = states[(currentIdx + 1) % states.length];

  localStorage.setItem('lauren_pet_state', JSON.stringify(state.petState));
  renderTabContent();
}

function openPetModal() {
  document.getElementById('pet-modal').classList.remove('hidden');
}

function closePetModal() {
  document.getElementById('pet-modal').classList.add('hidden');
}

function selectPetType(type) {
  state.petState.petId = type;
  state.petState.customName = PET_PROFILES[type].name;
  const nameInput = document.getElementById('pet-name-input');
  if (nameInput) nameInput.value = state.petState.customName;

  ['dog', 'cat', 'duck'].forEach(pId => {
    const btn = document.getElementById(`pet-opt-${pId}`);
    if (btn) {
      btn.className = (pId === type) 
        ? "p-3 rounded-xl border-2 border-sky-600 bg-sky-50 font-bold text-xs text-center text-slate-900" 
        : "p-3 rounded-xl border-2 border-slate-300 text-xs text-center text-slate-900";
    }
  });
}

function savePetModal() {
  const inputEl = document.getElementById('pet-name-input');
  if (inputEl) state.petState.customName = inputEl.value.trim() || PET_PROFILES[state.petState.petId].name;
  localStorage.setItem('lauren_pet_state', JSON.stringify(state.petState));
  closePetModal();
  renderApp();
}

// CUSTOM AREA MANAGER LOGIC (INLINE EDIT & INSTANT DELETE)
function openAreaManagerModal() {
  state.editingAreaIdx = null;
  renderAreaManagerList();
  document.getElementById('area-manager-modal').classList.remove('hidden');
}

function closeAreaManagerModal() {
  state.editingAreaIdx = null;
  document.getElementById('area-manager-modal').classList.add('hidden');
  renderApp();
}

function renderAreaManagerList() {
  const container = document.getElementById('area-manager-list-container');
  if (!container) return;

  container.innerHTML = state.customAreas.map((area, idx) => {
    if (state.editingAreaIdx === idx) {
      return `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-sky-50 border-2 border-sky-500 gap-2">
          <input type="text" id="edit-area-input-${idx}" value="${area}" class="input-bright text-xs py-1 px-2 font-bold w-full text-slate-900">
          <div class="flex items-center gap-1 shrink-0">
            <button onclick="saveRenameArea(${idx})" class="text-xs px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold shadow-sm">✓ Save</button>
            <button onclick="cancelRenameArea()" class="text-xs px-2.5 py-1 bg-slate-300 hover:bg-slate-400 text-slate-900 rounded-lg font-bold shadow-sm">✕</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-300">
        <span class="font-bold text-xs text-slate-900">${area}</span>
        <div class="flex items-center gap-1.5">
          <button onclick="startRenameArea(${idx})" class="text-xs px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-white rounded-lg font-bold shadow-sm">✏️ Rename</button>
          <button onclick="deleteCustomArea(${idx})" class="text-xs px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold shadow-sm">🗑️ Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

function addNewCustomArea() {
  const inputEl = document.getElementById('new-area-input');
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;

  if (!state.customAreas.includes(val)) {
    state.customAreas.push(val);
    localStorage.setItem('lauren_custom_areas', JSON.stringify(state.customAreas));
    inputEl.value = '';
    renderAreaManagerList();
  }
}

function startRenameArea(idx) {
  state.editingAreaIdx = idx;
  renderAreaManagerList();
  const editInput = document.getElementById(`edit-area-input-${idx}`);
  if (editInput) editInput.focus();
}

function cancelRenameArea() {
  state.editingAreaIdx = null;
  renderAreaManagerList();
}

function saveRenameArea(idx) {
  const editInput = document.getElementById(`edit-area-input-${idx}`);
  if (!editInput) return;
  const newName = editInput.value.trim();
  const oldName = state.customAreas[idx];

  if (newName && newName !== oldName) {
    state.customAreas[idx] = newName;
    state.tasks.forEach(t => {
      if (t.area === oldName) t.area = newName;
    });
    saveTasks();
    localStorage.setItem('lauren_custom_areas', JSON.stringify(state.customAreas));
  }

  state.editingAreaIdx = null;
  renderAreaManagerList();
}

function deleteCustomArea(idx) {
  state.customAreas.splice(idx, 1);
  localStorage.setItem('lauren_custom_areas', JSON.stringify(state.customAreas));
  renderAreaManagerList();
}

function renderSessionBlock(sessionKey, title, timeRange) {
  let sessionTasks = state.tasks.filter(t => t.session === sessionKey);
  
  if (state.filterArea !== 'ALL') sessionTasks = sessionTasks.filter(t => t.area === state.filterArea);
  if (state.filterPriority !== 'ALL') sessionTasks = sessionTasks.filter(t => t.priority === state.filterPriority);
  if (state.filterCognitive !== 'ALL') sessionTasks = sessionTasks.filter(t => t.cognitiveLoad === state.filterCognitive);

  const totalPoms = sessionTasks.reduce((acc, t) => acc + t.pomsCount, 0);
  const donePoms = sessionTasks.reduce((acc, t) => acc + t.pomsDone, 0);

  return `
    <div class="glass-card p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-sky-200 pb-2">
        <div>
          <h3 class="font-extrabold text-sm text-slate-900">${title}</h3>
          <span class="text-xs text-slate-600 font-bold">${timeRange}</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-extrabold text-slate-900">${donePoms} / ${totalPoms} Poms</span>
          <button onclick="openAddTaskModal('${sessionKey}')" class="btn-primary-blue text-xs py-1 px-3">
            + Add Task
          </button>
        </div>
      </div>

      <div class="space-y-2">
        ${sessionTasks.length === 0 ? `
          <div class="text-xs text-slate-500 font-bold py-3 text-center border-2 border-dashed border-sky-300 rounded-xl">
            No tasks planned for ${sessionKey}. Click '+ Add Task' to add your life/work tasks!
          </div>
        ` : sessionTasks.map(t => renderTaskCard(t)).join('')}
      </div>
    </div>
  `;
}

function renderTaskCard(task) {
  const isActive = task.id === state.activeTaskId;
  const priorityClass = task.priority === 'P1' ? 'badge-priority-p1' : (task.priority === 'P2' ? 'badge-priority-p2' : 'badge-priority-p3');

  return `
    <div class="p-3.5 rounded-xl transition border-2 ${isActive ? 'bg-sky-100 border-sky-600 shadow-md ring-2 ring-sky-400' : 'bg-white border-slate-300 hover:border-sky-400'} flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div class="space-y-1.5 cursor-pointer flex-1" onclick="setActiveTask('${task.id}')">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge-area">${task.area} • ${task.project}</span>
          <span class="${priorityClass}">${task.priority || 'P2'}</span>
          ${task.cognitiveLoad ? `<span class="text-[11px] bg-slate-200 text-slate-900 px-2 py-0.5 rounded font-extrabold">${task.cognitiveLoad}</span>` : ''}
          ${task.startTime ? `<span class="text-[11px] font-mono font-extrabold text-sky-800">⏱️ ${task.startTime} - ${task.endTime}</span>` : ''}
          ${isActive ? '<span class="text-[10px] bg-sky-600 text-white font-extrabold px-2 py-0.5 rounded-full">ACTIVE</span>' : ''}
        </div>
        <div class="font-extrabold text-sm text-slate-900">${task.name}</div>
        ${task.goal ? `<div class="text-xs font-bold text-slate-700">🎯 Goal: ${task.goal}</div>` : ''}
      </div>

      <div class="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-slate-200 pt-2 md:pt-0">
        <div class="text-xs font-mono font-extrabold text-sky-900">${task.pomsDone}/${task.pomsCount} Poms</div>
        <div class="flex items-center gap-1.5">
          <button onclick="openOutcomeModal('${task.id}')" class="text-xs px-2.5 py-1 bg-emerald-600 text-white hover:bg-emerald-500 rounded-lg font-bold shadow-sm" title="Log Outcome">
            ✓ Log
          </button>
          <button onclick="openEditTaskModal('${task.id}')" class="text-xs px-2.5 py-1 bg-amber-500 text-white hover:bg-amber-400 rounded-lg font-bold shadow-sm" title="Edit Task">
            ✏️
          </button>
          <button onclick="deleteTask('${task.id}')" class="text-xs px-2.5 py-1 bg-red-600 text-white hover:bg-red-500 rounded-lg font-bold shadow-sm" title="Delete Task">
            🗑️
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSoundButton(type, label) {
  const active = audioManager.isPlaying[type];
  return `
    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-sky-300">
      <button onclick="toggleSoundscape('${type}')" class="text-xs font-bold flex items-center gap-2 ${active ? 'text-sky-800 font-extrabold' : 'text-slate-900'}">
        <span>${active ? '⏸️' : '▶️'}</span> ${label}
      </button>
      <input type="range" min="0" max="0.5" step="0.05" value="0.15" onchange="setSoundVolume('${type}', this.value)" class="w-16 h-1">
    </div>
  `;
}

function renderYouTubePlayer(url) {
  if (!url) return `<div class="text-xs text-slate-600 font-bold text-center py-1">Paste a YouTube link above to embed your favorite Lo-Fi music stream!</div>`;

  let videoId = '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    videoId = match[2];
    return `
      <div class="relative w-full rounded-xl overflow-hidden shadow-md border border-sky-400" style="padding-top: 56.25%;">
        <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else {
    return `<div class="text-xs text-red-600 font-bold text-center">Invalid YouTube URL. Please paste a valid YouTube video link.</div>`;
  }
}

function loadYouTubeVideo() {
  const val = document.getElementById('yt-url-input').value;
  state.youtubeUrl = val;
  localStorage.setItem('lauren_yt_url', val);
  const container = document.getElementById('yt-player-container');
  if (container) container.innerHTML = renderYouTubePlayer(val);
}

// ANALYTICS TAB RENDERER
function renderAnalyticsTab() {
  const totalFocusMins = state.logs.reduce((acc, l) => acc + (l.focusMinutes || 0), 0);
  const usefulMins = state.logs.reduce((acc, l) => acc + (l.usefulMins || 0), 0);
  const uselessMins = state.logs.reduce((acc, l) => acc + (l.uselessMins || 0), 0);

  return `
    <div class="max-w-6xl mx-auto p-4 lg:p-6 space-y-6">
      
      <!-- Top Metrics Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="glass-card p-4 text-center">
          <div class="text-xs font-bold text-slate-600 uppercase">Total Focus Time</div>
          <div class="text-2xl font-extrabold font-mono text-sky-800 mt-1">${totalFocusMins} mins</div>
        </div>
        <div class="glass-card p-4 text-center">
          <div class="text-xs font-bold text-slate-600 uppercase">Sessions Logged</div>
          <div class="text-2xl font-extrabold font-mono text-emerald-700 mt-1">${state.logs.length}</div>
        </div>
        <div class="glass-card p-4 text-center">
          <div class="text-xs font-bold text-slate-600 uppercase">🟢 Useful Interruption</div>
          <div class="text-2xl font-extrabold font-mono text-emerald-600 mt-1">${usefulMins} mins</div>
        </div>
        <div class="glass-card p-4 text-center">
          <div class="text-xs font-bold text-slate-600 uppercase">🔴 Useless Lost Mins</div>
          <div class="text-2xl font-extrabold font-mono text-red-600 mt-1">${uselessMins} mins</div>
        </div>
      </div>

      <!-- Tabular Master Data Log & Log Editor -->
      <div class="glass-card p-6 space-y-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-sky-200 pb-3">
          <div>
            <h3 class="font-extrabold text-base text-sky-800">Master Data Log (Editable)</h3>
            <p class="text-xs text-slate-600 font-semibold">View, edit, or delete logged session data.</p>
          </div>
          <div class="flex gap-2">
            <button onclick="downloadCSV()" class="btn-primary-blue text-xs">
              📥 Download Daily CSV
            </button>
            <button onclick="syncToGoogleSheets()" class="btn-emerald text-xs">
              ⚡ Sync to Google Sheets
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="border-b border-sky-300 font-extrabold text-slate-900">
                <th class="p-2">Date</th>
                <th class="p-2">Session</th>
                <th class="p-2">Area</th>
                <th class="p-2">Project</th>
                <th class="p-2">Task</th>
                <th class="p-2">Goal</th>
                <th class="p-2">Outcome</th>
                <th class="p-2">Focus Mins</th>
                <th class="p-2">Distractions</th>
                <th class="p-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${state.logs.length === 0 ? `
                <tr><td colspan="10" class="text-center p-4 text-slate-500 font-semibold">No logs recorded yet. Complete tasks and log outcomes to populate master table.</td></tr>
              ` : state.logs.map((l, index) => `
                <tr class="border-b border-slate-200 hover:bg-sky-50">
                  <td class="p-2 font-mono font-bold">${l.date}</td>
                  <td class="p-2 capitalize font-semibold">${l.session}</td>
                  <td class="p-2 font-extrabold text-sky-800">${l.area}</td>
                  <td class="p-2 font-semibold">${l.project}</td>
                  <td class="p-2 font-extrabold text-slate-900">${l.task}</td>
                  <td class="p-2 max-w-xs truncate" title="${l.goal}">${l.goal || '-'}</td>
                  <td class="p-2 max-w-xs truncate" title="${l.outcome}">${l.completionPct}% - ${l.outcome || '-'}</td>
                  <td class="p-2 font-mono font-extrabold text-sky-800">${l.focusMinutes}m</td>
                  <td class="p-2 font-bold">🟢 ${l.usefulMins}m / 🔴 ${l.uselessMins}m</td>
                  <td class="p-2 text-right space-x-1">
                    <button onclick="editLogRow(${index})" class="px-2 py-1 bg-amber-500 text-white rounded text-[10px] font-bold">✏️ Edit</button>
                    <button onclick="deleteLogRow(${index})" class="px-2 py-1 bg-red-600 text-white rounded text-[10px] font-bold">🗑️ Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

// TIMER ENGINE WITH +10m EXTENSION
function startTimer() {
  if (state.timer.status === 'running') return;
  state.timer.status = 'running';
  
  state.timer.intervalId = setInterval(() => {
    if (state.timer.secondsLeft > 0) {
      state.timer.secondsLeft--;
      updateTimerDisplay();
      if (state.pipWindow) updatePipTimerDisplay();
    } else {
      onTimerComplete();
    }
  }, 1000);

  renderTabContent();
}

function pauseTimer() {
  if (state.timer.status !== 'running') return;
  state.timer.status = 'paused';
  clearInterval(state.timer.intervalId);
  renderTabContent();
}

function resetTimer() {
  pauseTimer();
  state.timer.secondsLeft = state.settings.workDuration * 60;
  state.timer.totalSeconds = state.settings.workDuration * 60;
  updateTimerDisplay();
  if (state.pipWindow) updatePipTimerDisplay();
  renderTabContent();
}

function addTimerMinutes(mins) {
  const addedSecs = mins * 60;
  state.timer.secondsLeft += addedSecs;
  state.timer.totalSeconds += addedSecs;

  updateTimerDisplay();
  if (state.pipWindow) updatePipTimerDisplay();
  renderTabContent();
}

function finishTaskEarly() {
  pauseTimer();
  addXP(70);

  const activeTask = state.tasks.find(t => t.id === state.activeTaskId);
  if (activeTask) {
    activeTask.pomsDone++;
    saveTasks();
    openOutcomeModal(activeTask.id);
  } else {
    alert("🎉 Task finished early! Great job!");
  }
}

function onTimerComplete() {
  pauseTimer();
  addXP(50);
  
  const activeTask = state.tasks.find(t => t.id === state.activeTaskId);
  if (activeTask) {
    activeTask.pomsDone++;
    saveTasks();
    openOutcomeModal(activeTask.id);
  }

  alert("🎉 Pomodoro Session Completed! Great focus, Khanh Linh.");
  resetTimer();
}

function updateTimerDisplay() {
  const digitsEl = document.getElementById('timer-digits');
  const ringEl = document.getElementById('timer-progress-circle');

  if (digitsEl) digitsEl.textContent = formatTime(state.timer.secondsLeft);
  
  if (ringEl) {
    const total = state.timer.totalSeconds;
    const current = state.timer.secondsLeft;
    const pct = total > 0 ? current / total : 0;
    const circumference = 263.89;
    const offset = circumference * (1 - pct);
    ringEl.style.strokeDashoffset = offset;
  }
}

function openPipTimer() {
  if (!('documentPictureInPicture' in window)) {
    alert("⚠️ Document Picture-in-Picture API is not supported in this browser. Please use desktop Google Chrome or Microsoft Edge.");
    return;
  }

  window.documentPictureInPicture.requestWindow({ width: 320, height: 220 })
    .then(pipWin => {
      state.pipWindow = pipWin;
      
      pipWin.document.body.innerHTML = `
        <style>
          body { font-family: sans-serif; background: #0F172A; color: white; margin: 0; padding: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; box-sizing: border-box; }
          .digits { font-size: 2.8rem; font-weight: 800; font-mono: true; margin: 0.5rem 0; color: #38BDF8; }
          .task-title { font-size: 0.85rem; font-weight: bold; text-align: center; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 260px; }
          .btn-group { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
          button { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: white; font-weight: bold; padding: 0.4rem 0.8rem; border-radius: 0.4rem; cursor: pointer; font-size: 0.75rem; }
          .btn-red { background: #EF4444; border: none; }
        </style>
        <div class="task-title" id="pip-task-name">Focusing</div>
        <div class="digits" id="pip-digits">25:00</div>
        <div class="btn-group">
          <button id="pip-toggle-btn">Pause</button>
          <button class="btn-red" id="pip-disturb-btn">⚠️ Disturbed</button>
        </div>
      `;

      updatePipTimerDisplay();

      pipWin.document.getElementById('pip-toggle-btn').onclick = () => {
        if (state.timer.status === 'running') pauseTimer();
        else startTimer();
      };
      
      pipWin.document.getElementById('pip-disturb-btn').onclick = () => { triggerDistraction(); };
      pipWin.addEventListener('pagehide', () => { state.pipWindow = null; });
    });
}

function updatePipTimerDisplay() {
  if (!state.pipWindow) return;
  const digits = state.pipWindow.document.getElementById('pip-digits');
  const taskName = state.pipWindow.document.getElementById('pip-task-name');
  const btn = state.pipWindow.document.getElementById('pip-toggle-btn');

  const activeTask = state.tasks.find(t => t.id === state.activeTaskId);

  if (digits) digits.textContent = formatTime(state.timer.secondsLeft);
  if (taskName) taskName.textContent = activeTask ? activeTask.name : 'Focus Session';
  if (btn) btn.textContent = state.timer.status === 'running' ? 'Pause' : 'Start';
}

// DISTRACTION SHIELD LOGIC
function triggerDistraction() {
  pauseTimer();
  state.distraction.isDisturbed = true;
  state.distraction.startTime = Date.now();
  state.distraction.elapsedSeconds = 0;

  const modal = document.getElementById('distraction-modal');
  if (modal) modal.classList.remove('hidden');

  state.distraction.stopwatchInterval = setInterval(() => {
    state.distraction.elapsedSeconds++;
    const stopwatchEl = document.getElementById('distraction-stopwatch');
    if (stopwatchEl) stopwatchEl.textContent = formatTime(state.distraction.elapsedSeconds);
  }, 1000);
}

function setDistractionType(type) {
  state.distraction.type = type;
  const uBtn = document.getElementById('btn-type-useful');
  const usBtn = document.getElementById('btn-type-useless');

  if (type === 'useful') {
    uBtn.classList.add('ring-2', 'ring-emerald-500');
    usBtn.classList.remove('ring-2', 'ring-red-500');
  } else {
    usBtn.classList.add('ring-2', 'ring-red-500');
    uBtn.classList.remove('ring-2', 'ring-emerald-500');
  }
}

function resumeFromDistraction() {
  clearInterval(state.distraction.stopwatchInterval);
  const modal = document.getElementById('distraction-modal');
  if (modal) modal.classList.add('hidden');

  const reasonInput = document.getElementById('distraction-reason-input');
  const reason = reasonInput ? reasonInput.value || 'Unspecified distraction' : 'Unspecified distraction';
  const mins = Math.ceil(state.distraction.elapsedSeconds / 60);

  const activeTask = state.tasks.find(t => t.id === state.activeTaskId);

  state.logs.push({
    id: 'log-' + Date.now(),
    date: state.selectedDate || TODAY_STR,
    session: activeTask ? activeTask.session : 'morning',
    area: activeTask ? activeTask.area : '💼 OAC Working',
    project: activeTask ? activeTask.project : 'Omnistream Data Sourcing',
    task: activeTask ? activeTask.name : 'Focus Session',
    goal: activeTask ? activeTask.goal : '',
    outcome: `Distraction Logged: ${reason}`,
    completionPct: 0,
    focusMinutes: 0,
    distractionMins: mins,
    usefulMins: state.distraction.type === 'useful' ? mins : 0,
    uselessMins: state.distraction.type === 'useless' ? mins : 0
  });

  localStorage.setItem('ruoc_logs', JSON.stringify(state.logs));
  state.distraction.isDisturbed = false;
  startTimer();
}

// TIMELINE AUTO-CASCADING & AUTO-ORDERING
function autoOrderTasksByStartTime() {
  state.tasks.sort((a, b) => {
    const timeA = a.startTime || '00:00';
    const timeB = b.startTime || '00:00';
    return timeA.localeCompare(timeB);
  });

  saveTasks();
  renderTabContent();
}

function autoCascadeTimelines() {
  ['morning', 'afternoon', 'evening'].forEach(sessionKey => {
    const sessionTasks = state.tasks.filter(t => t.session === sessionKey);
    let currentTime = sessionKey === 'morning' ? '08:00' : (sessionKey === 'afternoon' ? '13:00' : '18:00');

    sessionTasks.forEach(task => {
      task.startTime = currentTime;
      const duration = task.estDurationMins || 50;

      const [h, m] = currentTime.split(':').map(Number);
      const d = new Date();
      d.setHours(h, m, 0, 0);

      const endD = new Date(d.getTime() + duration * 60000);
      const endH = endD.getHours().toString().padStart(2, '0');
      const endM = endD.getMinutes().toString().padStart(2, '0');

      task.endTime = `${endH}:${endM}`;
      currentTime = task.endTime;
    });
  });

  saveTasks();
  renderTabContent();
  alert("⚡ All session task timelines auto-cascaded sequentially!");
}

// DAILY CHECKIN HELPERS (FIXED ENERGY LEVEL SELECTOR)
function setEnergyLevel(level) {
  state.dailyContext.energyLevel = level;
  saveDailyContext();

  ['high', 'medium', 'low'].forEach(lvl => {
    const btn = document.getElementById(`energy-btn-${lvl}`);
    if (btn) {
      if (lvl.toLowerCase() === level.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

function setWorkDate(dateStr) {
  state.selectedDate = dateStr;
  renderTabContent();
}

function saveDailyGoal(index, val) {
  state.dailyContext.goals[index] = val;
  saveDailyContext();
}

function openDeadlineModal() {
  document.getElementById('deadline-title-input').value = '';
  document.getElementById('deadline-time-input').value = '10:30';
  document.getElementById('deadline-modal').classList.remove('hidden');
}

function closeDeadlineModal() {
  document.getElementById('deadline-modal').classList.add('hidden');
}

function saveDeadline() {
  const title = document.getElementById('deadline-title-input').value || 'Deadline';
  const time = document.getElementById('deadline-time-input').value || '12:00';

  state.dailyContext.hardDeadlines.push({
    id: 'dl-' + Date.now(),
    title,
    time
  });

  saveDailyContext();
  closeDeadlineModal();
  renderTabContent();
}

function deleteDeadline(idx) {
  state.dailyContext.hardDeadlines.splice(idx, 1);
  saveDailyContext();
  renderTabContent();
}

function saveDailyContext() {
  localStorage.setItem('lauren_daily_context', JSON.stringify(state.dailyContext));
  if (typeof autoPushToCloud === 'function') autoPushToCloud();
}

// AUTO-FILL FROM MARKDOWN / AG
function openAutoFillModal() {
  document.getElementById('autofill-modal').classList.remove('hidden');
}

function closeAutoFillModal() {
  document.getElementById('autofill-modal').classList.add('hidden');
}

function pasteSampleMarkdown() {
  const sample = `| Khung Giờ | Mã Task | Mảng | Chi Tiết Nhiệm Vụ | Thời Lượng | Độ Ưu Tiên |
| :--- | :--- | :--- | :--- | :---: | :---: |
| 09:00 - 09:50 | DL01 | OAC Working | Sourcing 30 CTO profiles cho Omnistream | 50ph | High |
| 10:00 - 11:00 | AM01 | Apply Master | Outline Statement of Purpose essay | 60ph | High |
| 14:00 - 15:00 | IE01 | IELTS Learning | Practice IELTS Writing Task 2 essay | 60ph | Medium |
| 16:00 - 17:00 | CH01 | Coaching Ms. Hien | Prepare English lesson plan & slides | 60ph | High |`;

  document.getElementById('autofill-text-input').value = sample;
}

function processAutoFill() {
  const text = document.getElementById('autofill-text-input').value;
  if (!text) return;

  const lines = text.split('\n');
  let importedCount = 0;

  lines.forEach(line => {
    if (line.includes('|') && !line.includes('---') && !line.includes('Khung Giờ')) {
      const parts = line.split('|').map(p => p.trim()).filter(Boolean);
      if (parts.length >= 4) {
        const timeRange = parts[0] || '09:00 - 09:50';
        const times = timeRange.split('-').map(t => t.trim().replace(/\*/g, ''));
        const startTime = times[0] || '09:00';
        const endTime = times[1] || '09:50';

        const areaRaw = parts[2] || 'OAC Working';
        const name = parts[3] || 'Task';
        const durationRaw = parts[4] || '50ph';
        const durationMins = parseInt(durationRaw) || 50;

        let area = state.customAreas[0] || '💼 OAC Working';
        if (areaRaw.includes('Master') || areaRaw.includes('AM')) area = '🎓 Apply Master';
        else if (areaRaw.includes('IELTS') || areaRaw.includes('IE')) area = '🇬🇧 IELTS Learning';
        else if (areaRaw.includes('DELF')) area = '🇫🇷 DELF Learning';

        const [startH] = startTime.split(':').map(Number);
        let session = 'morning';
        if (startH >= 12 && startH < 18) session = 'afternoon';
        else if (startH >= 18 || startH < 6) session = 'evening';

        state.tasks.push({
          id: 'task-' + Date.now() + Math.random().toString(36).substr(2, 4),
          date: state.selectedDate || TODAY_STR,
          name,
          area,
          project: 'Imported Plan',
          session,
          priority: 'P1',
          cognitiveLoad: 'Brain-heavy',
          pomsCount: Math.ceil(durationMins / 25),
          pomsDone: 0,
          details: 'Imported from Markdown / AG table',
          goal: name,
          outcome: '',
          nextSteps: '',
          completionPct: 0,
          estDurationMins: durationMins,
          startTime,
          endTime,
          refLinks: '',
          outputLinks: ''
        });

        importedCount++;
      }
    }
  });

  saveTasks();
  closeAutoFillModal();
  renderWorkspaceTab();
  alert(`📋 Successfully imported ${importedCount} tasks into your workspace!`);
}

// SMART AUTOCOMPLETE SETUP
function initAutocompleteInputs() {
  setupAutocompleteField('modal-project-input', 'project-autocomplete-list', state.autocompleteHistory.projects);
  setupAutocompleteField('modal-task-input', 'task-autocomplete-list', state.autocompleteHistory.tasks);
}

function setupAutocompleteField(inputId, listId, historyArray) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  if (!input || !list) return;

  input.addEventListener('input', () => {
    const val = input.value.toLowerCase();
    if (!val) { list.classList.add('hidden'); return; }

    const matches = historyArray.filter(h => h.toLowerCase().includes(val));
    if (matches.length > 0) {
      list.innerHTML = matches.map(m => `<div class="autocomplete-item">${m}</div>`).join('');
      list.classList.remove('hidden');

      list.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
          input.value = item.textContent;
          list.classList.add('hidden');
        });
      });
    } else {
      list.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target !== input) list.classList.add('hidden');
  });
}

// AUTO TIME CALCULATOR
function autoCalcTimes() {
  const startVal = document.getElementById('modal-start-time').value || '09:00';
  const durationVal = parseInt(document.getElementById('modal-duration-input').value) || 50;

  const [h, m] = startVal.split(':').map(Number);
  const startDate = new Date();
  startDate.setHours(h, m, 0, 0);

  const endDate = new Date(startDate.getTime() + durationVal * 60000);
  const endH = endDate.getHours().toString().padStart(2, '0');
  const endM = endDate.getMinutes().toString().padStart(2, '0');

  const endInput = document.getElementById('modal-end-time');
  if (endInput) endInput.value = `${endH}:${endM}`;
}

// TASK MODAL ACTIONS
function openAddTaskModal(sessionKey) {
  document.getElementById('task-modal-title').textContent = 'Add New Task';
  document.getElementById('modal-task-id').value = '';
  document.getElementById('modal-task-session').value = sessionKey;
  if (state.customAreas.length > 0) document.getElementById('modal-area-select').value = state.customAreas[0];
  document.getElementById('modal-project-input').value = '';
  document.getElementById('modal-task-input').value = '';
  document.getElementById('modal-priority-select').value = 'P2';
  document.getElementById('modal-cognitive-select').value = 'Routine';
  document.getElementById('modal-poms-input').value = '2';
  document.getElementById('modal-duration-input').value = '50';
  document.getElementById('modal-start-time').value = '09:00';
  document.getElementById('modal-end-time').value = '09:50';
  document.getElementById('modal-goal-input').value = '';
  document.getElementById('modal-reflinks-input').value = '';
  document.getElementById('modal-details-input').value = '';

  document.getElementById('task-modal').classList.remove('hidden');
}

function openEditTaskModal(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  document.getElementById('task-modal-title').textContent = 'Edit Task';
  document.getElementById('modal-task-id').value = task.id;
  document.getElementById('modal-task-session').value = task.session;
  document.getElementById('modal-area-select').value = task.area;
  document.getElementById('modal-project-input').value = task.project;
  document.getElementById('modal-task-input').value = task.name;
  document.getElementById('modal-priority-select').value = task.priority || 'P2';
  document.getElementById('modal-cognitive-select').value = task.cognitiveLoad || 'Routine';
  document.getElementById('modal-poms-input').value = task.pomsCount;
  document.getElementById('modal-duration-input').value = task.estDurationMins || 50;
  document.getElementById('modal-start-time').value = task.startTime || '09:00';
  document.getElementById('modal-end-time').value = task.endTime || '09:50';
  document.getElementById('modal-goal-input').value = task.goal || '';
  document.getElementById('modal-reflinks-input').value = task.refLinks || '';
  document.getElementById('modal-details-input').value = task.details || '';

  document.getElementById('task-modal').classList.remove('hidden');
}

function saveTaskModal() {
  const id = document.getElementById('modal-task-id').value;
  const area = document.getElementById('modal-area-select').value;
  const project = document.getElementById('modal-project-input').value || 'General Project';
  const name = document.getElementById('modal-task-input').value || 'Untitled Task';
  const session = document.getElementById('modal-session-select').value;
  const priority = document.getElementById('modal-priority-select').value;
  const cognitiveLoad = document.getElementById('modal-cognitive-select').value;
  const pomsCount = parseInt(document.getElementById('modal-poms-input').value) || 1;
  const estDurationMins = parseInt(document.getElementById('modal-duration-input').value) || 50;
  const startTime = document.getElementById('modal-start-time').value;
  const endTime = document.getElementById('modal-end-time').value;
  const goal = document.getElementById('modal-goal-input').value;
  const refLinks = document.getElementById('modal-reflinks-input').value;
  const details = document.getElementById('modal-details-input').value;

  if (!state.autocompleteHistory.projects.includes(project)) state.autocompleteHistory.projects.push(project);
  if (!state.autocompleteHistory.tasks.includes(name)) state.autocompleteHistory.tasks.push(name);
  localStorage.setItem('ruoc_autocomplete', JSON.stringify(state.autocompleteHistory));

  if (id) {
    const task = state.tasks.find(t => t.id === id);
    if (task) {
      task.area = area; task.project = project; task.name = name;
      task.session = session; task.priority = priority; task.cognitiveLoad = cognitiveLoad;
      task.pomsCount = pomsCount; task.estDurationMins = estDurationMins;
      task.startTime = startTime; task.endTime = endTime;
      task.goal = goal; task.refLinks = refLinks; task.details = details;
    }
  } else {
    const newTask = {
      id: 'task-' + Date.now(),
      date: state.selectedDate || TODAY_STR,
      name, area, project, session, priority, cognitiveLoad, pomsCount, pomsDone: 0,
      estDurationMins, startTime, endTime, goal, refLinks, details,
      outcome: '', nextSteps: '', completionPct: 0, outputLinks: ''
    };
    state.tasks.push(newTask);
    state.activeTaskId = newTask.id;
  }

  autoShiftAndSortTasks();
  if (state.activeTaskId) setActiveTask(state.activeTaskId);
  closeTaskModal();
  renderTabContent();
}

function closeTaskModal() {
  document.getElementById('task-modal').classList.add('hidden');
}

function deleteTask(id) {
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveTasks();
  renderTabContent();
}

// OUTCOME REFLECTION MODAL
function openOutcomeModal(taskId) {
  state.activeTaskId = taskId;
  const task = state.tasks.find(t => t.id === taskId);
  if (task) {
    document.getElementById('outcome-pct-input').value = task.completionPct || 100;
    document.getElementById('outcome-desc-input').value = task.outcome || '';
    document.getElementById('outcome-next-input').value = task.nextSteps || '';
    document.getElementById('outcome-links-input').value = task.outputLinks || '';
  }
  document.getElementById('outcome-modal').classList.remove('hidden');
}

function saveOutcomeModal() {
  const activeTask = state.tasks.find(t => t.id === state.activeTaskId);
  if (!activeTask) return;

  const pct = parseInt(document.getElementById('outcome-pct-input').value) || 100;
  const desc = document.getElementById('outcome-desc-input').value || 'Completed';
  const next = document.getElementById('outcome-next-input').value || '';
  const outputLinks = document.getElementById('outcome-links-input').value || '';

  activeTask.completionPct = pct;
  activeTask.outcome = desc;
  activeTask.nextSteps = next;
  activeTask.outputLinks = outputLinks;

  state.logs.push({
    id: 'log-' + Date.now(),
    date: state.selectedDate || TODAY_STR,
    session: activeTask.session,
    area: activeTask.area,
    project: activeTask.project,
    task: activeTask.name,
    goal: activeTask.goal,
    outcome: desc,
    completionPct: pct,
    focusMinutes: activeTask.pomsDone * state.settings.workDuration,
    usefulMins: 0,
    uselessMins: 0
  });

  addXP(20);

  // Remove completed task from active task board once logged
  state.tasks = state.tasks.filter(t => t.id !== activeTask.id);
  const remainingTask = state.tasks[0] || null;
  state.activeTaskId = remainingTask ? remainingTask.id : null;

  if (remainingTask && remainingTask.estDurationMins) {
    const targetSeconds = remainingTask.estDurationMins * 60;
    state.timer.secondsLeft = targetSeconds;
    state.timer.totalSeconds = targetSeconds;
  } else {
    state.timer.secondsLeft = state.settings.workDuration * 60;
    state.timer.totalSeconds = state.settings.workDuration * 60;
  }
  state.timer.status = 'idle';
  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
  }

  saveTasks();
  localStorage.setItem('ruoc_logs', JSON.stringify(state.logs));
  closeOutcomeModal();
  renderTabContent();
}

function closeOutcomeModal() {
  document.getElementById('outcome-modal').classList.add('hidden');
}

// MASTER LOG EDIT & DELETE ACTIONS
function editLogRow(index) {
  const log = state.logs[index];
  if (!log) return;

  const newOutcome = prompt("Edit Outcome Description:", log.outcome);
  if (newOutcome !== null) {
    log.outcome = newOutcome;
    localStorage.setItem('ruoc_logs', JSON.stringify(state.logs));
    renderTabContent();
  }
}

function deleteLogRow(index) {
  if (confirm("Delete this log entry?")) {
    state.logs.splice(index, 1);
    localStorage.setItem('ruoc_logs', JSON.stringify(state.logs));
    renderTabContent();
  }
}

// REWARDS MODAL HANDLERS
function openRewardsModal() {
  document.getElementById('rewards-modal').classList.remove('hidden');
}

function closeRewardsModal() {
  document.getElementById('rewards-modal').classList.add('hidden');
}

function saveRewards() {
  state.rewards.hourly = document.getElementById('reward-hourly').value;
  state.rewards.daily = document.getElementById('reward-daily').value;
  state.rewards.weekly = document.getElementById('reward-weekly').value;
  state.rewards.monthly = document.getElementById('reward-monthly').value;

  localStorage.setItem('lauren_rewards', JSON.stringify(state.rewards));
}

// DATA HELPERS & EXPORT
function setPriorityFilter(priorityKey) {
  state.filterPriority = priorityKey;
  renderTabContent();
}

function setCognitiveFilter(cogKey) {
  state.filterCognitive = cogKey;
  renderTabContent();
}

function setAreaFilter(areaKey) {
  state.filterArea = areaKey;
  renderTabContent();
}

function setActiveTask(id) {
  state.activeTaskId = id;
  const activeTask = state.tasks.find(t => t.id === id);
  if (activeTask && activeTask.estDurationMins) {
    const targetSeconds = activeTask.estDurationMins * 60;
    state.timer.secondsLeft = targetSeconds;
    state.timer.totalSeconds = targetSeconds;
    state.timer.status = 'idle';
    if (state.timer.intervalId) {
      clearInterval(state.timer.intervalId);
      state.timer.intervalId = null;
    }
  }
  renderTabContent();
}

function autoShiftAndSortTasks() {
  // 1. Sort all tasks chronologically by startTime
  state.tasks.sort((a, b) => {
    const timeA = a.startTime || '00:00';
    const timeB = b.startTime || '00:00';
    return timeA.localeCompare(timeB);
  });

  // 2. Cascade time shifts if tasks overlap
  for (let i = 0; i < state.tasks.length - 1; i++) {
    const current = state.tasks[i];
    const next = state.tasks[i + 1];

    if (current.endTime && next.startTime) {
      if (current.endTime > next.startTime) {
        const duration = next.estDurationMins || 30;
        next.startTime = current.endTime;

        const [h, m] = next.startTime.split(':').map(Number);
        const d = new Date();
        d.setHours(h, m, 0, 0);
        const endD = new Date(d.getTime() + duration * 60000);
        const endH = endD.getHours().toString().padStart(2, '0');
        const endM = endD.getMinutes().toString().padStart(2, '0');
        next.endTime = `${endH}:${endM}`;
      }
    }
  }

  // 3. Final chronological re-sort
  state.tasks.sort((a, b) => (a.startTime || '00:00').localeCompare(b.startTime || '00:00'));
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('ruoc_tasks', JSON.stringify(state.tasks));
  if (typeof autoPushToCloud === 'function') autoPushToCloud();
}

function saveScratchpad(val) {
  state.scratchpad = val;
  localStorage.setItem('ruoc_scratchpad', val);
}

function updateSetting(key, val) {
  state.settings[key] = val;
  localStorage.setItem('ruoc_settings', JSON.stringify(state.settings));
}

function addXP(amount) {
  state.gamification.xp += amount;
  if (state.gamification.xp >= state.gamification.level * 200) {
    state.gamification.level++;
    alert(`🎉 Level Up! You reached Level ${state.gamification.level}, Khanh Linh! Check your rewards menu.`);
  }
  localStorage.setItem('ruoc_gamification', JSON.stringify(state.gamification));
  updateXPDisplay();
}

function updateXPDisplay() {
  const el = document.getElementById('xp-badge');
  if (el) el.textContent = `L${state.gamification.level} (${state.gamification.xp} XP)`;
}

function downloadCSV() {
  if (state.logs.length === 0) { alert("No log entries to export."); return; }

  const headers = ["Date", "Session", "Area", "Project", "Task", "Goal", "Outcome", "Completion %", "Focus Mins", "Useful Distraction Mins", "Useless Distraction Mins"];
  const rows = state.logs.map(l => [
    l.date, l.session, `"${l.area}"`, `"${l.project}"`, `"${l.task}"`, `"${l.goal || ''}"`, `"${l.outcome || ''}"`, l.completionPct || 0, l.focusMinutes || 0, l.usefulMins || 0, l.uselessMins || 0
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `KhanhLinh_Focus_Log_${TODAY_STR}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function syncToGoogleSheets() {
  if (!state.settings.webhookUrl) { alert("Please set your Google Apps Script Webhook URL in Settings first!"); return; }

  const payload = {
    date: state.selectedDate || TODAY_STR,
    energyLevel: state.dailyContext.energyLevel,
    topGoals: state.dailyContext.goals,
    hardDeadlines: state.dailyContext.hardDeadlines,
    logs: state.logs,
    tasks: state.tasks
  };

  try {
    await fetch(state.settings.webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    alert("⚡ Full Daily Master Payload synced to Google Sheets successfully!");
  } catch (err) {
    alert(`Sync failed: ${err.message}`);
  }
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function toggleSoundscape(type) {
  audioManager.toggleSound(type);
  renderWorkspaceTab();
}

function setSoundVolume(type, val) {
  audioManager.setVolume(type, val);
}

function clearAllData() {
  if (confirm("Are you sure you want to clear all LocalStorage data?")) {
    localStorage.clear();
    location.reload();
  }
}
