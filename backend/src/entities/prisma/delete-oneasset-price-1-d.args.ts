import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dWhereUniqueInput } from "../asset-price-1-d/asset-price-1-d-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteOneassetPrice1DArgs {
    @Field(() => asset_price_1dWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1dWhereUniqueInput)
    where!: asset_price_1dWhereUniqueInput;
}
