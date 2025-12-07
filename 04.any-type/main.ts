//any

let a: unknown = 'noona';
a = 3;
a = true;

// let b: string = a;



let anyType: any;
let unknownType: unknown;

anyType = 'hello';
unknownType = 'hello';

console.log(anyType.toUpperCase());

if (typeof unknownType === 'string') {
  console.log(unknownType.toUpperCase());
}


//void

// function double(a, b):void {
  // console.log(a, b)
// }

interface NewType {
  name: string;
  age: number;
  double: (a: number, b: number) => void
}

//never
function infinite():never {
  while (true) {

  }
}

function throwError():never {
  throw new Error('항상 에러를 던집니다');
}

type AorB = { a: number, b?: never } | {a?: never, b: number }

let c: AorB = {
  a: 2
}