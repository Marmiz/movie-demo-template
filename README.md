# Movie Demo Template

## Getting started

### 1. Download example and install dependencies

Clone this repository:

```bash
git clone https://github.com/Marmiz/movie-demo-template.git
cd movie-demo-template
```

Install npm dependencies:

```
npm install
```

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```bash
npm run setup
```

Optionally inspect the tables using built in Prisma studio:

```bash
npm run studio
```

### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

---

## Issues we will focus on during the demo.

1. Homepage throws an error.
   Repro step:

   - navigate to http://localhost:3000
   - observe: An error is thrown.

2. The wrong movie is loaded when navigating from the main menu.
   Repro step:

- load the homepage.
- click on "The Revenant".
- observe: "The Dark Knight" is loaded instead.

3. "The Revenant" page seems incomplete. Actors are missing.
   Repro step:

   - load the movie's page: http://localhost:3000/m/3
   - observe: Cast is missing.

4. Navigating to actor page throws an error.
   Repro step:

   - load the Inception movie: http://localhost:3000/m/1.
   - Click on "Leonardo DiCaprio".
   - observe: An error is thrown.

5. "Heath Ledger" page seems to not working.
   Repro step:

   - load the actor's page: http://localhost:3000/a/4
   - observe: An error is thrown.
