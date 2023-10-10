import axios from "axios";
import { API_URL } from "../const";

export class ApiService {
  #apiUrl = API_URL;

  constructor() {
    this.accessKey = localStorage.getItem('accessKey');
    console.log('accessKey: ', accessKey);
  }

  async getData(url, params = {}) {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.accessKey}`,
        },
        params
      })
      
      return response.data
    } catch (error) {
      if(error.response && error.response.status === 401) {
        this.accessKey = null;
        localStorage.removeItem('accessKey');

        return this.getData(url, params);
      } else {
        console.log(error);
      }
    }
  }
}