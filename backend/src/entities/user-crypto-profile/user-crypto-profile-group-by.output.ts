import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";
import { UserCryptoProfileCountAggregate } from "./user-crypto-profile-count-aggregate.output";
import { UserCryptoProfileAvgAggregate } from "./user-crypto-profile-avg-aggregate.output";
import { UserCryptoProfileSumAggregate } from "./user-crypto-profile-sum-aggregate.output";
import { UserCryptoProfileMinAggregate } from "./user-crypto-profile-min-aggregate.output";
import { UserCryptoProfileMaxAggregate } from "./user-crypto-profile-max-aggregate.output";

@ObjectType()
export class UserCryptoProfileGroupBy {
    @Field(() => String, { nullable: false })
    profileId!: string;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => String, { nullable: false })
    exchanges!: string;

    @Field(() => TradingType, { nullable: false })
    tradingType!: keyof typeof TradingType;

    @Field(() => String, { nullable: false })
    apiKey!: string;

    @Field(() => String, { nullable: false })
    secretKey!: string;

    @Field(() => Date, { nullable: true })
    updateTime?: Date | string;

    @Field(() => UserCryptoProfileCountAggregate, { nullable: true })
    _count?: UserCryptoProfileCountAggregate;

    @Field(() => UserCryptoProfileAvgAggregate, { nullable: true })
    _avg?: UserCryptoProfileAvgAggregate;

    @Field(() => UserCryptoProfileSumAggregate, { nullable: true })
    _sum?: UserCryptoProfileSumAggregate;

    @Field(() => UserCryptoProfileMinAggregate, { nullable: true })
    _min?: UserCryptoProfileMinAggregate;

    @Field(() => UserCryptoProfileMaxAggregate, { nullable: true })
    _max?: UserCryptoProfileMaxAggregate;
}
