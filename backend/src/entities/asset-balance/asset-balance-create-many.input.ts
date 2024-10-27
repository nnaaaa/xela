import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@InputType()
export class AssetBalanceCreateManyInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => String, { nullable: false })
    assetInfoId!: string;

    @Field(() => Float, { nullable: false })
    balance!: number;

    @Field(() => Float, { nullable: false })
    locked!: number;
}
