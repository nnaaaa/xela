import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceUpdateInput } from "./historical-crypto-balance-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";

@ArgsType()
export class UpdateOneHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceUpdateInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceUpdateInput)
    data!: HistoricalCryptoBalanceUpdateInput;

    @Field(() => HistoricalCryptoBalanceWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalCryptoBalanceWhereUniqueInput,
        "cryptoProfileId_time"
    >;
}
