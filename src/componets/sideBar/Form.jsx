import { Link } from "react-router-dom";
import TopAds from "../ads/topAds/TopAds";
import Button from "../../shared/button/Button";
const Form = () => {

    const datas = [
        {
            label: "First Name",
            type: "text",
            placeholder: "First Name",
            name: "Fn"
        },
        {
            label: "Last Name",
            type: "text",
            placeholder: "Last Name",
            name: "Ln"
        },
        {
            label: "password",
            type: "password",
            placeholder: "Enter Your Password",
            name: "Ps"
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Enter Your Email",
            name: "em"
        },
    ]

    return(
        <Link to="/">
        {
            datas.map((data,i)=><TopAds key={i} {...data}/>)
        }
        <Button text="submit"/>
        </Link>
    )
}
export default Form

