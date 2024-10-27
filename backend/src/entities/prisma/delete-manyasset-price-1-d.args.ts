import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dWhereInput } from "../asset-price-1-d/asset-price-1-d-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyassetPrice1DArgs {
    @Field(() => asset_price_1dWhereInput, { nullable: true })
    @Type(() => asset_price_1dWhereInput)
    where?: asset_price_1dWhereInput;
}
