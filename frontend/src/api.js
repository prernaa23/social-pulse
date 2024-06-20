import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Function to fetch a user's friends
export const getUserFriends = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/friends`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user friends:", error);
    throw error;
  }
};


// Function to toggle a friend (add/remove)
export const addRemoveFriend = async (userId, friendId) => {
  try {
    const response = await axios.post(`${API_URL}/users/${userId}/${friendId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding/removing friend:', error);
    throw error;
  }
};

// Function to fetch a user's profile
export const getUser = async (userId) => {
  // console.log(userId);
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Function to get posts of a user
export const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    throw error;
  }
};

// Function to fetch a user's profile
export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts/feed`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Function to delete a post
export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

// Function to update a post when a comment is added
export const addCommentToPost = async (postId, commentId) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${postId}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding comment to post:', error);
    throw error;
  }
};

// Function to delete a comment from a post
export const deleteCommentFromPost = async (postId, commentId) => {
  try {
    const response = await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment from post:', error);
    throw error;
  }
};