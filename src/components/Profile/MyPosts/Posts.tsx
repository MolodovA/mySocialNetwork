import React, { ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Post } from './Post/Post';
import style from './Posts.module.scss';

import ItemAdd from 'components/common/itemAdd/ItemAdd';
import { addPostAC, changeNewTextAC } from 'redux/reducers/profileReducer/profileAC';
import { getNewPostText, getPostsData } from 'redux/selectors';

export const Posts = (): any => {
  const postsData = useSelector(getPostsData);
  const newPostText = useSelector(getNewPostText);
  const dispatch = useDispatch();

  const post = postsData.map(({ id, message, avatar, like }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Post key={index} id={id} message={message} avatar={avatar} like={like} />
  ));

  const addPost = (): any => {
    if (newPostText.trim() !== '') {
      dispatch(addPostAC(newPostText));
    }
  };
  const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): any => {
    dispatch(changeNewTextAC(e.currentTarget.value));
  };

  return (
    <div className={style.posts}>
      <h2 className={style.posts__title}>Add new post </h2>

      <ItemAdd
        title="Add post"
        value={newPostText}
        callbackAdd={addPost}
        callbackChange={newTextChangeHandler}
      />
      {post}
    </div>
  );
};
