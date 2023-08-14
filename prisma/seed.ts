import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const movieData: Prisma.MovieCreateInput[] = [
  {
    title: "Inception",
    director: {
      connectOrCreate: {
        where: { name: "Christopher Nolan" },
        create: { name: "Christopher Nolan" },
      },
    },
    actors: {
      connectOrCreate: [
        {
          where: { name: "Leonardo DiCaprio" },
          create: { name: "Leonardo DiCaprio" },
        },
        {
          where: { name: "Tom Hardy" },
          create: { name: "Tom Hardy" },
        },
      ],
    },
  },
  {
    title: "The Dark Knight",
    director: {
      connectOrCreate: {
        where: { name: "Christopher Nolan" },
        create: {
          name: "Christopher Nolan",
        },
      },
    },
    actors: {
      connectOrCreate: [
        {
          where: { name: "Christian Bale" },
          create: { name: "Christian Bale" },
        },
        {
          where: { name: "Heath Ledger" },
          create: { name: "Heath Ledger" },
        },
      ],
    },
  },
  {
    title: "The Revenant",
    director: {
      connectOrCreate: {
        where: { name: "Alejandro G. Iñárritu" },
        create: { name: "Alejandro G. Iñárritu" },
      },
    },
  },
];

const profileData: Prisma.ProfileCreateInput[] = [
  {
    bio: "Leonardo DiCaprio is an American actor, film producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed US$7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors.",
    actor: { connect: { name: "Leonardo DiCaprio" } },
  },
  {
    bio: null,
    actor: { connect: { name: "Tom Hardy" } },
  },
  {
    bio: "Christopher Edward Nolan CBE is a British-American film director, producer, and screenwriter. His directorial efforts have grossed more than US$5 billion worldwide, garnered 36 Oscar nominations and ten wins.",
    actor: { connect: { name: "Christian Bale" } },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of movieData) {
    const movie = await prisma.movie.create({
      data: u,
    });
    console.log(`Created movie with id: ${movie.id}`);
  }

  for (const p of profileData) {
    const profile = await prisma.profile.create({
      data: p,
    });
    console.log(`Created profile with id: ${profile.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
