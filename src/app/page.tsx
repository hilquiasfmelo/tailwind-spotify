import {
  ChevronRight,
  Home as HomeIcon,
  Search,
  Library,
  Heart,
  Plus,
  ChevronLeft,
  Play,
  Box,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex place-items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex place-items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex place-items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="space-y-5 mt-10 pb-4 border-b border-zinc-800">
            <a
              href=""
              className="flex place-items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <div className="flex items-center justify-center bg-zinc-400 rounded-sm w-6 h-6">
                <Plus className="text-zinc-800 w-4 h-4" />
              </div>
              Create Playlist
            </a>
            <a
              href=""
              className="flex place-items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-violet-800 to-white rounded-sm w-6 h-6">
                <Heart className="text-zinc-100 w-4 h-4" />
              </div>
              Liked Songs
            </a>
          </nav>

          <nav className="flex flex-col gap-3 mt-4">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Charlie Brown Jr
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Three Days Grace
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Detonautas
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Nirvana
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Wesley Safadão
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              João Gomes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              As melhores 2023
            </a>
          </nav>
        </aside>
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
          <h2 className="font-semibold mt-10 sm:text-2xl text-xl">
            Jump back in
          </h2>
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
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
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
          <div className="flex items-center gap-3 ml-3 text-zinc-400 ">
            <Heart className="w-4 h-4" />
            <Box className="w-4 h-4" />
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  )
}
