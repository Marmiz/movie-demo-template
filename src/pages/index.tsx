import React from "react";
import Layout from "../components/Layout";
import { Movie } from "@/lib/types";
import Link from "next/link";
import { getMovies } from "@/lib/queries";

type Props = {
  movies: Movie[];
};

const HomePage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <div className="flex h-5 items-center space-x-4 text-sm">
          {props.movies.map((movie, idx) => (
            <div key={movie.id}>
              <Link
                href={`/m/${idx}`}
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
  const movies = getMovies();
  return {
    props: { movies },
  };
};

export default HomePage;
