var flag;
var photoflag = 0;
var wrapper1 = $('#phoneNumAreaDiv');
var wrapper2 = $('#phoneNumAttach');
var counter = 1000;
var wrapperAddress = $('#addressBook');
var wrapperAddressShow = $('#addressShow');
var counterAddress = 1000;

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

$(document).ready(function(){
    $('.error-message').hide();
    $('#employeeDetails').hide();
    $('#imageResetButton').hide();

    generateCaptcha();

    $('#answer').keyup(function(){
        validateCaptcha();
    });

    $('#firstName').keyup(function(){
        checkFirstName();
    });

    $('#lastName').keyup(function(){
        checkLastName();
    });

    $('#eMail').keyup(function(){
        checkEmail();
    });

    $('#panNum').keyup(function(){
        checkPanNum();
    });

    $('#aadhaarNum').keyup(function(){
        checkAadhaarNum();
    });

    $('#phoneNum').on('keyup click', function(){
        validateGender();
        checkPhoneNum();
    });

    $('#country').change(function(){
        selectStateAccToCountry($(this),$('#state'));
        checkCountry();
    });
    selectStateAccToCountry($('#country'),$('#state'));

    $('#state').change(function(){
        checkState();
    });

    $('#city').keyup(function(){
        checkCity(); 
    });

    $('#textArea').keyup(function(){
        outputTextAreaAddress($('#textArea'),$('#textAreaShow'));
    })

    $('#pinCode').keyup(function(){
        checkPinCode();
    });

    $('#radioInput').click(function(){
        validateGender();
    });

    $('#phoneCode').change(function(){
        checkPhoneCode();
    });

    $('#resetCaptcha').click(function(){
        generateCaptcha();
    });

    $('#submitForm').click(function(){
        submitForm();
    });

    $('#phoneNumAddButton').click(function(){
        addNewNumberField();
    });

    $('#addressAddButton').click(function(){
        addNewAddressField();
    });

    $("#resetForm").click(function(){
        resetForm();
    });

    $("#imageResetButton").click(function(){
        $('.upload-image-preview').hide();
        $(this).hide();
        $('.drop-zone').val('');
        $('.drop-zone').show();
        photoflag = 0;
    });

    // for comntrolling browsers default behaviour while drag and drop
    var dropZoneId =$(".drop-zone").attr('id');
    window.addEventListener("dragenter", function(e) {
        console.log(e.target.id);
        
        if (e.target.id != dropZoneId) {            
          e.preventDefault();
          e.dataTransfer.effectAllowed = "none";
          e.dataTransfer.dropEffect = "none";
        }
    }, false);
      
    window.addEventListener("dragover", function(e) {
        console.log(e.target.id);
        if(e.target.id != dropZoneId) {
          e.preventDefault();
          e.dataTransfer.effectAllowed = "none";
          e.dataTransfer.dropEffect = "none";
        }
    });
      
    window.addEventListener("drop", function(e){
        if (e.target.id != dropZoneId) {
          e.preventDefault();
          e.dataTransfer.effectAllowed = "none";
          e.dataTransfer.dropEffect = "none";
        }
    });
      
    $(".drop-zone").change(function() {
        readFile(this);
    });

});

// for upload image file
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
    $('.drop-zone').hide();
    $('.upload-image-preview').show();
    $('#imageResetButton').show();
}

// Adding new dynamic number field
function addNewNumberField() {
    counter += 1;
    $(wrapper1).append('<div><select id="phoneCode'+counter+'" class="dynamic-phone-code"><option value="+91">+91</option><option value="+91">+92</option><option value="+91">+93</option><option value="+91">+94</option><option value="+91">+95</option></select><input type="text" id="phoneNum'+counter+'" class="dynamicPhoneNumInput" autocomplete="off"><button type="button" id="removeButton'+counter+'" class="remove-field">x</button><lable class="error-message" id="phoneNum'+counter+'ErrorMsg">**Enter a valid phone No</label></div>');
    $(wrapper2).append('<p id="dynamicPhoneShow'+counter+'"><label class="output-label">Phone Number : </label><label id="phoneCodeShow'+counter+'" class="output-field"></label><label id="phoneNumShow'+counter+'" class="output-field"</p>')
    
    $(wrapper1).on("click", ".remove-field", function(e){
        $(this).parent('div').remove();
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicId2 = '#dynamicPhoneShow'+lastFourChar;
        
        $(dynamicId2).remove();
    });

    $('.error-message').hide();
    $('.dynamic-phone-code').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicShowId = '#phoneCodeShow'+lastFourChar;
        outputPhoneCode($('#'+dynamicId),$(dynamicShowId));
    });
    $('.dynamicPhoneNumInput').keyup(function(){
        var dynamicId = $(this).attr('id');
        var msgId = '#'+dynamicId+'ErrorMsg';
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var showId = '#phoneNumShow'+lastFourChar;
        validateNumber($('#'+dynamicId),$(msgId),$(showId),10);
    });
}

