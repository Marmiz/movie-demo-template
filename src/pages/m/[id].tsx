import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/components/Layout";
import { Movie as MovieType } from "@/lib/types";
import { Movie } from "@/components/Movie";
import { getMovieById } from "@/lib/queries";

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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const paramId = ctx.params?.id;
  if (!paramId || typeof paramId !== "string") {
    throw new Error("No movie ID");
  }

  const movieId = parseInt(paramId, 10);

  const movie = await getMovieById(movieId);
  return {
    props: { movie },
  };
};

export default MoviePage;
