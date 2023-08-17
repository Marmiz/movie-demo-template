import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Actor } from "@/lib/types";
import { toAvatarInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ActorProps {
  actor: Actor;
}

const Actor = ({ actor }: ActorProps) => {
  return (
    <Card key={actor.id}>
      <CardHeader className="flex-row gap-1.5">
        <Avatar>
          <AvatarFallback>{toAvatarInitials(actor.name)}</AvatarFallback>
        </Avatar>
        <CardTitle>{actor.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="font-medium leading-none">Bio</p>
        <p className="text-muted-foreground">{actor.profile.bio}</p>
      </CardContent>
    </Card>
  );
};

export { Actor };
