
interface FavoritePlayerProps {
  player: string
}

export function FavoritePlayer({ player }: FavoritePlayerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center w-full">
        <span>{player}</span>
      </div>
    </div>
  )
}