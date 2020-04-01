
 function onLoadListener() {


     const listOfImages = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/forest.jpg"
        ];

     const images = [];
     for (let i = 0; i < listOfImages.length; i++) {
         images[i] = new Image();
         images[i].src = listOfImages[i];
     }


 };
 window.addEventListener("load", onLoadListener);


 const buttons = document.querySelectorAll("button");



 const energyResources = {
     trees: {
         heading: "Forestry",
         bodyText: "Forestry is the science and practice of caring for forests. Although trees are the predominant plant component of forests, foresters manage all of the resources found in forests. You will, therefore, find foresters concerned with trees, animals (both game and non-game), soils, water, insects, diseases (both tree and animal) and human beings.",
         imgURL: "./img/forest.jpg",
         imgALT: "Forest",
         tagline: "\"Trees for a green tomorrow.\""
     },

     wind: {
         heading: "Wind Power",
         bodyText: "wind to produce energy has fewer effects on the environment than many other energy sources. Wind turbines do not release emissions that can pollute the air or water (with rare exceptions), and they do not require water for cooling. Wind turbines may also reduce the amount of electricity generation from fossil fuels, which results in lower total air pollution and carbon dioxide emissions.",
         imgURL: "./img/wind.jpg",
         imgALT: "Wind Turbine",
         tagline: "\"Ever blowing, ever changing.\""
     },
     solar: {
         heading: "Solar Power",
         bodyText: "Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination. Concentrated solar power systems use lenses or mirrors and tracking systems to focus a large area of sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic effect",
         imgURL: "./img/solar.jpg",
         imgALT: "Solar Panel",
         tagline: "\"Travelling over 8 minutes through space to warm our planet.\""
     }
 }

 const cont = document.querySelector(".container");
 const tagline = document.querySelector(".tagline");


 function loadClickListener(e) {


     let btnLabel = e.target.textContent;

     if (btnLabel === "Solar") {
         cont.innerHTML = `<img src="${energyResources.solar.imgURL}" alt="${energyResources.solar.imgALT}" class="main-image">
                        <h2>${energyResources.solar.heading}</h2>
                        <p class="bodyText">${energyResources.solar.bodyText}</p>`;
         tagline.innerHTML = `<h2 class="tagline"> ${energyResources.solar.tagline}</h2>`;

     } else if (btnLabel === "Wind") {
         cont.innerHTML = `<img src="${energyResources.wind.imgURL}" alt="${energyResources.wind.imgALT}" class="main-image">
                        <h2>${energyResources.wind.heading}</h2>
                        <p class="bodyText">${energyResources.wind.bodyText}</p>`;
          tagline.innerHTML = `<h2 class="tagline"> ${energyResources.wind.tagline}</h2>`;

     } else {
         cont.innerHTML = `<img src="${energyResources.trees.imgURL}" alt="${energyResources.trees.imgALT}" class="main-image">
                        <h2>${energyResources.trees.heading}</h2>
                        <p class="bodyText">${energyResources.trees.bodyText}</p>`;
          tagline.innerHTML = `<h2 class="tagline"> ${energyResources.trees.tagline}</h2>`;

     }
  
     for (let i of buttons) {
         let target = e.target;

         if (i.hasAttribute("id", "active-button")) {
             i.removeAttribute("id", "active-button");
             target.setAttribute("id", "active-button");
         }
     }
 }
 for (let b of buttons) {

     b.addEventListener("click", loadClickListener);

 }


