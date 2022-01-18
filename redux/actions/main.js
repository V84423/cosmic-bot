import * as t from "../types";

export const setUser = (name) => ({
  type: t.SET_USER,
  payload: name,
});

export const setLoggedIn = (logged) => ({
  type: t.SET_LOGGEDIN,
  payload: logged,
});

export const getUser = (name) => ({
  type: t.GET_USER,
  payload: name,
});
