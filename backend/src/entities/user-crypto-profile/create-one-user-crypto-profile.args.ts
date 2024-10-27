import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileCreateInput } from "./user-crypto-profile-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneUserCryptoProfileArgs {
    @Field(() => UserCryptoProfileCreateInput, { nullable: false })
    @Type(() => UserCryptoProfileCreateInput)
    data!: UserCryptoProfileCreateInput;
}
