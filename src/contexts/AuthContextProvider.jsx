import React, {useReducer, useEffect} from "react";
import authService from "../services/authService";
import {AUTH_ACTIONS} from "../constants/authActions";
import AuthContext from "./AuthContext";

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
    case AUTH_ACTIONS.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
    case AUTH_ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_FAILURE:
    case AUTH_ACTIONS.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case AUTH_ACTIONS.INITIALIZE:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false,
      };

    default:
      return state;
  }
};

// Auth provider component
export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state on app start
  useEffect(() => {
    const initializeAuth = () => {
      authService.initializeAuth();
      const user = authService.getCurrentUser();
      const token = authService.getToken();

      if (user && token && authService.verifyToken(token)) {
        dispatch({
          type: AUTH_ACTIONS.INITIALIZE,
          payload: {
            user,
            token,
            isAuthenticated: true,
          },
        });
      } else {
        dispatch({
          type: AUTH_ACTIONS.INITIALIZE,
          payload: {
            user: null,
            token: null,
            isAuthenticated: false,
          },
        });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      dispatch({type: AUTH_ACTIONS.LOGIN_START});
      const response = await authService.login(email, password);
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: response,
      });
      return response;
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      dispatch({type: AUTH_ACTIONS.REGISTER_START});
      const response = await authService.register(userData);
      dispatch({
        type: AUTH_ACTIONS.REGISTER_SUCCESS,
        payload: response,
      });
      return response;
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.REGISTER_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
      dispatch({type: AUTH_ACTIONS.LOGOUT});
    } catch (error) {
      console.error("Logout error:", error);
      // Still dispatch logout to clear local state
      dispatch({type: AUTH_ACTIONS.LOGOUT});
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({type: AUTH_ACTIONS.CLEAR_ERROR});
  };

  // Request password reset
  const requestPasswordReset = async (email) => {
    return await authService.requestPasswordReset(email);
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError,
    requestPasswordReset,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export AuthProvider component only
