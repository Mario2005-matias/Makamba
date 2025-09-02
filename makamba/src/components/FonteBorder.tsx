interface Props {
  children: React.ReactNode;
}

export default function FonteBorder({ children }: Props) {
  return (
    <div>
      <div className="neon-border px-4 py-1 mb-4 rounded-lg relative overflow-hidden">
        <span className="neon-text text-sm font-mono tracking-wider">{children}</span>
      </div>
      <style>{`
  .neon-text {
    color: #FF6700;
    text-shadow: 
      0 0 1px #FF6700,
      0 0 2px rgba(255, 103, 0, 0.5),
      0 0 4px rgba(255, 103, 0, 0.3);
    animation: neon-flicker-soft 6s infinite alternate;
  }

  .neon-border {
    border: 1px solid rgba(255, 103, 0, 0.6);
    box-shadow: 
      0 0 2px rgba(255, 103, 0, 0.3),
      0 0 4px rgba(255, 103, 0, 0.2),
      inset 0 0 2px rgba(255, 103, 0, 0.1);
    background: rgba(255, 103, 0, 0.01);
    backdrop-filter: blur(2px);
    animation: border-glow-soft 8s ease-in-out infinite alternate;
  }

  .neon-cursor {
    color: #FF6700;
    text-shadow: 
      0 0 1px #FF6700,
      0 0 2px rgba(255, 103, 0, 0.4);
    animation: cursor-blink 1s infinite, cursor-glow-soft 4s ease-in-out infinite alternate;
  }

  @keyframes neon-flicker-soft {
    0%, 100% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 2px rgba(255, 103, 0, 0.5),
        0 0 4px rgba(255, 103, 0, 0.3);
    }
    50% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 3px rgba(255, 103, 0, 0.6),
        0 0 5px rgba(255, 103, 0, 0.4);
    }
  }

  @keyframes border-glow-soft {
    0% {
      box-shadow: 
        0 0 2px rgba(255, 103, 0, 0.3),
        0 0 4px rgba(255, 103, 0, 0.2),
        inset 0 0 2px rgba(255, 103, 0, 0.1);
    }
    100% {
      box-shadow: 
        0 0 3px rgba(255, 103, 0, 0.4),
        0 0 6px rgba(255, 103, 0, 0.3),
        inset 0 0 3px rgba(255, 103, 0, 0.15);
    }
  }

  @keyframes cursor-glow-soft {
    0% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 2px rgba(255, 103, 0, 0.4);
    }
    100% {
      text-shadow: 
        0 0 2px #FF6700,
        0 0 4px rgba(255, 103, 0, 0.5);
    }
  }

  /* Efeito de scan line mais suave */
  .neon-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 103, 0, 0.05),
      transparent
    );
    animation: scan-line-soft 8s infinite;
  }

  @keyframes scan-line-soft {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`}</style>
    </div>
  );
}
