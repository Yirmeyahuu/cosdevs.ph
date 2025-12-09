const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(156, 163, 175, 0.5) 0%, rgba(209, 213, 219, 0.8) 30%, rgba(243, 244, 246, 1) 50%, rgba(209, 213, 219, 0.8) 70%, rgba(156, 163, 175, 0.5) 100%)',
        backgroundSize: '150% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;