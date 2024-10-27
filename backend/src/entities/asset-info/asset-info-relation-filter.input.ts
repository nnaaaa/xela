import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@InputType()
export class AssetInfoRelationFilter {
    @Field(() => AssetInfoWhereInput, { nullable: true })
    is?: AssetInfoWhereInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    isNot?: AssetInfoWhereInput;
}
