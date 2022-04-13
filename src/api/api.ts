import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '650c9b23-d88b-4513-ae8c-cafe9057afc4' },
});
const getCurrentPage = 1;
const getPageSize = 11;
export const usersAPI = {
  getUsers(currentPage = getCurrentPage, pageSize = getPageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  follow(userId: string) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: string) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
  updatePhoto(photo: string) {
    const formData = new FormData();
    formData.append('image', photo);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  login(data: any) {
    return instance.post(`auth/login`, data);
  },
};

export const newsAPI = {
  getNews() {
    return axios.get('https://baconipsum.com/api/?type=all-meat&sentences=8');
  },
};

/*

export type MeResponseType = {
    data: {
        id:string
        email:string
        login:string
    },
    messages: string[],
    resultCode: number
}
export type LoginResponseType = {
    data: {
        userId:string
    },
    messages: string[],
    resultCode: number
}
export type ResponseType = {
    items: userType[]
    totalCount: number
    error: string | null
}

export type FollowUnFollowResponseType = {
    data: {},
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
*/
