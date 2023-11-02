import { Form } from "@/components/multiple-choice/form";
import UserOptionProvider from "@/contexts/user-options";
import { useQuestionParam } from "@/hooks/useQuestionParam";

import { PageLayout } from "@/layouts/page";
import questions from "@/sources/questions";

export const Root = () => {
  const { question } = useQuestionParam({ questions });
  return (
    <PageLayout title="Multiple Choice">
      <UserOptionProvider>
        <hr className="mb-4" />
        <div className="rounded-lg bg-white shadow-lg dark:bg-gray-800 p-4 md:p-6">
          <Form question={question} />
        </div>
      </UserOptionProvider>
    </PageLayout>
  );
};
