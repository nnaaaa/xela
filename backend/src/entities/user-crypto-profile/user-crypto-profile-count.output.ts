import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class UserCryptoProfileCount {
    @Field(() => Int, { nullable: false })
    balances?: number;

    @Field(() => Int, { nullable: false })
    historicalBalances?: number;
}
