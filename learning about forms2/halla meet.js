let myform = document.querySelector('#myForm');
let name = document.querySelector('#inputFname');
let lname = document.querySelector('#inputLname');
let email = document.querySelector('#inputEmail');
let date = document.querySelector('#inputDate');
let msg = document.querySelector('.mssg1');
let msg1 = document.querySelector('.mssg2');
let msg2 = document.querySelector('.mssg3');
let msg3 = document.querySelector('.mssg4');

myform.addEventListener ('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault();

    if(name.value ==='')  {
        msg.innerHTML = "please Enter First Name";

        setTimeout(() => msg.remove(), 3000);
    } else{
        console.log('success')
    }
    if(lname.value ==='')  {
        msg1.innerHTML = "please Enter Last Name";

        setTimeout(() => msg1.remove(), 3000);
    } else{
        console.log('success')
    }
    if(email.value ==='')  {
        msg2.innerHTML = "please Enter Email";

        setTimeout(() => msg2.remove(), 3000);
    } else{
        console.log('success')
    }
    if(date.value ==='')  {
        msg3.innerHTML = "please Enter First Name";

        setTimeout(() => msg3.remove(), 3000);
    } else{
        console.log('success')
    }
}