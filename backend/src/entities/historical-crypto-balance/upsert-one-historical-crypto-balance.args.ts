import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceCreateInput } from "./historical-crypto-balance-create.input";
import { HistoricalCryptoBalanceUpdateInput } from "./historical-crypto-balance-update.input";

@ArgsType()
export class UpsertOneHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalCryptoBalanceWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => HistoricalCryptoBalanceCreateInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceCreateInput)
    create!: HistoricalCryptoBalanceCreateInput;

    @Field(() => HistoricalCryptoBalanceUpdateInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceUpdateInput)
    update!: HistoricalCryptoBalanceUpdateInput;
}