// Adding new Dynamic Address Field
function addNewAddressField()
{
    counterAddress += 1;
    $(wrapperAddress).append('<div id="addressDynamic'+counterAddress+'" class="dynamic-address" style="clear: left;"><h2>Address Field</h2><div class="address-field-part1"><label class="label-field">Country </label><select class="drop-down-input event-handle-country" id="country'+counterAddress+'"><option value="Select">Select</option><option value="India">India</option><option value="Pakistan">Pakistan</option><option value="China">China</option><option value="Nepal">Nepal</option><option value="Bhutan">Bhutan</option><option value="SriLanka">SriLanka</option><option value="Japan">Japan</option><option value="Afghanistan">Afghanistan</option></select><label for="country" id="countryErrorMsg'+counterAddress+'" class="error-message">**Please Select Your Country</label><label class="label-field">State </label><select class="drop-down-input event-handle-state" id="state'+counterAddress+'"></select><label for="state" id="stateErrorMsg'+counterAddress+'" class="error-message">**Please Select Your State</label><label class="label-field">City </label><input type="text" class="text-field-input event-handle-city" id="city'+counterAddress+'"><label for="city" id="cityErrorMsg'+counterAddress+'" class="error-message">**Please Enter Your City</label></div> <div class="address-field-part2"><label class="label-field" >Address </label><textarea class="address-area event-handle-text-area" id="textArea'+counterAddress+'"></textarea><label class="label-field">PIN Code </label><input type="text" id="pinCode'+counterAddress+'" class="text-field-input event-handle-pin-code" autocomplete="off"> <label for="pinCode" id="pinCodeErrorMsg'+counterAddress+'" class="error-message">**Please enter valid PIN Code</label></div><button type="button" id="addressRemoveButton'+counterAddress+'" class="remove-field">x</button></div>');

    $(wrapperAddressShow).append('<div id="addressShow'+counterAddress+'"><h2>Address</h2><p id="textAreaShow'+counterAddress+'" class="output-field"></p><p><label class="output-label">City : </label><label id="cityShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">State : </label><label id="stateShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">Country : </label><label id="countryShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">PIN Code : </label><label id="pinCodeShow'+counterAddress+'" class="output-field"></label></p></div>')
    
    $(wrapperAddress).on("click", ".remove-field", function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        var dynamicId = $(this).attr('id');              
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicId2 = '#addressShow'+lastFourChar;
        $(dynamicId2).remove();
    });

    $('.error-message').hide();

    // For Binding Country And State
    var dynamicId2 = '#state'+counterAddress;
    var dynamicId3 = '#country'+counterAddress;
    selectStateAccToCountry($(dynamicId3),$(dynamicId2));

    $('.event-handle-country').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicId2 = '#state'+lastFourChar;
        var dynamicMsgId = '#countryErrorMsg'+lastFourChar;
        var dynamicShowId = '#countryShow'+lastFourChar;

        validateDropdownBox($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));
        // For Binding Country And State
        selectStateAccToCountry($('#'+dynamicId),$(dynamicId2));
    });

    // For Dynamic State Validation
    $('.event-handle-state').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#stateErrorMsg'+lastFourChar;
        var dynamicShowId = '#stateShow'+lastFourChar;
        validateDropdownBox($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));   
    });

    // For Dynamic City Validation
    $('.event-handle-city').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#cityErrorMsg'+lastFourChar;
        var dynamicShowId = '#cityShow'+lastFourChar;
        validateCity($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));    
    });

    // For Dynamic PIN Code Validation
    $('.event-handle-pin-code').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#pinCodeErrorMsg'+lastFourChar;
        var dynamicShowId = '#pinCodeShow'+lastFourChar;
        validateNumber($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId),6);    
    });

    // For dynamic Show Text Area
    $('.event-handle-text-area').on('click keyup change',function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicShowId = '#textAreaShow'+lastFourChar;
        outputTextAreaAddress($('#'+dynamicId),$(dynamicShowId));
    });
}

