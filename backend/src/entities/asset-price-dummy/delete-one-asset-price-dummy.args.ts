import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetPriceDummyWhereUniqueInput } from "./asset-price-dummy-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteOneAssetPriceDummyArgs {
    @Field(() => AssetPriceDummyWhereUniqueInput, { nullable: false })
    @Type(() => AssetPriceDummyWhereUniqueInput)
    where!: Prisma.AtLeast<
        AssetPriceDummyWhereUniqueInput,
        "assetInfoId_open_time"
    >;
}
