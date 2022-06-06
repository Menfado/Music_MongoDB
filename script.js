const davidBowieDiv$$ = document.querySelector(".davidBowie");
const beersDiv$$ = document.querySelector(".beers");


const getdavidBowie = async () => {
    const davidBowieAPI = await fetch ("http://localhost:5000/davidBowie");
    const davidBowieRes = await davidBowieAPI.json();
    console.log(bowieRes);
}

getdavidBowie()