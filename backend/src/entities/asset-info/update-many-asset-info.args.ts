import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AssetInfoUpdateManyMutationInput } from "./asset-info-update-many-mutation.input";
import { Type } from "class-transformer";
import { AssetInfoWhereInput } from "./asset-info-where.input";

@ArgsType()
export class UpdateManyAssetInfoArgs {
    @Field(() => AssetInfoUpdateManyMutationInput, { nullable: false })
    @Type(() => AssetInfoUpdateManyMutationInput)
    data!: AssetInfoUpdateManyMutationInput;

    @Field(() => AssetInfoWhereInput, { nullable: true })
    @Type(() => AssetInfoWhereInput)
    where?: AssetInfoWhereInput;
}
