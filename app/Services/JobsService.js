import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"




function _saveJobs() {
  saveState('cars', appState.jobs)
}






class JobsService {

}





















export const jobsService = new JobsService()