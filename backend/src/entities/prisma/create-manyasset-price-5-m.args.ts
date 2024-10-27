import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { asset_price_5mCreateManyInput } from "../asset-price-5-m/asset-price-5-m-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyassetPrice5MArgs {
    @Field(() => [asset_price_5mCreateManyInput], { nullable: false })
    @Type(() => asset_price_5mCreateManyInput)
    data!: Array<asset_price_5mCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
