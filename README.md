# Fullstack Example with Next.js (REST API)

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
