import GameFrame from './components/GameFrame';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 to-primary-200">
      <header className="py-8 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-white animate-float">
            Math Lessons LOL
          </h1>
          <p className="text-xl text-center mt-2 text-primary-100">Making Math Learning Fun</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="section-title text-center">Start Your Math Adventure</h2>
          <div className="game-frame-wrapper p-2">
            <GameFrame />
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="game-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-primary-700">Fun Learning</h3>
            <p className="text-primary-600">Experience mathematics through engaging gameplay and interactive challenges</p>
          </div>
          <div className="game-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-primary-700">All Ages Welcome</h3>
            <p className="text-primary-600">From elementary to high school, we offer content for every skill level</p>
          </div>
          <div className="game-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-primary-700">Instant Feedback</h3>
            <p className="text-primary-600">Track your progress in real-time and master mathematical concepts</p>
          </div>
          <div className="game-card more-games-card p-6 rounded-xl bg-gradient-to-br from-accent-500/10 to-primary-500/20 border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-500">
            <div className="flex items-center gap-2 mb-3">
              <svg 
                className="w-6 h-6 text-accent-500 animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="text-xl font-bold text-accent-500">More Games</h3>
            </div>
            <p className="text-primary-600 mb-6">Explore more fun online games</p>
            <a 
              href="https://cookieclickerunblocked.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500 text-white hover:bg-accent-500/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Cookie Clicker
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="prose max-w-none bg-white/50 rounded-xl p-8 backdrop-blur-sm">
          <h2>About Math Lessons LOL</h2>
          <p>Math Lessons LOL is an innovative online math education platform dedicated to making mathematics enjoyable through gamification. Our mission is to help students build confidence and interest in mathematics while improving their skills through interactive gameplay.</p>
          
          <h2>Why Choose Math Lessons LOL?</h2>
          <ul>
            <li>Interactive learning experience</li>
            <li>Suitable for different skill levels</li>
            <li>Regular content updates</li>
            <li>Safe and educational environment</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary-700 to-primary-800 py-8 mt-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Math Lessons LOL. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="/privacy" className="text-primary-100 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-primary-100 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
