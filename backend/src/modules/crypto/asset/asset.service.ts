import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AssetPriceInterval } from "./enum/asset-price-interval";

@Injectable()
export class CryptoAssetService {
    private readonly logger = new Logger(CryptoAssetService.name);
    constructor(private prisma: PrismaService) {}

    async findLatestPrice(assetInfoId: string, timeFrame?: AssetPriceInterval) {
        return this.prisma[
            this.getAssetPriceMaterializedViewName(timeFrame)
        ].findMany({
            where: {
                assetInfoId,
            },
        });
    }

    async findManyPrices(assetInfoId: string, timeFrame?: AssetPriceInterval) {
        this.logger.log(
            `Finding asset prices for asset ${assetInfoId} with interval ${timeFrame}`,
        );
        let assetPrices = [];

        if (timeFrame === AssetPriceInterval.MINUTE_1) {
            assetPrices = await this.prisma.assetPrice.findMany({
                where: {
                    assetInfoId,
                },
            });
        } else {
            assetPrices = this.prisma[
                this.getAssetPriceMaterializedViewName(timeFrame)
            ].findMany({
                where: {
                    assetInfoId,
                },
            });
        }

        return assetPrices;
    }

    async findOneInfo(id: string) {
        return this.prisma.assetInfo.findUnique({ where: { id } });
    }

    private getAssetPriceMaterializedViewName(
        timeFrame?: AssetPriceInterval,
    ): string {
        const [time, unit] = timeFrame.split(" ");
        let formattedTimeFrame = time + unit.charAt(0);

        if (unit === "month") {
            formattedTimeFrame = time + "M";
        }
        console.log("formattedTimeFrame", formattedTimeFrame);
        return `asset_price_${formattedTimeFrame}`;
    }
}
