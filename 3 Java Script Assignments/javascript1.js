
//Declaration of variables globally due to multiple use purpose
var fName=document.getElementById("firstName");
var lName=document.getElementById("lastName");
var eMail=document.getElementById("eMail");
var gender=document.getElementById("gender");
var password=document.getElementById("password");
var reEnterPassword=document.getElementById("reEnterPassword");
var phone1=document.getElementById("phone1");
var phone2=document.getElementById("phone2");
var presentAddress=document.getElementById("presentAddress");
var country=document.getElementById("country");
var state=document.getElementById("state");
var city=document.getElementById("city");
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
    if(country.value=="Select")
    {
        country.focus();
        count++;
        country.style.backgroundColor="rgb(243, 147, 147)";
    }
    //State validation
    if(state.value=="Select")
    {
        state.focus();
        count++;
        state.style.backgroundColor="rgb(243, 147, 147)";
    }
    //City validation
    if(city.value=="Select")
    {
        city.focus();
        count++;
        city.style.backgroundColor="rgb(243, 147, 147)";
    }

    //Captcha Calculation
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
        alert("All the * marked fields should be filled properly!!!");
        return false;

    }
    else
    {
        alert("Success!!! All data are susccessfully saved...");
        return true;
    }   
}

//Color Change of input fields if any error occurs
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

function colorChangeCountry()
{
    country.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeState()
{
    state.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeCity()
{
    city.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

function colorChangeanswer()
{
    answer.style.backgroundColor="rgba(255, 255, 255, 0.829)";
}

//Captcha function
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

//Address copy(when present address is same as permanent address)
function addressCopy()
{
    document.getElementById("permanentAddress").innerHTML = presentAddress.value;
}