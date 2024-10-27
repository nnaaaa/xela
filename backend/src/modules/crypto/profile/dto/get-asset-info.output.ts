import { Field, Float, ObjectType, PartialType } from "@nestjs/graphql";
import { AssetInfo } from "src/entities/asset-info";

@ObjectType()
export class AssetInfoOutput extends PartialType(AssetInfo) {
    @Field(() => Float, { nullable: false })
    lastPrice: number;
}
