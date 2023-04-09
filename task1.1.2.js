

const Validator = {
    validateEmail: function (email){
        let regexEmail = /(^\w[a-zA-Z0-9.+-]{1,20})@([-.!$%&`*+/=?^_\w]{1,15})\.([a-z]{1,5}$)/gmi;
        return regexEmail.test(email);
    },
    validatePhone: function (phone){
        if(phone.length > 25){
            return false;
        }else{
            let regexPassword = /^\+?(\d\d)?(\s|\-)*((\(?[\d]{3}\)?)|(\(?\d{2}\-{1}\d{1}\)))(\s|\-)*\d((\s*\d\-?){6})$/;
            return regexPassword.test(phone);
        }
        
    },
    validatePassword: function (password){
        let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{8,}/;
        return regexPassword.test(password);
    }
}

// Валидные:
// fi@secondpart.end
// first-part@.se=cond%p.art.end
// first.part@se=cond%part.r

// Невалидные:
// f@secondart.end,
// first-part@.se=cond@part.end
// -firstpart@.se=cond%.enddeded
// firs_tpart@.se.en
// firstpart@.se.enddeded

let testingEmail = function(testingPhrase){
    let result = Validator.validateEmail(testingPhrase);
    if(result === true){
        console.log('Passed');
    }else{
        console.log('Failed'); 
    }
}
testingEmail('fi@secondpart.end');

// Валидные:
// +38 (099) 567 8901
// +38 099 5 6 7 8 9  01
// (09-9) 567-890-1
// --  (099) 567 890-1

// Невалидные:
// +38 (099) 567 8901 0
// +38 099 a0000000
// +38 (0989) 567 8901
// +48 (0989) 567 8901

let testingPhone = function(testingPhrase){
    let result = Validator.validatePhone(testingPhrase);
    if(result === true){
        console.log('Passed');
    }else{
        console.log('Failed'); 
    }
}
testingPhone('+38 (099) 567 8901');

// Валидные:
// C00l_Pass
// SupperPas1

// Невалидные:
// Cool_pass
// C00l

let testingPassword = function(testingPhrase){
    let result = Validator.validatePassword(testingPhrase);
    if(result === true){
        console.log('Passed');
    }else{
        console.log('Failed'); 
    }
}
testingPassword('C00l');
