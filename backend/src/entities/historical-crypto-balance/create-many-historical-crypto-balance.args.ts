import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCreateManyInput } from "./historical-crypto-balance-create-many.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateManyHistoricalCryptoBalanceArgs {
    @Field(() => [HistoricalCryptoBalanceCreateManyInput], { nullable: false })
    @Type(() => HistoricalCryptoBalanceCreateManyInput)
    data!: Array<HistoricalCryptoBalanceCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
