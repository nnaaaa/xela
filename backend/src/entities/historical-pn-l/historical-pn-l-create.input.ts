import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { UserCryptoProfileCreateNestedOneWithoutHistoricalPnLInput } from "../user-crypto-profile/user-crypto-profile-create-nested-one-without-historical-pn-l.input";

@InputType()
export class HistoricalPnLCreateInput {
    @Field(() => Date, { nullable: false })
    time!: Date | string;

    @Field(() => Float, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Float, { nullable: false })
    changePercent!: number;

    @Field(() => Float, { nullable: false })
    changeBalance!: number;

    @Field(() => UserCryptoProfileCreateNestedOneWithoutHistoricalPnLInput, {
        nullable: false,
    })
    cryptoProfile!: UserCryptoProfileCreateNestedOneWithoutHistoricalPnLInput;
}
