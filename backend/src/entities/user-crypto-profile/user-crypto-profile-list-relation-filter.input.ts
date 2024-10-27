import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@InputType()
export class UserCryptoProfileListRelationFilter {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    every?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    some?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    none?: UserCryptoProfileWhereInput;
}
