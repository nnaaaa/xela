import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetPriceDummyUpdateInput } from "./asset-price-dummy-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";

@ArgsType()
export class UpdateOneAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyUpdateInput, { nullable: false })
    @Type(() => AssetPriceDummyUpdateInput)
    data!: AssetPriceDummyUpdateInput;

    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    where!: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;
}
