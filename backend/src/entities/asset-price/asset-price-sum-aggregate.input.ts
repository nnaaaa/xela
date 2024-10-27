import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetPriceSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    openPrice?: true;

    @Field(() => Boolean, { nullable: true })
    closePrice?: true;

    @Field(() => Boolean, { nullable: true })
    highPrice?: true;

    @Field(() => Boolean, { nullable: true })
    lowPrice?: true;

    @Field(() => Boolean, { nullable: true })
    volume?: true;
}
