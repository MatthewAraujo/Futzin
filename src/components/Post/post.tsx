import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image"
import { Comment } from "./Comments"
import { TagPeople } from "./TagPeople"
import { FavoritePlayer } from "./FavoritePlayer"
import { Championship } from "./Championship"
import { Button } from "../ui/button"

interface PostProps {
  game: string
  date: string
  description: string
  image: string
  people: string[]
  favoritePlayer: string
  champion: string
}

export default function Post({ game,favoritePlayer, champion,date,people, description, image }: PostProps) {

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-0 ">
        <Image alt="Post Image" className="aspect-square object-cover  rounded-md rounded-b-none" height={400} src={image} width={400} />
      </CardContent>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <TagPeople user={people} />
          </div>
          <Button className="border-gray-200 dark:border-gray-800" size="sm" variant="outline">
            <FavoritePlayer player={favoritePlayer} />
          </Button>
          <Button className="border-gray-200 dark:border-gray-800" size="sm" variant="outline">
            <Championship champion={champion} />
          </Button>
          
        </div>
        <div className="space-y-2">
          <div className="text-base font-semibold leading-none">{game}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
        </div>
        <div className="">
          <p className="text-sm text-gray-700 line-clamp-3	">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-baseline ">
        <Comment />
      </CardFooter>
    </Card>
  )
}
