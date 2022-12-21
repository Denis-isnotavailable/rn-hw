import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

import { auth } from '../../firebase/config';

import { authActions } from './authReducer';

export const authSignUpUser = ({ login, email, password }) => async (dispatch, getState) => {
    try {       
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;

        await updateProfile(user, { displayName: login });

        const updUser = await auth.currentUser;

        console.log("auth.currentUser", auth.currentUser);

        dispatch(authActions.updateUserProfile({ userId: updUser.uid, nickname: updUser.displayName, email: updUser.email }));
       
    } catch (e) {
        console.error("error", e)
        console.log("error-message", e.message);
    }
};

export const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
    try {       
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("user", user);
    } catch (e) {
        console.error("error", e)
        console.log("error-message", e.message);
    }
};

export const authSignOutUser = () => async (dispatch, getState) => {
    await signOut(auth);

    dispatch(authActions.authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, displayName, email } = user;
            
            dispatch(authActions.authStateChange({ stateChange: true }));
            dispatch(authActions.updateUserProfile({ userId: uid, nickname: displayName, email: email }));            
        }
  });
};