import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class HistoricalCryptoBalanceCountAggregate {
    @Field(() => Int, { nullable: false })
    cryptoProfileId!: number;

    @Field(() => Int, { nullable: false })
    time!: number;

    @Field(() => Int, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Int, { nullable: false })
    changePercent!: number;

    @Field(() => Int, { nullable: false })
    changeBalance!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
