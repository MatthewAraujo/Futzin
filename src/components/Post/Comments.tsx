import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function Comentario() {

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center w-full">
        <span>user</span>
        <p className="text-sm text-gray-400">3m</p>
      </div>
      <p className="">Cometario Muito Interessante</p>
    </div>
  )
}

export function Comment() {
  const comments = 12
  
  return (
    <Collapsible className="w-full ">
      <CollapsibleTrigger>
       {
          comments > 0 ? (
            <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              {comments} comments
            </span>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Add a comment
            </span>
          )
       }
      </CollapsibleTrigger>
      <CollapsibleContent className=" flex flex-col items-baseline justify-start">
        {
          comments > 0 ? (
             <>
              {
                Array.from({ length: comments }).map((_, i) => (
                  <Comentario key={i} />
                ))
              }
             </>
              
          ) : (
            <div className="flex items-center space-x-2">
              <span>Be the first to comment</span>
            </div>
          )
        }
      </CollapsibleContent>
    </Collapsible>

  )
}