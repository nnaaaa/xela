import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MWhereUniqueInput } from "../asset-price-1-m/asset-price-1-m-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class FindUniqueassetPrice1MOrThrowArgs {
    @Field(() => asset_price_1MWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1MWhereUniqueInput)
    where!: asset_price_1MWhereUniqueInput;
}
