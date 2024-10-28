import { useAppSelector } from "@/state/hooks";
import { useEffect } from "react";

export const useSubmitError = (setFormError) => {
    const { error } = useAppSelector((state) => state.auth);

    useEffect(() => {
        switch (error) {
            case "Account not found":
                setFormError("email", { message: error });
                break;
            case "Password is incorrect":
                setFormError("password", { message: error });
                break;
        }
    }, [error, setFormError]);
};
