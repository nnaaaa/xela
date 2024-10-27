import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceCreateInput } from "./asset-price-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneAssetPriceArgs {
    @Field(() => AssetPriceCreateInput, { nullable: false })
    @Type(() => AssetPriceCreateInput)
    data!: AssetPriceCreateInput;
}
