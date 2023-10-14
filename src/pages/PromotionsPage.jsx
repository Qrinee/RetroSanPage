import Menu from "../components/Menu"
import HeadAndDesc from "../components/HeadAndDesc"
function PromotionsPage(){
    return(
    <>
        <header>
            <Menu/>
            <div className="addict menu">
            <HeadAndDesc title="Promocje" desc="Wszystkie promocję są ogłaszane na tej stronie" />
           

            </div>
        </header>
    </>
    )
}

export default PromotionsPage