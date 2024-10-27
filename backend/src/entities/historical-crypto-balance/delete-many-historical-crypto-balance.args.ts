import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";
import { Type } from "class-transformer";

@ArgsType()
export class DeleteManyHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereInput)
    where?: HistoricalCryptoBalanceWhereInput;
}
