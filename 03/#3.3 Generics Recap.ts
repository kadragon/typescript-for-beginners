type SuperPrint = {
  //   <TypePlaceholder>(arr: TypePlaceholder[]): void;
  <T, V>(arr: T[], value: V): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 5);
superPrint([true, true, false], true);
superPrint(["a", "b", "c"], "d");
superPrint([1, 2, true, false], "a");
