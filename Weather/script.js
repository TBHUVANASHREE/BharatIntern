let getWeather=async (city)=>{
    let api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c8ff754905503b17597ef8f00e146b29&units=metric';
    let weatherDetails=await fetch(api);
    let Values=weatherDetails.json();
    return Values;
}
async function callWeather(){
    getWeather(Weathercity.value).then((Values)=>{
        Weathercity.value=""
        cityname.textContent=Values['name'];
        temp.textContent=Values['main']['temp']+"C";
        main.textContent=Values['weather'][0]['main'];
        XPathResult.classList.toggle("active");
    })
}
Btn.addEventListener("click",()=>{
    callWeather();
})
