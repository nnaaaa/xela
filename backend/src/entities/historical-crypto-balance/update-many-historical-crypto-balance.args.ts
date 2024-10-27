import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceUpdateManyMutationInput } from "./historical-crypto-balance-update-many-mutation.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";

@ArgsType()
export class UpdateManyHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceUpdateManyMutationInput, {
        nullable: false,
    })
    @Type(() => HistoricalCryptoBalanceUpdateManyMutationInput)
    data!: HistoricalCryptoBalanceUpdateManyMutationInput;

    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereInput)
    where?: HistoricalCryptoBalanceWhereInput;
}
