import { Heart, HomeIcon, Library, Plus, Search } from 'lucide-react'

export function Sidebar() {
  return (
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
  )
}
