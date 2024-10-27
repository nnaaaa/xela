import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyWhereInput } from "./asset-price-dummy-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyWhereInput, { nullable: true })
    @Type(() => AssetPriceDummyWhereInput)
    where?: AssetPriceDummyWhereInput;
}
