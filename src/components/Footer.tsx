import {
  Laptop2,
  Layout,
  Maximize2,
  Volume,
  Box,
  Heart,
  Mic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      {/* Primeira sessão */}
      <div className="flex items-center gap-3">
        <Image
          src="/capa-matue-mdt.webp"
          className="rounded"
          width={56}
          height={56}
          alt="Capa do álbum Máquina do Tempo da 30 pra 1"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Gorila Roxo</strong>
          <p className="text-xs text-zinc-400">Matuê</p>
        </div>
        <div className="flex items-center gap-3 ml-3 text-zinc-5s00 ">
          <Heart className="w-4 h-4" />
          <Box className="w-4 h-4" />
        </div>
      </div>
      {/* ------ */}

      {/* Segunda sessão */}
      <div className="flex flex-col items-center gap-2">
        <div className=" flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="flex items-center justify-center w-10 h-10 ml-auto pl-1 rounded-full bg-white hover:bg-white/70 ">
            <Play size={20} className="text-black" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:33</span>
          <div className="h-1 rounded-full w-[500px] bg-zinc-600">
            <div className="h-1 rounded-full bg-zinc-200 w-56"></div>
          </div>
          <span className="text-xs text-zinc-400">2:50</span>
        </div>
      </div>
      {/* ------ */}

      {/* Terceira sessão */}
      <div className="flex items-center justify-center gap-4">
        <Mic size={20} />
        <Layout size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-28 bg-zinc-600">
            <div className="h-1 rounded-full bg-zinc-200 w-16"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
      {/* ------ */}
    </footer>
  )
}
