// interface Person {
//   name: string;
// }

// interface Worker extends Person {
//   id: number;
// }

// const p: Person = { name: "Avi" };
// const w: Worker = { name: "Avi", id: 123 };

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Worker extends Person {
//   readonly id: number;
//   constructor(name: string, id: number) {
//     super(name);
//     this.id = id;
//   }
// }

// const worker = new Worker("dani", 123);

// worker.id

interface Actions {
  run: () => number;
  stop: () => void;
}

class Person implements Actions {
  constructor() {}

  run() {
    return 10;
  }

  stop() {}

  // extra methods
  f() {}
}

class Animal implements Actions {
  constructor() {}

  run() {
    return 10;
  }

  stop() {}
}
