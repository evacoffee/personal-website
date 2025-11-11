import React from 'react';
import { MiffyCharacter } from './MiffyCharacter';

export const MiffyScene = () => {
  const miffyData = [
    {
      position: { top: '15%', left: '8%' },
      color: 'blue',
      size: 'lg',
      question: 'Where is Eva from?',
      answer: 'Purgatory - a place where dreams meet reality! Born on 06/25/2021.',
      delay: 0.1
    },
    {
      position: { top: '12%', right: '12%' },
      color: 'pink',
      size: 'md',
      question: 'What does Eva love?',
      answer: 'Creating beautiful things, exploring new ideas, and bringing joy through design!',
      delay: 0.3
    },
    {
      position: { top: '45%', left: '5%' },
      color: 'orange',
      size: 'md',
      question: 'What\'s Eva\'s superpower?',
      answer: 'Turning coffee into code and ideas into reality with a sprinkle of creativity!',
      delay: 0.5
    },
    {
      position: { top: '55%', right: '8%' },
      color: 'yellow',
      size: 'lg',
      question: 'What makes Eva happy?',
      answer: 'Cute designs, good vibes, and making people smile with delightful experiences!',
      delay: 0.7
    },
    {
      position: { bottom: '15%', left: '15%' },
      color: 'lavender',
      size: 'md',
      question: 'What\'s Eva\'s favorite quote?',
      answer: '"Keep it simple, make it cute, and always add a little magic!"',
      delay: 0.9
    },
    {
      position: { bottom: '12%', right: '18%' },
      color: 'green',
      size: 'md',
      question: 'What\'s Eva\'s mission?',
      answer: 'To spread joy and creativity, one pixel at a time!',
      delay: 1.1
    },
    {
      position: { top: '35%', left: '48%' },
      color: 'red',
      size: 'sm',
      question: 'Eva\'s favorite hobby?',
      answer: 'Collecting inspiration from everywhere and turning it into something wonderful!',
      delay: 0.4
    },
    {
      position: { top: '65%', left: '45%' },
      color: 'blue',
      size: 'sm',
      question: 'What drives Eva?',
      answer: 'Passion for creativity, curiosity about the world, and love for making things better!',
      delay: 0.8
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 floating" style={{ animationDelay: '0.5s' }}>
        <div className="w-20 h-24 bg-gradient-to-br from-[hsl(var(--miffy-blue))] to-[hsl(var(--miffy-lavender))] rounded-lg opacity-40 transform rotate-12"></div>
      </div>
      
      <div className="absolute bottom-20 left-10 floating" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-20 bg-gradient-to-br from-[hsl(var(--miffy-pink))] to-[hsl(var(--miffy-yellow))] rounded-lg opacity-40 transform -rotate-12"></div>
      </div>

      {/* Stars decoration */}
      <div className="absolute top-1/4 left-1/3">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="wiggle-on-hover">
          <path d="M15 0L17.5 12.5L30 15L17.5 17.5L15 30L12.5 17.5L0 15L12.5 12.5L15 0Z" fill="hsl(var(--miffy-orange))" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/3">
        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" className="wiggle-on-hover">
          <path d="M15 0L17.5 12.5L30 15L17.5 17.5L15 30L12.5 17.5L0 15L12.5 12.5L15 0Z" fill="hsl(var(--miffy-red))" opacity="0.6" />
        </svg>
      </div>

      {/* Miffy Characters */}
      {miffyData.map((miffy, index) => (
        <MiffyCharacter
          key={index}
          position={miffy.position}
          color={miffy.color}
          size={miffy.size}
          question={miffy.question}
          answer={miffy.answer}
          delay={miffy.delay}
        />
      ))}

      {/* Center Card with image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-80 p-1 bg-gradient-to-br from-[hsl(var(--miffy-blue))] via-[hsl(var(--miffy-pink))] to-[hsl(var(--miffy-lavender))] rounded-2xl shadow-2xl wiggle-on-hover">
          <div className="bg-[hsl(var(--card))] rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_d80cf960-0b87-4544-8cfa-f557342f00f7/artifacts/zfh2qcke_image.png"
                alt="Eva's ID"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hint text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-muted-foreground text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          hover over the miffies to learn more about eva! ✨
        </p>
      </div>
    </div>
  );
};
