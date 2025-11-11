import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const MiffyCharacter = ({ position, color, question, answer, size = 'md', delay = 0 }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-20 h-24',
    lg: 'w-24 h-28',
    xl: 'w-32 h-36'
  };

  const colorMap = {
    orange: 'hsl(var(--miffy-orange))',
    blue: 'hsl(var(--miffy-blue))',
    red: 'hsl(var(--miffy-red))',
    yellow: 'hsl(var(--miffy-yellow))',
    green: 'hsl(var(--miffy-green))',
    pink: 'hsl(var(--miffy-pink))',
    lavender: 'hsl(var(--miffy-lavender))',
    white: 'hsl(0 0% 100%)'
  };

  return (
    <div
      className="absolute cursor-pointer z-10"
      style={{
        ...position,
        animationDelay: `${delay}s`
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Miffy Character SVG */}
      <div className={`miffy-character ${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Body */}
          <ellipse cx="50" cy="80" rx="25" ry="30" fill={colorMap[color]} stroke="#2D3748" strokeWidth="2.5" />
          
          {/* Head */}
          <ellipse cx="50" cy="45" rx="22" ry="25" fill="white" stroke="#2D3748" strokeWidth="2.5" />
          
          {/* Left Ear */}
          <ellipse cx="38" cy="18" rx="8" ry="18" fill="white" stroke="#2D3748" strokeWidth="2.5" />
          
          {/* Right Ear */}
          <ellipse cx="62" cy="18" rx="8" ry="18" fill="white" stroke="#2D3748" strokeWidth="2.5" />
          
          {/* Left Eye */}
          <circle cx="42" cy="42" r="2.5" fill="#2D3748" />
          
          {/* Right Eye */}
          <circle cx="58" cy="42" r="2.5" fill="#2D3748" />
          
          {/* Mouth (X shape) */}
          <line x1="48" y1="52" x2="52" y2="56" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
          <line x1="52" y1="52" x2="48" y2="56" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
          
          {/* Arms */}
          <ellipse cx="28" cy="75" rx="6" ry="10" fill={colorMap[color]} stroke="#2D3748" strokeWidth="2" />
          <ellipse cx="72" cy="75" rx="6" ry="10" fill={colorMap[color]} stroke="#2D3748" strokeWidth="2" />
        </svg>
      </div>

      {/* Tooltip with Q&A */}
      {showTooltip && (
        <Card className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 tooltip-card shadow-xl border-2 z-50">
          <CardContent className="p-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {question}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
