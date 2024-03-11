import Container from "../componets/Container"
import Offers from "../componets/Offers/Offers"
import Hero from "../componets/hero/Hero"
import Popular from "../componets/popular/Popular"


const Shop = () => {
  return (
    <div className="">
      <Container>
        <Hero/>
        <Popular/>
        <Offers/>
      </Container>
    </div>
  )
}

export default Shop