function checkFirstName() {
    validateName($('#firstName'),$('#firstNameErrorMsg'),$('#firstNameShow'),0);
}

function checkLastName() {
    validateName($('#lastName'),$('#lastNameErrorMsg'),$('#lastNameShow'),1);
}

function checkEmail()
{
    validateEmail($('#eMail'),$('#eMailErrorMsg'),$('#eMailShow'));
}

function checkPanNum()
{
    validatePanNum($('#panNum'),$('#panErrorMsg'),$('#panNumShow'));
}

function checkAadhaarNum()
{
    validateNumber($('#aadhaarNum'),$('#aadhaarErrorMsg'),$('#aadhaarNumShow'),12);
}

function checkPhoneNum()
{
    validateNumber($('#phoneNum'),$('#phoneNumErrorMsg'),$('#phoneNumShow'),10);
}

function checkPhoneCode()
{
    outputPhoneCode($('#phoneCode'),$('#phoneCodeShow'))
}

function checkCountry()
{
    validateDropdownBox($('#country'),$('#countryErrorMsg'),$('#countryShow'));
}

function checkState()
{
    validateDropdownBox($('#state'),$('#stateErrorMsg'),$('#stateShow'));
}

function checkCity()
{
    validateCity($('#city'),$('#cityErrorMsg'),$('#cityShow'));
}

function checkPinCode()
{
    validateNumber($('#pinCode'),$('#pinCodeErrorMsg'),$('#pinCodeShow'),6);
}


//Country-State Binding
function selectStateAccToCountry(country,state)
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

// for captcha generation
function generateCaptcha()
{
    var randNum1 = Math.floor(Math.random() * 30) + 10;
    var randNum2 = Math.floor(Math.random() * 40) + 10;
    var rawSymbol="+-*/";
    var randSymbol=rawSymbol[Math.floor(Math.random() * rawSymbol.length)];
    if(randNum1 < randNum2)
    {
        $("#digit2").html(randNum1);
        $("#digit1").html(randNum2);
    }
    else
    {
        $("#digit1").html(randNum1);
        $("#digit2").html(randNum2);
    }
    $("#symbol").html(randSymbol);
    $('#answer').val('');
}

// captcha Validation
function validateCaptcha() {
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


// Name Validation
function validateName(passVal,msg,output,space) {
    var value = passVal.val().trim();
    var nameCheck = /[^a-zA-Z 0-9]/;
    if(value.length === 0)
    {
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(/[0-9]/.test(value[0]))
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Shouldn't start with numbers");
        msg.show();
        flag = 1;
    }
    else if(nameCheck.test(value))
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Special Characters Not Allowed");
        msg.show();
        flag = 1;
    }
    else
    {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide();
        if(space === 1)
        {
            output.text(' '+value);
        }
        else
        {
            output.text(value);
        }
    }
}

