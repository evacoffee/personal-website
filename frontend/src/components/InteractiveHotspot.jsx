import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const InteractiveHotspot = ({ position, size, question, answer, tooltipPosition = 'top' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipPositions = {
    top: 'bottom-full mb-4 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-4 left-1/2 -translate-x-1/2',
    left: 'right-full mr-4 top-1/2 -translate-y-1/2',
    right: 'left-full ml-4 top-1/2 -translate-y-1/2'
  };

  return (
    <div
      className="absolute cursor-pointer group transition-transform hover:scale-110"
      style={{
        ...position,
        width: size.width,
        height: size.height
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Invisible hotspot with subtle hover indicator */}
      <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-20 bg-[hsl(var(--miffy-yellow))] transition-opacity duration-300 animate-pulse"></div>

      {/* Tooltip with Q&A */}
      {showTooltip && (
        <Card className={`absolute ${tooltipPositions[tooltipPosition]} w-72 tooltip-card shadow-2xl border-2 z-50 bg-[hsl(var(--card))]/95 backdrop-blur-sm`}>
          <CardContent className="p-5">
            <div className="space-y-3">
              <p className="text-base font-semibold text-foreground" style={{ fontFamily: 'Fredoka, sans-serif' }}>
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
