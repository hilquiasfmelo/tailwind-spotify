import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export function Main() {
  return (
    <main className="flex-1 p-6">
      {/* Botões de ir e voltar */}
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      {/* Primeira sessão */}
      <h1 className="font-semibold mt-10 sm:text-3xl text-xl">
        Good Afternoon
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            width={104}
            height={104}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong>Máquina do Tempo</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            width={104}
            height={104}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong>Imunidade Musical</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            width={104}
            height={104}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong>Máquina do Tempo</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            width={104}
            height={104}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong>Imunidade Musical</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            width={104}
            height={104}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong>Máquina do Tempo</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            width={104}
            height={104}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong>Imunidade Musical</strong>

          <button className="flex items-center justify-center w-12 h-12 ml-auto mr-8 pl-1 rounded-full bg-green-400 hover:bg-green-500 text-black invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>
      {/* ------ */}

      {/* Segunda sessão */}
      <h2 className="font-semibold mt-10 sm:text-2xl text-xl">
        Made For hilquiasfmelo
      </h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-matue-mdt.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Máquina do Tempo da 30 pra 1"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
      </div>
      {/* ------ */}

      {/* Terceira Sessão */}
      <h2 className="font-semibold mt-10 sm:text-2xl text-xl">Jump back in</h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-3 p-3 rounded hover:bg-white/10 transition ease-in-out"
        >
          <Image
            src="/capa-cbjr.webp"
            className="w-full rounded"
            width={120}
            height={120}
            alt="Capa do álbum Imunidade Musical do CBJR"
          />
          <strong className="mt-1 text-white font-semibold">
            Discover Weekly
          </strong>
          <p className="text-sm text-zinc-400">
            Your weekly mixtape of fresh music. Enjoy ne...
          </p>
        </a>
      </div>
    </main>
  )
}
