abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickName);
  }
}

const nico = new Player("nico", "las", "니꼬");
nico.getFullName();
