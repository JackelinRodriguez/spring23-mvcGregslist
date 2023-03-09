import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";




function _drawJobForm() {
  const jobs = appState.jobs
  let template = ''
  jobs.forEach(job => template += job.JobCard)
  setHTML('listings', template)
}




export class jobsController {
  constructor() {
    console.log('jobs available', appState.jobs);
  }
}