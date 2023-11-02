import { useAnswer } from "@/hooks/useAnswer";
import { type Option as OptionType } from "@/types/option";
import { Question as QuestionType } from "@/types/question";
import { useMemo } from "react";
interface Props {
  option: OptionType;
  question: QuestionType;
}

export const Option = ({ option, question }: Props) => {
  const { label, value } = option;
  const { addAnswer, answers } = useAnswer();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    addAnswer({
      chosenOption: value,
      questionId: question.id,
    });
  };

  const currentAnswer = useMemo(
    () => answers.find((eachAnswer) => eachAnswer.questionId === question.id),
    [answers, question.id]
  );

  return (
    <div className="w-full px-2 py-2 rounded-lg">
      <input
        className="mr-2 "
        id={value}
        name="question1"
        type="radio"
        onChange={onChange}
        value={value}
        checked={currentAnswer?.chosenOption === option.value}
      />
      <label className="text-lg dark:text-gray-300" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};
