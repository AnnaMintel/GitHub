import { usersApi } from "./../api/usersApi";

const initialState = {
    id: number | null,
    avatar_url: string,
    name: string,
    company: string,
    location: string,
    email: string,
    followers: number | null,
    following: number | null,
    total_private_repos: string,
    owned_private_repos: string
};

// export const GET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

const setUserDataAC = () => ({
        type: GET_USER_DATA,
        data: { userId, email, login, isAuth }
    })


// thunk for login
export const user = () => async (dispatch) => {
    // let loginData = await headerAPI.login(email, password, rememberMe);
    // if (loginData.resultCode === ResultCodeEnum.Success) {
    //     dispatch(getAuthUserData());
    // } else {
    //     let message = loginData.messages.length > 0 ? loginData.messages[0]
    //         : 'Data is incorrect';
    //     dispatch(stopSubmit('login', { _error: message }));
    // }
};

