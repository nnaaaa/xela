import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyAssetInfoArgs {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
