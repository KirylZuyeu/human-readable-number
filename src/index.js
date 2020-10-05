// Не самое лаконичное решение, но я зашел слишком далеко чтобы бросить на середине :) 
module.exports = function toReadable(number) {
    let answer = '';
    let simpleNumber = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen'
    };
    let decimal = {
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety'
    };

    let pointH = Math.floor(number/100);
    let pointD = Math.floor(number/10) - pointH*10;
    let pointS = number - pointH*100 - pointD*10;
    let pointT = pointD*10 + pointS;
// Если число в интервале между 0 и 19
    if (0 <= number <=19 ){
        answer += simpleNumber[number];
    }
// Если число в интервале между 19 и 99. (20 <= number && number <= 99) <!=> (20 <= number <= 99)
    if (20 <= number && number <= 99){
        if(pointS != 0){
            answer = decimal[pointD] + ' ' + simpleNumber[pointS];
        } else {
            answer = decimal[pointD];
    }
    }
// Если число в интервале между 99 и 999  
    if (number.toString().length == 3){
//Если не оканчивается на 0 и две последние цифры в интервале 20 - 99
        if (pointS != 0 && 20 <= pointT && pointT <= 99){
            answer = simpleNumber[pointH] + ' ' + 'hundred' + ' ' + decimal[pointD]+ ' ' + simpleNumber[pointS];
        } 
//Если оканчивается на 0 и две последние цифры в интервале 20 - 99
        else if (pointS == 0 && 20 <= pointT && pointT <= 99) {
            answer = simpleNumber[pointH] + ' ' + 'hundred' + ' ' + decimal[pointD];
        } 
//Если две последние цифры в интервале 0 - 19, но не два 0
        else if ( 0 < pointT && pointT <= 19) {
            answer = simpleNumber[pointH] + ' ' + 'hundred' + ' ' + simpleNumber[pointT];
        } 
//Если оканчивается на два 00
        else {
            answer = simpleNumber[pointH] + ' ' + 'hundred';
        }
    }
return answer;
}
