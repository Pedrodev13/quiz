import { questions } from "@/data/questions";
import { Question } from "@/types/Question"

type Props = {
    questions: Question[];
    answers: number[];
}

 

export const Results = ({questions, answers}: Props) => {

    return (
        <div>
            {questions.map((item, key) => (
                <div className="mb-3" key={key}>
                    <div className="font-boold">{key + 1}. {item.question}</div>
                    <div>
                        <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) - </span>
                        {item.options[item.answer]} 
                    </div>
                    <div>

                    </div>
                </div>
            ))}
            <div>

            </div>
        </div>
    )
}