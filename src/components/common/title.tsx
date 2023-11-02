interface Props {
  children: React.ReactNode;
}
export const Title = ({ children }: Props) => {
  return (
    <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">
      {children}
    </h1>
  );
};
