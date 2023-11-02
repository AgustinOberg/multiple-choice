import { UserOption, useUserOptions } from "@/contexts/user-options";

export const useAnswer = () => {
  const { userOptionsContext } = useUserOptions();
  const { setUserOptions, userOptions } = userOptionsContext;
  const addAnswer = (answer: UserOption) => {
    const answersWithoutNew = userOptions.filter(
      (eachAnswer) => eachAnswer.questionId !== answer.questionId
    );
    const answerAlreadyExist = answersWithoutNew.length !== userOptions.length;
    if (answerAlreadyExist) {
      setUserOptions([...answersWithoutNew, answer]);
    } else {
      setUserOptions([...userOptions, answer]);
    }
  };

  return {
    addAnswer,
    answers: userOptions,
  };
};
