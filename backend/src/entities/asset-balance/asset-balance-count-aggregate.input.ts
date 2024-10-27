import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetBalanceCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    cryptoProfileId?: true;

    @Field(() => Boolean, { nullable: true })
    assetInfoId?: true;

    @Field(() => Boolean, { nullable: true })
    balance?: true;

    @Field(() => Boolean, { nullable: true })
    locked?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
