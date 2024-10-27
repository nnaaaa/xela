import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class HistoricalCryptoBalanceCryptoProfileIdTimeCompoundUniqueInput {
    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => Date, { nullable: false })
    time!: Date | string;
}
