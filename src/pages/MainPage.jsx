import Menu from "../components/Menu"
import Start from "../components/Start"
import About from "../components/About"
import Deliveries from "../components/Deliveries"
import Footer from "../components/Footer"

function MainPage(){
    return(
    <>
        <header>
          <Menu />
        </header>
        <section>
          <Start/>
        </section>
        <section>
          <About />
        </section>
        <section>
          <Deliveries />
        </section>
        <footer>
          <Footer/>
        </footer>
    </>
    )
}

export default MainPage