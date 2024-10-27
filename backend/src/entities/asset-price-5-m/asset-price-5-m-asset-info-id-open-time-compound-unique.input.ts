import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class asset_price_5mAssetInfoIdOpen_timeCompoundUniqueInput {
    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Date, { nullable: false })
    open_time!: Date | string;
}
