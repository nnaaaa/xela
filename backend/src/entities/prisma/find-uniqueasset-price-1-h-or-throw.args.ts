import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hWhereUniqueInput } from "../asset-price-1-h/asset-price-1-h-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class FindUniqueassetPrice1HOrThrowArgs {
    @Field(() => asset_price_1hWhereUniqueInput, { nullable: false })
    @Type(() => asset_price_1hWhereUniqueInput)
    where!: asset_price_1hWhereUniqueInput;
}
