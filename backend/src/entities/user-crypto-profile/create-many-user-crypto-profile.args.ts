import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileCreateManyInput } from "./user-crypto-profile-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyUserCryptoProfileArgs {
    @Field(() => [UserCryptoProfileCreateManyInput], { nullable: false })
    @Type(() => UserCryptoProfileCreateManyInput)
    data!: Array<UserCryptoProfileCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
