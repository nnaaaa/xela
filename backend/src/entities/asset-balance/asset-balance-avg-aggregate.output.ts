import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@ObjectType()
export class AssetBalanceAvgAggregate {
    @Field(() => Float, { nullable: true })
    balance?: number;

    @Field(() => Float, { nullable: true })
    locked?: number;
}
