import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { IntFieldUpdateOperationsInput } from "../prisma/int-field-update-operations.input";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { NullableStringFieldUpdateOperationsInput } from "../prisma/nullable-string-field-update-operations.input";
import { NullableEnumOtpPurposeFieldUpdateOperationsInput } from "../prisma/nullable-enum-otp-purpose-field-update-operations.input";
import { UserCryptoProfileUncheckedUpdateManyWithoutUserNestedInput } from "../user-crypto-profile/user-crypto-profile-unchecked-update-many-without-user-nested.input";

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => UserCryptoProfileUncheckedUpdateManyWithoutUserNestedInput, {
        nullable: true,
    })
    cryptoProfiles?: UserCryptoProfileUncheckedUpdateManyWithoutUserNestedInput;
}
