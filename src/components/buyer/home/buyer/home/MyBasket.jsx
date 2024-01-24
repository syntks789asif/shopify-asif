import ProductCards from "./ProductCards"

const MyBasket = () => {
  return (
    <section className='container-fluid w-[90%] min-h-[100vh] bg-[#E8E8E8] rounded shadow flex flex-col justify-start gap-6 '>
        <div className='flex justify-between p-2 items-center'>
            <h1 className='text-2xl font-bold'>My Smart Basket</h1>
            <div className='flex justify-between p-2 items-center gap-2'><a href="#" className='text-lg'>View</a>
            <div>?</div><div>?</div></div>
        </div>
        <div className='container-fluid flex justify-evenly items-center gap-[1vw] '> 
            
            <ProductCards/>
            <ProductCards/>
            <ProductCards/>
            <ProductCards/>
        </div>

    </section>
  )
}

export default MyBasket