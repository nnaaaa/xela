import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceWhereInput } from "./historical-crypto-balance-where.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceOrderByWithRelationInput } from "./historical-crypto-balance-order-by-with-relation.input";
import { Prisma } from "@prisma/client";
import { HistoricalCryptoBalanceWhereUniqueInput } from "./historical-crypto-balance-where-unique.input";
import { Int } from "@nestjs/graphql";
import { HistoricalCryptoBalanceScalarFieldEnum } from "./historical-crypto-balance-scalar-field.enum";

@ArgsType()
export class FindFirstHistoricalCryptoBalanceArgs {
    @Field(() => HistoricalCryptoBalanceWhereInput, { nullable: true })
    @Type(() => HistoricalCryptoBalanceWhereInput)
    where?: HistoricalCryptoBalanceWhereInput;

    @Field(() => [HistoricalCryptoBalanceOrderByWithRelationInput], {
        nullable: true,
    })
    orderBy?: Array<HistoricalCryptoBalanceOrderByWithRelationInput>;

    @Field(() => HistoricalCryptoBalanceWhereUniqueInput, { nullable: true })
    cursor?: Prisma.AtLeast<
        HistoricalCryptoBalanceWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [HistoricalCryptoBalanceScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof HistoricalCryptoBalanceScalarFieldEnum>;
}
