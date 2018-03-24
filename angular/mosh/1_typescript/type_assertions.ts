let message: string;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let makeSureItEndsWithC = (message as string).endsWith('c');
console.log(endsWithC);
console.log(makeSureItEndsWithC);