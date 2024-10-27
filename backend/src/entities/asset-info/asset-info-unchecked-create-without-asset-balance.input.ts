import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetInfoUncheckedCreateWithoutAssetBalanceInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    symbol!: string;

    @Field(() => String, { nullable: false })
    category!: string;

    @Field(() => String, { nullable: false })
    desc!: string;

    @Field(() => String, { nullable: false })
    logo!: string;
}
