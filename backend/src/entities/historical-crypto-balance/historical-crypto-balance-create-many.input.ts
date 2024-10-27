import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

@InputType()
export class HistoricalCryptoBalanceCreateManyInput {
    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => Date, { nullable: false })
    time!: Date | string;

    @Field(() => Float, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Float, { nullable: false })
    changePercent!: number;

    @Field(() => Float, { nullable: false })
    changeBalance!: number;
}
