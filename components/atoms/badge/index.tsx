export default function Badge({ icon, classExtra = "" }: { icon: string; classExtra?: string }) {
  return (
    <div className="color-gradient flex size-[72px] items-center justify-center rounded-full shadow-lg">
      <i className={`flex size-10 items-center justify-center text-white ${classExtra}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
          <path width="40px" height="40px" fill="white" d={icon} />
        </svg>
      </i>
    </div>
  )
}
