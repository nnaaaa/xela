import { useAppSelector } from "@/state/hooks";
import { useEffect } from "react";
import { UseFormSetError } from "react-hook-form";
import { LoginReqDto } from "@/gql/graphql";

export const useSubmitError = (setFormError: UseFormSetError<LoginReqDto>) => {
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
