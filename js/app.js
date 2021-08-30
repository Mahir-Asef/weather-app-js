
   const inputCity= document.getElementById('input-city');
   const mainDisplay=document.getElementById('main-display');
   document.getElementById('search-button').addEventListener('click',function(){
// console.log('clicked');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=f03386cdc30cfab1bf03df7c23a9325b
    `)
    .then(res=>res.json())
    .then(data=>displayTemp(data));
})
const displayTemp=data=>{
    console.log(data);
    const errorMessage=document.getElementById('error-message');
    if(data.message=="city not found"){
        errorMessage.style.display="block";
        mainDisplay.style.display="none";
        inputCity.value='';
    }
    else{
    errorMessage.style.display="none";
    mainDisplay.style.display="block";
    const cityName=document.getElementById('city-name');
    cityName.innerText=data.name;
    const presentTemp=document.getElementById('present-temp');
    presentTemp.innerText=Math.round((data.main.temp)-273.15);
    const maxTemp=document.getElementById('max-temp');
    maxTemp.innerText=Math.round((data.main.temp_max)-273.15);
    const minTemp=document.getElementById('min-temp');
    minTemp.innerText=Math.round((data.main.temp_min)-273.15);
    const cloudStatus=document.getElementById('cloud-status');
    cloudStatus.innerText=data.weather[0].main;
    //image
    let imageStatus=document.getElementById('image-status');
    imageStatus.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    inputCity.value='';
    }
    
}

/* feels_like: 307.23
humidity: 66
pressure: 1008
temp: 303.14
temp_max: 303.14
temp_min: 303.14
[[Prototype]]: Object

*/