// E-mail validation Function
function validateEmail(passVal,msg,output)
{
    var value = passVal.val().trim();
    var checkEmailRegx = /^[a-zA-Z0-9.]+@+[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(value.length === 0)
    {
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(!(checkEmailRegx.test(value))  )
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text('**Error...Enter a valid email address')
        msg.show();
        flag = 1;
    }
    else
    {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide();
        output.text(value);

    }
}

//PAN Validation
function validatePanNum(passVal,msg,output)
{
    var value = passVal.val().trim()
    if(value.length === 0)
    {
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
    {
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text('**Error...Enter a valid PAN Number');
        msg.show();
        flag = 1;
    }
    else {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide();
        output.text(passVal.val().trim());
    }
}

// Radio Button validation
function validateGender() {
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
function outputPhoneCode(passVal,output)
{
    output.text($(passVal).find('option:selected').text());
}

// Phone Number Validation
function validateNumber(passVal,msg,output,length)
{
    var count = 0;
    var value = passVal.val().trim();
    if(value.length === 0)
    {
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        passVal.focus();
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(! /[^0-9 -]/.test(value))
    {
        var i;
        var len = value.length;
        for(i=0 ; i < len ; i++) {
            if(/[0-9]/.test(value[i]))
            {
                count += 1;
            }
        }
        if(count !== length) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Error...please enter a valid data");
            msg.show();
            flag = 1;
        }
        else {
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            output.text(value);
        }
    }
    else
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Error...please enter a valid data");
        msg.show();
        flag = 1;
    }
}

// Drop Down Box Validation Function
function validateDropdownBox(passVal,msg,output) {
    if(passVal.val() === 'Select' || passVal.val() === 'First Select the Country' || passVal.val().length === 0)
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Please select state!!!");
        msg.show();
        flag = 1;
    }
    else {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide(); 
        output.text($(passVal).find('option:selected').text());
    }
}

//City Validation
function validateCity(passVal,msg,output) {
    var value = passVal.val().trim();
    if(value.length === 0) {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Shouldn't Empty");
        msg.show();
        flag = 1;
    }
    else if(/[^A-Za-z 0-9]/.test(value))
    {
        passVal.focus();
        passVal.removeClass('corrected-border-color').addClass('error-border-color');
        msg.text("**Special Characters are not allowed");
        msg.show();
        flag = 1;
    }
    else {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide();
        output.text(passVal.val().trim());
    }
}

//text area output
function outputTextAreaAddress(passVal,output)
{
    output.text(passVal.val().trim());
}
//Reset Button Click Function
function resetForm()
{
    $('form')[0].reset();
    $('.upload-image-preview').hide();
    $('#imageResetButton').hide();
    $('.drop-zone').show();
}
//Submit Button Click Function
function submitForm()
{
    flag = 0;
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPanNum();
    checkAadhaarNum();
    checkPhoneCode();
    checkPhoneNum();
    checkState();
    checkCountry();
    checkCity();
    checkPinCode();
    validateCaptcha();

    if(photoflag === 0)
    {
        $('#dropZoneDiv').css('border','2px solid red');
        flag = 1;
    }

    // For Dynamic Phone Code Validation
    $('.dynamic-phone-code').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicShowId = '#phoneCodeShow'+lastFourChar;
        outputPhoneCode($('#'+dynamicId),$(dynamicShowId));
    });

    // For Dynamic Phone Number Validation
    $('.dynamicPhoneNumInput').each(function(){
        var dynamicId = $(this).attr('id');
        var msgId = '#'+dynamicId+'ErrorMsg';
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var showId = '#phoneNumShow'+lastFourChar;
        validateNumber($('#'+dynamicId),$(msgId),$(showId),10);

    });

    // For Dynamic Country Validation
    $('.event-handle-country').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#countryErrorMsg'+lastFourChar;
        var dynamicShowId = '#countryShow'+lastFourChar;
        validateDropdownBox($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));
  
    });

    // For Dynamic State Validation
    $('.event-handle-state').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#stateErrorMsg'+lastFourChar;
        var dynamicShowId = '#stateShow'+lastFourChar;
        validateDropdownBox($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));   
    });

    // For Dynamic City Validation
    $('.event-handle-city').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#cityErrorMsg'+lastFourChar;
        var dynamicShowId = '#cityShow'+lastFourChar;
        validateCity($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId));    
    });

    // For Dynamic PIN Code Validation
    $('.event-handle-pin-code').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicMsgId = '#pinCodeErrorMsg'+lastFourChar;
        var dynamicShowId = '#pinCodeShow'+lastFourChar;
        validateNumber($('#'+dynamicId),$(dynamicMsgId),$(dynamicShowId),6);    
    });

    // For dynamic Show Text Area
    $('.event-handle-text-area').each(function(){
        var dynamicId = $(this).attr('id');
        var lastFourChar = dynamicId.substr(dynamicId.length - 4);
        var dynamicShowId = '#textAreaShow'+lastFourChar;
        outputTextAreaAddress($('#'+dynamicId),$(dynamicShowId));
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
        generateCaptcha();
    }
    else
    {
        alert('Data Saved Successfully');
        $('#employeeRegForm').hide();
        $('#employeeDetails').show();
    }
}