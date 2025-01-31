"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { FileIcon } from "lucide-react"
import { Cross2Icon } from "@radix-ui/react-icons"

interface FilePreviewProps {
  file: File
  onRemove?: () => void
}

export const FilePreview = React.forwardRef<HTMLDivElement, FilePreviewProps>(
  (props, ref) => {
    if (props.file.type.startsWith("image/")) {
      return <ImageFilePreview {...props} ref={ref} />
    }

    if (
      props.file.type.startsWith("text/") ||
      props.file.name.endsWith(".txt") ||
      props.file.name.endsWith(".md")
    ) {
      return <TextFilePreview {...props} ref={ref} />
    }

    return <GenericFilePreview {...props} ref={ref} />
  }
)
FilePreview.displayName = "FilePreview"

const ImageFilePreview = React.forwardRef<HTMLDivElement, FilePreviewProps>(
  ({ file, onRemove }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="relative flex max-w-[200px] rounded-md border border-zinc-200 p-1.5 pr-2 text-xs dark:border-zinc-800"
        layout
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
      >
        <div className="flex w-full items-center space-x-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`Attachment ${file.name}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-zinc-200 bg-zinc-100 object-cover dark:border-zinc-800 dark:bg-zinc-800"
            src={URL.createObjectURL(file)}
          />
          <span className="w-full truncate text-zinc-500 dark:text-zinc-400">
            {file.name}
          </span>
        </div>

        {onRemove ? (
          <button
            className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            type="button"
            onClick={onRemove}
            aria-label="Remove attachment"
          >
            <Cross2Icon className="h-2.5 w-2.5" />
          </button>
        ) : null}
      </motion.div>
    )
  }
)
ImageFilePreview.displayName = "ImageFilePreview"

const TextFilePreview = React.forwardRef<HTMLDivElement, FilePreviewProps>(
  ({ file, onRemove }, ref) => {
    const [preview, setPreview] = React.useState<string>("")

    useEffect(() => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        setPreview(text.slice(0, 50) + (text.length > 50 ? "..." : ""))
      }
      reader.readAsText(file)
    }, [file])

    return (
      <motion.div
        ref={ref}
        className="relative flex max-w-[200px] rounded-md border border-zinc-200 p-1.5 pr-2 text-xs dark:border-zinc-800"
        layout
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
      >
        <div className="flex w-full items-center space-x-2">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-800 dark:bg-zinc-800">
            <div className="h-full w-full overflow-hidden text-[6px] leading-none text-zinc-500 dark:text-zinc-400">
              {preview || "Loading..."}
            </div>
          </div>
          <span className="w-full truncate text-zinc-500 dark:text-zinc-400">
            {file.name}
          </span>
        </div>

        {onRemove ? (
          <button
            className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            type="button"
            onClick={onRemove}
            aria-label="Remove attachment"
          >
            <Cross2Icon className="h-2.5 w-2.5" />
          </button>
        ) : null}
      </motion.div>
    )
  }
)
TextFilePreview.displayName = "TextFilePreview"

const GenericFilePreview = React.forwardRef<HTMLDivElement, FilePreviewProps>(
  ({ file, onRemove }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="relative flex max-w-[200px] rounded-md border border-zinc-200 p-1.5 pr-2 text-xs dark:border-zinc-800"
        layout
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
      >
        <div className="flex w-full items-center space-x-2">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
            <FileIcon className="h-6 w-6 text-zinc-950 dark:text-zinc-50" />
          </div>
          <span className="w-full truncate text-zinc-500 dark:text-zinc-400">
            {file.name}
          </span>
        </div>

        {onRemove ? (
          <button
            className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            type="button"
            onClick={onRemove}
            aria-label="Remove attachment"
          >
            <Cross2Icon className="h-2.5 w-2.5" />
          </button>
        ) : null}
      </motion.div>
    )
  }
)
GenericFilePreview.displayName = "GenericFilePreview"
