let x = window.prompt('Choose a number between 1-100');

if (isNaN(x)){
    alert("SmittyWermanYingamanJensen")
} else {
            if(x > 100 || x < 1){
                alert("Choose a lower number")
            }
            else if (x % 3 && x % 5=== 0) {
                alert('FizzBuzz'); /*A number divisible by 3*/
            } else if (x % 3 === 0) {
                alert('Fizz'); /*A number divisible by 5*/
            } else if(x % 5 === 0) {
                alert('Buzz'); /*A number divisible by 3 and 5*/
            } else if(x % 7 === 0) {
                alert('Woof'); /*A number divisible by 7*/
            } else {
                alert("This number is " + x); /*A number that is divisible by 3 and 5*/
            }
        }
       
