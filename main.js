const username = document.getElementById('username');
const labelusername = document.querySelector('.labelusername');
const password = document.getElementById('password');
const labelpassword = document.querySelector('.labelpassword');


//Accion de focus en la caja
function boxFocus(param, transform) {
    param.addEventListener('click', e => {
        transform.style.transition = `all 0.5s ease`
        transform.style.fontSize = `12px`
        transform.style.top = `-15px`
        transform.style.left = `0px`
    });
};

//Valor por defecto si la caja se encuentra vacia
function boxClear (param, transform){
    param.addEventListener('blur', e => {
        transform.style.transition = `all 0.5s ease`
        transform.style.fontSize = `19px`
        transform.style.top = `0px`
        transform.style.left = `5px`
    });
};

//Username
boxFocus(username, labelusername);
//boxClear(username, labelusername);

//Password
boxFocus(password, labelpassword);
//boxClear(password, labelpassword);

