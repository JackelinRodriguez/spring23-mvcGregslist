import { generateId } from "../Utils/generateId.js"


// putting in my data
export class House {
  constructor(data) {
    this.id = generateId()
    this.price = data.price
    this.address = data.address
    this.beds = data.beds
    this.baths = data.baths
    this.year = data.year
    this.sqft = data.sqft
    this.img = data.img
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
    <div class="card">
      <img
        src="${this.img}"
        alt="house-img">
      <div class="p-2 text-center">
        <h5>${this.price}</h5>
        <p>${this.beds} beds | ${this.baths} baths | ${this.sqft} sqft</p>
        <p>${this.address}</p>
      </div>
      <div>
      <button class="btn btn-outline-danger align-center m-2" onclick="app.housesController.deleteHouse('${this.id}')">Delete Post</button>
    </div>
    </div>
  </div>`
  }
  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row p-4 bg-white rounded elevation-2">
              <h3>List a House</h3>

              <div class="mb-2 col-12">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" class="form-control" required minlength='5'>
              </div>

              <div class="mb-2 col-4">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" class="form-control" required min='1000'>
              </div>

              <div class="mb-2 col-4">
                <label for="sqft">Sqft.</label>
                <input type="number" name="sqft" id="sqft" class="form-control required" placeholder="sqft">
              </div>

              <div class="mb-2 col-4">
                <label for="beds">Beds</label>
                <input type="text" name="beds" id="beds" class="form-control" required min='1' max='20'>
              </div>

              <div class="mb-2 col-4">
                <label for="baths">Baths</label>
                <input type="text" name="baths" id="baths" class="form-control required" min='1' max='20'>
              </div>

              <div class="mb-2 col-4">
                <label for="year">Year Built</label>
                <input type="number" name="year" id="year" class="form-control required" min='1900'>
              </div>


              <div class="mb-2 col-12">
                <label for="url">Image URL</label>
                <input type="url" name="img" id="img" class="form-control required">
              </div>
              </div>
              <div class="text-end mt-2">
                <button class="btn" type="button">cancel</button>
                <button class="btn btn-primary" type="submit">submit</button>
            </form>
    `
  }
}
