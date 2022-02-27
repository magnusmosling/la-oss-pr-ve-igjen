


const url = "https://www.fruityvice.com/api/fruit/all";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const frutiyContainer = document.querySelector(".results")

async function getFrutiyNames(){
    try {
        const response = await fetch(corsFix);

        const responseJSON = await response.json();

        console.log(responseJSON);

        const fruityData = responseJSON;

        console.log(fruityData);
        for (let i = 0; i < fruityData.length; i++) {
            console.log(fruityData[i]);
            frutiyContainer.innerHTML += `<li><span><a href="fruity-details.html?name=${fruityData[i].name}"> Name:${fruityData[i].name} ID:${fruityData[i].id} Family:${fruityData[i].family}</a></span></li>`;
            
            
        }

    } catch (error) {
        console.log("Some error happened :(", error);
        frutiyContainer.innerHTML = Message("error", error);

    }
}

getFrutiyNames();