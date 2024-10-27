import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateWithoutAssetPricesInput } from "./asset-info-create-without-asset-prices.input";

@InputType()
export class AssetInfoCreateOrConnectWithoutAssetPricesInput {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateWithoutAssetPricesInput, { nullable: false })
    @Type(() => AssetInfoCreateWithoutAssetPricesInput)
    create!: AssetInfoCreateWithoutAssetPricesInput;
}
