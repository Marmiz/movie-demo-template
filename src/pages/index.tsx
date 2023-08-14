import React from "react";
import Layout from "../components/Layout";
import prisma from "../lib/prisma";
import { Movie } from "@/lib/types";
import Link from "next/link";

type Props = {
  movies: Movie[];
};

const HomePage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <div className="flex h-5 items-center space-x-4 text-sm">
          {props.movies.map((movie) => (
            <div key={movie.id}>
              <Link
                href={`/m/${movie.id}`}
                className="hover:underline hover:text-primary"
              >
                {movie.title}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const movies = await prisma.movie.findMany({
    include: { actors: true, director: true },
  });
  return {
    props: { movies },
  };
};

export default HomePage;
