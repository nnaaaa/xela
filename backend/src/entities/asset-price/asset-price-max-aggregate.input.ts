import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetPriceMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    assetInfoId?: true;

    @Field(() => Boolean, { nullable: true })
    interval?: true;

    @Field(() => Boolean, { nullable: true })
    open_time?: true;

    @Field(() => Boolean, { nullable: true })
    close_time?: true;

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
