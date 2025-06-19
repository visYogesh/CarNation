import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect() {
  useEffect(() => {
    const duration = 2 * 1000; // total run time in ms
    const end = Date.now() + duration;

    // fire every 250ms until time’s up
    const interval = setInterval(() => {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      // count down particles as time goes on
      const particleCount = Math.floor(200 * (timeLeft / duration));

      // left side burst
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 120,
        origin: { x: 0, y: Math.random() * 0.6 + 0.2 },
      });

      // right side burst
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 120,
        origin: { x: 1, y: Math.random() * 0.6 + 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return null;
}

