import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hWhereInput } from "../asset-price-1-h/asset-price-1-h-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyassetPrice1HArgs {
    @Field(() => asset_price_1hWhereInput, { nullable: true })
    @Type(() => asset_price_1hWhereInput)
    where?: asset_price_1hWhereInput;
}
