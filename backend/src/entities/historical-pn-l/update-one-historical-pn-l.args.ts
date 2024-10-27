import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { HistoricalPnLUpdateInput } from "./historical-pn-l-update.input";
import { Type } from "class-transformer";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";

@ArgsType()
export class UpdateOneHistoricalPnLArgs {
    @Field(() => HistoricalPnLUpdateInput, { nullable: false })
    @Type(() => HistoricalPnLUpdateInput)
    data!: HistoricalPnLUpdateInput;

    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalPnLWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;
}
