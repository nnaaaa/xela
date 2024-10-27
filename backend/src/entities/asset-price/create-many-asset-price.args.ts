import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceCreateManyInput } from "./asset-price-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyAssetPriceArgs {
    @Field(() => [AssetPriceCreateManyInput], { nullable: false })
    @Type(() => AssetPriceCreateManyInput)
    data!: Array<AssetPriceCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
