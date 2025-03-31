"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import styled from "styled-components"

const HexagonButton = styled.button`
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

// Define types for our game state
type LevelStatus = "locked" | "unlocked" | "current" | "completed"

interface Level {
  number: number
  reward: number
  status: LevelStatus
}

interface Question {
  text: string
  options: {
    id: string
    text: string
    isCorrect: boolean
  }[]
  timeLimit: number
}

export default function Gameplay() {
  const [currentLevel, setCurrentLevel] = useState<number>(5)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState<string>("29:59")


  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const seconds = parseInt(prevTime, 10);
        if (isNaN(seconds) || seconds <= 0) {
          clearInterval(timer);
          return "0";
        }
        return (seconds - 1).toString();
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const levels: Level[] = [
    { number: 15, reward: 10000, status: "locked" as LevelStatus },
    { number: 14, reward: 9000, status: "locked" as LevelStatus },
    { number: 13, reward: 8000, status: "locked" as LevelStatus },
    { number: 12, reward: 7000, status: "locked" as LevelStatus },
    { number: 11, reward: 6000, status: "locked" as LevelStatus },
    { number: 10, reward: 5000, status: (currentLevel === 10 ? "current" : "locked") as LevelStatus },
    { number: 9, reward: 4500, status: "locked" as LevelStatus },
    { number: 8, reward: 4000, status: "locked" as LevelStatus },
    { number: 7, reward: 3500, status: "locked" as LevelStatus },
    { number: 6, reward: 3000, status: "locked" as LevelStatus },
    { number: 5, reward: 2500, status: (currentLevel === 5 ? "current" : "unlocked") as LevelStatus },
    { number: 4, reward: 2000, status: "completed" as LevelStatus },
    { number: 3, reward: 1500, status: "completed" as LevelStatus },
    { number: 2, reward: 1000, status: "completed" as LevelStatus },
    { number: 1, reward: 500, status: "completed" as LevelStatus },
  ].reverse()

  const currentQuestion: Question = {
    text: "What is the primary purpose of formative assessment?",
    options: [
      { id: "A", text: "To assign grades", isCorrect: false },
      { id: "B", text: "To provide feedback for improvement", isCorrect: true },
      { id: "C", text: "To evaluate final learning outcomes", isCorrect: false },
      { id: "D", text: "To rank students", isCorrect: false },
    ],
    timeLimit: 60,
  }

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const getLevelButtonStyle = (status: LevelStatus) => {
    const baseStyle =
      "relative flex justify-between items-center w-full px-10 py-4 text-white font-bold border-0 border-yellow-500 mb-2 hexagon-button"

    switch (status) {
      case "current":
        return `${baseStyle} bg-gradient-to-r from-yellow-600 to-orange-500`
      case "completed":
        return `${baseStyle} bg-green-700`
      case "unlocked":
        return `${baseStyle} bg-teal-900 hover:bg-teal-800`
      case "locked":
        return `${baseStyle} bg-teal-900 opacity-80`
    }
  }

  const getOptionStyle = (optionId: string) => {
    const baseStyle =
      "relative flex items-center w-full px-6 py-3 text-white font-bold border-0 border-yellow-500 mb-4 hexagon-button"

    if (selectedOption === optionId) {
      return `${baseStyle} bg-gradient-to-r from-yellow-600 to-orange-500`
    }

    return `${baseStyle} bg-teal-900 hover:bg-teal-800`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row p-4 gap-20">
        {/* Levels Column */}
        <div className="md:w-2/3 lg:w-2/5">
          {levels.map((level) => (
            <HexagonButton key={level.number} className={getLevelButtonStyle(level.status)}>
              <span>{level.number}</span>
              <span className="flex items-center">
                {level.reward} <span className="text-yellow-500 ml-1">💰</span>
              </span>
            </HexagonButton>
          ))}
        </div>

        {/* Question and Options Column */}
        <div className="md:w-1/3 lg:w-3/4">
          <div className="bg-teal-900 border-2 border-yellow-500 p-6 rounded-lg mb-8 relative">
            <div className="absolute top-4 left-4 flex items-center text-yellow-500">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-bold">{timeLeft}</span>
            </div>

            <h2 className="text-center text-xl md:text-2xl font-bold mt-8 mb-4">
              {currentQuestion.text}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => (
              <HexagonButton
                key={option.id}
                className={getOptionStyle(option.id)}
                onClick={() => handleOptionSelect(option.id)}
                aria-pressed={selectedOption === option.id}
              >
                <span className="mr-2">{option.id})</span> {option.text}
              </HexagonButton>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <HexagonButton className="text-white px-6 py-3 bg-teal-900 hover:bg-teal-800">
              Submit
            </HexagonButton>
        </div>
        </div>
      </div>
    </div>
  )
}
