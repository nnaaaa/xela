import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class AssetInfoCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;

    @Field(() => Boolean, { nullable: true })
    symbol?: true;

    @Field(() => Boolean, { nullable: true })
    category?: true;

    @Field(() => Boolean, { nullable: true })
    desc?: true;

    @Field(() => Boolean, { nullable: true })
    logo?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
