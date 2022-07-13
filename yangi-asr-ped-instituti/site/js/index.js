
    $(document).ready(function () {
    $('#step_one_birthdate').datepicker({
        format: 'dd.mm.yyyy',
    });
})
    const fileImage = document.querySelector('.input-preview__src');
    const filePreview = document.querySelector('.input-preview');

    fileImage.onchange = function (e) {

    if (e.target.files[0].type != 'application/pdf') {
    const reader = new FileReader();
    reader.onload = function (e) {
    // get loaded data and render thumbnail.
    filePreview.style.backgroundImage = "url(" + e.target.result + ")";
    filePreview.classList.add("has-image");
};

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
} else {
    filePreview.style.backgroundImage = "url(" + "https://profiuniversity.uz/img/pdf.jpg" + ")";
    filePreview.classList.add("has-image");
}
};


    function selectRegion(selectObject) {
    var id = selectObject.value;
    if (id) {
    $.ajax({
    type: "get",
    url: "http://localhost:20001/api/v1/region/get/district",
    data: {'id': id},
    cache: false,
    success: function (data) {
    select = document.getElementById('district');
    select.innerHTML = data;
},
    error: function (data) {
    select = document.getElementById('district');
    select.innerHTML = " <option value=''>Tumanni tanlang</option>";
}
});
}
}


    function selectDepartment(selectObject) {
    var id = selectObject.value;
    if (id) {
    $.ajax({
    type: "get",
    url: "http://localhost:20001/api/v1/depatrtment/get",
    data: {'id': id},
    cache: false,
    success: function (data) {
    select = document.getElementById('department_id');
    select.innerHTML = data;
},
    error: function (data) {
    select = document.getElementById('department_id');
    select.innerHTML = " <option value=''>Tumanni tanlang</option>";
}
});
}
}


    function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
} else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
}
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
}
}


    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');

    togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('show-button');
});

