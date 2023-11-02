import { Title } from "@/components/common/title";

interface Props {
  title?: string;
  children: React.ReactNode;
}
export const PageLayout = ({ title, children }: Props) => {
  return (
    <section className="container mx-auto p-4 md:p-6 lg:p-8 dark:bg-gray-900 max-w-3xl">
      <Title>{title}</Title>
      {children}
      <p className="absolute bottom-10 right-10 opacity-25 font-thin">
        Creado por Agustin Oberg
      </p>
    </section>
  );
};
