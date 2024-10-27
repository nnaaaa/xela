import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetBalanceSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    balance?: true;

    @Field(() => Boolean, { nullable: true })
    locked?: true;
}
