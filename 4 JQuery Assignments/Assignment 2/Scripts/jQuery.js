$(document).ready(function(){
    $('.error-message').hide();
    $('#employeeDetails').hide();

    captcha();

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

    $('#panNum').keyup(function(){
        panCheck();
    });

    $('#aadhaarNum').keyup(function(){
        aadhaarCheck();
    });

    $('#phoneNum').keyup(function(){
        phoneNumCheck();
    });

    $('#country').change(function(){
        countryValidation($(this),$('#state'));
        countryCheck();
    });
    countryValidation($('#country'),$('#state'));

    $('#state').change(function(){
        stateCheck();
    });

    $('#city').keyup(function(){
        cityCheck(); 
    });

    $('#textArea').keyup(function(){
        textAreaOutput($('#textArea'),$('#textAreaShow'));
    })

    $('#pinCode').keyup(function(){
        pinCodeCheck();
    });

    $('#radioInput').click(function(){
        genderValidation();
    });

    $('#phoneNum').click(function(){
        genderValidation();
    });

    $('#phoneCode').change(function(){
        phoneCodeCheck();
    });
    $('#resetCaptcha').click(function(){
        captcha();
    });

    $('#submitForm').click(function(){
        submit();
    });

    $('#phoneNumAddButton').click(function(){
        addNewNumberField();
    });

    $('#addressAddButton').click(function(){
        addNewAddressField();
    });

   
    $("#resetForm").click(function(){
        reset();
    });

    $(".dropZone").change(function () {
       readFile(this);
    });

    
});

var flag=0;
var photoflag = 0;
function readFile(passVal)
{
    if (passVal.files && passVal.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = $('<img>').attr('src', e.target.result);
            $('.upload-image-preview').html(img);
        };
        photoflag = 1;
        $('#dropZoneDiv').css('border','1px solid #062b31');
        reader.readAsDataURL(passVal.files[0]);
    }

    if (passVal.files && passVal.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = $('<img>').attr('src', e.target.result);
            $('.upload-image-preview2').html(img);
        };
        reader.readAsDataURL(passVal.files[0]);
    }
}


var wrapper1 = $('#phoneNumAreaDiv');
var wrapper2 = $('#phoneNumAttach');
var counter = 5000;
function addNewNumberField() {
    event.preventDefault();
    counter += 1;
    $(wrapper1).append('<div><select id="phoneCode'+counter+'" class="dynamicPhoneCode"><option value="+91">+91</option><option value="+91">+92</option><option value="+91">+93</option><option value="+91">+94</option><option value="+91">+95</option></select><input type="text" id="phoneNum'+counter+'" class="dynamicPhoneNumInput" autocomplete="off"><button type="button" id="removeButton'+counter+'" class="remove-field">x</button><lable class="error-message" id="phoneNum'+counter+'ErrorMsg">**Enter a valid phone No</label></div>');
    $(wrapper2).append('<p id="dynamicPhoneShow'+counter+'"><label class="output-label">Phone Number : </label><label id="phoneCodeShow'+counter+'" class="output-field"></label><label id="phoneNumShow'+counter+'" class="output-field"</p>')
    
    $(wrapper1).on("click", ".remove-field", function(e){
        e.preventDefault();
        $(this).parent('div').remove();


        var dynamicId = $(this).attr('id');        
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicId2 = '#dynamicPhoneShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        
        
        $(dynamicId2).remove();
        counter -= 1;
    });

    $('.error-message').hide();
    $('.dynamicPhoneCode').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicShowId = '#phoneCodeShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        phoneCodeOutput($('#'+dynamicId),$(dynamicShowId));
    });
    $('.dynamicPhoneNumInput').keyup(function(){
        var dynamicId = $(this).attr('id');
        var msgId = '#'+dynamicId+'ErrorMsg';
       
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var showId = '#phoneNumShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        numberValidation($('#'+dynamicId),$(msgId),$(showId),10);

    });
}

