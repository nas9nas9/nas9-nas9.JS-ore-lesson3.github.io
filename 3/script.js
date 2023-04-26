let str = prompt('Enter your text');
let count = 0;
for (let i = 0; str.indexOf('html', i)> -1; i++){  
    if (str.indexOf('html', i) == i){
        count++;
    }
}
console.log(count);