
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
var presentAddresspresentAddressCountry=document.getElementById("presentAddresspresentAddressCountry");
var presentAddresspresentAddressState=document.getElementById("presentAddresspresentAddressState");
var presentAddresspresentAddressCity=document.getElementById("presentAddresspresentAddressCity");
var presentAddressZipCode=document.getElementById("presentAddressZipCode");
var addressCopyCheckbox = document.getElementById("addressCopyCheckbox");

var answer = document.getElementById("answer");


function validate()
{
    var count=0;
    

    var nameCheck = /[^a-zA-Z ]/;
    var eMailCheck = /^[a-zA-Z0-9.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var eMailLen = eMail.value.length;

    var digit1 = parseInt(document.getElementById("digit1").innerHTML);
    var digit2 = parseInt(document.getElementById("digit2").innerHTML);
    var symbol = document.getElementById("symbol").innerHTML;

    
    //firstname validation
    if (fName.value.length==0 || nameCheck.test(fName.value))
    {
        fName.focus();
        count++;
        fName.style.backgroundColor="rgb(243, 147, 147)";
    }

    //last name validation
    if (lName.value.length == 0 || nameCheck.test(fName.value))
    {
        lName.focus();
        count++;
        lName.style.backgroundColor="rgb(243, 147, 147)";
    }
    
    //email validation
    if (eMailLen==0|| !eMailCheck.test(eMail.value))
    {
        eMail.focus();
        count++;
        eMail.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Gender validation
    if(gender.value=="Select")
    {
        gender.focus();
        count++;
        gender.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Password validation...the password should contain atleast one capital letter, one small letter, one number, one special character and the length should be between 8 to 30
    var passLen = password.value.length;
    if((!/[a-z]/.test(password.value)) || (!/[A-Z]/.test(password.value)) || (!/[0-9]/.test(password.value)) || (!/[*&%$#@?]/.test(password.value)) || (passLen >= 30 || passLen < 8))
    {
        password.focus();
        count++;
        password.style.backgroundColor="rgb(243, 147, 147)";
    }
    //ReEnter Password validation
    if(reEnterPassword.value.length == 0 || password.value != reEnterPassword.value)
    {
        reEnterPassword.focus();
        count++;
        reEnterPassword.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Phone 1 validation
    if(phone1.value.length!==10)
    {
        phone1.focus();
        count++;
        phone1.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Phone 2 Validation
    if(phone2.value!=="")
    {
        if(phone2.value.length!==10)
        {
            phone2.focus();
            count++;
            phone2.style.backgroundColor="rgb(243, 147, 147)";
        }
    }
    //Address validation
    if(presentAddress.value=="")
    {
        presentAddress.focus();
        count++;
        presentAddress.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Country validation
    if(presentAddressCountry.value=="Select")
    {
        presentAddressCountry.focus();
        count++;
        presentAddressCountry.style.backgroundColor="rgb(243, 147, 147)";
    }
    //State validation
    if(presentAddressState.value=="Select")
    {
        presentAddressState.focus();
        count++;
        presentAddressState.style.backgroundColor="rgb(243, 147, 147)";
    }
    //City validation
    if(presentAddressCity.value=="Select")
    {
        presentAddressCity.focus();
        count++;
        presentAddressCity.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Zip code validation
    if(presentAddressZipCode.value.length !== 6)
    {
        presentAddressZipCode.focus();
        count++;
        presentAddressZipCode.style.backgroundColor="rgb(243, 147, 147)";
    }
    // --------------------------------Validation Of permanent address ( When the checkbox is unchecked)--------------------------------
    if(addressCopyCheckbox.checked==false)
    {
        //Permanent Address validation
        if(permanentAddress.value=="")
        {
            permanentAddress.focus();
            count++;
            permanentAddress.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address Country validation
        if(permanentAddressCountry.value=="Select")
        {
            permanentAddressCountry.focus();
            count++;
            permanentAddressCountry.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address State validation
        if(permanentAddressState.value=="Select")
        {
            permanentAddressState.focus();
            count++;
            permanentAddressState.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address City validation
        if(permanentAddressCity.value=="Select")
        {
            permanentAddressCity.focus();
            count++;
            permanentAddressCity.style.backgroundColor="rgb(243, 147, 147)";
        }
        //Permanent Address Zip code validation
        if(permanentAddressZipCode.value.length !== 6)
        {
            permanentAddressZipCode.focus();
            count++;
            permanentAddressZipCode.style.backgroundColor="rgb(243, 147, 147)";
        }
    }

    //--------------------------------------------Captcha Calculation-------------------------------------------------
    var sum;
    if(symbol=="+")
    {
        sum=digit1+digit2;
    }
    if(symbol=='-')
    {
        sum=digit1-digit2;
    }
    if(symbol=='*')
    {
        sum=digit1*digit2;
    }
    if(symbol=='/')
    {
        sum=Math.floor(digit1/digit2);
    }

    if(answer.value!=sum)
    {
        answer.focus();
        count++;
        answer.style.backgroundColor="rgb(243, 147, 147)";
    }
    //Window alert block
    if(count > 0)
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
function colorChangeFirstName()
{
    firstName.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeLastName()
{
    lName.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeEMail()
{
    eMail.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeGender()
{
    gender.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePassword()
{
    password.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeReEnterPassword()
{
    reEnterPassword.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePhone1()
{
    phone1.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePhone2()
{
    phone2.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePresentAddress()
{
    presentAddress.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePresentAddressCountry()
{
    presentAddressCountry.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePresentAddressState()
{
    presentAddressState.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePresentAddressCity()
{
    presentAddressCity.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePresentAddressZipCode()
{
    presentAddressZipCode.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePermanentAddress()
{
    permanentAddress.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePermanentAddressCountry()
{
    permanentAddressCountry.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePermanentAddressState()
{
    permanentAddressState.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePermanentAddressCity()
{
    permanentAddressCity.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangePermanentAddressZipCode()
{
    permanentAddressZipCode.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeanswer()
{
    answer.style.backgroundColor="rgba(255, 255, 255, 0.829)";
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