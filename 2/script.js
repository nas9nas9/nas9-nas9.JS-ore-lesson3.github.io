let email = prompt('Write your email');
let check = true;
if(!email.includes('@')){
    check = false;
}
if(email.indexOf('@') == 0){
    check = false;
}
if(email.lastIndexOf('@') == email.length-1){
    check = false;
}
console.log(check);
