import { ArgsType, Field, InputType, PickType } from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssetInfo } from "src/entities/asset-info";

@InputType()
export class GetAssetInfoInput extends PickType(AssetInfo, ["id"]) {
    @Field(() => String, { nullable: false })
    id: string;
}

@ArgsType()
export class GetAssetInfoArgs {
    @ValidateNested()
    @Field(() => GetAssetInfoInput, { nullable: false })
    @Type(() => GetAssetInfoInput)
    data!: GetAssetInfoInput;
}
