import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AssetInfoMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    symbol?: string;

    @Field(() => String, { nullable: true })
    category?: string;

    @Field(() => String, { nullable: true })
    desc?: string;

    @Field(() => String, { nullable: true })
    logo?: string;
}
