
const links =[
    {
        id:1,
        name:"Intro",
        link:"#intro"
    },
    {
        id:2,
        name:"Work",
        link:"#Work"
    },
    {
        id:3,
        name:"Services",
        link:"#services"
    },
    {
        id:4,
        name:"Contact",
        link:"#contact"
    },
]


const Links = () => {
  return (
    <div className="lg:flex items-start flex-col hidden justify-between py-4 px-4 z-50 lg:px-6 fixed top-2/4 lg:top-32 left-0 shadow-lg bg-gradient-t-tr from-[#000000a9] to-[#ffffffc2]">
        {
            links.map((item)=>{
                return(
                    <div key={item.id} className='m-2 bg-[#FFE457] py-2 px-2 w-full text-black lg:px-6 hover:scale-110 2s linear'>
                       <a href={item.link} className="font-bold uppercase">{item.name}</a> 
                    </div>
                )
            })
        }
    </div>
  )
}

export default Links