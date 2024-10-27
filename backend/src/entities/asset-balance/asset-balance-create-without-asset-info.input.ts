import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { UserCryptoProfileCreateNestedOneWithoutBalancesInput } from "../user-crypto-profile/user-crypto-profile-create-nested-one-without-balances.input";

@InputType()
export class AssetBalanceCreateWithoutAssetInfoInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Float, { nullable: false })
    balance!: number;

    @Field(() => Float, { nullable: false })
    locked!: number;

    @Field(() => UserCryptoProfileCreateNestedOneWithoutBalancesInput, {
        nullable: false,
    })
    cryptoProfile!: UserCryptoProfileCreateNestedOneWithoutBalancesInput;
}
