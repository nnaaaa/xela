import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";
import { Type } from "class-transformer";
import { UserCryptoProfileUpdateWithoutHistoricalPnLInput } from "./user-crypto-profile-update-without-historical-pn-l.input";

@InputType()
export class UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalPnLInput {
    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;

    @Field(() => UserCryptoProfileUpdateWithoutHistoricalPnLInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutHistoricalPnLInput)
    data!: UserCryptoProfileUpdateWithoutHistoricalPnLInput;
}
