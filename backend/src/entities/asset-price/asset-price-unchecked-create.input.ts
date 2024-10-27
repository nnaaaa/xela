import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@InputType()
export class AssetPriceUncheckedCreateInput {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => String, { nullable: false })
    interval!: string;

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
