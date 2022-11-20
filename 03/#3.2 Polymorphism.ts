type SuperPrint = {
  //   <TypePlaceholder>(arr: TypePlaceholder[]): void;
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, true, false]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
