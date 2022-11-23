type PlayerA = {
  name: string;
};
const playerA: PlayerA = {
  name: "nico",
};

type PlayerAA = PlayerA & {
  lastName: string;
};

const playerAA: PlayerAA = {
  name: "nico",
  lastName: "las",
};

////
interface PlayerB {
  name: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}

interface PlayerBB {
  health: number;
}

const playerB: PlayerBB = {
  name: "nico",
  lastName: "las",
  health: 10,
};

class UserA implements PlayerA {
  constructor(public name: string) {}
}

class UserB implements PlayerB {
  constructor(public name: string) {}
}
