function submitFirstForm() {

    const series = $('input[name=series]').val()
    const number = $('input[name=number]').val()
    const passportI = (series + number)
    const firstName = $('input[name=firstname]').val()
    const lastName = $('input[name=lastname]').val()
    const fatherName = $('input[name=father_name]').val()
    const phoneNumber = $('input[name=phone]').val()
    const otherPhone = $('input[name=other_number]').val()
    const regionId = $('select[name=region_id]').val()
    const districtId = $('select[name=district_id]').val()
    const birthday = $('input[name=birthdate]').val()
    const code = $('input[name=code]').val()
    //;charset=UTF-8
    var headers = {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
    }
    var data = {
        "firstName": firstName,
        "lastName": lastName,
        "fatherName": fatherName,
        "phoneNumber": phoneNumber,
        "otherPhone": otherPhone,
        "regionId": regionId,
        "districtId": districtId,
        "birthday": birthday,
        "code": code,
        "passport": passportI,
    }

    fetch("http://localhost:8080/api/v1/user/registerForEntrant", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(function (response) {
            console.log("success")
            $('#step-1').css('display', "none");
            $('#step-2').css('display', "");
            return response.json();
        })
        .then(function (data) {
            console.log("error")
            console.log(data)
        });
}


function submitSecondForm() {

    const code = $('input[name=verificationCode]').val()

    //;charset=UTF-8
    var headers = {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
    }
    var data =  {
        "verificationCode": code,
    }

    fetch("http://localhost:8080/api/v1/public/auth/verify", {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
        .then(function(response){
            console.log("success")
            $('#step-1').css('display', "none");
            $('#step-2').css('display', "none");
            $('#step-3').css('display', "");
            return response.json();
        })
        .then(function(data){
            console.log("error")
            console.log(data)
        });
}

function submitThereForm() {

    const degree = $('select[name=degree]').val()
    const yearOfGraduation = $('input[name=end_year_education]').val()
    const diplom_serial = $('input[name=diplom_serial]').val()
    const diplom_number = $('input[name=diplom_number]').val()

    //;charset=UTF-8
    var headers = {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
    }
    var data =  {
        "information": degree,
        "yearOfGraduation": yearOfGraduation,
        "certificateOrDiploma": diplom_serial+diplom_number,
    }

    fetch("http://localhost:8080/api/v1/entrantDoc", {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
        .then(function(response){
            console.log("success")
            $('#step-1').css('display', "none");
            $('#step-2').css('display', "none");
            $('#step-3').css('display', "none");
            $('#step-4').css('display', "");

            return response.json();
        })
        .then(function(data){
            console.log("error")
            console.log(data)
        });
}

function submitFourForm() {

    const facultyId = $('select[name=faculty_id]').val()
    const departmentId = $('select[name=department_id]').val()
    const educationTypeId = $('select[name=education_type_id]').val()
    const educationLanguageId = $('select[name=education_language_id]').val()
    const filialId = $('select[name=filial_id]').val()
    // const typePayment = $('input[name=type_payment]').val()
    const payme = $('input[id=Payme]').val()
    // const click = $('input[id=Click]').val()
    if (payme.chacked){
        console.log("Payme")
    }else {
        console.log("click")
    }
    //;charset=UTF-8
    var headers = {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
    }
    var data =  {
        "typeOfEducation": educationTypeId,
        "languageOfEducation": educationLanguageId,
        "facultyId": facultyId,
        "departmentId": departmentId,
        "branchId": filialId,
    }

    fetch("http://localhost:8080/api/v1/public/insEdu", {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
        .then(function(response){
            console.log("success")
            $('#step-1').css('display', "none");
            $('#step-2').css('display', "none");
            $('#step-3').css('display', "none");
            $('#step-4').css('display', "none");
            // $('#step-5').css('display', "");
            return response.json();
        })
        .then(function(data){
            console.log("error")
            console.log(data)
        });
}