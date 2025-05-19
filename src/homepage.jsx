


function HomePage() {
    return (
        <section className="home">
             <img src="https://servicos.dpf.gov.br/validadorDocumento/images/dpf-logo.png" />
             <h1>Validador de autenticidade de documento</h1>
             <input type="text" placeholder="Código Verificador"/>
             <div className="btns">
                <button>Vilidar</button>
                <button className="cancel">Limpar</button>
             </div>
        </section>
    )
}

export default HomePage;