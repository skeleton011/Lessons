

// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log("Done!");
// };

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log("Done!");
// };
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log("Done!");
// }



// let result = "";
// let length = 7;

// for(i = 0; i < length; i++){
//    console.log(`its I: ${i}`);
//    for(j = 1; j < i; j++){
//       console.log(`its J: ${j}`);
//       result += "*";
//    }
   
//    result += "\n";
// }
// console.log(result);
// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     console.log(`first ${i}`);
//     for (let j = 0; j < lines - i; j++) {
//         console.log(`second ${j}`);
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {

//         console.log(`thihd ${j}`);
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);



    let NumberOfFilms;

    function start() {

    NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    
    while(NumberOfFilms == "" || NumberOfFilms == null || isNaN(NumberOfFilms)){
    
        NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
    }
}
// start();

    const personalMovieDB = {
	count: NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:true
};

function showMyDB() {
    // if(personalMovieDB.private == false){
    //     console.log(personalMovieDB);
    // }
   
}
// showMyDB();

function writeYourGenres() {
    for(i = 1; i < 4; i++){
        let ask = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = ask;
    }
}
writeYourGenres();
 

function rememberMyFilms(){
    for(i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?","");
    if(a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50){
        personalMovieDB.movies [a] = b ;
        console.log("done");
    }else{
        console.log("error");
        i--;
    }
    
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }

} 

// detectPersonalLevel();

  console.log(personalMovieDB);