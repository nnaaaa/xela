"use client";

import { useQuery } from "@apollo/client";
import { useAppSelector } from "@/state/hooks";
import InvestmentSummary from "@/app/dashboard/finance/components/summary/InvestmentSummary";
import AssetList from "@/app/dashboard/finance/components/assetList/AssetList";
import {
    GetCryptoProfileQuery,
    QueryGetCryptoProfilesArgs,
} from "@/gql/graphql";
import { GET_CRYPTO_PROFILES } from "@/api/crypto";
import React, { useCallback, useState } from "react";
import HistoricalBalanceChart from "../components/historicalBalanceChart";
import ProfileSelector from "@/app/dashboard/finance/components/profileSelector";
import ProfileCreator from "@/app/dashboard/finance/components/profileCreator";

interface IProps {
    profiles: GetCryptoProfileQuery["getCryptoProfiles"];
    refresh: () => void;
}

function InvestmentPage({ profiles, refresh }: IProps) {
    const [selectedCryptoProfile, setSelectedCryptoProfile] = useState(
        profiles?.[0],
    );

    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="flex gap-4">
                <ProfileSelector
                    profiles={profiles}
                    selectedCryptoProfile={selectedCryptoProfile}
                    setSelectedCryptoProfile={setSelectedCryptoProfile}
                />
                <ProfileCreator refresh={refresh} />
            </div>
            {/*<Select onValueChange={onSelectCryptoProfile} defaultValue={selectedCryptoProfile?.profileId}>*/}
            {/*    <SelectTrigger className="w-[20rem]">*/}
            {/*        <SelectValue placeholder="Select Crypto Profile"/>*/}
            {/*    </SelectTrigger>*/}
            {/*    <SelectContent>*/}
            {/*        {profiles.map(profile => (*/}
            {/*            <SelectItem key={profile.profileId} value={profile.profileId!}>{profile.exchanges}</SelectItem>*/}
            {/*        ))}*/}
            {/*    </SelectContent>*/}
            {/*</Select>*/}
            {selectedCryptoProfile && (
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-4">
                        <div className="h-min flex items-center justify-center py-6 px-6 gap-1 rounded-lg border shadow-sm">
                            <InvestmentSummary
                                profile={selectedCryptoProfile}
                            />
                        </div>
                        <HistoricalBalanceChart
                            historicalData={
                                selectedCryptoProfile?.historicalBalances
                            }
                        />
                    </div>
                    <div className="flex-1 flex py-6 px-6 gap-1 rounded-lg border shadow-sm">
                        <AssetList profile={selectedCryptoProfile} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function InvestmentContainer() {
    const { user } = useAppSelector((state) => state.auth.state);
    const { data, loading, refetch } = useQuery<
        GetCryptoProfileQuery,
        QueryGetCryptoProfilesArgs
    >(GET_CRYPTO_PROFILES, {
        variables: { data: { userId: Number(user?.id) } },
    });

    const refresh = useCallback(() => {
        refetch({ data: { userId: Number(user?.id) } }).then(() => {});
    }, [refetch, user]);

    // TODO: Skeleton
    if (loading || !data || !data.getCryptoProfiles) {
        return <div>Loading...</div>;
    }

    return (
        <InvestmentPage profiles={data.getCryptoProfiles} refresh={refresh} />
    );
}
