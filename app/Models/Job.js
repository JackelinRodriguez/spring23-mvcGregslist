import { generateId } from "../Utils/generateId.js"



export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.location = data.location
    this.salary = data.salary
    this.type = data.type
    this.qual = data.qual
    this.role = data.role
    this.contact = data.contact
  }

  get JobCard() {
    return `
  
  <div class="col-6 col-md-4">
  <div class="card">
    <div class="p-2">
      <h5>${this.title}</h5>
      <p>${this.location}</p>
      <p class="border-bottom border-dark">${this.type} | ${this.salary}</p>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-3 p-2">
          <h6 class="border-bottom border-dark bg-primary">Qualifications/Educational Requirements</h6>
          <p>${this.qual}</p>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="border-bottom border-dark bg-primary">Roles and Responsibilities</h6>
          <p>${this.role}</p>
        </div>
      </div>

      <div class="col-6 col-md-4">
        <h6>Apply Now!</h6>
        <p>${this.contact}</p>
      </div>
    </div>
    <div class="text-end">
      <button class="btn btn-outline-warning" onclick=" ">Delete Post</button>
    </div>
  </div>
</div>
  `
  }



  static JobForm() {
    return `
  <form onsubmit="" class="row p-4 bg-white rounded elevation-2">
  <h3>List a Job Opening</h3>
  <div class="mb-2 col-12">
    <label for="job-title">Job Title</label>
    <input type="text" name="job-title" id="job-title" class="form-control" required>
  </div>

  <div class="mb-2 col-4">
    <label for="location">Location</label>
    <input type="text" name="location" id="location" class="form-control" required min='3'>
  </div>

  <div class="mb-2 col-4">
    <label for="salary">Salary</label>
    <input type="number" name="salary" id="salary" class="form-control" required min='8'>
  </div>

  <div class="mb-2 col-4">
    <label for="job-type">Job Type</label>
    <input type="text" name="job-type" id="job-type" class="form-control" required min='3'
      placeholder="Full-or-Part-Time">
  </div>

  <div class="mb-2 col-12">
    <label for="requirements">Qualifications and Education Requirements</label>
    <input type="text" name="requirements" id="requirements" class="form-control" required min='10'>
  </div>

  <div class="mb-2 col-12">
    <label for="roles">Roles and Responsibilities</label>
    <input type="text" name="roles" id="roles" class="form-control" required min='10'>
  </div>

  <div class="mb-2 col-12">
    <label for="contact">Contact Information</label>
    <input type="email" name="contact" id="contact" class="form-control" required min='5'
      placeholder="example@email.com">
  </div>
  <div class="text-end mt-2">
  <button class="btn" type="button">cancel</button>
  <button class="btn btn-primary" type="submit" onclick="app.jobsController.createJob()">submit</button>
</form>
  `
  }
}