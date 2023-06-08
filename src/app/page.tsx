import Image from "next/image";


const Home = async () => {
  const listings = await prisma?.listing.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <main className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
      {
        listings?.map(item => (
            <div className="bg-[#F5F5F5] group rounded-md overflow-hidden cursor-pointer border border-purple-950" key={item.id}>
             <div className="aspect-square relative group-hover:scale-105 transition">
               <Image src={item?.imageSrc} alt="" fill/>
             </div>
              <div className="flex flex-col p-3">
                <div className="font-medium"><span className="underline font-bold">Country:</span> {item.locationValue}</div>
                <div className="font-medium"><span className="underline font-bold">Category:</span> {item.category}</div>
                <div className="font-medium"><span className="underline font-bold">Room Count:</span> {item.roomCount}</div>
              </div>
            </div>
        ))
      }
    </main>
  )
}

export default Home;
