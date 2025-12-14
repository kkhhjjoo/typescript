//문제 1번
function getStatusMessage(status) {
    return status;
}
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uB300\uAE30 \uC911\uC785\uB2C8\uB2E4" /* TaskStatus.Pending */)); // "작업이 대기 중입니다."
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4" /* TaskStatus.InProgress */)); // "작업이 진행 중입니다."
console.log(getStatusMessage("\uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" /* TaskStatus.Completed */)); // "작업이 완료되었습니다."
function processTask(status, input) {
    if (typeof input !== 'string') {
        throw new Error('입력값은 문자열이어야 합니다.');
    }
    if (status === "\uC791\uC5C5 \uB300\uAE30 \uC911" /* TaskStatus2.Pending */) {
        return input.toUpperCase();
    }
    else if (status === "\uC791\uC5C5\uC9C4\uD589 \uC911" /* TaskStatus2.InProgress */) {
        return input.toLowerCase();
    }
    else if (status === "\uC791\uC5C5 \uC644\uB8CC" /* TaskStatus2.Completed */) {
        return "\uC644\uB8CC: ".concat(input);
    }
    else if (status === "\uC791\uC5C5 \uC2E4\uD328" /* TaskStatus2.Failed */) {
        throw new Error('작업이 실패했습니다.');
    }
    return '';
}
console.log(processTask("\uC791\uC5C5 \uB300\uAE30 \uC911" /* TaskStatus2.Pending */, 'task1'));
// 기대 출력: "TASK1"
console.log(processTask("\uC791\uC5C5\uC9C4\uD589 \uC911" /* TaskStatus2.InProgress */, "TaskA"));
// 기대 출력: "taska"
console.log(processTask("\uC791\uC5C5 \uC644\uB8CC" /* TaskStatus2.Completed */, "Report1"));
// 기대 출력: "완료: Report1"
try {
    console.log(processTask("\uC791\uC5C5 \uC2E4\uD328" /* TaskStatus2.Failed */, "TaskX"));
    // 에러: 작업이 실패했습니다.
}
catch (error) {
    console.log('에러', error.message);
}
var logMessage = function (message, level) {
    console.log("[".concat(level, "] ").concat(message));
};
logMessage('시스템이 시작되었습니다', "INFO" /* Log.Info */);
logMessage('네트워크 연결 실패!', "ERROR" /* Log.Error */);
logMessage('디버깅 모드 활성화', "DEBUG" /* Log.Debug */);
//문제 4번
function processAny(input) {
    return String(input);
}
function processUnknown(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (typeof input === 'number') {
        return input * 10;
    }
    else {
        throw new Error('입력은 문자열 또는 숫자여야 합니다.');
    }
}
// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"
console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
// console.log(processUnknown(true)); // 에러 발생
