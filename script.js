let btn = document.getElementById('btn');


function myFun() {
    let name1 = document.getElementById('name');
    let surname = document.getElementById('surname');
    let fathername = document.getElementById('fathername');
    let select = document.getElementById('select');
    let checkbox = document.querySelector('input[name = "gender"]:checked');

    let person = {
        firstName: name1.value,
        lastName: surname.value,
        father: fathername.value,
        gender: checkbox.value,
        study: select.value,
    }

    console.log(person);

}

btn.addEventListener('click', myFun);