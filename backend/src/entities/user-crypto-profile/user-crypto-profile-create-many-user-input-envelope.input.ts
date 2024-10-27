import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateManyUserInput } from "./user-crypto-profile-create-many-user.input";
import { Type } from "class-transformer";

@InputType()
export class UserCryptoProfileCreateManyUserInputEnvelope {
    @Field(() => [UserCryptoProfileCreateManyUserInput], { nullable: false })
    @Type(() => UserCryptoProfileCreateManyUserInput)
    data!: Array<UserCryptoProfileCreateManyUserInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
