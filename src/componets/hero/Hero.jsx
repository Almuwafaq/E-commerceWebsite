import handIcon from "../../assets/images/hand_icon.png"
import arrowIcon from "../../assets/images/arrow.png"
import heroImage from "../../assets/images/hero_image.png"

const Hero = () => {
  return (
    <div className="h-[100vh] flex bg-gradient-to-r from-purple-400 to-pink-100 w-[100%]">
        <div className="flex flex-1 flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
            <h2 className="text-[26px] text-[#090909] font-semibold">New Arrivals Only</h2>
            <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[65px] font-medium font-[poppins]">new</p>
            <img src={handIcon} alt=""  className=" w-[100px]"/>
        </div>

        <div className="">
            <p className="text-[#171717] text-[65px] font-medium font-[poppins]">collection</p>
            <p className="text-[#171717] text-[65px] font-medium font-[poppins]">For Everyone</p>
        </div>
        <div className="flex items-center justify-center gap-[15px] w-[280px] h-[50px] rounded-lg mt-[30px] bg-[#ff4141] text-white">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="" />
        </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center">
            <img src={heroImage} alt="" className="w-[400px]" />
        </div>
    </div>
  )
}

export default Hero