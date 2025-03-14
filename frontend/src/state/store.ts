import {
    Action,
    combineSlices,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit";
import authReducer from "@/state/slices/auth.slice";
import cryptoReducer from "@/state/slices/crypto.slice";

const rootReducer = combineSlices({
    auth: authReducer,
    crypto: cryptoReducer,
});

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddlewares) =>
            getDefaultMiddlewares().concat([]),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
