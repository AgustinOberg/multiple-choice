import { Question } from "@/types/question";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface Args {
  questions: Array<Question>;
}
export const useQuestionParam = ({ questions }: Args) => {
  const [searchParams] = useSearchParams();
  const questionValue = parseInt(searchParams.get("question") || "1");
  const question = useMemo(
    () => ({
      current: questions.find(
        (eachQuestion) => eachQuestion.id === questionValue
      )!,
      data: questions,
    }),
    [questionValue, questions]
  );

  return {
    question,
  };
};
