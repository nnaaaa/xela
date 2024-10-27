import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoCreateManyInput } from "./asset-info-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyAssetInfoArgs {
    @Field(() => [AssetInfoCreateManyInput], { nullable: false })
    @Type(() => AssetInfoCreateManyInput)
    data!: Array<AssetInfoCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
