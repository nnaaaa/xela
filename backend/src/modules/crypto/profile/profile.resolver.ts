import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
    Subscription,
} from "@nestjs/graphql";
import { CryptoProfileService } from "./profile.service";
import { UserCryptoProfile } from "../../../entities/user-crypto-profile";
import {
    CreateCryptoProfileArgs,
    CreateCryptoRes,
} from "./dto/create-crypto-profile.input";
import { PubSub } from "graphql-subscriptions";
import { SubscriptionEvent } from "../../../shared/constants/subscription.event";
import { Inject } from "@nestjs/common";
import { ProfileEventListener } from "./profile.event-listener";
import { GetCryptoProfileArgs } from "./dto/get-crypto-profile.input";
import { HistoricalCryptoBalance } from "../../../entities/historical-crypto-balance";
import { AssetBalance } from "../../../entities/asset-balance";

@Resolver(() => UserCryptoProfile)
export class ProfileResolver {
    constructor(
        private readonly cryptoProfileService: CryptoProfileService,
        @Inject("SUBSCRIPTION_PUB_SUB") private readonly pubSub: PubSub,
    ) {}

    @Mutation(() => CreateCryptoRes, { name: "createCryptoProfile" })
    create(@Args() args: CreateCryptoProfileArgs) {
        this.cryptoProfileService.createProfile(args.data);
        return {
            userId: args.data.userId,
        };
    }

    @Query(() => [UserCryptoProfile], { name: "getCryptoProfiles" })
    async get(@Args() args: GetCryptoProfileArgs) {
        return this.cryptoProfileService.findProfiles(args.data.userId);
    }

    @Subscription(() => UserCryptoProfile, {
        name: ProfileEventListener.CREATE_SUCCESS_PAYLOAD_NAME,
        filter: (payload, variables: GetCryptoProfileArgs) =>
            payload[ProfileEventListener.CREATE_SUCCESS_PAYLOAD_NAME].userId ===
            variables.data.userId,
    })
    onProfileCreated(@Args() _: GetCryptoProfileArgs) {
        return this.pubSub.asyncIterator(
            SubscriptionEvent.CRYPTO_PROFILE_CREATED,
        );
    }
    //
    @ResolveField("balances", () => [AssetBalance])
    getBalances(@Parent() userCryptoProfile: UserCryptoProfile) {
        return this.cryptoProfileService.findBalances(
            userCryptoProfile.profileId,
        );
    }

    @ResolveField("historicalBalances", () => [HistoricalCryptoBalance])
    getEstimatedBalance(@Parent() userCryptoProfile: UserCryptoProfile) {
        return this.cryptoProfileService.findHistoricalBalance(
            userCryptoProfile.profileId,
        );
    }
    // @Mutation(() => Crypto)
    // updateCrypto(
    //     @Args("updateCryptoInput") updateCryptoInput: UpdateCryptoInput,
    // ) {
    //     return this.cryptoService.update(
    //         updateCryptoInput.id,
    //         updateCryptoInput,
    //     );
    // }

    // @Mutation(() => Crypto)
    // removeCrypto(@Args("id", { type: () => Int }) id: number) {
    //     return this.cryptoService.remove(id);
    // }
}
