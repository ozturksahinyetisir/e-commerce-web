
interface HeadingProps {
    center?: boolean
    text: string
}

const Heading:React.FC<HeadingProps> = ({center, text}) => {
  return (
    <div className={`text-slate-700 font-semibold text-xl md:px-10 md ${center ? 'text-center' : 'text-start'}`}>
      {text}
    </div>
  )
}

export default Heading