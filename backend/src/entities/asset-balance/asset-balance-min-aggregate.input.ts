import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetBalanceMinAggregateInput {
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
}
