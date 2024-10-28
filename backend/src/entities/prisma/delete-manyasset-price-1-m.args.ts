import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MWhereInput } from "../asset-price-1-m/asset-price-1-m-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyassetPrice1MArgs {
    @Field(() => asset_price_1MWhereInput, { nullable: true })
    @Type(() => asset_price_1MWhereInput)
    where?: asset_price_1MWhereInput;
}
