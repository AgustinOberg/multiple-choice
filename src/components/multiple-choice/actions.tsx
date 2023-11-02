import { cn } from "@/lib/utils";
import { Button } from "../common/button";

interface Props {
  next: () => void;
  prev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const Actions = ({ next, prev, hasNext, hasPrev }: Props) => {
  return (
    <footer
      className={cn("mt-6 flex", hasPrev ? "justify-between" : "justify-end")}
    >
      {hasPrev && (
        <Button
          type="button"
          className="dark:bg-gray-700 dark:text-white"
          variant="outline"
          onClick={prev}
        >
          Previous
        </Button>
      )}

      <Button
        type="button"
        className="dark:bg-gray-600 dark:text-white"
        onClick={next}
      >
        {hasNext ? "Next" : "Finish"}
      </Button>
    </footer>
  );
};
