import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@ObjectType()
export class HistoricalCryptoBalanceMinAggregate {
    @Field(() => String, { nullable: true })
    cryptoProfileId?: string;

    @Field(() => Date, { nullable: true })
    time?: Date | string;

    @Field(() => Float, { nullable: true })
    estimatedBalance?: number;

    @Field(() => Float, { nullable: true })
    changePercent?: number;

    @Field(() => Float, { nullable: true })
    changeBalance?: number;
}
