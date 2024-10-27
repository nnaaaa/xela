import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceCreateInput } from "./historical-crypto-balance-create.input";
import { Type } from "class-transformer";

@ArgsType()
export class CreateOneHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceCreateInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceCreateInput)
    data!: HistoricalCryptoBalanceCreateInput;
}
