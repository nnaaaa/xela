import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Type } from "class-transformer";
import { AssetPriceDummyCreateInput } from "./asset-price-dummy-create.input";
import { AssetPriceDummyUpdateInput } from "./asset-price-dummy-update.input";

@ArgsType()
export class UpsertOneAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    where!: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;

    @Field(() => AssetPriceDummyCreateInput, { nullable: false })
    @Type(() => AssetPriceDummyCreateInput)
    create!: AssetPriceDummyCreateInput;

    @Field(() => AssetPriceDummyUpdateInput, { nullable: false })
    @Type(() => AssetPriceDummyUpdateInput)
    update!: AssetPriceDummyUpdateInput;
}
