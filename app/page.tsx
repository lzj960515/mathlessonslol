import GameFrame from './components/GameFrame';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 bg-foreground/5">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Math Lessons LOL</h1>
          <p className="text-xl text-center mt-2">Making Math Learning Fun</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Start Your Math Adventure</h2>
          <GameFrame />
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-foreground/5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Fun Learning</h3>
            <p>Experience mathematics through engaging gameplay and interactive challenges</p>
          </div>
          <div className="p-6 bg-foreground/5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">All Ages Welcome</h3>
            <p>From elementary to high school, we offer content for every skill level</p>
          </div>
          <div className="p-6 bg-foreground/5 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
            <p>Track your progress in real-time and master mathematical concepts</p>
          </div>
        </section>

        <section className="prose max-w-none">
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

      <footer className="bg-foreground/5 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Math Lessons LOL. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
            <a href="/terms" className="mx-2 hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
