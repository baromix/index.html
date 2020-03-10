const planetsList = document.querySelector(".planets");
const name = document.querySelector(".name");
const rotation = document.querySelector(".rotation");
const orbital = document.querySelector(".orbital");
const con = document.querySelector(".con");

const xhr  = new XMLHttpRequest();



console.log(xhr);

xhr.responseType = "json";
xhr.open("GET", "https://swapi.co/api/planets/", true);

xhr.send();

console.log(xhr.response);


xhr.addEventListener("load", function(){
    if(xhr.status === 200){
        console.log(xhr.response.results);
        const planetsData = xhr.response.results;

        planetsData.map(
            function(planet){
                const card=document.createElement('div');
                card.className = "dobrze_bartek_tak_trzymaj"
                const planetName=document.createElement('h1');
                const planetorb=document.createElement('div');
                const planetrot=document.createElement('div');
                con.appendChild(card);
                card.appendChild(planetName);
                card.appendChild(planetorb);
                card.appendChild(planetrot);
                planetName.innerText = planet.name;
                planetrot.innerText = planet.rotation_period;
                planetorb.innerText = planet.orbital_period;
                // const planetName = document.createElement("div");
                // planetName.innerText = planet.name;
                // planetName.style.color = "red";
                // planetsList.appendChild(planetName);

                // const planetRotation = document.createElement("div");
                // planetRotation.innerText = planet.rotation_period;
                // planetRotation.style.color = "red";
                // planetsList.appendChild(planetRotation);

                // const planetOrbital = document.createElement("div");
                // planetOrbital.innerText = planet.orbital_period;
                // planetOrbital.style.color = "red";
                // planetsList.appendChild(planetOrbital);
            }
        )
        
    }
})






// xhr.addEventListener("load", function(){
//     if(xhr.status === 200){
//         console.log(xhr.response.results);
//         name.innerHTML = xhr.response.results[0].name;
//         rotation.innerHTML = xhr.response.results[0].rotation_period;
//         orbital.innerHTML = xhr.response.results[0].orbial_period;
//     }
// })



