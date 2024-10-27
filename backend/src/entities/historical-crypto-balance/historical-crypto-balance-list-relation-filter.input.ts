import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";

@InputType()
export class HistoricalCryptoBalanceListRelationFilter {
    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    every?: HistoricalCryptoBalanceWhereInput;

    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    some?: HistoricalCryptoBalanceWhereInput;

    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    none?: HistoricalCryptoBalanceWhereInput;
}
