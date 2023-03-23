import darkTheme from "./dark_theme.js";
darkTheme(".dark-theme-btn", "dark-mode", "dark-main");

const { createApp } = Vue
createApp({
  data() {
    return {
      datos: {},
      dataEvents: [],
      infoCard: {},
      id: "",
    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(datos => {
        this.datos = datos
        this.dataEvents = this.datos.events
        const queryString = location.search
        const searchParams = new URLSearchParams(queryString)
        this.id = searchParams.get("id")
        this.infoCard = this.dataEvents.find(event => event._id == this.id)
      })
      .catch(error => console.log(error.message))

  },
  methods: {

  }
}).mount('#app')



/* let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(urlApi)
.then(response => response.json())
.then(data => {
  const id = new URLSearchParams(location.search).get("id");
  console.log(id);
  const info = data.events.find(elemento => elemento._id == id);

  recorrerCardsYRenderizarTarjetasDetails(info);
  temaOscuro()

})
.catch(error => console.log(error.message))



const recorrerCardsYRenderizarTarjetasDetails = (data) => {
  const contenedorCard = document.getElementById("cardDetails");

  const tarjeta = `
    <div class="infoCard g-col-6 align-items-center justify-content-center infoCard-details col-sm-12" style="max-width: 640px;" data-dark>
      <div class="row g-2 p-3 justify-content-center">
        <div class="col-md-4" style="width: 300px !important;">
          <img src=${data.image} class="img-fluid border border-dark" alt="${data.name}" data-dark-main style="object-fit: cover !important; height: 250px;  box-shadow: -6px -6px 5px rgba(0,0,0,0.6) !important;;">
        </div>
        <div class="col-md-8 d-flex justify-content-end" style="width: 300px !important; border: 1px solid #fff">
          <div class="infoCard-body border border-dark d-flex justify-content-center " style="height: 250px !important; flex-direction: column;" data-dark-main>
            <h5 class="infoCard-title text-center">${data.name}</h5>
            <p class="infoCard-text text-center">Date: ${data.date}</p>
            <p class="infoCard-text text-center">Description: ${data.description}</p>
            <p class="infoCard-text text-center">Category: ${data.category}</p>
            <p class="infoCard-text text-center">Place: ${data.place}</p>
            <p class="infoCard-text text-center">Capacity: ${data.capacity}</p>
            <p class="infoCard-text text-center">${data.estimate ?`Estimate: ${data.estimate}` : `Assistance: ${data.assistance}`}</p>
            <p class="infoCard-text text-center"><small class="">price ${data.price}</small></p>
            <input type="button" value="Back" onClick="history.go(-1);">
          </div>
        </div>
      </div>
    </div>
    `;
  
  contenedorCard.innerHTML += tarjeta;
};

const temaOscuro = () => {
  const temaCard = document.querySelectorAll(".infoCard");
  const temaPrice = document.querySelectorAll("small");
    for (let i = 0; i < temaCard.length; i++) {
      temaCard[i].classList.toggle("dark-mode");
      temaPrice[i].classList.toggle("dark-mode");
    }
};
   */


