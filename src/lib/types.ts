export type Movie = {
  id: number;
  title: string;
  director: Director;
  actors: Actor[];
};

export type Director = {
  id: number;
  name: string;
};

export type Actor = {
  id: number;
  name: string;
  profile: Profile;
};

export type Profile = {
  bio: string;
  isOscarWinner: boolean;
};
