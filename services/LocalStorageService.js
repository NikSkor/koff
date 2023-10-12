export class LocalStorageService {

  constructor() {
    this.accessKey = this.get('accessKey');
    console.log('accessKey: ', this.accessKey);
  }

  get(key) {
    return localStorage.getItem(key);
  }
  set(key, param) {
    localStorage.setItem(key, param);
  }
  delete() {
    localStorage.removeItem(key);
  }
}
