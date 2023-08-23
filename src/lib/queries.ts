import prisma from "@/lib/prisma";

export async function getMovies() {
  return await prisma.movie.findMany();
}

export async function getMovieById(id: number) {
  return await prisma.movie.findUniqueOrThrow({
    where: { id },
    include: { actors: true, director: true },
  });
}

export async function getActorById(id: number) {
  return await prisma.actor.findUniqueOrThrow({
    where: { id },
    include: { movies: true, profile: true },
  });
}

export async function getActorByName(name: string) {
  return await prisma.actor.findFirstOrThrow({
    where: { name },
    include: { movies: true, profile: true },
  });
}
