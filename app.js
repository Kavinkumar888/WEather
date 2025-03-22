const button=document.getElementById("button");
const weather_content=document.getElementById("weather_content");
const weather=document.getElementById("weather");
 
let i=0;

    button.onclick=()=>
        {
            axios.get('https://freetestapi.com/api/v1/weathers').then(function(response)
            {
                console.log(response);
              button.textContent="Next";
              weather_content.textContent=response.data[i].city;
              
                 weather.textContent=response.data[i].weather_description;
                 i++;
            })
            .catch(function(error){
                console.log(error);
            });
        };
