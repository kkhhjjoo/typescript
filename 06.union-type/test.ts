//문제 1번
type MessageObject = {
  message: string;
}

function processInput(input:number[] | string[] | MessageObject): number | string { 
  if (Array.isArray(input)) {
    //숫자 배열
    if (typeof input[0] === 'number') {
      return (input as number[]).reduce((sum, num) => sum + num, 0)
    }
    //문자열 배열
    else if (typeof input[0] === 'string') {
      return (input as string[]).join('');
    }
  } else if (typeof input === 'object' && 'message' in input) { 
    return input.message.toUpperCase();
  }
  throw new Error('유효하지 않은 입력입니다.');
}

console.log(processInput([1, 2, 3])); //6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
try {
    console.log(processInput(42 as any)); // 에러 발생
  } catch (error: any) {
    console.log('에러:', error.message);
  }