import Image from "next/image";


const Home = async () => {
  const listings = await prisma?.listing.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return (
    <main>
      {
        listings?.map(item => (
            <div className="" key={item.id}>
              <Image src={item?.imageSrc} alt="" width={200} height={200}/>
              <div>{item.category}</div>
              <div>{item.roomCount}</div>
              <div>{item.locationValue}</div>
            </div>
        ))
      }
    </main>
  )
}

export default Home;
