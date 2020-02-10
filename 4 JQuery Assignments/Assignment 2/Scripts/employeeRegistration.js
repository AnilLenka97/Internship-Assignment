(function(){
    var flag;
    var photoflag = 0;
    var dropZoneId =$(".drop-zone").attr('id');
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
        $('.error-message, #employeeDetails, #imageResetButton').hide();
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
        $('#aadhaarNum, #phoneNum, #pinCode').on('keypress', function(e){
            if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                e.preventDefault();
                return false;
            }
        });
        $('#aadhaarNum').on('change', function(){
            checkAadhaarNum();
        });
        $('#phoneNum').on('change', function(){
            checkPhoneNum();
        });
        $('#pinCode').on('change', function(){
            checkPinCode();
        });
        $('#country').on('change click', function(){
            selectStateAccToCountry($(this),$('#state'));
            checkCountry();
        });
        selectStateAccToCountry($('#country'),$('#state'));
        $('#state').on('change click', function(){
            checkState();
        });
        $('#city').keyup(function(){
            checkCity(); 
        });
        $('#textArea').keyup(function(){
            checkTextAreaAddress();
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
        $(window).on('dragenter dragover drop', function(e) {
            if (e.target.id !== dropZoneId) {            
                e.preventDefault();
            }
        });        
        $(".drop-zone").change(function() {
            $('#inputImageErrorMsg').hide();
            readFile(this);
        });
    });
    // for upload image file
    function readFile(passVal) {
        if (passVal.files && passVal.files[0]) {
            var reader = new FileReader();
            var ext = $('.drop-zone').val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['png','jpg','jpeg']) === -1) {
                $('#inputImageErrorMsg').show();
                $('.drop-zone').val('');
                return;
            }
            reader.onload = function (e) {
                var img = $('<img>').attr('src', e.target.result);
                $('.upload-image-preview').html(img);
            };
            photoflag = 1;
            $('#dropZoneDiv').removeClass('error-border-color');
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
        $('#imageResetButton, .upload-image-preview').show();
    }
    // Adding new dynamic number field
    function addNewNumberField() {
        counter += 1;
        $(wrapper1).append('<div><select id="phoneCode'+counter+'" class="dynamic-phone-code"><option value="+91">+91</option><option value="+91">+92</option><option value="+91">+93</option><option value="+91">+94</option><option value="+91">+95</option></select><input type="text" id="phoneNum'+counter+'" class="dynamicPhoneNumInput" placeholder="Enter your Phone Number" maxlength="10" autocomplete="off"><button type="button" id="removeButton'+counter+'" class="remove-field">x</button><lable class="error-message"></label></div>');
        $(wrapper2).append('<p id="dynamicPhoneShow'+counter+'"><label class="output-label">Phone Number : </label><label id="phoneCodeShow'+counter+'" class="output-field"></label><label id="phoneNumShow'+counter+'" class="output-field"</p>')
        $('.remove-field').on("click", function(e){
            $(this).parent('div').remove();
            $('#dynamicPhoneShow'+($(this).attr('id').substr($(this).attr('id').length - 4))).remove();
        });
        $('.error-message').hide();
        $('.dynamic-phone-code').on('click keyup change',function(){
            outputPhoneCode($(this),$('#phoneCodeShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
        });
        // Dynamic validation of phone Numbers
        $('.dynamicPhoneNumInput').on('keypress',function(e){
            if(!(e.keyCode >= 48 && e.keyCode <= 57)) {
                e.preventDefault();
                return false;
            }
        }).on('change', function() {
            isNumber($(this),$(this.nextElementSibling.nextElementSibling),$('#phoneNumShow'+($(this).attr('id').substr($(this).attr('id').length - 4))),10);
            isEmpty($(this),$(this.nextElementSibling.nextElementSibling));
        });
    }
    // Adding new Dynamic Address Field
    function addNewAddressField() {
        counterAddress += 1;
        $(wrapperAddress).append('<div id="addressDynamic'+counterAddress+'" class="dynamic-address" style="clear: left;"><h2>Address Field</h2><div class="address-field-part1"><label class="label-field">Country </label><select class="drop-down-input event-handle-country" id="country'+counterAddress+'"><option value="">Select</option><option value="India">India</option><option value="Pakistan">Pakistan</option><option value="China">China</option><option value="Nepal">Nepal</option><option value="Bhutan">Bhutan</option><option value="SriLanka">SriLanka</option><option value="Japan">Japan</option><option value="Afghanistan">Afghanistan</option></select><label for="country'+counterAddress+'" class="error-message"></label><label class="label-field">State </label><select class="drop-down-input event-handle-state" id="state'+counterAddress+'"></select><label for="state'+counterAddress+'" class="error-message"></label><label class="label-field">City </label><input type="text" class="text-field-input event-handle-city" placeholder="Enter your City" id="city'+counterAddress+'"><label for="city'+counterAddress+'" class="error-message"></label></div> <div class="address-field-part2"><label class="label-field" >Address </label><textarea class="address-area event-handle-text-area" placeholder="Enter your Full Address" id="textArea'+counterAddress+'"></textarea><label for="textArea'+counterAddress+'" class="error-message"></label><label class="label-field">PIN Code </label><input type="text" id="pinCode'+counterAddress+'" class="text-field-input event-handle-pin-code" placeholder="Enter your PIN Code" maxlength="6" autocomplete="off"> <label for="pinCode'+counterAddress+'" class="error-message"></label></div><button type="button" id="addressRemoveButton'+counterAddress+'" class="remove-field">x</button></div>');
        $(wrapperAddressShow).append('<div id="addressShow'+counterAddress+'"><h2>Address</h2><p id="textAreaShow'+counterAddress+'" class="output-field"></p><p><label class="output-label">City : </label><label id="cityShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">State : </label><label id="stateShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">Country : </label><label id="countryShow'+counterAddress+'" class="output-field"></label></p><p><label class="output-label">PIN Code : </label><label id="pinCodeShow'+counterAddress+'" class="output-field"></label></p></div>')
        $('.remove-field').on("click", function(e){
            e.preventDefault();
            $(this).parent('div').remove();
            $('#addressShow'+($(this).attr('id').substr($(this).attr('id').length - 4))).remove();
        });
        $('.error-message').hide();
        // For Binding Country And State
        var dynamicId2 = '#state'+counterAddress;
        var dynamicId3 = '#country'+counterAddress;
        selectStateAccToCountry($(dynamicId3),$(dynamicId2));
        $('.event-handle-country').on('click keyup change',function(){
            validateDropdownBox($(this),$(this.nextElementSibling),$('#countryShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
            // For Binding Country And State
            selectStateAccToCountry($(this),$('#state'+($(this).attr('id').substr($(this).attr('id').length - 4))));
        });
        // For Dynamic State Validation
        $('.event-handle-state').on('click keyup change',function(){
            validateDropdownBox($(this),$(this.nextElementSibling),$('#stateShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));   
        });
        // For Dynamic City Validation
        $('.event-handle-city').on('keyup',function(){
            validateCity($(this),$(this.nextElementSibling),$('#cityShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
            isEmpty($(this),$(this.nextElementSibling));   
        });
        // For Dynamic PIN Code Validation
        $('.event-handle-pin-code').on('keypress',function(e){
            if(!(e.keyCode >= 48 && e.keyCode <= 57)) {
                e.preventDefault();
                return false;
            }
        }).on('change', function(){
            isNumber($(this),$(this.nextElementSibling),$('#pinCodeShow'+($(this).attr('id').substr($(this).attr('id').length - 4))),6);
            isEmpty($(this),$(this.nextElementSibling));
        });
        // For dynamic Show Text Area
        $('.event-handle-text-area').on('keyup',function(){
            validateTextAreaAddress($(this),$(this.nextElementSibling),$('#textAreaShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
            isEmpty($(this),$(this.nextElementSibling));
        });
    }
    function checkFirstName() {
        validateName($('#firstName'),$('#firstNameErrorMsg'),$('#firstNameShow'),0);
        isEmpty($('#firstName'),$('#firstNameErrorMsg'));
    }
    function checkLastName() {
        validateName($('#lastName'),$('#lastNameErrorMsg'),$('#lastNameShow'),1);
        isEmpty($('#lastName'),$('#lastNameErrorMsg'));
    }
    function checkEmail() {
        validateEmail($('#eMail'),$('#eMailErrorMsg'),$('#eMailShow'));
        isEmpty($('#eMail'),$('#eMailErrorMsg'));
    }
    function checkPanNum() {
        validatePanNum($('#panNum'),$('#panErrorMsg'),$('#panNumShow'));
        isEmpty($('#panNum'),$('#panErrorMsg'));
    }
    function checkAadhaarNum() {
        isNumber($('#aadhaarNum'),$('#aadhaarErrorMsg'),$('#aadhaarNumShow'),12);
        isEmpty($('#aadhaarNum'),$('#aadhaarErrorMsg'));
    }
    function checkPhoneNum() {
        isNumber($('#phoneNum'),$('#phoneNumErrorMsg'),$('#phoneNumShow'),10);
        isEmpty($('#phoneNum'),$('#phoneNumErrorMsg'));
    }
    function checkPhoneCode() {
        outputPhoneCode($('#phoneCode'),$('#phoneCodeShow'))
    }
    function checkCountry() {
        validateDropdownBox($('#country'),$('#countryErrorMsg'),$('#countryShow'));
    }
    function checkState() {
        validateDropdownBox($('#state'),$('#stateErrorMsg'),$('#stateShow'));
    }
    function checkCity() {
        validateCity($('#city'),$('#cityErrorMsg'),$('#cityShow'));
        isEmpty($('#city'),$('#cityErrorMsg'));
    }
    function checkTextAreaAddress() {
        validateTextAreaAddress($('#textArea'),$('#textAreaErrorMsg'),$('#textAreaShow'));
        isEmpty($('#textArea'),$('#textAreaErrorMsg'));
    }
    function checkPinCode() {
        isNumber($('#pinCode'),$('#pinCodeErrorMsg'),$('#pinCodeShow'),6);
        isEmpty($('#pinCode'),$('#pinCodeErrorMsg'));
    }
    //Country-State Binding
    function selectStateAccToCountry(country,state) {
        var countryVal = country.val();
        if(countryVal === "") {
            state.empty();
            state.append('<option value="">First Select the Country</option>');
        }
        else {
            state.empty();
            state.append('<option value="">Select</option>');
            var len = countries[countryVal].length;
            for(var i=0;i<len;i++) {
                state.append("<option value="+countries[countryVal][i]+" >"+countries[countryVal][i]+"</option>");
            }
        }
    }
    // for captcha generation
    function generateCaptcha() {
        var randNum1 = Math.floor(Math.random() * 30) + 10;
        var randNum2 = Math.floor(Math.random() * 40) + 10;
        var rawSymbol="+-*/";
        var randSymbol=rawSymbol[Math.floor(Math.random() * rawSymbol.length)];
        if(randNum1 < randNum2) {
            $("#digit2").html(randNum1);
            $("#digit1").html(randNum2);
        }
        else {
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
                alert('Error in Captcha');
        }
        var answer = $('#answer');
        if(parseInt(answer.val()) !== sum) {
            answer.focus();
            answer.removeClass('corrected-border-color').addClass('error-border-color');
            flag = 1;
        }
        else {
            answer.removeClass('error-border-color').addClass('corrected-border-color');
        }
    }
    // Empty Check
    function isEmpty(passVal,msg) {
        var value = passVal.val().trim();
        if(value.length === 0) {
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            passVal.focus();
            msg.text("**Shouldn't Empty").show();
            flag = 1;
        }
    }
    // Name Validation
    function validateName(passVal,msg,output,space) {
        var value = passVal.val().trim();
        var nameCheck = /[^a-zA-Z 0-9]/;
        if(/[0-9]/.test(value[0])) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Shouldn't start with numbers").show();
            flag = 1;
        }
        else if(nameCheck.test(value)) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Special Characters Not Allowed").show();
            flag = 1;
        }
        else {
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            if(space === 1) {
                output.text(' '+value);
            }
            else {
                output.text(value);
            }
        }
    }
    // E-mail validation Function
    function validateEmail(passVal,msg,output) {
        if(!(/^[a-zA-Z0-9.]+@+[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(passVal.val().trim()))) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text('**Error...Enter a valid email address').show();
            flag = 1;
        }
        else {
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            output.text(passVal.val().trim());
        }
    }
    //PAN Validation
    function validatePanNum(passVal,msg,output) {
        var value = passVal.val().trim();
        if(!/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(value)) {
            passVal.val(value.toUpperCase());
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text('**Error...Enter a valid PAN Number').show();
            flag = 1;
        }
        else {
            passVal.val(value.toUpperCase());
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            output.text(passVal.val().trim());
        }
    }
    // Radio Button validation
    function validateGender() {
        var val = $('#radioInput');
        if($('[name="gender"]:checked').length===0){
            val.removeClass('corrected-border-color').addClass('error-border-color');
            $('#genderErrorMsg').show();
            flag = 1;
        }
        else {
            val.removeClass('error-border-color').addClass('corrected-border-color');
            $('#genderErrorMsg').hide();
            $('#genderShow').text($('input[name="gender"]:checked').val());
        }
    }
    //phone Code Show
    function outputPhoneCode(passVal,output) {
        output.text($(passVal).find('option:selected').text());
    }
    // Phone Number Validation
    function isNumber(passVal,msg,output,length) {
        if(passVal.val().trim().length !== length) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Error...Length should be "+length).show();
            flag = 1;
        }
        else {
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            output.text(passVal.val().trim());
        }
    }
    // Drop Down Box Validation Function
    function validateDropdownBox(passVal,msg,output) {
        if(passVal.val() === "") {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Please select state!!!").show();
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
        if(/[^A-Za-z 0-9]/.test(passVal.val().trim())) {
            passVal.focus();
            passVal.removeClass('corrected-border-color').addClass('error-border-color');
            msg.text("**Special Characters are not allowed").show();
            flag = 1;
        }
        else {
            passVal.removeClass('error-border-color').addClass('corrected-border-color');
            msg.hide();
            output.text(passVal.val().trim());
        }
    }
    //Textarea Validation
    function validateTextAreaAddress(passVal,msg,output) {
        passVal.removeClass('error-border-color').addClass('corrected-border-color');
        msg.hide();
        output.text(passVal.val().trim());
    }
    //Reset Button Click Function
    function resetForm()
    {
        $('form')[0].reset();
        $('.upload-image-preview, #imageResetButton, .error-message').hide();
        $('.drop-zone').show();
        // Delete the added phone number fields
        $('.remove-field').each(function(){
            $(this).parent('div').remove();
            $('#dynamicPhoneShow'+"$(this).attr('id')".substr($(this).attr('id').length - 4)).remove();
        });
        // Delete the added Address Fields
        $('.remove-field').each(function(e){
            $(this).parent('div').remove();
            $('#addressShow'+"$(this).attr('id')".substr($(this).attr('id').length - 4)).remove();
        });
        $('form').each(function(){
            $(this).find(':input').removeClass('error-border-color corrected-border-color');
        });
        $('#dropZoneDiv, #radioInput').removeClass('error-border-color corrected-border-color');
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
        checkTextAreaAddress();
        checkPinCode();
        if(photoflag === 0) {
            $('#dropZoneDiv').addClass('error-border-color');
            flag = 1;
        }
        // For Dynamic Phone Code Validation
        $('.dynamic-phone-code').each(function(){
            outputPhoneCode($(this),$('#phoneCodeShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
        });
        // For Dynamic Phone Number Validation
        $('.dynamicPhoneNumInput').each(function(){
            isNumber($(this),$(this.nextElementSibling.nextElementSibling),$('#phoneNumShow'+($(this).attr('id').substr($(this).attr('id').length - 4))),10);
            isEmpty($(this),$(this.nextElementSibling.nextElementSibling));
        });
        // For Dynamic Country Validation
        $('.event-handle-country').each(function(){
            validateDropdownBox($(this),$(this.nextElementSibling),$('#countryShow'+($(this).attr('id').substr($(this).attr('id').length -4))));
        });
        // For Dynamic State Validation
        $('.event-handle-state').each(function(){
            validateDropdownBox($(this),$(this.nextElementSibling),$('#stateShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));   
        });
        // For Dynamic City Validation
        $('.event-handle-city').each(function(){
            validateCity($(this),$(this.nextElementSibling),$('#cityShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
            isEmpty($(this),$(this.nextElementSibling));
        });
        // For Dynamic PIN Code Validation
        $('.event-handle-pin-code').each(function(){
            isNumber($(this),$(this.nextElementSibling),$('#pinCodeShow'+($(this).attr('id').substr($(this).attr('id').length - 4))),6);
            isEmpty($(this),$(this.nextElementSibling));    
        });
        // For dynamic Text Area Validation
        $('.event-handle-text-area').each(function(){
            validateTextAreaAddress($(this),$(this.nextElementSibling),$('#textAreaShow'+($(this).attr('id').substr($(this).attr('id').length - 4))));
            isEmpty($(this),$(this.nextElementSibling));
        });
        if($('[name="gender"]:checked').length===0){
            $('#radioInput').removeClass('corrected-border-color').addClass('error-border-color');;
            $('#genderErrorMsg').show();
            flag = 1;
        }
        validateCaptcha();
        if(flag === 1) {
            alert('Please Add All the Red Color Border Fields');
            generateCaptcha();
        }
        else {
            alert('Data Saved Successfully');
            $('#employeeRegForm').hide();
            $('#employeeDetails').show();
        }
    }
})();