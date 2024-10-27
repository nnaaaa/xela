import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoCreateInput } from "./asset-info-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneAssetInfoArgs {
    @Field(() => AssetInfoCreateInput, { nullable: false })
    @Type(() => AssetInfoCreateInput)
    data!: AssetInfoCreateInput;
}
