import { useEffect, useRef, useState } from "react";

const ONE_HOUR_IN_SECONDS = 60 * 60;

export function useCountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(ONE_HOUR_IN_SECONDS);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    secondsLeft,
    minutes: Math.floor(secondsLeft / 60),
    seconds: secondsLeft % 60,
    isFinished: secondsLeft === 0,
  };
}
