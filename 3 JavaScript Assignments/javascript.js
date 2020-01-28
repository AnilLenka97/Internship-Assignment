
//-------------------------Declaration of variables globally due to multiple use purpose--------------------------
var fName=document.getElementById("firstName");
var lName=document.getElementById("lastName");
var eMail=document.getElementById("eMail");
var gender=document.getElementById("gender");
var password=document.getElementById("password");
var reEnterPassword=document.getElementById("reEnterPassword");
var phone1=document.getElementById("phone1");
var phone2=document.getElementById("phone2");
var presentAddress=document.getElementById("presentAddress");
var presentAddressCountry=document.getElementById("presentAddressCountry");
var presentAddressState=document.getElementById("presentAddressState");
var presentAddressCity=document.getElementById("presentAddressCity");
var presentAddressZipCode=document.getElementById("presentAddressZipCode");
var addressCopyCheckbox = document.getElementById("addressCopyCheckbox");

var answer = document.getElementById("answer");


function validate()
{
    var flag=0;
    var eMailCheck = /^[a-zA-Z0-9.]+@+[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var eMailLen = eMail.value.length;

    var digit1 = parseInt(document.getElementById("digit1").innerHTML);
    var digit2 = parseInt(document.getElementById("digit2").innerHTML);
    var symbol = document.getElementById("symbol").innerHTML;

    
    //firstname validation
    nameValidation(fName);
    //last name validation
    nameValidation(lName);
    //email validation
    if (eMailLen === 0|| !eMailCheck.test(eMail.value))
    {
        eMail.focus();
        flag = 1;
        eMail.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Gender validation
    dropDownBoxValidation(gender);
    //Password validation...the password should contain atleast one capital letter, one small letter, one number, one special character and the length should be between 8 to 30
    var passLen = password.value.length;
    if((!/[a-z]/.test(password.value)) || (!/[A-Z]/.test(password.value)) || (!/[0-9]/.test(password.value)) || (!/[*&%$#@?]/.test(password.value)) || (passLen >= 30 || passLen < 8))
    {
        password.focus();
        flag = 1;
        password.style.backgroundColor="rgb(243, 147, 147)";
    }
    //ReEnter Password validation
    if(reEnterPassword.value.length === 0 || password.value !== reEnterPassword.value)
    {
        reEnterPassword.focus();
        flag = 1;
        reEnterPassword.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Phone 1 validation
    phoneValidation(phone1);
    //Phone 2 Validation
    if(phone2.value !== "")
    {
        phoneValidation(phone2);
    }
    //Address validation
    if(presentAddress.value === "")
    {
        presentAddress.focus();
        flag = 1;
        presentAddress.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Country validation
    if(presentAddressCountry.value === "Select")
    {
        presentAddressCountry.focus();
        flag = 1;
        presentAddressCountry.style.backgroundColor="rgb(243, 147, 147)";
    }
    //State validation
    if(presentAddressState.value === "Select")
    {
        presentAddressState.focus();
        flag = 1;
        presentAddressState.style.backgroundColor="rgb(243, 147, 147)";
    }
    //City validation
    if(presentAddressCity.value === "Select")
    {
        presentAddressCity.focus();
        flag = 1;
        presentAddressCity.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Zip code validation
    if(presentAddressZipCode.value.length !== 6)
    {
        presentAddressZipCode.focus();
        flag = 1;
        presentAddressZipCode.style.backgroundColor="rgb(243, 147, 147)";
    }
    // --------------------------------Validation Of permanent address ( When the checkbox is unchecked)--------------------------------
    if(addressCopyCheckbox.checked==false)
    {
        //Permanent Address validation
        if(permanentAddress.value === "")
        {
            permanentAddress.focus();
            flag = 1;
            permanentAddress.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address Country validation
        if(permanentAddressCountry.value === "Select")
        {
            permanentAddressCountry.focus();
            flag = 1;
            permanentAddressCountry.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address State validation
        if(permanentAddressState.value === "Select")
        {
            permanentAddressState.focus();
            flag = 1;
            permanentAddressState.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address City validation
        if(permanentAddressCity.value === "Select")
        {
            permanentAddressCity.focus();
            flag = 1;
            permanentAddressCity.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address Zip code validation
        if(permanentAddressZipCode.value.length !== 6)
        {
            permanentAddressZipCode.focus();
            flag = 1;
            permanentAddressZipCode.style.backgroundColor="rgb(243, 147, 147)";
        }
    }

    //--------------------------------------------Captcha Calculation-------------------------------------------------
    var sum;
    if(symbol === "+")
    {
        sum = digit1 + digit2;
    }
    if(symbol === '-')
    {
        sum = digit1 - digit2;
    }
    if(symbol === '*')
    {
        sum = digit1 * digit2;
    }
    if(symbol === '/')
    {
        sum = Math.floor(digit1 / digit2);
    }

    if(parseInt(answer.value) !== sum)
    {
        answer.focus();
        flag = 1;
        answer.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Window alert block
    if(flag === 1)
    {
        alert("All the * marked fields and the red background fields should be filled properly!!!");
        return false;

    }
    else
    {
        alert("Success!!! All data are susccessfully saved...");
        return true;
    }   
}

//--------------------------------------Color Change of input fields if any error occurs-----------------------------------------------
function colorChange(passVal)
{
    passVal.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

//----------------------------------------------Captcha function-----------------------------------------------------------------------------
function captcha()
{
    var randNum1 = Math.floor(Math.random() * 30) + 10;
    var randNum2 = Math.floor(Math.random() * 40) + 10;
    var rawSymbol="+-*/";
    var randSymbol=rawSymbol[Math.floor(Math.random() * rawSymbol.length)];

    document.getElementById("digit1").innerHTML = randNum1;
    document.getElementById("digit2").innerHTML = randNum2;
    document.getElementById("symbol").innerHTML = randSymbol;
}

//-------------------------------Address copy(when present address is same as permanent address)---------------------------------------------
function addressCopy()
{
    if(addressCopyCheckbox.checked==true)
    {
        document.getElementById("permanentAddress").innerHTML = presentAddress.value;
        permanentAddressCountry.disabled=true;
        permanentAddressState.disabled=true;
        permanentAddress.disabled=true;
        permanentAddressCity.disabled=true;
        permanentAddressZipCode.disabled=true;

        permanentAddress.style.backgroundColor="rgba(255, 255, 255, 0.829)";
        permanentAddressCountry.style.backgroundColor="rgba(255, 255, 255, 0.829)";
        permanentAddressState.style.backgroundColor="rgba(255, 255, 255, 0.829)";
        permanentAddressCity.style.backgroundColor="rgba(255, 255, 255, 0.829)";
        permanentAddressZipCode.style.backgroundColor="rgba(255, 255, 255, 0.829)";
    }
    else
    {
        document.getElementById("permanentAddress").innerHTML = "";
        permanentAddressCountry.disabled=false;
        permanentAddressState.disabled=false;
        permanentAddress.disabled=false;
        permanentAddressCity.disabled=false;
        permanentAddressZipCode.disabled=false;

    }
}
//--------------------------------------------------Common Functions-----------------------------------------------------------------
// Name Validation
function nameValidation(passVal) {
    if(passVal.value.length === 0 || /[^a-zA-Z ]/.test(passVal.value))
    {
        passVal.focus();
        flag = 1;
        passVal.style.backgroundColor="rgb(243, 147, 147)";
    }
}
// Drop Down Box Validation
function dropDownBoxValidation(passVal) {
    if(passVal.value === "Select")
    {
        passVal.focus();
        flag = 1;
        passVal.style.backgroundColor="rgb(243, 147, 147)";
    }
}
// Phone Number Validation
function phoneValidation(passVal) {
    var phoneVal = passVal.value;
    var count = 0;
    if(! /[^0-9 -]/.test(phoneVal)) {
        var i;
        for(i=0 ; i < phoneVal.length ; i++) {
            if(/[0-9]/.test(phoneVal[i])) {
                count += 1;
            }
        }
    }
    if(count !== 10) {
        passVal.focus();
        passVal.style.backgroundColor="rgb(243, 147, 147)";
        flag = 1;
    }
}