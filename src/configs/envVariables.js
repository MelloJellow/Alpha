const Reset = '\x1b[0m';
const FgYellow = '\x1b[33m';

const APP_HOST = 'http://localhost:3500';

console.log('Connecting to local API');
console.log(FgYellow, APP_HOST, Reset);

export default APP_HOST;
