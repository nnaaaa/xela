import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";
import { Type } from "class-transformer";
import { AssetInfoCreateInput } from "./asset-info-create.input";
import { AssetInfoUpdateInput } from "./asset-info-update.input";

@ArgsType()
export class UpsertOneAssetInfoArgs {
    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;

    @Field(() => AssetInfoCreateInput, { nullable: false })
    @Type(() => AssetInfoCreateInput)
    create!: AssetInfoCreateInput;

    @Field(() => AssetInfoUpdateInput, { nullable: false })
    @Type(() => AssetInfoUpdateInput)
    update!: AssetInfoUpdateInput;
}
