import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { User } from "./User"
import { TagIcon } from "lucide-react"

interface TagPeopleProps {
  user: string[]
}


export function TagPeople({ user }: TagPeopleProps) {
  return (
    <HoverCard>
      <HoverCardTrigger className="">
        <TagIcon />
      </HoverCardTrigger>
      <HoverCardContent>
        {
          user.map((username, index) => (
            <User key={index} username={username} />
          ))
        }
      </HoverCardContent>
    </HoverCard>

  )
}