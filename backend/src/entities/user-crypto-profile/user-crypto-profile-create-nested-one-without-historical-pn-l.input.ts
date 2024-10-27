import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutHistoricalPnLInput } from "./user-crypto-profile-create-without-historical-pn-l.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput } from "./user-crypto-profile-create-or-connect-without-historical-pn-l.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";

@InputType()
export class UserCryptoProfileCreateNestedOneWithoutHistoricalPnLInput {
    @Field(() => UserCryptoProfileCreateWithoutHistoricalPnLInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateWithoutHistoricalPnLInput)
    create?: UserCryptoProfileCreateWithoutHistoricalPnLInput;

    @Field(() => UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput)
    connectOrCreate?: UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;
}
