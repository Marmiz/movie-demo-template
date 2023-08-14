import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import prisma from "@/lib/prisma";
import { Movie as MovieType } from "@/lib/types";
import { Movie } from "@/components/Movie";

type Props = {
  movie: MovieType;
};

const MoviePage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <Movie movie={props.movie} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const paramId = ctx.params?.id;
  if (!paramId || typeof paramId !== "string") {
    throw new Error("No movie ID");
  }

  const movieId = parseInt(paramId, 10);

  const movie = await prisma.movie.findUniqueOrThrow({
    where: { id: movieId },
    include: { actors: true, director: true },
  });
  return {
    props: { movie },
  };
};

export default MoviePage;
