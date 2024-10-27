import { DatabaseEvent } from "./database.event";

export enum SubscriptionEvent {
    CRYPTO_PROFILE_CREATED = "crypto-profile-created",
    ASSET_PRICE_1m_INSERTED = DatabaseEvent.ASSET_PRICE_1m_INSERT,
    ASSET_PRICE_5m_INSERTED = DatabaseEvent.ASSET_PRICE_5m_INSERT,
}
