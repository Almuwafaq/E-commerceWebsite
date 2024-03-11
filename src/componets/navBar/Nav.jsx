import cart_icon from "../../assets/images/cart_icon.png"
import love_icon from "../../assets/images/Vector.png"
import Button from "../../shared/button/Button"
import logo from "../../assets/images/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"


const Nav = () => {
    const styles = "border-b-2 border-red-600"
    const [menu,setMenu] = useState("")
    return (
        <>
        <div className="bg-black w-[100%] py-[15px] text-white text-center">
          <p className="font-[poppins] text-[14px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>
       <div className="flex justify-around p-[20px] shadow-md items-center">
        <img src={logo} alt="" className="w-9"/>
        <ul className="flex gap-10 ">
            <li onClick={()=>{setMenu("shops")}}className="cursor-pointer"><Link to="/">Shop </Link>{menu==="shops" ? <div className={styles}></div> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}className="cursor-pointer"><Link to="/mens">Men</Link> {menu==="mens" ? <div className={styles}></div> : <></>}</li>
            <li onClick={()=>{setMenu("womens")}}className="cursor-pointer"><Link to="/womens">Women</Link>{menu==="womens" ? <div className={styles}></div> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}className="cursor-pointer"><Link to="kids">Kids</Link>{menu==="kids" ? <div className={styles}></div> : <></>}</li>
        </ul>
        <div className="flex gap-7">
           <img src={cart_icon} alt="" className="w-6 h-6" />
            <div className="w-[15px] h-[15px] flex justify-center items-center mt-[-5px] ml-[-38px] text-white text-[10px] bg-red-700 rounded-full">0</div>
            <img src={love_icon} alt=""  className="w-6 h-6"/>
         <Link to="/login"><Button text='Login'/></Link>
        
        </div>
       </div>
        </>
      )
}

export default Nav
