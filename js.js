function convert(params) {
    let celsius = params;
    let farenheit = (celsius * 1.8) + 32;
    console.log(farenheit);
}

convert(60);

function aria(latime,lungime) {
    let aria=latime*lungime;
    console.log(aria);
}

aria(2,5);

function reversed(number)
{
    let reversNumber= Number(String(number).split('').reverse().join(''));

    console.log(reversNumber);
}

reversed(1053);

function vowelCount(str) {
    let vowelsCount1 = 0;
    const vowels = ['a','e','i','o','u'];
    for(let char of str)
    {
        if (vowels.includes(char)) {
            vowelsCount1++;
        }
    }
    console.log(vowelsCount1);
}

vowelCount("hello");


function palindrome(str) {
    let rev= Number(String(str).split('').reverse().join(''));
     if (str == rev){
        console.log(" The number is a palindrome.");
     }
        
     else{
                console.log(" The number is not a palindrome.");

     }

}

palindrome(1112);