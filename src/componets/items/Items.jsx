

const Items = ({image,name,new_price,old_price}) => {
  return (
    <div className="w-[350px]">
        <img src={image} alt="" />
        <p className="m-[6px 0px]">{name}</p>
        <div className="flex gap-[20px]">
            <div className="text-[#374151] text-[18px]">
                ${new_price}
            </div>
            <div className="text-[#374151] text-[18px]">
                ${old_price}
            </div>
        </div>
    </div>
  )
}

export default Items