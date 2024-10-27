import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Interval } from "../prisma/interval.enum";
import { Float } from "@nestjs/graphql";

@InputType()
export class AssetPriceDummyCreateManyAssetInfoInput {
    @Field(() => Interval, { nullable: false })
    interval!: keyof typeof Interval;

    @Field(() => Date, { nullable: false })
    open_time!: Date | string;

    @Field(() => Date, { nullable: false })
    close_time!: Date | string;

    @Field(() => Float, { nullable: false })
    openPrice!: number;

    @Field(() => Float, { nullable: false })
    closePrice!: number;

    @Field(() => Float, { nullable: false })
    highPrice!: number;

    @Field(() => Float, { nullable: false })
    lowPrice!: number;

    @Field(() => Float, { nullable: false })
    volume!: number;
}
