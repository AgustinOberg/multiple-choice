import { Finish } from "@/components/finish/finish";

import { MIN_APPROVED_PERCENTAGE } from "@/constants/notes";
import { UserOption } from "@/contexts/user-options";
import { generatePercentage } from "@/lib/utils";
import questions from "@/sources/questions";
import { Navigate, useLocation } from "react-router-dom";

export const FinishPage = () => {
  const location = useLocation();
  const answers = location.state?.answers as UserOption[];
  if (!answers) return <Navigate to={"/"} />;
  const correctAnswers = answers.filter(
    (eachAnswer) =>
      questions
        .find((draft) => draft.id === eachAnswer.questionId)
        ?.options.find((draft) => draft.value === eachAnswer.chosenOption)
        ?.isCorrect
  ).length;
  const won =
    generatePercentage(correctAnswers, questions.length) >=
    MIN_APPROVED_PERCENTAGE;
  if (won) return <Finish content={["🥳", "🎉", "🍾"]} title="¡¡ GANASTE !!" />;
  return <Finish content={["😭", "😢", "😿"]} title="Perdiste" />;
};
