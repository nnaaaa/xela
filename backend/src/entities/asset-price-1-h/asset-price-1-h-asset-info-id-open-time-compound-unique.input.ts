import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class asset_price_1hAssetInfoIdOpen_timeCompoundUniqueInput {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Date, { nullable: false })
    open_time!: Date | string;
}
