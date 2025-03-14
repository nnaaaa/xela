import * as React from "react"
import {CSSProperties} from "react"
import {flexRender, type Table as TanstackTable} from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {DataTablePagination} from "@/components/data-table/data-table-pagination";

interface DataTableProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
    table: TanstackTable<TData>
    pageSizeOptions?: number[]
}

export function DataTable<TData>({table, pageSizeOptions, children, ...props}: DataTableProps<TData>) {
    return (
        <div
            className="flex-1 flex flex-col gap-2"
            {...props}
        >
            {children}
            <div className="rounded-md border">
                <Table className="border-collapse">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    const styles: CSSProperties = { width: header.getSize() }
                                        // header.getSize() !== 150 ? { width: `${header.getSize()}px` } : {};

                                    return (
                                        <TableHead
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            className="p-2 md:p-4"
                                            style={{
                                                // ...getCommonPinningStyles({ column: header.column }),
                                                ...styles,
                                            }}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="p-2 md:p-4"
                                            style={{
                                                width: cell.column.getSize(),
                                            }}
                                            // style={{
                                            //     // ...getCommonPinningStyles({ column: cell.column }),
                                            // }}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={table.getAllColumns().length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col gap-2.5">
                <DataTablePagination table={table} pageSizeOptions={pageSizeOptions}/>
            </div>
        </div>
    )
}
