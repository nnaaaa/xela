import { registerEnumType } from "@nestjs/graphql";

export enum Interval {
    ONE_MINUTE = "ONE_MINUTE",
    FIVE_MINUTES = "FIVE_MINUTES",
    FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
    THIRTY_MINUTES = "THIRTY_MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS",
}

registerEnumType(Interval, { name: "Interval", description: undefined });
