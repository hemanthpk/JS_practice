const ID = document.getElementById("imageDiv")
const d = new Date()
const url = 'https://api.nasa.gov/planetary/apod?api_key=gTyrJTJiIhwpaGpjXO3K7XFg504KokJ7PAVlIowP&count=5'
let obj;

fetch(url)
    .then((response)=>response.json())
    .then((data)=> obj=data)


function imageFunc(){
    i = Math.floor(Math.random()*(obj.length-1));
    const img = obj[i].url
    const desc = obj[i].explanation
    document.getElementById("imageDiv").innerHTML=`<img src="${img}"><figcaption>${desc}</figcaption>` 
}