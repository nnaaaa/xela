import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AssetBalanceCreateManyCryptoProfileInput } from "./asset-balance-create-many-crypto-profile.input";
import { Type } from "class-transformer";

@InputType()
export class AssetBalanceCreateManyCryptoProfileInputEnvelope {
    @Field(() => [AssetBalanceCreateManyCryptoProfileInput], {
        nullable: false,
    })
    @Type(() => AssetBalanceCreateManyCryptoProfileInput)
    data!: Array<AssetBalanceCreateManyCryptoProfileInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
