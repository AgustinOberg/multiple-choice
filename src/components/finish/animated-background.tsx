import { useMemo } from "react";

const BG_QUANTITY = 40;

interface Props {
  content: string[];
}

export const AnimatedBackground = ({ content }: Props) => {
  const quanitty = useMemo(
    () => Array.from({ length: BG_QUANTITY }).map((_, i) => i),
    []
  );

  const getRandomPosition = () => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
  });

  return (
    <>
      {quanitty.map((eachElement) => {
        const position = getRandomPosition();
        const character =
          content[parseInt(`${Math.random() * content.length}`)];
        return (
          <p
            key={eachElement}
            className="absolute text-3xl animate-bounce -z-10"
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {character}
          </p>
        );
      })}
    </>
  );
};
