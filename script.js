                                    // task 1
let nums = [];
let cnt = 100;
let n = 0;
while (n ++ < cnt) {
    nums.push(n);
}

console.log(nums);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(sum);
}
                                    // task 2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = getRandomInt(2, 30);

console.log(a);

function factorial(a) {
    return (a != 1) ? a * factorial(a - 1) : 1;
  }

console.log( factorial(a) );
                                    // task 3
let age = 10;
let mcash = 1000;
let fcash = 1200;

for (let cash = 0; cash < 60000; fcash+=1200) {
    age++;
    cash+=mcash;
    cash+=fcash;
}
let years = age - 10;
console.log("У Вити появится велосипед через: " + years + " лет");
                                    // task 4
let word = "Шалаш";
let word2 = "Огород";
let reWord = "";

for (let i = 0; i < word.length; i++) {
}
for (let i = word.length - 1; i >= 0; i--) {
    reWord += word[i];
}

let str = "";
if (word.toLowerCase() !== reWord.toLowerCase()) {
    str = "не ";
}
console.log(`Слово ${word} ${str}является палиндромом`);
                                    // task 5
let num = Math.floor((Math.random() * 100)+1);
console.log(num);
let input;
function guessing() {
    while (true) {
        input = +prompt("Угадай число от 0 до 100");
        if (input === num) {
            alert(`Вы угадали число - ${num}`);
            break;
        } else if (input <= num-10 || input >= num + 10) {
            alert("Холодно");
        } else if (input <= num-6 || input >= num + 6) {
            alert("Тепло");
        } else if (input <= num-1 || input >= num+1) {
            alert("Горячо");
        }
    }
};
guessing();