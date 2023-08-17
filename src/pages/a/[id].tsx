import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/components/Layout";
import prisma from "@/lib/prisma";
import { Actor as ActorType } from "@/lib/types";
import { Actor } from "@/components/Actor";

type Props = {
  actor: ActorType;
};

const ActorPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <Actor actor={props.actor} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const paramId = ctx.params?.id;
  if (!paramId || typeof paramId !== "string") {
    throw new Error("No actor ID");
  }

  const actorId = parseInt(paramId, 10);

  const actor = await prisma.actor.findUniqueOrThrow({
    where: { id: actorId },
    include: { movies: true, profile: true },
  });
  return {
    props: { actor },
  };
};

export default ActorPage;
