import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "@/state/store";
import {
    GetMeQuery,
    LoginMutation,
    LoginReqDto,
    OtpPurpose,
    User,
    VerifyAccountMutation,
    VerifyDto,
} from "@/gql/graphql";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { AuthParams } from "@/lib/constants/params";
import client from "@/api";
import { GET_ME, LOGIN_MUTATION, VERIFY_ACCOUNT_MUTATION } from "@/api/auth";
import { GraphQLError } from "graphql/error";

interface IinitState {
    loading: boolean;
    error: string;
    state: {
        isVerified: boolean;
        status: "guess" | "logged";
        user?: User;
    };
}

const initialState: IinitState = {
    loading: false,
    error: "",
    state: {
        status: "guess",
        isVerified: false,
    },
};

// const loginAsync = createAsyncThunk('auth/login', async (credential: SignInType) => {
//     const res = await authAPI.postLogin(credential)
//     if (res.data.accessToken) {
//         Cookie.set('token', res.data.accessToken)
//         await userAPI.updateProfile({ isOnline: true })
//     } else {
//         throw new Error()
//     }
// })
//
// const registerAsync = createAsyncThunk(
//     'auth/register',
//     async (userInfo: Partial<IUser>) => {
//         try {
//             const res = await authAPI.postRegister(userInfo)
//             console.log(res)
//         } catch (e) {
//             console.error(e)
//         }
//     }
// )

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            const { otpPurpose, otp } = action.payload;
            const isVerified = otpPurpose === OtpPurpose.VerifyAccount && !otp;
            state.loading = false;
            state.state = {
                ...state.state,
                status: "logged",
                user: action.payload,
                isVerified,
            };
        },
        logout: (state) => {
            state.loading = false;
            deleteCookie(AuthParams.ACCESS_TOKEN);
            state.state = {
                ...state.state,
                status: "guess",
                user: undefined,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyAccount.pending, (state) => {
                state.error = "";
                state.loading = true;
            })
            .addCase(verifyAccount.rejected, (state, payload) => {
                state.loading = false;
                state.error = payload.error.message;
            })
            .addCase(verifyAccount.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(loginWithPassword.pending, (state) => {
                state.error = "";
                state.loading = true;
            })
            .addCase(loginWithPassword.rejected, (state, payload) => {
                state.loading = false;
                state.error = payload.error.message;
            })
            .addCase(loginWithPassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(loginWithToken.pending, (state) => {
                state.error = "";
                state.loading = true;
            })
            .addCase(loginWithToken.rejected, (state, payload) => {
                state.loading = false;
                state.error = payload.error.message;
            })
            .addCase(loginWithToken.fulfilled, (state) => {
                state.loading = false;
            });
    },
});

const verifyAccount = createAsyncThunk(
    "auth/verifyAccount",
    async (verifyDto: VerifyDto) => {
        const { data } = await client.mutate<VerifyAccountMutation>({
            mutation: VERIFY_ACCOUNT_MUTATION,
            variables: { data: verifyDto },
        });
        if (!data?.verifyAccount) {
            throw new Error();
        }
        const { accessToken } = data.verifyAccount;
        setCookie(AuthParams.ACCESS_TOKEN, accessToken);
    },
);

const loginWithPassword = createAsyncThunk(
    "auth/loginWithPassword",
    async (loginDto: LoginReqDto, { dispatch }) => {
        const { data } = await client.mutate<LoginMutation>({
            mutation: LOGIN_MUTATION,
            variables: { data: loginDto },
        });
        if (!data?.login) throw new Error();
        const { accessToken } = data.login;
        setCookie(AuthParams.ACCESS_TOKEN, accessToken);
    },
);
const loginWithToken = createAsyncThunk(
    "auth/loginWithToken",
    async (loginDto: LoginReqDto, { dispatch }) => {
        const accessToken = getCookie(AuthParams.ACCESS_TOKEN);
        if (!accessToken) {
            return;
        }
        const {
            data: { getMe },
        } = await client.query<GetMeQuery>({ query: GET_ME });
        dispatch(authActions.login(getMe));
    });

// const logoutAsync = (): AppThunk => async (dispatch, getState) => {
//     try {
//         await userAPI.updateProfile({ isOnline: false })
//         Cookie.remove('token')
//         dispatch(authActions.logout())
//         dispatch(postActions.clear())
//         dispatch(chatActions.clear())
//         dispatch(userActions.clearUser())
//     } catch {
//         console.error('Fail to logout')
//     }
// }

const { actions, reducer } = authSlice;

export const authActions = {
    ...actions,
    loginWithToken,
    loginWithPassword,
    verifyAccount,
};

export default reducer;
