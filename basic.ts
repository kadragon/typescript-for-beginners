type Age = number;
type Name = string;

type Player = {
  readonly name: Name;
  age?: Age;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const playerMaker2 = (name: string): Player => ({ name });

const nico = playerMaker("nico");
nico.age = 15;

const player: readonly [string, number, boolean] = ["Hi", 10, false];

let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  let b = a.toUpperCase();
}

function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
