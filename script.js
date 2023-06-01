var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.classList.add("row","m-3")
container.append(row);

var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json())
.then((data1)=>foo(data1))
.catch((error) =>console.log(error));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML += 
        `<div class ="col-md-4">
        <div class="card border-secondary  mb-3 mt-3">
        <h4 class="card-text text-center text-white bg-dark p-2"> ${data1[i].name} </h4>
        <img src="${data1[i].flag}" class="card-img" alt="Country Flag">
        <div class="card-body text-primary text-center text-dark">
          <p class="card-text"><b>Capital :</b> ${data1[i].capital} </p>
          <p class="card-text"><b>Population :</b> ${data1[i].population} </p>
          <p class="card-text"><b>Country Code :</b> ${data1[i].alpha3Code} </p>
          <button type="button" class="btn btn-sm btn-outline-primary" onclick="weatherdata(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
        </div>
      </div>
        </div>`;
        document.body.append(container);
    }
   
}

function weatherdata(lat,lon)
{
  let res=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7c3fc1be1e0089a7262e983c6f7198b`)  
  .then((data)=>data.json()).then((data2)=>
  {alert(`
  Latitude: ${lat} 
  Longitude: ${lon} 
  Temp: ${data2.main.temp}`);  
});
}
