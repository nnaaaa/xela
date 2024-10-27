import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";

@ObjectType()
export class UserCryptoProfileMinAggregate {
    @Field(() => String, { nullable: true })
    profileId?: string;

    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field(() => String, { nullable: true })
    exchanges?: string;

    @Field(() => TradingType, { nullable: true })
    tradingType?: keyof typeof TradingType;

    @Field(() => String, { nullable: true })
    apiKey?: string;

    @Field(() => String, { nullable: true })
    secretKey?: string;

    @Field(() => Date, { nullable: true })
    updateTime?: Date | string;
}
