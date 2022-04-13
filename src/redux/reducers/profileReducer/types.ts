export type PostType = {
  id: string;
  message: string;
  avatar: string;
  like: number;
};
export type ProfileInfoType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ProfileInitialStateType = {
  postsData: PostType[];
  newPostText: string;
  status: string;
  profileInfo: ProfileInfoType;
};
