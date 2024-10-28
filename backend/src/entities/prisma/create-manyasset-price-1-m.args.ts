import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_1MCreateManyInput } from "../asset-price-1-m/asset-price-1-m-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyassetPrice1MArgs {
    @Field(() => [asset_price_1MCreateManyInput], { nullable: false })
    @Type(() => asset_price_1MCreateManyInput)
    data!: Array<asset_price_1MCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
