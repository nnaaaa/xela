import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileUpdateWithoutHistoricalPnLInput } from "./user-crypto-profile-update-without-historical-pn-l.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateWithoutHistoricalPnLInput } from "./user-crypto-profile-create-without-historical-pn-l.input";
import { UserCryptoProfileWhereInput } from "./user-crypto-profile-where.input";

@InputType()
export class UserCryptoProfileUpsertWithoutHistoricalPnLInput {
    @Field(() => UserCryptoProfileUpdateWithoutHistoricalPnLInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileUpdateWithoutHistoricalPnLInput)
    update!: UserCryptoProfileUpdateWithoutHistoricalPnLInput;

    @Field(() => UserCryptoProfileCreateWithoutHistoricalPnLInput, {
        nullable: false,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalPnLInput)
    create!: UserCryptoProfileCreateWithoutHistoricalPnLInput;

    @Field(() => UserCryptoProfileWhereInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereInput)
    where?: UserCryptoProfileWhereInput;
}
