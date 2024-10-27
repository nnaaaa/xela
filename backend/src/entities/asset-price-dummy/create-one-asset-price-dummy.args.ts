import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyCreateInput } from "./asset-price-dummy-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyCreateInput, { nullable: false })
    @Type(() => AssetPriceDummyCreateInput)
    data!: AssetPriceDummyCreateInput;
}
