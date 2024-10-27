import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class UserCryptoProfileMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    profileId?: true;

    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    exchanges?: true;

    @Field(() => Boolean, { nullable: true })
    tradingType?: true;

    @Field(() => Boolean, { nullable: true })
    apiKey?: true;

    @Field(() => Boolean, { nullable: true })
    secretKey?: true;

    @Field(() => Boolean, { nullable: true })
    updateTime?: true;
}
