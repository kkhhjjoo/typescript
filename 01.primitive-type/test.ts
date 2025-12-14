type ButtonStyle= 'primary' | 'secondary' | 'danger';
 

function getButtonClass(style: ButtonStyle): string {
  return `btn-${style}`;
}
  console.log(getButtonClass('primary')); //btn-primary
  console.log(getButtonClass('secondary')); //btn-secondary
  console.log(getButtonClass('danger')); //btn-danger
  // console.log(getButtonClass('unknown')); //오류 발생


type StateType = 'loading' | 'success' | 'error';

function handleRequestState(state: StateType): string { 
  if (state=== 'loading') {
    return 'Loading, please wait...';
  } else if (state === 'success') {
    return 'Request successful!'
  } else if (state === 'error'){
    return 'There was an error processing your request.';
  }
}

console.log(handleRequestState('loading'));// 'Loading, please wait...'
console.log(handleRequestState('success')); // 'Request successful!'
console.log(handleRequestState('error')); // 'There was an error processing your request.'
// console.log(handleRequestState('unknown'));