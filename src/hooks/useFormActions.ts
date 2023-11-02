import { Question as QuestionType } from "@/types/question";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAnswer } from "./useAnswer";
interface Args {
  current: QuestionType;
  data: Array<QuestionType>;
}

type FormatedQuestion = {
  [x in number]: QuestionType;
};

export const useFormActions = ({ current, data }: Args) => {
  const { answers } = useAnswer();
  const navigate = useNavigate();
  const dataObj = useMemo(() => {
    const draft: FormatedQuestion = {};
    for (const eachQuestion of data) {
      const { order, question, options, id } = eachQuestion;
      draft[order] = {
        question,
        options,
        order,
        id,
      };
    }
    return draft;
  }, [data]);

  const hasNext = dataObj[current.order + 1];
  const hasPrev = dataObj[current.order - 1];

  const goNext = () => {
    if (hasNext) return navigate(`/?question=${current.order + 1}`);
    return navigate("/finish", { state: { answers } });
  };
  const goPrev = () => {
    if (hasPrev) return navigate(`/?question=${current.order - 1}`);
    return;
  };

  return {
    goNext,
    hasNext,
    hasPrev,
    goPrev,
  };
};
