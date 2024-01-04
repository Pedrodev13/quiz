"use client"

import { Acertos } from "@/components/Acertos";
import { QuestionsItem } from "@/components/Questionsitem";
import { Results } from "@/components/Resuts";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [current, setCurrent] = useState(0)
  const [show, setShow] = useState(false);

  const title = 'Quiz de Culinária'

  const loadNextQuestion = () => {
    if(questions[current + 1]) {
      setCurrent(current + 1);
    } else {
      setShow(true);
    }
  }

  const handle = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const hadlleButton = () => {
    setAnswers([]);
    setCurrent(0);
    setShow(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl shadow border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!show &&
          <QuestionsItem 
            question={questions[current]}
            count={current + 1}
            onAnswer={handle}
          />
          }
          {show &&
            <Results questions={questions} answers={answers}/>
            
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!show && 
          `${current + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {show &&
          <button onClick={hadlleButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page;