
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function HomePage() {
   
    return (
        <section className="home">
             <img src="https://servicos.dpf.gov.br/validadorDocumento/images/dpf-logo.png" />
             <h1>Validador de autenticidade de documento</h1>
             <input type="text" placeholder="Código Verificador" value="5fb739ba-d2e7-4133b04f-4becf22607cf"/>
             <div className="btns">
                <NavLink to="dadosDocumento"><button>Vilidar</button></NavLink>
               <button className="cancel">Limpar</button>
             </div>
        </section>
    )
}

export default HomePage;