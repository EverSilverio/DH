const btn = document.querySelector('#send');

btn.addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.querySelector('#name');
    var txtName = name.value;

    var arrName = txtName.split(';');

    console.log(txtName);
    console.log(arrName);
})