var wrapperAddress = $('#addressBook');
var wrapperAddressShow = $('#addressShow');
var counterAddress = 5000;
function addNewAddressField()
{
    event.preventDefault();
    counterAddress += 1;
    $(wrapperAddress).append('<div id="addressDynamic'+counterAddress+'" class="addressDynamic" style="clear: left;"><h2>Address Field</h2><div class="addressFieldPart1"><label class="requiredField">Country </label><select class="dropDownInput eventHandleCountry" id="country'+counterAddress+'"><option value="Select">Select</option><option value="India">India</option><option value="Pakistan">Pakistan</option><option value="China">China</option><option value="Nepal">Nepal</option><option value="Bhutan">Bhutan</option><option value="SriLanka">SriLanka</option><option value="Japan">Japan</option><option value="Afghanistan">Afghanistan</option></select><label for="country" id="countryErrorMsg'+counterAddress+'" class="error-message">**Please Select Your Country</label><label class="requiredField">State </label><select class="dropDownInput eventHandleState" id="state'+counterAddress+'"></select><label for="state" id="stateErrorMsg'+counterAddress+'" class="error-message">**Please Select Your State</label><label class="requiredField">City </label><input type="text" class="textFieldCity eventHandleCity" id="city'+counterAddress+'"><label for="city" id="cityErrorMsg'+counterAddress+'" class="error-message">**Please Enter Your City</label></div> <div class="addressFieldPart2"><label class="requiredField" >Address </label><textarea class="addressArea eventHandleTextArea" id="textArea'+counterAddress+'"></textarea><label class="requiredField">PIN Code </label><input type="text" id="pinCode'+counterAddress+'" class="textFieldPinCode eventHandlePinCode" autocomplete="off"> <label for="pinCode" id="pinCodeErrorMsg'+counterAddress+'" class="error-message">**Please enter valid PIN Code</label></div><button type="button" id="addressRemoveButton'+counterAddress+'" class="remove-field">x</button></div>');
    $(wrapperAddressShow).append('<div id="addressShow'+counterAddress+'"><h2>Address</h2><p id="textAreaShow'+counterAddress+'" class="output-field"></p><p><label class="output-label">City : </label><label id="cityShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">State : </label><label id="stateShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">Country : </label><label id="countryShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">PIN Code : </label><label id="pinCodeShow'+counterAddress+'" class="output-field"></label></p></div>')
    
    $(wrapperAddress).on("click", ".remove-field", function(e){
        e.preventDefault();
        $(this).parent('div').remove();

        var dynamicId = $(this).attr('id');
        console.log(dynamicId);
              
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicId2 = '#addressShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;

        $(dynamicId2).remove();
        

        counter -= 1;
    });

    $('.error-message').hide();
    // For Binding Country And State
    var dynamicId2 = '#state'+counterAddress;
    var dynamicId3 = '#country'+counterAddress;
    countryValidation($(dynamicId3),$(dynamicId2));

    $('.eventHandleCountry').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicId2 = '#state'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicMsgId = '#countryErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#countryShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;

        dropdownboxValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));
        // For Binding Country And State
        countryValidation($('#'+dynamicId),$(dynamicId2));
  
    });
    // For Dynamic State Validation
    $('.eventHandleState').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#stateErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#stateShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        dropdownboxValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));   
    });
    // For Dynamic City Validation
    $('.eventHandleCity').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#cityErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#cityShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        cityValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));    
    });
    // For Dynamic PIN Code Validation
    $('.eventHandlePinCode').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#pinCodeErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#pinCodeShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        numberValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId),6);    
    });
    // For dynamic Show Text Area
    $('.eventHandleTextArea').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicShowId = '#textAreaShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        textAreaOutput($('#'+dynamicId),$(dynamicShowId));
    });
}

