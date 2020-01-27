
function firstNameCheck() {
    var fName = $("#firstName");
    nameValidation(fName);
}

function lastNameCheck() {
    var lName = $("#lastName");
    nameValidation(lName);
}
// E-mail validation Function
function eMailCheck() {
    var eMail = $("#eMail");
    var eMailCheck = /^[a-zA-Z0-9.]+@+[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(eMail.val() === "" ||   !(eMailCheck.test(eMail.val()))  )
    {
        eMail.focus();
        eMail.css("border-color","red");
        flag = 1;
    }
    else
    {
        eMail.css("border-color","blue");
    }
}

//Password validation...the password should contain atleast one capital letter, one small letter, one number, one special character and the length should be between 8 to 30
function passwordCheck() {
    var password = $('#password');
    var passwordValue = password.val();
    var passLen = passwordValue.length;
    if((!/[a-z]/.test(passwordValue)) || (!/[A-Z]/.test(passwordValue)) || (!/[0-9]/.test(passwordValue)) || (!/[*&%$#@?]/.test(passwordValue)) || (passLen > 30 || passLen < 8))
    {
        password.focus();
        password.css("border-color","red");
        flag = 1;
    }
    else
    {
        password.focus();
        password.css("border-color","blue");
    }
}
// Re-Enter Password Validation
function reEnterPasswordCheck() {
    var reEnterPassword = $('#reEnterPassword');
    var reEnterPasswordValue = reEnterPassword.val();
    var password = $('#password').val();
    if(password!== reEnterPasswordValue || reEnterPasswordValue=="") {
        reEnterPassword.focus();
        reEnterPassword.css("border-color","red");
        flag = 1;
    }
    else {
        reEnterPassword.css("border-color","blue");
    }
}
// Phone 1 validation
function phone1Check() {
    var phone1 = $('#phone1');
    phoneValidation(phone1);
}
// Phone 2 validation
function phone2Check() {
    var phone2 = $('#phone2');
    if(phone2.val().length !== 0)
    {
        phoneValidation(phone2);
    }
    else {
        phone2.css("border-color","blue");
    }
}
// All Drop Down Box Validations
function genderCheck() {
    var gender = $('#gender');
    dropdownboxValidation(gender);
}

function presentAddressCountryCheck() {
    var presentAddressCountry = $('#presentAddressCountry');
    dropdownboxValidation(presentAddressCountry);
}

function presentAddressStateCheck() {
    var presentAddressState = $('#presentAddressState');
    dropdownboxValidation(presentAddressState);
}

function presentAddressCityCheck() {
    var presentAddressCity = $('#presentAddressCity');
    dropdownboxValidation(presentAddressCity);
}


function permanentAddressCountryCheck() {
    var permanentAddressCountry = $('#permanentAddressCountry');
    dropdownboxValidation(permanentAddressCountry);
}

function permanentAddressCityCheck() {
    var permanentAddressCity = $('#permanentAddressCity');
    dropdownboxValidation(permanentAddressCity);
}


function permanentAddressStateCheck() {
    var permanentAddressState = $('#permanentAddressState');
    dropdownboxValidation(permanentAddressState);
}
function presentAddressCheck() {
    var presentAddress = $('#presentAddress');
    textAreaValidation(presentAddress);
}
function permanentAddressCheck() {
    var permanentAddress = $('#permanentAddress');
    textAreaValidation(permanentAddress);
}
// ZIP Code check Function
function presentAddressZipCodeCheck() {
    var presentAddressZipCode = $('#presentAddressZipCode');
    zipCodeValidation(presentAddressZipCode);
}
function permanentAddressZipCodeCheck() {
    var permanentAddressZipCode = $('#permanentAddressZipCode');
    zipCodeValidation(permanentAddressZipCode);
}
// Present address will be taken as permanent address if the checkbox is checked
// and if not checked then all the fields under "permanent address" will be validated by follwing function
function addressCopyCheckboxCheck() {

    permanentAddressCountry = $("#permanentAddressCountry");
    permanentAddressState = $("#permanentAddressState");
    permanentAddress = $("#permanentAddress");
    permanentAddressCity = $("#permanentAddressCity");
    permanentAddressZipCode = $("#permanentAddressZipCode");

    if($('#addressCopyCheckbox').is(":checked")) {
        permanentAddressCountry.prop('disabled', true);
        permanentAddressState.prop('disabled', true);
        permanentAddress.prop('disabled', true);
        permanentAddressCity.prop('disabled', true);
        permanentAddressZipCode.prop('disabled', true);

        permanentAddressCountry.css({"border-color":"blue","background-color":"#36aad833"});
        permanentAddressState.css({"border-color":"blue","background-color":"#36aad833"});
        permanentAddress.css({"border-color":"blue","background-color":"#36aad833"});
        permanentAddressCity.css({"border-color":"blue","background-color":"#36aad833"});
        permanentAddressZipCode.css({"border-color":"blue","background-color":"#36aad833"});


    }
    else {
        permanentAddressCountry.prop('disabled', false);
        permanentAddressState.prop('disabled', false);
        permanentAddress.prop('disabled', false);
        permanentAddressCity.prop('disabled', false);
        permanentAddressZipCode.prop('disabled', false);

        permanentAddressCountry.css({"border-color":"#336ce7","background-color":"#ffffffd3"});
        permanentAddressState.css({"border-color":"#336ce7","background-color":"#ffffffd3"});
        permanentAddress.css({"border-color":"#336ce7","background-color":"#ffffffd3"});
        permanentAddressCity.css({"border-color":"#336ce7","background-color":"#ffffffd3"});
        permanentAddressZipCode.css({"border-color":"#336ce7","background-color":"#ffffffd3"});
    }
}
// ----------------------------------------------- Captcha Function And Its Validation ----------------------------------------------------------
function captcha()
{
    var randNum1 = Math.floor(Math.random() * 30) + 10;
    var randNum2 = Math.floor(Math.random() * 40) + 10;
    var rawSymbol="+-*/";
    var randSymbol=rawSymbol[Math.floor(Math.random() * rawSymbol.length)];

    $("#digit1").html(randNum1);
    $("#digit2").html(randNum2);
    $("#symbol").html(randSymbol);
    $('#answer').css("border-color","#336ce7");
    $('#answer').val('');
}
function captchaValidation() {
    var digit1 = parseInt($("#digit1").html());
    var digit2 = parseInt($("#digit2").html());
    var symbol = $("#symbol").html();
    var sum;
    if(symbol === "+")
    {
        sum = digit1 + digit2;
    }
    if(symbol === '-')
    {
        sum = digit1 - digit2;
    }
    if(symbol ==='*')
    {
        sum = digit1 * digit2;
    }
    if(symbol ==='/')
    {
        sum = Math.floor(digit1 / digit2);
    }
    var answer = $('#answer');
    if(parseInt(answer.val()) !== sum)
    {
        answer.focus();
        answer.css("border-color","red");
        flag = 1;
    }
    else {
        answer.css("border-color","blue");
    }

}
// ------------------------------------------------------Common functions--------------------------------------------------------------------

// Name validation function
function nameValidation(name) {
        var nameCheck = /[^a-zA-Z ]/;
        if(name.val() === "" || nameCheck.test(name.val()))
        {
            name.focus();
            name.css("border-color","red");
            flag = 1;
        }
        else
        {
            name.css("border-color","blue");
        }
}
// Drop Down Box Validation Function
function dropdownboxValidation(passedValue) {
    if(passedValue.val() === 'Select')
    {
        passedValue.focus();
        passedValue.css("border-color","red");
        flag = 1;
    }
    else
    {
        passedValue.css("border-color","blue");
    }
}
// Textarea Box Validation
function textAreaValidation(passedValue) {
    if(passedValue.val().length === 0) {
        passedValue.focus();
        passedValue.css("border-color","red");
        flag = 1;
    }
    else {
        passedValue.css("border-color","blue");
    }
}
// ZIP Code Validation function
function zipCodeValidation(passedValue) {
    if(passedValue.val().length !== 6) {
        passedValue.focus();
        passedValue.css("border-color","red");
        flag = 1;
    }
    else {
        passedValue.css("border-color","blue");
    }
}
// Phone Number Validation
function phoneValidation(passVal) {
    var phoneVal = passVal.val();
    var count = 0;
    if(! /[^0-9 -]/.test(phoneVal)) {
        var i;
        for(i=0 ; i<phoneVal.length ; i++) {
            if(/[0-9]/.test(phoneVal[i])) {
                count += 1;
            }
        }
    }
    if(count !== 10) {
        passVal.focus();
        passVal.css("border-color","red");
        flag = 1;
    }
    else {
        passVal.css("border-color","blue");
    }
}