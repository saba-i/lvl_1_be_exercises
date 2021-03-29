// 1.
// დაწერეთ ფუნქცია getZebra() რომელიც დაა-return-ებს სიტყვა 'zebra'-ს
// დაწერეთ ფუნქცია getRhino() რომელიც დაა-return-ებს სიტყვა 'rhino'-ს
// დაწერეთ ფუნქცია printBothAnimals() - ამ ფუნქციამ უნდა გამოიძახოს 
// getZebra და getRhino - შემდეგ დალოგოს დაბრუნებული სიტყვები

// 2.
// ზემოთ დაწერილი ფუნქცია გამოიძახეთ და დაბრუნებული მნიშვნელობები დალოგეთ.
// დაწერეთ ფუნქცია sum(num1, num2)-ამ ფუნქციამ უნდა დააბრუნოს num1+num2

// 2.1 challenge
// შექმენით ფუნქცია compareSums()-ამ ფუნქციაში prompt-ით მოითხოვეთ 4 რიცხვი
// გამოიძახეთ ფუნქცია sum() ორჯერ და გაატანეთ სწორი არგუმენტენტები
// sum() -ების მიერ დაბრუნებული მნიშვნელობები შეინახეთ ცვლადებში და შეადარეთ ისინი ერთმანეთს


// 3.
const fruitList = ['Apple', 'Orange', 'Strwaberry', 'Grape']
// დაწერეთ ფუნქცია findCitrus(arrayToFind)
// arrayToFind-ში თუ იპოვით Orange-ს დაარეთურნეთ 'Orange'.
// შეზღუდვა: დაბრუნებისას გამოიყენეთ array-ს ელემენტი
// ანუ return 'Orange' არ დაწეროთ.

// დაწერეთ ფუნქცია findCitrusIndex(arrayToFind)
// arrayToFind-ში თუ იპოვით Orange-ს დააბრუნეთ მისი ინდექსი.
// არ დაწეროთ return 1 ან return 2. გამოიყენეთ ნამდვილი ინდექსი.
// ჩათვალეთ რომ არ იცით წინასწარ რომელ ინდექსზეა Orange.

// დაწერეთ ფუნქცია containsCitrus(arrayToFind)
// arrayToFind-ში თუ ნახავთ Orange-ს დაარეთურნეთ true თუ არა false.

// 4.
/*
    movie = {
        name: 'Name of the Wind',
        director: 'Spielberg',
        year: 2020,
    }
*/
let moviesDatabase = [];


// 5.
// დაწერეთ ფუნქცია addMovieToDatabase(name, director, year);
// ფუნქციაში შექმენით ახალი ობიექტი ზემოთ აღწერეილი სტრუქტურის მიხედვით
// შექმნილი ობიექტი და-push-ეთ moviesDatabase-ში.

// 6.
// დაწერეთ ფუნქცია printAllMoviesInDb()
// მოცემულ ფუნქციაში დაბეჭდეთ ყველა ფილმის სახელი moviesDatabase-იდან

// 7. challenge 
// დაწერეთ ფუნქცია: findMovie(movieName)
// moviesDabase-ში იპოვეთ ობიექტი რომლის name-property არის movieName.
// დაა-return-ეთ ნაპოვნი ობიექტი
// თუ ობიექტს ვერ იპოვნით დაარეთურნეთ false

// 8. challenge 
// დაწერეთ ფუნქცია: listMoviesByDirector(director),
// დაბეჭდეთ ყველა ფილმი გადმოწოდებული რეჟისორის მიერ.



function getZebra(){
    return 'zebra'
}
console.log(getZebra());

function getRhino(){
    return 'getRhino'
}
console.log(getRhino());

function printBothAnimals(){
    return getZebra, getRhino
    
    
    
}



console.log(printBothAnimals(getZebra,getRhino));

function sum(num1,num2){
if(num1===num2){
    return num1+num2
}
}
const result = sum(num1+num2);
console.log(sum(num1+num2));

console.log("hello saba")