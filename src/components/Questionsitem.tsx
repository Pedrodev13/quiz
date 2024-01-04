import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionsItem = ({question, count, onAnswer}: Props) => {

    const [select, setSelect] = useState<number | null>(null)

    const checkQeustions = (key: number) => {
        if(select === null) {
            setSelect(key);


            setTimeout(() => {
                onAnswer(key);
                setSelect(null);
            }, 1000);

        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">
                {count}. {question.question}
            </div>
            <div>
                {question.options.map((item, key) => (
                        <div key={key} onClick={() => checkQeustions(key)} className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-60
                        ${select !== null && 'cursor-auto hover:opacity-100'}
                        ${select !== null && select === question.answer && select === key && 'bg-green-200 border-green-300'}
                        ${select !== null && select !== question.answer && select === key && 'bg-red-100 border-red-300'}
                        
                        `}
                        >{item}</div>
                ))}
            </div>
        </div>
    )
}