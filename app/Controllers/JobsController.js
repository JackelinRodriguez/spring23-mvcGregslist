import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { setHTML } from "../Utils/Writer.js";




function _drawJobs() {
  const jobs = appState.jobs
  let template = ''
  jobs.forEach(job => template += job.JobCard)
  setHTML('listings', template)
}

function _drawJobForm() {
  setHTML('form', Job.JobForm())
}



export class JobsController {
  constructor() {
    console.log('jobs available', appState.jobs);
    _drawJobs()

  }


  showJobs() {
    _drawJobs()
    _drawJobForm()
  }
}