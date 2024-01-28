// AuthContext.js
import { createContext, useReducer, useContext } from 'react';
import actionTypes from './actionTypes';

// Initial state for authentication
const initialState = {
    adminToken: localStorage.getItem('adminToken') ?? null,
    admin: localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null,
};

// Reducer function
const authReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN:
            const { adminToken, admin } = action.payload
            localStorage.setItem('adminToken', adminToken)
            localStorage.setItem('admin', JSON.stringify(admin))
            return {
                ...state,
                adminToken,
                admin
            };
        case actionTypes.ADMIN_LOGOUT:
            localStorage.removeItem('adminToken')
            localStorage.removeItem('admin')
            return {
                ...state,
                adminToken: null,
                admin: null,
            };
        default:
            return state;
    }
};

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (payload) => {
        // Dispatch the LOGIN action
        dispatch({ type: actionTypes.ADMIN_LOGIN, payload });
    }

    const logout = () => {
        // Dispatch the LOGOUT action
        dispatch({ type: actionTypes.ADMIN_LOGOUT });
    }

    return (
        <AuthContext.Provider value={{ state, dispatch, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};