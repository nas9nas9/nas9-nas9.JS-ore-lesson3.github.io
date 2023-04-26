let str = prompt('Enter your text');
let count = 0;
for(let i=0; i<str.length; i++){
    str.charAt(i)==' ' ? count++ : count;
}
console.log(count);
