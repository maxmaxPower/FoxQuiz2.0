import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3915aa1d-b8f1-4f36-b638-bfbce74a0c3e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  setUnfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  getCaptcha(){
    return instance
    .get('security/get-captcha-url').then((response) => response.data);
  }
};


export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getMyProf(num) {
    return instance.get(`profile/${num}`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout(email, password, rememberMe = false) {
    return instance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data); // then убираєм лишні данні
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image",photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: (
        `Content-type': 'multipart/formData`
      )
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
};
