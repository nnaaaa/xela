import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";
import { UserCryptoProfile } from "../user-crypto-profile/user-crypto-profile.model";

@ObjectType()
export class HistoricalCryptoBalance {
    @Field(() => String, { nullable: false })
    cryptoProfileId!: string;

    @Field(() => Date, { nullable: false })
    time!: Date;

    @Field(() => Float, { nullable: false })
    estimatedBalance!: number;

    @Field(() => Float, { nullable: false })
    changePercent!: number;

    @Field(() => Float, { nullable: false })
    changeBalance!: number;

    @Field(() => UserCryptoProfile, { nullable: false })
    cryptoProfile?: UserCryptoProfile;
}
