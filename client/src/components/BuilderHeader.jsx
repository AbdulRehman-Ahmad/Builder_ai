import React from 'react'
import {
  ArrowLeftIcon,
  EyeIcon,
  Code2Icon,
  ExternalLinkIcon,
  Loader2Icon,
  GlobeIcon,
  DownloadIcon
} from 'lucide-react'



const BuilderHeader = ({
  projectName,
  version,
  showCode,
  publishing,
  onToggleShowCode,
  onOpenPreview,
  onPublish,
  onDownload,
  onBack,
  onLogout,
}) => {
  return (
   <header className="flex items-center justify-between px-4 py-2 border-b border-zinc-200">
      <div className="flex items-center gap-2">
         <button onClick={onBack} className="p-1 rounded-md hover:bg-white/10">
            <ArrowLeftIcon size={16} />
         </button>
         <img src="/logo.svg" alt="Logo" className="h-6 invert" />
         <span className="text-sm font-medium text-zinc-900">{projectName}</span>
         <span className="text-xs text-zinc-600">v{version}</span>

      </div>
      <div className="flex items-center gap-1.5">
         <button
            onClick={onToggleShowCode}
            className={`inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-xs font-medium rounded-lg cursor-pointer bg-white ${showCode ? "bg-zinc-100 text-zinc-900" : ""}`}
         >
            {showCode ? (
               <>
                 <EyeIcon size={13}/> Preview
               </>
            ) : (
               <>
                 <Code2Icon size={13}/> Code
               </>
            )}
         </button>
         <button
            onClick={onOpenPreview}
            className='inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-xs font-medium rounded-lg cursor-pointer bg-white'>
            <ExternalLinkIcon size={13} /> Open Preview
         </button>

         <button
            onClick={onPublish}
            disabled={publishing}
            className='inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-xs font-medium rounded-lg cursor-pointer bg-white'>
            {publishing ? (
               <Loader2Icon size={13} className="animate-spin"/>
            ) : (
               <GlobeIcon size={13}/>
            )} Publish
         </button>
         <button
            onClick={onDownload}
            className='inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-xs font-medium rounded-lg cursor-pointer bg-white'>
            <DownloadIcon size={13} /> Export
         </button>

         <button
            onClick={onLogout}
            className='inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-xs font-medium rounded-lg cursor-pointer bg-white'>
            Sign out
         </button>
      </div>
   </header>
  )
}

export default BuilderHeader