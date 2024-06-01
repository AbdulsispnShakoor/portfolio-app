import { textsvgs } from "./textsvg"


const LargeText = () => {
   
   
  return (
    <div   className="flex items-start justify-start lg:gap-32 flex-wrap md:flex-nowrap px-8 lg:px-48 py-8 bg-black min-h-56 mt-8 md:mt-0 overflow-x-hidden">
        {
            textsvgs.map((textsvg) => {
                return (
                    <div key={textsvg.id} className="w-64 lg:w-96">
                        {textsvg.file}
                    </div>
                )
            })
        }
    </div>
  )
}

export default LargeText