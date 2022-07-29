import RestAPI from "./rest";


class ProfileService extends RestAPI {
  constructor() {
    super();
    this.url = 'https://larnu-api-upy5mhs63a-rj.a.run.app/api/v1'
    this.headers = {
      'Email': 'jose.zunigahenriquez@gmail.com',
      'Discord-id': '310544245155168256'
    }
  }

  async getProfile() {
    const path = `${this.url}/bootcamp/profile`;
    
    return this.get(path, {}, false, this.headers);
  }

  async updateProfile(payload) {
    const path = `${this.url}/bootcamp/profile`;
    return this.patch(path, payload, {}, false, this.headers);
  }
}

export default ProfileService;