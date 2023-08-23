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
    isOscarWinner: true,
    actor: { connect: { name: "Leonardo DiCaprio" } },
  },
  {
    bio: "Tom Hardy is an English actor and producer. After studying acting at the Drama Centre London, he made his film debut in Ridley Scott's Black Hawk Down (2001). He has since been nominated for the Academy Award for Best Supporting Actor, two Critics' Choice Movie Awards and two BAFTA Awards, receiving the 2011 BAFTA Rising Star Award.",
    actor: { connect: { name: "Tom Hardy" } },
  },
  {
    bio: "Christian Bale is an English actor. Known for his versatility and intensive method acting, he is the recipient of many awards, including an Academy Award and two Golden Globe Awards, and was featured in the Time 100 list of 2011.",
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
