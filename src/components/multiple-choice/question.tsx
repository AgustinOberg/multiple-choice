interface Props {
  children: React.ReactNode;
}

export const Question = ({ children }: Props) => {
  return (
    <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200 text-center">
      {children}
    </h2>
  );
};