//Binded country and states
var countries = {
    India:["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"],
    Pakistan:["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"],
    China:["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"],
    Nepal:["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
    Bhutan:["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"],
    SriLanka:["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"],
    Japan:["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
    Afghanistan:["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"]
}
//Country-State Binding
function countryValidation(country,state)
{
    
    var countryVal = country.val();
    if(countryVal =="Select")
    {
        state.empty();
        state.append('<option value="First Select the Country">First Select the Country</option>');
    }
    else
    {
        state.empty();
        state.append('<option value="Select">Select</option>');
        var len = countries[countryVal].length;
        for(var i=0;i<len;i++) 
        {
            state.append("<option value="+countries[countryVal][i]+" >"+countries[countryVal][i]+"</option>");
        }
    }

}


function captcha()
{
    var randNum1 = Math.floor(Math.random() * 30) + 10;
    var randNum2 = Math.floor(Math.random() * 40) + 10;
    var rawSymbol="+-*/";
    var randSymbol=rawSymbol[Math.floor(Math.random() * rawSymbol.length)];

    $("#digit1").html(randNum1);
    $("#digit2").html(randNum2);
    $("#symbol").html(randSymbol);
    $('#answer').val('');
}
function captchaValidation() {
    var digit1 = parseInt($("#digit1").html());
    var digit2 = parseInt($("#digit2").html());
    var symbol = $("#symbol").html();
    var sum;
    switch(symbol) {
        case '+' :
            sum = digit1 + digit2;
            break;
        case '-' :
            sum = digit1 - digit2;
            break;
        case '*' :
            sum = digit1 * digit2;
            break;
        case '/' :
            sum = Math.floor(digit1 / digit2);
            break;
        default :
            alert('Error');
    }
    var answer = $('#answer');
    if(parseInt(answer.val()) !== sum)
    {
        answer.focus();
        answer.css('border','2px solid red');
        flag = 1;
    }
    else
    {
        answer.css("border","2px solid blue");
    }

}

function firstNameCheck() {
    nameValidation($('#firstName'),$('#firstNameErrorMsg'),$('#firstNameShow'),0);
}

function lastNameCheck() {
    nameValidation($('#lastName'),$('#lastNameErrorMsg'),$('#lastNameShow'),1);
}

function eMailCheck() {
    eMailValidation($('#eMail'),$('#eMailErrorMsg'),$('#eMailShow'));
}
function panCheck() {
    panValidation($('#panNum'),$('#panErrorMsg'),$('#panNumShow'));
}
function aadhaarCheck() {
    numberValidation($('#aadhaarNum'),$('#aadhaarErrorMsg'),$('#aadhaarNumShow'),12);
}
function phoneNumCheck() {
    numberValidation($('#phoneNum'),$('#phoneNumErrorMsg'),$('#phoneNumShow'),10);
}
function phoneCodeCheck()
{
    phoneCodeOutput($('#phoneCode'),$('#phoneCodeShow'))
}
function countryCheck() {
    dropdownboxValidation($('#country'),$('#countryErrorMsg'),$('#countryShow'));
}
function stateCheck() {
    dropdownboxValidation($('#state'),$('#stateErrorMsg'),$('#stateShow'));
}
function cityCheck() {
    cityValidation($('#city'),$('#cityErrorMsg'),$('#cityShow'));
}
function pinCodeCheck(){
    numberValidation($('#pinCode'),$('#pinCodeErrorMsg'),$('#pinCodeShow'),6);
}





// Name Validation
function nameValidation(passVal,msg,output,space) {
    var nameCheck = /[^a-zA-Z ]/;
    if(passVal.val().trim().length === 0)
    {
        passVal.css("border","2px solid red");
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(nameCheck.test(passVal.val()))
    {
        passVal.focus();
        passVal.css("border","2px solid red");
        msg.text("**Numbers And Special Characters Not Allowed");
        msg.show();
        flag = 1;
    }
    else
    {
        passVal.css("border","2px solid blue");
        msg.hide();
        if(space === 1)
        {
            output.text(' '+passVal.val().trim());
        }
        else
        {
            output.text(passVal.val().trim());
        }
    }
}



// E-mail validation Function
function eMailValidation(passVal,msg,output)
{
    var eMailCheck = /^[a-zA-Z0-9.]+@+[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(passVal.val().trim().length === 0)
    {
        passVal.css("border","2px solid red");
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(!(eMailCheck.test(passVal.val()))  )
    {
        passVal.focus();
        passVal.css("border","2px solid red");
        msg.text('**Error...Enter a valid email address')
        msg.show();
        flag = 1;
    }
    else
    {
        passVal.css("border","2px solid blue");
        msg.hide();
        output.text(passVal.val().trim());

    }
}

//PAN Validation
function panValidation(passVal,msg,output)
{
    if(passVal.val().trim().length === 0)
    {
        passVal.css("border","2px solid red");
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(passVal.val()))
    {
        passVal.css("border","2px solid red");
        msg.text('**Error...Enter a valid PAN Number');
        msg.show();
        flag = 1;
    }
    else {
        passVal.css("border","2px solid blue");
        msg.hide();
        output.text(passVal.val().trim());
    }
}

// Radio Button validation
function genderValidation() {
    var val = $('#radioInput');
    if($('[name="gender"]:checked').length===0){
        val.css('border','2px solid red');
        $('#genderErrorMsg').show();
        flag = 1;
    }
    else
    {
        val.css('border','2px solid blue');
        $('#genderErrorMsg').hide();
        $('#genderShow').text($('input[name="gender"]:checked').val());
    }
}

//phone Code Show
function phoneCodeOutput(passVal,output)
{
    output.text($(passVal).find('option:selected').text());
}

// Phone Number Validation
function numberValidation(passVal,msg,output,length)
{
    var count = 0;
    if(passVal.val().trim().length === 0)
    {
        passVal.css("border","2px solid red");
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(! /[^0-9 -]/.test(passVal.val()))
    {
        var i;
        var len = passVal.val().length;
        for(i=0 ; i < len ; i++) {
            if(/[0-9]/.test(passVal.val()[i]))
            {
                count += 1;
            }
        }
        if(count !== length) {
            passVal.focus();
            passVal.css("border","2px solid red");
            msg.text("**Error...please enter a valid data");
            msg.show();
            flag = 1;
        }
        else {
            passVal.css("border","2px solid blue");
            msg.hide();
            output.text(passVal.val().trim());
        }
    }
}

// Drop Down Box Validation Function
function dropdownboxValidation(passVal,msg,output) {
    if(passVal.val() === 'Select' || passVal.val() === 'First Select the Country' || passVal.val().length === 0)
    {
        passVal.focus();
        passVal.css("border","2px solid red");
        msg.text("**Please select state!!!");
        msg.show();
        flag = 1;
    }
    else {
        passVal.css("border","2px solid blue");
        msg.hide(); 
        output.text($(passVal).find('option:selected').text());
    }
}

//City Validation
function cityValidation(passVal,msg,output) {
    if(passVal.val().length === 0) {
        passVal.focus();
        passVal.css("border","2px solid red");
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else {
        passVal.css("border","2px solid blue");
        msg.hide();
        output.text(passVal.val().trim());
    }
}

//text area output
function textAreaOutput(passVal,output)
{
    output.text(passVal.val().trim());
}
//Reset Button Click Function
function reset()
{
    $('form')[0].reset();
}
//Submit Button Click Function
function submit()
{
    flag = 0;
    firstNameCheck();
    lastNameCheck();
    eMailCheck();
    panCheck();
    aadhaarCheck();
    phoneCodeCheck();
    phoneNumCheck();
    stateCheck();
    countryCheck();
    cityCheck();
    pinCodeCheck();
    captchaValidation();
    if(photoflag === 0)
    {
        $('#dropZoneDiv').css('border','2px solid red');
        flag = 1;
    }
    $('.dynamicPhoneCode').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicShowId = '#phoneCodeShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        phoneCodeOutput($('#'+dynamicId),$(dynamicShowId));
    });
    $('.dynamicPhoneNumInput').each(function(){
        var dynamicId = $(this).attr('id');
        var msgId = '#'+dynamicId+'ErrorMsg';
       
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var showId = '#phoneNumShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        numberValidation($('#'+dynamicId),$(msgId),$(showId),10);

    });
    $('.eventHandleCountry').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#countryErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#countryShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        dropdownboxValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));
  
    });
    // For Dynamic State Validation
    $('.eventHandleState').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#stateErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#stateShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        dropdownboxValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));   
    });
    // For Dynamic City Validation
    $('.eventHandleCity').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#cityErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#cityShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        cityValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));    
    });
    // For Dynamic PIN Code Validation
    $('.eventHandlePinCode').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicMsgId = '#pinCodeErrorMsg'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        var dynamicShowId = '#pinCodeShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        numberValidation($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId),6);    
    });
    // For dynamic Show Text Area
    $('.eventHandleTextArea').each(function(){
        var dynamicId = $(this).attr('id');
        var dynamicNumber1 = dynamicId[dynamicId.length -1];
        var dynamicNumber2 = dynamicId[dynamicId.length -2];
        var dynamicNumber3 = dynamicId[dynamicId.length -3];
        var dynamicNumber4 = dynamicId[dynamicId.length -4];
        var dynamicShowId = '#textAreaShow'+dynamicNumber4+dynamicNumber3+dynamicNumber2+dynamicNumber1;
        textAreaOutput($('#'+dynamicId),$(dynamicShowId));
    });

    if($('[name="gender"]:checked').length===0){
        var val = $('#radioInput');
        val.css('border','2px solid red');
        $('#genderErrorMsg').show();
        flag = 1;
    }
    if(flag === 1)
    {
        alert('Please Add All the Red Color Border Fields');
        captcha();
    }
    else
    {
        alert('Data Saved Successfully');
        $('#employeeRegForm').hide();
        $('#employeeDetails').show();
    }
}