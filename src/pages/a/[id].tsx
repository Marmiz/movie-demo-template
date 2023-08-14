import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Layout from "@/components/Layout";
import prisma from "@/lib/prisma";
import { Movie as MovieType } from "@/lib/types";

type Props = {
  movie: MovieType;
};

const ActorPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>Actor page</main>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const paramId = ctx.params?.id;
  if (!paramId || typeof paramId !== "string") {
    throw new Error("No actor ID");
  }

  const actorId = parseInt(paramId, 10);

  const movie = await prisma.actor.findUniqueOrThrow({
    where: { id: actorId },
    include: { movies: true },
  });
  return {
    props: { movie },
  };
};

export default ActorPage;
