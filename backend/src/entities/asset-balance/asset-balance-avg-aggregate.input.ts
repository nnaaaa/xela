import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetBalanceAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    balance?: true;

    @Field(() => Boolean, { nullable: true })
    locked?: true;
}
