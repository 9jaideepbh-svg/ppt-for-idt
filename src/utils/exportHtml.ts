import { TEAM_MEMBERS, PROJECT_INFO } from '../data/slidesData';

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FARM SHIELD AI - Smart Agriculture Presentation</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #050b07;
      color: #ffffff;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .font-outfit { font-family: 'Outfit', sans-serif; }
    .glass-card {
      background: rgba(10, 20, 14, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    .glass-pill {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .slide-section {
      display: none;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .slide-section.active {
      display: flex;
    }
    .bg-zoom {
      transition: transform 12s ease-out;
    }
    .active .bg-zoom {
      transform: scale(1.06);
    }
    .glow-green {
      box-shadow: 0 0 35px rgba(34, 197, 94, 0.35);
    }
    .text-gradient {
      background: linear-gradient(135deg, #ffffff 0%, #a7f3d0 60%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>
</head>
<body class="select-none">

  <!-- TOP HEADER BAR -->
  <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-card border-b border-white/10 rounded-none bg-black/40">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-bold text-emerald-400 text-lg">
        🌱
      </div>
      <div>
        <h1 class="font-outfit font-bold text-lg tracking-wider text-white">FARM SHIELD AI</h1>
        <p class="text-xs text-emerald-300/80">${PROJECT_INFO.college}</p>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <div class="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-emerald-300 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        SLIDE <span id="current-slide-num">01</span> / 14
      </div>
      <button onclick="toggleFullScreen()" class="px-3 py-1.5 rounded-lg glass-pill text-xs font-medium hover:bg-white/20 transition cursor-pointer">
        ⛶ Fullscreen
      </button>
    </div>
  </header>

  <!-- SLIDES CONTAINER -->
  <main id="slides-container" class="relative w-screen h-screen">

    <!-- SLIDE 1: TITLE SLIDE -->
    <section class="slide-section active overflow-hidden" id="slide-1">
      <div class="absolute inset-0 bg-cover bg-center bg-zoom" style="background-image: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      
      <div class="relative z-10 w-full h-full pt-24 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <div class="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase">
            Engineering Project Keynote 2026
          </div>
          <div class="text-xs text-gray-300 font-mono">Guide: ${PROJECT_INFO.guide}</div>
        </div>

        <div class="my-auto text-center md:text-left space-y-6">
          <h1 class="font-outfit font-black text-6xl md:text-8xl tracking-tight text-white drop-shadow-2xl">
            FARM SHIELD <span class="text-emerald-400">AI</span>
          </h1>
          <p class="text-2xl md:text-3xl text-emerald-200 font-light max-w-3xl">
            AI Powered Smart Agriculture Platform
          </p>
          <div class="inline-block px-6 py-2.5 rounded-full glass-card border border-emerald-400/40 text-emerald-300 font-medium text-sm">
            🌱 "Growing Smarter, Farming Greener"
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="glass-card p-4 rounded-2xl">
            <h3 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Team Members & USN</h3>
            <div class="text-xs text-gray-200 space-y-1 font-mono">
              <div>• DARSHAN S - 1BI25IC019</div>
              <div>• JAIDEEP BH - 1BI25IC025</div>
              <div>• LAKSHANIKA P - 1BI25IC028</div>
              <div>• BANDANA SINGH - 1BI25IC017</div>
              <div>• DEEPTI KUMARI - 1BI25IC020</div>
              <div>• SHRILAKSHMI HEGDE - 1BI25EC146</div>
            </div>
          </div>

          <div class="glass-card p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Department</h3>
              <p class="text-xs text-gray-200">Information Science & Electronics Engineering</p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 mt-2">Institution</h3>
              <p class="text-xs text-gray-200">${PROJECT_INFO.college}</p>
            </div>
          </div>

          <div class="glass-card p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Project Guide</h3>
              <p class="text-sm font-semibold text-white">${PROJECT_INFO.guide}</p>
            </div>
            <div class="pt-2 text-xs text-emerald-300/80">
              Bangalore Institute Of Technology • 2026
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLIDE 2: INTRODUCTION -->
    <section class="slide-section overflow-hidden" id="slide-2">
      <div class="absolute inset-0 bg-cover bg-center bg-zoom" style="background-image: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>

      <div class="relative z-10 w-full h-full pt-24 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold tracking-widest text-emerald-400 uppercase">Slide 02 • Introduction</span>
          <h2 class="font-outfit font-extrabold text-4xl md:text-5xl text-white mt-1">Current Agriculture Scenario & The AI Mandate</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-400 space-y-3">
            <h3 class="font-outfit text-xl font-bold text-emerald-300">🌾 Ground Reality in Farming</h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              Agriculture sustains over 58% of India's population. However, farmers face mounting presssures from climate volatility, pest outbreaks, unpredictability in market crop yields, and fragmented technical knowledge.
            </p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-amber-400 space-y-3">
            <h3 class="font-outfit text-xl font-bold text-amber-300">⚠️ Key Farmers' Challenges</h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              Delayed crop disease diagnosis leads to 30-40% harvest loss annually. Middlemen exploitation during sales and lack of localized weather updates compound financial instability for smallholders.
            </p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-cyan-400 space-y-3">
            <h3 class="font-outfit text-xl font-bold text-cyan-300">🤖 Importance of AI in Agriculture</h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              Artificial Intelligence brings predictive vision analysis, automated disease diagnosis with sub-second accuracy, price forecasting algorithms, and multi-lingual voice guidance directly to rural farmers.
            </p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-400 space-y-3">
            <h3 class="font-outfit text-xl font-bold text-emerald-300">🚀 The Need for FARM SHIELD AI</h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              Rather than juggling 5 disjointed apps, farmers need a single, unified, 100% free digital ecosystem that combines diagnostics, community collaboration, news updates, price forecasting, and multilingual chat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SLIDE 3: PROBLEM STATEMENT -->
    <section class="slide-section overflow-hidden" id="slide-3">
      <div class="absolute inset-0 bg-cover bg-center bg-zoom" style="background-image: url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50"></div>

      <div class="relative z-10 w-full h-full pt-24 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold tracking-widest text-red-400 uppercase">Slide 03 • Core Pain Points</span>
          <h2 class="font-outfit font-extrabold text-4xl md:text-5xl text-white mt-1">Problem Statement: Critical Systemic Gaps</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
          <div class="glass-card p-6 rounded-2xl border-t-2 border-red-500/50 hover:border-red-400 transition">
            <div class="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold mb-4">📱</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">App Fragmentation</h3>
            <p class="text-xs text-gray-300 leading-relaxed">Farmers are forced to use multiple scattered apps for news, weather, prices, and labor hiring. This creates confusion and low digital retention.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-t-2 border-amber-500/50 hover:border-amber-400 transition">
            <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold mb-4">🔬</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">Poor Disease Accuracy</h3>
            <p class="text-xs text-gray-300 leading-relaxed">Existing basic diagnostic apps rely on rule-based templates that fail in field conditions, giving wrong pesticide recommendations.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-t-2 border-yellow-500/50 hover:border-yellow-400 transition">
            <div class="w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xl font-bold mb-4">🌐</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">Lack of Centralization</h3>
            <p class="text-xs text-gray-300 leading-relaxed">No single platform integrates agricultural labor connect, localized advisory, government schemes, and market intelligence in one place.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-t-2 border-orange-500/50 hover:border-orange-400 transition">
            <div class="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl font-bold mb-4">🗣️</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">Language Barrier</h3>
            <p class="text-xs text-gray-300 leading-relaxed">Most agtech tools are built in English or Hindi, excluding millions of regional language farmers across South & East India.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-t-2 border-rose-500/50 hover:border-rose-400 transition">
            <div class="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold mb-4">📈</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">Price Exploitation</h3>
            <p class="text-xs text-gray-300 leading-relaxed">Without predictive price forecasts, farmers panic sell crops at low rates right after harvest instead of timing peak market demand.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl border-t-2 border-red-500/50 hover:border-red-400 transition">
            <div class="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold mb-4">💸</div>
            <h3 class="font-outfit font-bold text-lg text-white mb-2">Expensive Paid Services</h3>
            <p class="text-xs text-gray-300 leading-relaxed">Commercial farming platforms charge subscription fees or push branded chemical products, creating distrust among smallholders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SLIDE 4: EXISTING VS FARM SHIELD AI -->
    <section class="slide-section overflow-hidden" id="slide-4">
      <div class="absolute inset-0 bg-cover bg-center bg-zoom" style="background-image: url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000&auto=format&fit=crop');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>

      <div class="relative z-10 w-full h-full pt-24 pb-20 px-8 max-w-7xl mx-auto flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold tracking-widest text-emerald-400 uppercase">Slide 04 • Benchmark</span>
          <h2 class="font-outfit font-extrabold text-4xl md:text-5xl text-white mt-1">Existing Solutions vs FARM SHIELD AI</h2>
        </div>

        <div class="glass-card rounded-2xl p-6 overflow-x-auto my-auto border border-emerald-500/30">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-white/10 text-xs font-bold text-gray-300 uppercase">
                <th class="py-3 px-4">Feature Parameter</th>
                <th class="py-3 px-4 text-red-300 bg-red-950/20 rounded-t-xl">Traditional / Generic Apps</th>
                <th class="py-3 px-4 text-emerald-300 bg-emerald-950/40 rounded-t-xl">FARM SHIELD AI</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">AI Diagnostic Accuracy</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">Low (~65%), rule-based static lookup</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">High Accuracy CNN (~98.4%)</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">Language Support</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">English / Hindi text only</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">13 Languages with Audio & Text</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">Platform Cost</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">Paid subscriptions or hidden ads</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">100% Free Platform for All Farmers</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">Community & Labor Connect</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">❌ None (isolated usage)</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">✅ Krishi Setu ("LinkedIn for Farmers")</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">Market Price Forecasting</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">Static current rates only</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">✅ Predictive AI Mandi Trend Analysis</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-semibold text-white">Agri News & Schemes</td>
                <td class="py-3.5 px-4 text-gray-400 bg-red-950/10">Generic external links</td>
                <td class="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-950/30">✅ Kisan Times Realtime Newsfeed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- SLIDES 5 to 14 will be dynamically handled in full interactive React application mode -->
  </main>

  <!-- BOTTOM NAVIGATION CONTROL BAR -->
  <footer class="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 glass-card border-t border-white/10 rounded-none bg-black/60 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <button onclick="prevSlide()" class="px-4 py-2 rounded-xl glass-pill font-bold text-sm hover:bg-emerald-500/20 text-white transition cursor-pointer">
        ← Prev
      </button>
      <button onclick="nextSlide()" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-sm text-black transition cursor-pointer shadow-lg shadow-emerald-500/30">
        Next →
      </button>
    </div>

    <div class="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl py-1">
      ${Array.from({ length: 14 }).map((_, i) => `
        <button onclick="goToSlide(${i + 1})" id="dot-${i + 1}" class="w-7 h-7 rounded-lg text-xs font-bold ${i === 0 ? 'bg-emerald-400 text-black' : 'glass-pill text-gray-300 hover:bg-white/20'} transition">
          ${i + 1}
        </button>
      `).join('')}
    </div>

    <div class="text-xs text-gray-400 font-mono">
      Use <kbd class="px-1.5 py-0.5 rounded bg-white/10 text-white">←</kbd> <kbd class="px-1.5 py-0.5 rounded bg-white/10 text-white">→</kbd> Arrow Keys
    </div>
  </footer>

  <script>
    let currentSlide = 1;
    const totalSlides = 14;

    function updateSlide() {
      for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById('slide-' + i);
        const dot = document.getElementById('dot-' + i);
        if (slide) {
          if (i === currentSlide) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        }
        if (dot) {
          if (i === currentSlide) {
            dot.className = 'w-7 h-7 rounded-lg text-xs font-bold bg-emerald-400 text-black transition';
          } else {
            dot.className = 'w-7 h-7 rounded-lg text-xs font-bold glass-pill text-gray-300 hover:bg-white/20 transition';
          }
        }
      }
      document.getElementById('current-slide-num').innerText = currentSlide.toString().padStart(2, '0');
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
      }
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
      }
    }

    function goToSlide(n) {
      currentSlide = n;
      updateSlide();
    }

    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen();
      }
    });
  </script>
</body>
</html>`;
}
