import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Movie } from "@/lib/types";

interface MovieProps {
  movie: Movie;
}

const Movie = ({ movie }: MovieProps) => (
  <Card key={movie.id}>
    <CardHeader>
      <CardTitle>{movie.title}</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div>
        <p className="font-medium leading-none">Director</p>
        <p className="text-muted-foreground">{movie.director.name}</p>
      </div>
      <Separator />
      <div>
        <p className="font-medium leading-none">Cast</p>
        {movie.actors.map((actor) => (
          <p key={actor.id} className="text-muted-foreground">
            {actor.name}
          </p>
        ))}
      </div>
    </CardContent>
  </Card>
);

export { Movie };
