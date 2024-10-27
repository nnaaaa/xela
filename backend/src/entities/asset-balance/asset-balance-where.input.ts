import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFilter } from "../prisma/string-filter.input";
import { FloatFilter } from "../prisma/float-filter.input";
import { AssetInfoRelationFilter } from "../asset-info/asset-info-relation-filter.input";
import { UserCryptoProfileRelationFilter } from "../user-crypto-profile/user-crypto-profile-relation-filter.input";

@InputType()
export class AssetBalanceWhereInput {
    @Field(() => [AssetBalanceWhereInput], { nullable: true })
    AND?: Array<AssetBalanceWhereInput>;

    @Field(() => [AssetBalanceWhereInput], { nullable: true })
    OR?: Array<AssetBalanceWhereInput>;

    @Field(() => [AssetBalanceWhereInput], { nullable: true })
    NOT?: Array<AssetBalanceWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    cryptoProfileId?: StringFilter;

    @Field(() => StringFilter, { nullable: true })
    assetInfoId?: StringFilter;

    @Field(() => FloatFilter, { nullable: true })
    balance?: FloatFilter;

    @Field(() => FloatFilter, { nullable: true })
    locked?: FloatFilter;

    @Field(() => AssetInfoRelationFilter, { nullable: true })
    assetInfo?: AssetInfoRelationFilter;

    @Field(() => UserCryptoProfileRelationFilter, { nullable: true })
    cryptoProfile?: UserCryptoProfileRelationFilter;
}
