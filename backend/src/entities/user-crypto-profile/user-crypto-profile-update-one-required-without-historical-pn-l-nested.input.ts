import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserCryptoProfileCreateWithoutHistoricalPnLInput } from "./user-crypto-profile-create-without-historical-pn-l.input";
import { Type } from "class-transformer";
import { UserCryptoProfileCreateOrConnectWithoutHistoricalPnLInput } from "./user-crypto-profile-create-or-connect-without-historical-pn-l.input";
import { UserCryptoProfileUpsertWithoutHistoricalPnLInput } from "./user-crypto-profile-upsert-without-historical-pn-l.input";
import { Prisma } from "@prisma/client";
import { UserCryptoProfileWhereUniqueInput } from "./user-crypto-profile-where-unique.input";
import { UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalPnLInput } from "./user-crypto-profile-update-to-one-with-where-without-historical-pn-l.input";

@InputType()
export class UserCryptoProfileUpdateOneRequiredWithoutHistoricalPnLNestedInput {
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

    @Field(() => UserCryptoProfileUpsertWithoutHistoricalPnLInput, {
        nullable: true,
    })
    @Type(() => UserCryptoProfileUpsertWithoutHistoricalPnLInput)
    upsert?: UserCryptoProfileUpsertWithoutHistoricalPnLInput;

    @Field(() => UserCryptoProfileWhereUniqueInput, { nullable: true })
    @Type(() => UserCryptoProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCryptoProfileWhereUniqueInput, "profileId">;

    @Field(
        () => UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalPnLInput,
        { nullable: true },
    )
    @Type(() => UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalPnLInput)
    update?: UserCryptoProfileUpdateToOneWithWhereWithoutHistoricalPnLInput;
}
