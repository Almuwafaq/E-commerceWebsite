import data_product from '../../Data/data' 
import Items from '../items/Items'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh] pt-[0] p-[180px] w-[100vw]'>
        <h1 className='text-[50px] text-[#171717] font-semibold border-b-2 border-red-600 rounded-md'>Popular Women</h1>
        <div className="flex mt-[50px] gap-[30px] w-[1150px]">
            {data_product.map((item,i)=>{
                return <Items key={item.id} {...item}/>
            })}
        </div>
    </div>
  )
}

export default Popular