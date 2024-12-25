import { cn } from "@/lib/utils";

export default function GrainEffect() {
    return (
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full",
            "before:fixed before:top-[-10rem] before:left-[-10rem] before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
            "before:bg-grain before:opacity-15 before:pointer-events-none before:animate-noisy-bg"
          )}
        ></div>
      );
      
}