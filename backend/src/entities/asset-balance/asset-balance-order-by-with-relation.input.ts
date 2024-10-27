import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { AssetInfoOrderByWithRelationInput } from "../asset-info/asset-info-order-by-with-relation.input";
import { UserCryptoProfileOrderByWithRelationInput } from "../user-crypto-profile/user-crypto-profile-order-by-with-relation.input";

@InputType()
export class AssetBalanceOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    cryptoProfileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    assetInfoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    locked?: keyof typeof SortOrder;

    @Field(() => AssetInfoOrderByWithRelationInput, { nullable: true })
    assetInfo?: AssetInfoOrderByWithRelationInput;

    @Field(() => UserCryptoProfileOrderByWithRelationInput, { nullable: true })
    cryptoProfile?: UserCryptoProfileOrderByWithRelationInput;
}
