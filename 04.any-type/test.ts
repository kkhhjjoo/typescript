//문제 1번

const enum TaskStatus { 
  Pending = '작업이 대기 중입니다',
  InProgress = '작업이 진행 중입니다',
  Completed = '작업이 완료되었습니다'
}


function getStatusMessage(status: TaskStatus): string { 
  return status;
}
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."


//문제 2번

const enum TaskStatus2  {
  Pending = '작업 대기 중',
  InProgress = '작업진행 중',
  Completed = '작업 완료',
  Failed = '작업 실패'
}

function processTask(status: TaskStatus2, input: unknown): string {
  if (typeof input !== 'string') { 
    throw new Error('입력값은 문자열이어야 합니다.');
  }

  if (status === TaskStatus2.Pending) {
    return input.toUpperCase();
  } else if (status === TaskStatus2.InProgress) {
    return input.toLowerCase();
  } else if (status === TaskStatus2.Completed) {
    return `완료: ${input}`;
  } else if (status === TaskStatus2.Failed) {
    throw new Error('작업이 실패했습니다.')
  }
  return '';
}

console.log(processTask(TaskStatus2.Pending, 'task1'));
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus2.InProgress, "TaskA")); 
// 기대 출력: "taska"

console.log(processTask(TaskStatus2.Completed, "Report1")); 
// 기대 출력: "완료: Report1"

try {
  console.log(processTask(TaskStatus2.Failed, "TaskX"));
  // 에러: 작업이 실패했습니다.
} catch (error: any) { 
  console.log('에러', error.message);
}


// console.log(processTask(TaskStatus2.Pending, 42));
// // 에러: 입력값은 문자열이어야 합니다.



//문제 3번
const enum Log {
  Info = 'INFO',
  Error = 'ERROR',
  Debug = 'DEBUG'
}

const logMessage= (message:string, level: Log):void => {
  console.log(`[${level}] ${message}`);
}

logMessage('시스템이 시작되었습니다', Log.Info);
logMessage('네트워크 연결 실패!', Log.Error);
logMessage('디버깅 모드 활성화', Log.Debug);


//문제 4번
function processAny(input: any): string {
  return String(input);
}

function processUnknown(input: unknown): string | number { 
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else if (typeof input === 'number') {
    return input * 10
  } else {
    throw new Error('입력은 문자열 또는 숫자여야 합니다.')
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
// console.log(processUnknown(true)); // 에러 발생