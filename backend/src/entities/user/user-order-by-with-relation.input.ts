import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { UserCryptoProfileOrderByRelationAggregateInput } from "../user-crypto-profile/user-crypto-profile-order-by-relation-aggregate.input";

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, { nullable: true })
    name?: SortOrderInput;

    @Field(() => SortOrder, { nullable: true })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, { nullable: true })
    otp?: SortOrderInput;

    @Field(() => SortOrderInput, { nullable: true })
    otpPurpose?: SortOrderInput;

    @Field(() => UserCryptoProfileOrderByRelationAggregateInput, {
        nullable: true,
    })
    cryptoProfiles?: UserCryptoProfileOrderByRelationAggregateInput;
}
