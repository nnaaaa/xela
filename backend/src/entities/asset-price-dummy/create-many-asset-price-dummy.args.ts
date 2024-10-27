import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyCreateManyInput } from "./asset-price-dummy-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyAssetPriceDummyArgs {
    @Field(() => [AssetPriceDummyCreateManyInput], { nullable: false })
    @Type(() => AssetPriceDummyCreateManyInput)
    data!: Array<AssetPriceDummyCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
