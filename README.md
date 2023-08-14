# Fullstack Example with Next.js (REST API)

## Getting started

### 1. Download example and install dependencies

Install npm dependencies:

```
npm install
```

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate
```

### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.
