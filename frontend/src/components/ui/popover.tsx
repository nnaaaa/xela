"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import {cn} from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({className, align = "center", sideOffset = 4, ...props}, ref) => (
    <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            "z-50 rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md outline-none details-[state=open]:animate-in details-[state=closed]:animate-out details-[state=closed]:fade-out-0 details-[state=open]:fade-in-0 details-[state=closed]:zoom-out-95 details-[state=open]:zoom-in-95 details-[side=bottom]:slide-in-from-top-2 details-[side=left]:slide-in-from-right-2 details-[side=right]:slide-in-from-left-2 details-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
            className,
        )}
        {...props}
    />
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {Popover, PopoverTrigger, PopoverContent, PopoverAnchor};
