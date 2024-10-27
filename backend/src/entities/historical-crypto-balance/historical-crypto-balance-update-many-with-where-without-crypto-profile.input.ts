import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalCryptoBalanceScalarWhereInput } from "./historical-crypto-balance-scalar-where.input";
import { Type } from "class-transformer";
import { HistoricalCryptoBalanceUpdateManyMutationInput } from "./historical-crypto-balance-update-many-mutation.input";

@InputType()
export class HistoricalCryptoBalanceUpdateManyWithWhereWithoutCryptoProfileInput {
    @Field(() => HistoricalCryptoBalanceScalarWhereInput, { nullable: false })
    @Type(() => HistoricalCryptoBalanceScalarWhereInput)
    where!: HistoricalCryptoBalanceScalarWhereInput;

    @Field(() => HistoricalCryptoBalanceUpdateManyMutationInput, {
        nullable: false,
    })
    @Type(() => HistoricalCryptoBalanceUpdateManyMutationInput)
    data!: HistoricalCryptoBalanceUpdateManyMutationInput;
}
