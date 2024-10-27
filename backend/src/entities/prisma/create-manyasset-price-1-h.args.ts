import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1hCreateManyInput } from "../asset-price-1-h/asset-price-1-h-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyassetPrice1HArgs {
    @Field(() => [asset_price_1hCreateManyInput], { nullable: false })
    @Type(() => asset_price_1hCreateManyInput)
    data!: Array<asset_price_1hCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
