import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "../../entities/user";
import { UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { AuthUser } from "../../shared/decorators/auth-user.decorator";
import { CryptoProfileService } from "../crypto/profile/profile.service";
import { UserCryptoProfile } from "../../entities/user-crypto-profile";

@UseGuards(JwtGuard)
@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly cryptoProfileService: CryptoProfileService,
    ) {}
    @Query(() => User, { nullable: false })
    getMe(@AuthUser() user: User) {
        return user;
    }

    @ResolveField("cryptoProfiles", () => UserCryptoProfile)
    async getCryptoProfile(@Parent() user: User) {
        const { id } = user;
        return this.cryptoProfileService.findProfiles(id);
    }
}
