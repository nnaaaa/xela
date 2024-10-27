import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { KafkaTopic } from "../../../shared/constants/kafka";
import { CreateCryptoProfileInput } from "./dto/create-crypto-profile.input";
import { AssetPrice } from "../../../entities/asset-price";
import { AssetInfoOutput } from "./dto/get-asset-info.output";
import { CryptoAssetService } from "../asset/asset.service";
import { InjectKafka, KafkaService } from "@claudeseo/nest-kafka";

@Injectable()
export class CryptoProfileService {
    private readonly logger = new Logger(CryptoProfileService.name);
    constructor(
        private prisma: PrismaService,
        private cryptoAssetService: CryptoAssetService,
        @InjectKafka() private readonly kafkaService: KafkaService,
    ) {}

    createProfile(createCryptoProfileInput: CreateCryptoProfileInput) {
        createCryptoProfileInput.userId = Number(
            createCryptoProfileInput.userId,
        );

        const msg = Buffer.from(JSON.stringify(createCryptoProfileInput));
        this.kafkaService.sendMessage({
            topic: KafkaTopic.CREATE_CRYPTO_PROFILE,
            messages: [{ value: msg }],
        });
        this.logger.log(
            `Message sent to topic(${KafkaTopic.CREATE_CRYPTO_PROFILE}): ${msg}`,
        );
    }

    findProfiles(userId: number) {
        return this.prisma.userCryptoProfile.findMany({
            where: { userId },
        });
    }

    findProfile(profileId: string) {
        return this.prisma.userCryptoProfile.findUnique({
            where: { profileId },
        });
    }

    // private async mapProfile(
    //     profile: UserCryptoProfile,
    // ): Promise<CryptoProfileOutput> {
    //     const balances = await this.findBalances(profile.profileId);
    //
    //     // TODO: optimise this query
    //     let estimatedBalance = 0;
    //     for (const assetBalance of balances) {
    //         const { openPrice: currentPrice } = await this.findLatestPrice(
    //             assetBalance.assetInfoId,
    //         );
    //         estimatedBalance += currentPrice * assetBalance.balance;
    //     }
    //
    //     return {
    //         ...profile,
    //         balances,
    //         estimatedBalance,
    //     };
    // }

    // async findAndCalculateProfiles(
    //     userId: number,
    // ): Promise<CryptoProfileOutput[]> {
    //     const profiles = await this.findProfiles(userId);
    //     return await Promise.all(profiles.map((p) => this.mapProfile(p)));
    // }

    findBalances(cryptoProfileId: string) {
        return this.prisma.assetBalance.findMany({
            where: { cryptoProfileId },
        });
    }

    async findAssetInfo(id: string): Promise<AssetInfoOutput> {
        const assetInfo = await this.prisma.assetInfo.findUnique({
            where: { id },
        });
        const { openPrice } = await this.findLatestPrice(id);
        return { ...assetInfo, lastPrice: openPrice };
    }

    async findLatestPrice(
        assetInfoId: string,
    ): Promise<Pick<AssetPrice, "openPrice">> {
        return this.prisma.assetPrice.findFirst({
            where: {
                assetInfoId,
            },
            select: {
                openPrice: true,
            },
            orderBy: {
                open_time: "desc",
            },
            take: 1,
        });
    }

    async findHistoricalBalance(cryptoProfileId: string) {
        // return this.prisma.historicalCryptoBalance.findMany({
        //     where: { cryptoProfileId },
        // });
        return this.prisma.$queryRaw`
            SELECT
                b.b_time as "time",
                b."estimatedBalance" as "estimatedBalance",
                b."changeBalance" as "changeBalance",
                b."changePercent" as "changePercent"
            FROM (
                     SELECT time_bucket('1h', hcb."time") AS b_time,
                            last(hcb."estimatedBalance", hcb.time) AS "estimatedBalance",
                            last(hcb."changeBalance", hcb.time) AS "changeBalance",
                            last(hcb."changePercent", hcb.time) AS "changePercent"
                     FROM "HistoricalCryptoBalance" hcb
                     WHERE hcb."cryptoProfileId" = ${cryptoProfileId}
                     GROUP BY b_time
                     ORDER BY b_time
                 ) b
        `;
    }
}
