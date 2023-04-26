let link = prompt('Enter your web-adress');
let a = link.lastIndexOf('://') + 3;
console.log(link.slice(a));