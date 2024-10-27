import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { TradingType } from "../prisma/trading-type.enum";

@InputType()
export class UserCryptoProfileCreateManyInput {
    @Field(() => String, { nullable: true })
    profileId?: string;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => String, { nullable: true })
    exchanges?: string;

    @Field(() => TradingType, { nullable: false })
    tradingType!: keyof typeof TradingType;

    @Field(() => String, { nullable: false })
    apiKey!: string;

    @Field(() => String, { nullable: false })
    secretKey!: string;

    @Field(() => Date, { nullable: true })
    updateTime?: Date | string;
}
