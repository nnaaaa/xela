import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { UserCryptoProfileUpdateManyMutationInput } from "./user-crypto-profile-update-many-mutation.input";
import { Type } from "class-transformer";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@ArgsType()
export class UpdateManyUserCryptoProfileArgs {
    @Field(() => UserCryptoProfileUpdateManyMutationInput, { nullable: false })
    @Type(() => UserCryptoProfileUpdateManyMutationInput)
    data!: UserCryptoProfileUpdateManyMutationInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;
}
