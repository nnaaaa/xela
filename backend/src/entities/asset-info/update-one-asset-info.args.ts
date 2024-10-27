import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoUpdateInput } from "./asset-info-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { AssetInfoWhereUniqueInput } from "./asset-info-where-unique.input";

@ArgsType()
export class UpdateOneAssetInfoArgs {
    @Field(() => AssetInfoUpdateInput, { nullable: false })
    @Type(() => AssetInfoUpdateInput)
    data!: AssetInfoUpdateInput;

    @Field(() => AssetInfoWhereUniqueInput, { nullable: false })
    @Type(() => AssetInfoWhereUniqueInput)
    where!: Prisma.AtLeast<AssetInfoWhereUniqueInput, "id">;
}
