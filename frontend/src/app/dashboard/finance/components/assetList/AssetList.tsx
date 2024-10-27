import {GetCryptoProfileQuery} from "@/gql/graphql";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {useRouter} from "next/navigation";
import DASHBOARD_ROUTE from "@/lib/routes/dashboard.route";

interface IProps {
    profile: GetCryptoProfileQuery['getCryptoProfiles'][number]
}

// type BalanceOutputType = GetCryptoProfileQuery['getCryptoProfiles'][number]['balances'][number]

export default function AssetList({profile}: IProps) {
    const assetList = profile.balances
    const router = useRouter()
    // const table = useReactTable({
    //     data: assetList as BalanceOutputType,
    //     columns,
    //     getCoreRowModel: getCoreRowModel(),
    // })
    const goToAssetPricePage = (assetInfoId: string) => {
        router.push(DASHBOARD_ROUTE.finance.assetPrice.value(assetInfoId))
    }

    if (!assetList || !assetList?.length) {
        return <></>;
    }

    return (
        <Table className="p-4 rounded-lg border shadow-sm">
            {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
            <TableHeader>
                <TableRow>
                    <TableHead className="p-4">Coin</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="p-4 text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="rounded-lg">
                {assetList.map(asset => (
                    <TableRow key={asset.assetInfo.symbol} className="cursor-pointer" onClick={() => goToAssetPricePage(asset.assetInfo.id!)}>
                        <TableCell className="p-4">
                            <Avatar>
                                <AvatarImage src={asset.assetInfo.logo!}/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>{asset.assetInfo.symbol}</TableCell>
                        <TableCell>{asset.balance.toLocaleString('en-US', {maximumFractionDigits:10})}</TableCell>
                        <TableCell>${asset.assetInfo.lastPrice}</TableCell>
                        <TableCell
                            className="p-4 text-right">${Math.round(asset.balance * asset.assetInfo.lastPrice * 100) / 100}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

