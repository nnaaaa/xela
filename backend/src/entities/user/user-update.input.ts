import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { NullableStringFieldUpdateOperationsInput } from "../prisma/nullable-string-field-update-operations.input";
import { NullableEnumOtpPurposeFieldUpdateOperationsInput } from "../prisma/nullable-enum-otp-purpose-field-update-operations.input";
import { UserCryptoProfileUpdateManyWithoutUserNestedInput } from "../user-crypto-profile/user-crypto-profile-update-many-without-user-nested.input";

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    otp?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumOtpPurposeFieldUpdateOperationsInput, {
        nullable: true,
    })
    otpPurpose?: NullableEnumOtpPurposeFieldUpdateOperationsInput;

    @Field(() => UserCryptoProfileUpdateManyWithoutUserNestedInput, {
        nullable: true,
    })
    cryptoProfiles?: UserCryptoProfileUpdateManyWithoutUserNestedInput;
}
