import React, { createContext, useReducer } from 'react';

export const PostList = createContext({
  postLists: [],
  addPost: () => { },
  addInitailPost: () => { },
  deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "Delete_Post":
      return currPostList.filter((post) => post.id !== action.payload.postID);
    case "AddIntialPost":
      // payload is expected to be an array of posts (set state to that array)
      return Array.isArray(action.payload) ? action.payload : currPostList;
    case "Add_Post":
      return [action.payload, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {

  const [postLists, DispatchPostList] = useReducer(postListReducer, []);

  const addPost = (posts) => {
    DispatchPostList({
      type: "Add_Post",
      payload: 
        posts,
    })
  };

  const addInitailPost = (posts) => {
    // posts should be an array (e.g. data.posts from the API)
    DispatchPostList({
      type: "AddIntialPost",
      payload: posts
    });
  };

  const deletePost = (postID) => {
    DispatchPostList({ type: "Delete_Post", payload: { postID } })
  };

  return (
    <PostList.Provider value={{ postLists, addPost, addInitailPost, deletePost }}>
      {children}
    </PostList.Provider>
  )
}



export default PostListProvider;