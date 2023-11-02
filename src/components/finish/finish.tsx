import { useNavigate } from "react-router-dom";
import { Button } from "../common/button";
import { AnimatedBackground } from "./animated-background";
interface Props {
  content: string[];
  title: string;
}
export const Finish = ({ content, title }: Props) => {
  const navigate = useNavigate();
  const playAgain = () => {
    navigate("/");
  };
  return (
    <main className="h-screen flex flex-col gap-y-4 justify-center items-center w-full">
      <h1 className="font-black text-6xl">{title}</h1>
      <div className="z-10">
        <Button type="button" onClick={playAgain} variant="secondary">
          Volver a empezar
        </Button>
        <AnimatedBackground content={content} />
      </div>
    </main>
  );
};
