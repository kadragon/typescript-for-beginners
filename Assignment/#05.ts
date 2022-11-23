type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {}
}

abstract class Dictionary {
  protected words: Words;
  constructor() {
    this.words = {};
  }

  abstract add(word: Word): void;
  abstract get(term: string): string;
  abstract delete(term: string): void;
  abstract update(term: string, def: string): void;
  abstract showAll(): void;
  abstract count(): number;
}

class Dict extends Dictionary {
  add(word: Word) {
    if (this.words[word.term] == undefined) {
      this.words[word.term] = word.def;
    }
  }

  get(term: string): string {
    return this.words[term];
  }

  delete(term: string): void {
    delete this.words[term];
  }

  update(term: string, def: string): void {
    if (this.words[term] !== undefined) {
      this.words[term] = def;
    }
  }

  showAll(): void {
    Object.keys(this.words).forEach((val) => console.log(val, this.words[val]));
  }

  count(): number {
    return Object.keys(this.words).length;
  }
}

const kimchi = new Word("kimchi", "한국의 음식");
const banana = new Word("banana", "노란색 음식");
const coke = new Word("coke", "탄산음료");

const dict = new Dict();

dict.add(kimchi);
console.log(dict.get("kimchi"));

dict.add(banana);
dict.add(coke);

dict.update("coke", "검은 탄산 음료");

dict.showAll();

dict.delete("banana");

console.log(dict.count());
