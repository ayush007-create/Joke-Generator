let joke = document.getElementById("joke")
let btn = document.getElementById("btn")
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const generatejoke = ()=>{
    joke.classList.remove("fade");
    fetch(url).then((response)=>{
        return response.json();
    }).then((result)=>{
        let laugh = result.joke;
        console.log(laugh)
        joke.innerHTML=laugh;
        joke.classList.add("fade");
    })
}