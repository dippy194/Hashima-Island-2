import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const quotes = [
  `"Even the sea wind was afraid to blow through the deserted ruins of Hashima."`,
  `"Hashima was a microcosm of the industrial revolution in Japan."`,
  `"We could see the future of Japan on that tiny island."`
];

const timeline = [
  {
    year: "1887",
    event: "Coal discovered on Hashima Island; Mitsubishi acquires the island."
  },
  {
    year: "1916",
    event: "Concrete apartment complexes constructed to house miners and families."
  },
  {
    year: "1941–1945",
    event: "Forced laborers, including Koreans, brought to work in harsh conditions during WWII."
  },
  {
    year: "1959",
    event: "Population peaks at 5,259; one of the most densely populated places on Earth."
  },
  {
    year: "1974",
    event: "Coal mine closes; island is abandoned overnight."
  },
  {
    year: "2015",
    event: "Hashima is inscribed as a UNESCO World Heritage Site."
  }
];

const Section = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/60 shadow-lg backdrop-blur-md"
    >
      {children}
    </motion.section>
  );
};

function App() {
  // Dark mode state
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Animated button icon
  const DarkModeIcon = dark ? Sun : Moon;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-700 min-h-screen font-sans text-zinc-900 dark:text-zinc-200">
      {/* Hero */}
      <div className="relative">
        <img src="/hashima.jpg" alt="Hashima Island" className="w-full h-[50vh] object-cover object-center shadow-lg" />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-0 right-0 top-[40%] text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-white"
        >
          Hashima Island
        </motion.h1>
        {/* Dark mode toggle */}
        <motion.button
          whileTap={{ scale: 0.8, rotate: dark ? 180 : 0 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Toggle dark mode"
          className="absolute top-4 left-6 bg-white/70 dark:bg-zinc-800/70 p-3 rounded-full shadow transition-all duration-500 border border-zinc-200 dark:border-zinc-700 z-20"
          onClick={() => setDark(d => !d)}
        >
          <DarkModeIcon className="w-6 h-6 transition-colors duration-700" />
        </motion.button>
      </div>

      {/* Content */}
      <main className="pt-10 pb-20">

        {/* Section: Intro */}
        <Section>
          <h2 className="text-3xl font-semibold mb-2">A Ghost Island with a Legacy</h2>
          <p>
            Hashima Island, known as Gunkanjima or “Battleship Island,” sits eerily abandoned off the coast of Nagasaki, Japan. Once buzzing with life, it’s now a haunting silhouette of concrete ruins, echoing a century of industrial ambition. The island became a symbol of Japan’s rapid modernization, with its rise—and fall—etched into every weathered wall.
          </p>
          <blockquote className="italic border-l-4 pl-4 my-3 border-zinc-400 dark:border-zinc-600">{quotes[0]}</blockquote>
        </Section>

        {/* Section: Early History */}
        <Section delay={0.1}>
          <h2 className="text-2xl font-semibold mb-2">From Coal to Concrete</h2>
          <p>
            The story of Hashima began in 1887, when coal was first discovered on the tiny island. Acquired by Mitsubishi, it quickly transformed into a formidable mining outpost. Over decades, the island grew—literally—through land reclamation, and was soon covered in Japan’s first large reinforced concrete buildings, designed to withstand typhoons and maximize space.
          </p>
        </Section>

        {/* Section: Life on Hashima */}
        <Section delay={0.2}>
          <h2 className="text-2xl font-semibold mb-2">Life in the World’s Densest City</h2>
          <p>
            By 1959, Hashima was home to over 5,000 people packed into its 16-acre sprawl, making it the world’s most densely populated place. Residents lived in tight-knit communities, relying on rooftop gardens, a school, cinema, and communal baths—all perched atop a sea wall. Yet, life was shaped by the relentless rhythm of the mines below.
          </p>
        </Section>

        {/* Section: Forced Labor */}
        <Section delay={0.3}>
          <h2 className="text-2xl font-semibold mb-2">Shadows of the Past</h2>
          <p>
            The island’s prosperity hid darker chapters. During World War II, thousands of Korean and Chinese laborers were forcibly brought to Hashima, enduring brutal conditions deep underground. This legacy of suffering remains a somber part of the island’s story, remembered by visitors and inscribed in UNESCO’s records.
          </p>
          <blockquote className="italic border-l-4 pl-4 my-3 border-zinc-400 dark:border-zinc-600">{quotes[1]}</blockquote>
        </Section>

        {/* Section: Abandonment and Rediscovery */}
        <Section delay={0.4}>
          <h2 className="text-2xl font-semibold mb-2">Abandonment and UNESCO Honor</h2>
          <p>
            When the coal ran out, Hashima’s purpose vanished. In 1974, Mitsubishi closed the mine, and residents left overnight—leaving a concrete ghost town. For decades, the island remained off-limits, until it was reopened to visitors and recognized as a UNESCO World Heritage Site in 2015. Today, Hashima stands as a silent witness to industrial history.
          </p>
        </Section>

        {/* Section: Timeline */}
        <Section delay={0.5}>
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <div className="relative border-l-4 border-zinc-300 dark:border-zinc-700 ml-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="mb-8 ml-4"
              >
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 mr-3" />
                  <span className="text-lg font-medium">{item.year}</span>
                </div>
                <p>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Section: Legacy Quote */}
        <Section delay={0.6}>
          <blockquote className="italic border-l-4 pl-4 my-3 border-zinc-400 dark:border-zinc-600 text-lg">{quotes[2]}</blockquote>
        </Section>

        {/* Section: Author */}
        <Section delay={0.7}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex-shrink-0 shadow-lg flex items-center justify-center font-bold text-xl text-white">
              L
            </div>
            <div>
              <h3 className="text-xl font-semibold">By Lucas Aladag</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Lucas Aladag is fascinated by lost places, modern history, and the stories behind ruins.  
                He writes to bring to life the forgotten corners of our world.  
                Inspired by Japan’s industrial legacy, Lucas hopes Hashima’s lessons spark reflection and curiosity.  
                He believes places like Gunkanjima are essential windows into our past—and our future.
              </p>
            </div>
          </div>
        </Section>

        {/* Section: Sources */}
        <Section delay={0.8}>
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc ml-8 text-blue-700 dark:text-blue-400">
            <li>
              <a
                href="https://en.yna.co.kr/view/AEN20170727005900315"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Yonhap News Agency: “South Korean forced labor victims recall dark history of Japan's Hashima Island”
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Hashima_Island"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Wikipedia: Hashima Island
              </a>
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
}

export default App;
