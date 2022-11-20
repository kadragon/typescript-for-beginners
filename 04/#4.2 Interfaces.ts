type Team = "red" | "blud" | "yellow";
type Health = 1 | 5 | 10;

interface User {
  name: string;
}

interface Player extends User {}

const lynn: Player = {
  name: "lynn",
};

type Users = {
  name: Array<string>;
};

type Players = Users & {};
