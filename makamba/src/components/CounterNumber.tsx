import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animate();
    }, 100);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl font-semibold text-black dark:text-white mb-2 max-sm:text-3xl max-[312px]:text-xl">
        <span className="tabular-nums">
          {count === 2 ? '2M' : count.toLocaleString()}
        </span>
        <span>{count === 2 ? '' : suffix}</span>
      </div>
    </div>
  );
};

const CounterNumber: React.FC = () => {
  const stats: StatItem[] = [
    { value: 500, suffix: '+', label: 'Projectos completos' },
    { value: 100, suffix: '+', label: 'Professionals' },
    { value: 2, suffix: '', label: 'Sq Ft built' }
  ];

  return (
    <section className="">
      <div className="max-w-6xl mt-4 text-white bg-red-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2000 + index * 300}
              />
              <p className="text-sm md:text-md text-black dark:text-white font-normal max-sm:text-sm max-[312px]:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterNumber;