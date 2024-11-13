import type { Option } from "@/types"
import type { Column } from "@tanstack/react-table"
import { Check, PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options: Option[]
}

export function DataTableFacetedFilter<TData, TValue>({
                                                        column,
                                                        title,
                                                        options,
                                                      }: DataTableFacetedFilterProps<TData, TValue>) {
  const unknownValue = column?.getFilterValue()
  const selectedValues = new Set(
      Array.isArray(unknownValue) ? unknownValue : []
  )

  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <PlusCircle className="mr-2 size-4" />
            {title}
            {/*{selectedValues?.size > 0 && (*/}
            {/*    <>*/}
            {/*      <Separator orientation="vertical" className="mx-2 h-4" />*/}
            {/*      <Badge*/}
            {/*          variant="secondary"*/}
            {/*          className="rounded-sm px-1 font-normal lg:hidden"*/}
            {/*      >*/}
            {/*        {selectedValues.size}*/}
            {/*      </Badge>*/}
            {/*      <div className="hidden space-x-1 lg:flex">*/}
            {/*        {selectedValues.size > 2 ? (*/}
            {/*            <Badge*/}
            {/*                variant="secondary"*/}
            {/*                className="rounded-sm px-1 font-normal"*/}
            {/*            >*/}
            {/*              {selectedValues.size} selected*/}
            {/*            </Badge>*/}
            {/*        ) : (*/}
            {/*            options*/}
            {/*                .filter((option) => selectedValues.has(option.value))*/}
            {/*                .map((option) => (*/}
            {/*                    <Badge*/}
            {/*                        variant="secondary"*/}
            {/*                        key={option.value}*/}
            {/*                        className="rounded-sm px-1 font-normal"*/}
            {/*                    >*/}
            {/*                      {option.label}*/}
            {/*                    </Badge>*/}
            {/*                ))*/}
            {/*        )}*/}
            {/*      </div>*/}
            {/*    </>*/}
            {/*)}*/}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Command>
            <CommandInput placeholder={title} />
            <CommandList className="max-h-full">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="overflow-y-auto overflow-x-hidden">
                {options.map((option) => {
                  const isSelected = selectedValues.has(option.value)

                  return (
                      <CommandItem
                          key={option.value}
                          onSelect={() => {
                              if (isSelected) {
                                  selectedValues.delete(option.value)
                              } else {
                                  selectedValues.add(option.value)
                              }
                              const filterValues = Array.from(selectedValues)
                              console.log(column?.getFilterFn())
                              column?.setFilterValue(
                                  filterValues.length ? filterValues : undefined
                              )
                          }}
                      >
                          <div
                              className={cn(
                                  "flex size-4 items-center justify-center rounded-sm border border-primary",
                                  isSelected
                                      ? "bg-primary text-primary-foreground"
                                      : "opacity-50 [&_svg]:invisible"
                              )}
                          >
                              <Check className="size-4" aria-hidden="true"/>
                          </div>
                          {option.label}
                          {/*<div className="w-min flex items-center gap-2">*/}
                          {/*    <div*/}
                          {/*        className="rounded-full w-4 h-4 flex items-center justify-center"*/}
                          {/*        style={{backgroundColor: option.color}}*/}
                          {/*    />*/}
                          {/*    <p className="max-w-[8rem] overflow-hidden text-nowrap text-sm font-medium leading-none">*/}
                          {/*        {option.label}*/}
                          {/*    </p>*/}
                          {/*</div>*/}
                          <span className="ml-auto flex size-4 items-center justify-center text-xs">
                            {option.count}
                          </span>
                      </CommandItem>
                  )
                })}
              </CommandGroup>
                {selectedValues.size > 0 && (
                    <>
                        <CommandSeparator/>
                        <CommandGroup>
                            <CommandItem
                                onSelect={() => column?.setFilterValue(undefined)}
                                className="justify-center text-center"
                            >
                                Clear filters
                            </CommandItem>
                        </CommandGroup>
                  </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
  )
}