import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { HistoricalPnLWhereUniqueInput } from "./historical-pn-l-where-unique.input";
import { Type } from "class-transformer";
import { HistoricalPnLCreateInput } from "./historical-pn-l-create.input";
import { HistoricalPnLUpdateInput } from "./historical-pn-l-update.input";

@ArgsType()
export class UpsertOneHistoricalPnLArgs {
    @Field(() => HistoricalPnLWhereUniqueInput, { nullable: false })
    @Type(() => HistoricalPnLWhereUniqueInput)
    where!: Prisma.AtLeast<
        HistoricalPnLWhereUniqueInput,
        "cryptoProfileId_time"
    >;

    @Field(() => HistoricalPnLCreateInput, { nullable: false })
    @Type(() => HistoricalPnLCreateInput)
    create!: HistoricalPnLCreateInput;

    @Field(() => HistoricalPnLUpdateInput, { nullable: false })
    @Type(() => HistoricalPnLUpdateInput)
    update!: HistoricalPnLUpdateInput;
}
