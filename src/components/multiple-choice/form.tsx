import { useFormActions } from "@/hooks/useFormActions";
import { Actions } from "./actions";
import { Option } from "./option";
import { Question } from "./question";
import { Question as QuestionType } from "@/types/question";

interface Props {
  question: {
    current: QuestionType;
    data: Array<QuestionType>;
  };
}

export const Form = ({ question }: Props) => {
  const { current, data } = question;
  const { goNext, goPrev, hasNext, hasPrev } = useFormActions({
    current,
    data,
  });

  return (
    <form>
      <Question>{current.question}</Question>
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-y-2">
          {current.options.map((eachOption) => (
            <Option
              key={eachOption.value}
              question={current}
              option={eachOption}
            />
          ))}
        </div>
      </div>
      <Actions
        hasPrev={!!hasPrev}
        hasNext={!!hasNext}
        prev={goPrev}
        next={goNext}
      />
    </form>
  );
};
