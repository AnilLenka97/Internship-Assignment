
var flag;
$(document).ready(function(){

    captcha();

    $('#resetButton').click(function(){
        captcha();
    });

    $('#answer').keyup(function(){
        captchaValidation();
    });

    $('#firstName').keyup(function(){
        firstNameCheck();
    });

    $('#lastName').keyup(function(){
        lastNameCheck();
    });

    $('#eMail').keyup(function(){
        eMailCheck();
    });

    $('#gender').change(function(){
        genderCheck();
    });

    $('#password').keyup(function(){
        reEnterPasswordCheck(); // it is included here because : when both the password and reEnter password filled successfully and then if
    //we modify password field then the reEnterpassword field does not veryfied untill we press any key on that field or until we submit the form
    // So to validate instantly the reEnterPassword() is called here 
    //so if we change anything in password field it will validate both the fields

        passwordCheck();
    });

    $('#reEnterPassword').keyup(function(){
        reEnterPasswordCheck();
    });

    $('#phone1').keyup(function(){
        phone1Check();
    });
    
    $('#phone2').keyup(function(){
        phone2Check();
    });

    $('#presentAddressCountry').change(function(){
        presentAddressCountryCheck();
    });

    $('#presentAddressState').change(function(){
        presentAddressStateCheck();
    });

    $('#presentAddressCity').change(function(){
        presentAddressCityCheck();
    });

    $('#presentAddress').keyup(function(){
        presentAddressCheck();
    });

    $('#presentAddressZipCode').keyup(function(){
        presentAddressZipCodeCheck();
    });

    $('#addressCopyCheckbox').click(function(){
        addressCopyCheckboxCheck();
    });

    $('#permanentAddressCountry').change(function(){
        permanentAddressCountryCheck();
    });

    $('#permanentAddressState').change(function(){
        permanentAddressStateCheck();
    });

    $('#permanentAddressCity').change(function(){
        permanentAddressCityCheck();
    });

    $('#permanentAddress').keyup(function(){
        permanentAddressCheck();
    });

    $('#permanentAddressZipCode').keyup(function(){
        permanentAddressZipCodeCheck();
    });

    $("#submit").click(function() {
        submit();
    });
});