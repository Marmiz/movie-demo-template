import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <nav
        className={cn(
          "flex items-center flex-row justify-between space-x-4 lg:space-x-6 border-b-1",
          className
        )}
        {...props}
      >
        <div>
          <h1 className="text-xl font-bold">Movie DB</h1>
          <p className="text-sm text-muted-foreground">
            A list of movies and their actors and directors.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
        </div>
      </nav>
      <Separator />
    </>
  );
}
