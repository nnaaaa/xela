import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1dCreateManyInput } from "../asset-price-1-d/asset-price-1-d-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyassetPrice1DArgs {
    @Field(() => [asset_price_1dCreateManyInput], { nullable: false })
    @Type(() => asset_price_1dCreateManyInput)
    data!: Array<asset_price_1dCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
