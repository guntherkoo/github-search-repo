interface TitleInstructionsProps {
  title: string
  instructions: string
}

const TitleInstructions = ({ title, instructions }: TitleInstructionsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-1xl font-normal">{instructions}</p>
    </div>
  )
}

export default TitleInstructions
