
function submit()
{
    flag=0;
    passwordCheck();
    captchaValidation();
    firstNameCheck();
    lastNameCheck();
    eMailCheck();
    genderCheck();
    reEnterPasswordCheck();
    phone1Check();
    phone2Check();
    presentAddressCountryCheck();
    presentAddressStateCheck();
    presentAddressCityCheck();
    presentAddressCheck();
    presentAddressZipCodeCheck();
    addressCopyCheckboxCheck();
    if(!$('#addressCopyCheckbox').is(":checked")) {
        permanentAddressCountryCheck();
        permanentAddressStateCheck();
        permanentAddressCityCheck();
        permanentAddressCheck();
        permanentAddressZipCodeCheck();
    }

    if(flag === 1)
    {
        alert("All the * marked fields and the red border fields should be filled properly!!!");
        event.preventDefault();
        return false;

    }
    else
    {
        alert("Success!!! All data are susccessfully saved...");
        return true;
    }
}