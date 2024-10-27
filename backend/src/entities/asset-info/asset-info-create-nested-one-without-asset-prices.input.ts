import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoCreateWithoutAssetPricesInput } from "./asset-info-create-without-asset-prices.input";
import { Type } from "class-transformer";
import { AssetInfoCreateOrConnectWithoutAssetPricesInput } from "./asset-info-create-or-connect-without-asset-prices.input";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@InputType()
export class AssetInfoCreateNestedOneWithoutAssetPricesInput {
    @Field(() => AssetInfoCreateWithoutAssetPricesInput, { nullable: true })
    @Type(() => AssetInfoCreateWithoutAssetPricesInput)
    create?: AssetInfoCreateWithoutAssetPricesInput;

    @Field(() => AssetInfoCreateOrConnectWithoutAssetPricesInput, {
        nullable: true,
    })
    @Type(() => AssetInfoCreateOrConnectWithoutAssetPricesInput)
    connectOrCreate?: AssetInfoCreateOrConnectWithoutAssetPricesInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: true })
    @Type(() => AssetInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
