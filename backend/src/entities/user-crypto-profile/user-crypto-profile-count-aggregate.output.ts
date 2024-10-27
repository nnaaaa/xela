import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class UserCryptoProfileCountAggregate {
    @Field(() => Int, { nullable: false })
    profileId!: number;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Int, { nullable: false })
    exchanges!: number;

    @Field(() => Int, { nullable: false })
    tradingType!: number;

    @Field(() => Int, { nullable: false })
    apiKey!: number;

    @Field(() => Int, { nullable: false })
    secretKey!: number;

    @Field(() => Int, { nullable: false })
    updateTime!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
