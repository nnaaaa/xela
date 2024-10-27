import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceWhereInput } from "./asset-price-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyAssetPriceArgs {
    @Field(() => AssetPriceWhereInput, { nullable: true })
    @Type(() => AssetPriceWhereInput)
    where?: AssetPriceWhereInput;
}
