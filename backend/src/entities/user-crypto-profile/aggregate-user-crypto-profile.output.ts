import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { UserCryptoProfileCountAggregate } from "./user-crypto-profile-count-aggregate.output";
import { UserCryptoProfileAvgAggregate } from "./user-crypto-profile-avg-aggregate.output";
import { UserCryptoProfileSumAggregate } from "./user-crypto-profile-sum-aggregate.output";
import { UserCryptoProfileMinAggregate } from "./user-crypto-profile-min-aggregate.output";
import { UserCryptoProfileMaxAggregate } from "./user-crypto-profile-max-aggregate.output";

@ObjectType()
export class AggregateUserCryptoProfile {
    @Field(() => UserCryptoProfileCountAggregate, { nullable: true })
    _count?: UserCryptoProfileCountAggregate;

    @Field(() => UserCryptoProfileAvgAggregate, { nullable: true })
    _avg?: UserCryptoProfileAvgAggregate;

    @Field(() => UserCryptoProfileSumAggregate, { nullable: true })
    _sum?: UserCryptoProfileSumAggregate;

    @Field(() => UserCryptoProfileMinAggregate, { nullable: true })
    _min?: UserCryptoProfileMinAggregate;

    @Field(() => UserCryptoProfileMaxAggregate, { nullable: true })
    _max?: UserCryptoProfileMaxAggregate;
}
