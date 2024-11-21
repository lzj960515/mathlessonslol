'use client';

export default function GameFrame() {
  return (
    <div className="aspect-[16/9] w-full animate-pulse-slow">
      <iframe 
        src="https://game.mathlessonslol.top/Math!.html"
        className="w-full h-full border-0 rounded-lg shadow-2xl"
        allow="fullscreen"
        loading="lazy"
        title="Math Lessons LOL Game"
      />
    </div>
  );
} 