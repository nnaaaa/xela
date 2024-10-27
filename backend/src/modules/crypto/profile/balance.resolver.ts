import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { AssetBalance } from "../../../entities/asset-balance";
import { CryptoProfileService } from "./profile.service";
import { AssetInfoOutput } from "./dto/get-asset-info.output";

@Resolver(() => AssetBalance)
export class CryptoBalanceResolver {
    constructor(private readonly cryptoProfileService: CryptoProfileService) {}
    @ResolveField("assetInfo", () => AssetInfoOutput)
    getBalances(
        @Parent() assetBalance: AssetBalance,
    ): Promise<AssetInfoOutput> {
        const { assetInfoId } = assetBalance;
        return this.cryptoProfileService.findAssetInfo(assetInfoId);
    }
}
