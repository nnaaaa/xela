import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { AssetInfo } from "../asset-info/asset-info.model";
import { UserCryptoProfile } from "../user-crypto-profile/user-crypto-profile.model";

@ObjectType()
export class AssetBalance {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Float, { nullable: false })
    balance!: number;

    @Field(() => Float, { nullable: false })
    locked!: number;

    @Field(() => AssetInfo, { nullable: false })
    assetInfo?: AssetInfo;

    @Field(() => UserCryptoProfile, { nullable: false })
    cryptoProfile?: UserCryptoProfile;
}
