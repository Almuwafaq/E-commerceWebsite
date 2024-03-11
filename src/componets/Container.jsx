import Fotter from "./fotter/Fotter"
import Nav from "./navBar/Nav"


const Container = ({children}) => {
  return (
    <div>
        <Nav/>
        {children}
        <Fotter/>
    </div>
  )
}

export default Container