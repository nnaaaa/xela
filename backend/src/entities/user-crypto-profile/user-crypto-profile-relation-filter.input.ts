import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@InputType()
export class UserCryptoProfileRelationFilter {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    is?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    isNot?: UserCryptoProfileWhereInput;
}
