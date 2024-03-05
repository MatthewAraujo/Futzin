
interface ChampionshipProps {
  champion: string
}
export function Championship({ champion }: ChampionshipProps){
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center w-full">
        <span>{champion}</span>
      </div>
    </div>
  )
}