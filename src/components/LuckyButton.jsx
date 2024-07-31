import {useState} from 'react';

const labels = [
    {text: "I'm Feeling Lucky", classes: "text-pink-400"},
    {text: "Push", classes: "text-pink-700"},
    {text: "Push me", classes: " text-pink-500"},
    {text: "And then...", classes: " text-gray-700"},
    {text: "just touch me", classes: " text-red-500"},
    {text: "Till I can get my", classes: " text-purple-700"},
    {text: "Notification...", classes: " text-lg text-purple-500"},
    {text: "Notification...", classes: " text-xl text-gray-500"},
    {text: "Notification!", classes: " text-2xl text-teal-500"},
];

const animationStyles = `
  @keyframes shadowColorChange {
    0% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.7); }
    33% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.7); }
    66% { box-shadow: 0 0 15px rgba(0, 0, 255, 0.7); }
    100% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.7); }
  }

  @keyframes pulsate {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }

  .animate-shadow {
    animation: shadowColorChange 3s linear infinite, pulsate 0.5s ease-in-out infinite;
  }
`

const LuckyButton = ({onClick}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (currentIndex === labels.length - 1) {
            setIsAnimating(true);
            if (onClick) {
                onClick();
            }
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <>
            <style>{animationStyles}</style>
            <button
                type={"button"}
                onClick={handleClick}
                className={`w-full px-4 h-10 rounded-md shadow-sm bg-white font-bold border-2 border-gray-600 transition-all duration-300 ${
                    labels[currentIndex].classes
                } ${isAnimating ? 'animate-shadow !border-transparent' : 'hover:shadow-lg'}`}
            >
                {labels[currentIndex].text}
            </button>
        </>
    );
};

export default LuckyButton;