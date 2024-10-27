import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { HistoricalPnLCreateManyCryptoProfileInput } from "./historical-pn-l-create-many-crypto-profile.input";
import { Type } from "class-transformer";

@InputType()
export class HistoricalPnLCreateManyCryptoProfileInputEnvelope {
    @Field(() => [HistoricalPnLCreateManyCryptoProfileInput], {
        nullable: false,
    })
    @Type(() => HistoricalPnLCreateManyCryptoProfileInput)
    data!: Array<HistoricalPnLCreateManyCryptoProfileInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
