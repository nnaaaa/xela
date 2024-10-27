import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { UserCryptoProfileOrderByWithRelationInput } from "../user-crypto-profile/user-crypto-profile-order-by-with-relation.input";

@InputType()
export class HistoricalPnLOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    cryptoProfileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    estimatedBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    changePercent?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    changeBalance?: keyof typeof SortOrder;

    @Field(() => UserCryptoProfileOrderByWithRelationInput, { nullable: true })
    cryptoProfile?: UserCryptoProfileOrderByWithRelationInput;
}
