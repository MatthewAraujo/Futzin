interface UserProps {
  username: string
}
export function User({username}: UserProps){
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center w-full">
        <span>{username}</span>
      </div>
    </div>
  )
}