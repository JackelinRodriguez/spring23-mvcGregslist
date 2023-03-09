import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    // adding a listener
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  // now we can add a house/ but to prevent reload we can do event.prevent
  createHouse() {
    console.log('hopefully we see this');
    event.preventDefault()
    console.log('creating a house');
    const form = window.event.target
    console.log('form');
    let formData = getFormData(form)
    housesService.createHouse(formData)
    form.reset()
  }

  deleteHouse(id) {
    console.log('delete post');
    if (window.prompt('Are you sure you want to delete post?'))
      console.log('delete house', id);
    housesService.deleteHouse(id)
  }
}

