

function Validated() {
    return (
        <section className="valid">
            <div className="header">
                <img src="https://servicos.dpf.gov.br/validadorDocumento/images/dpf-logo.png" />
                <h1>Documento autêntico</h1>
            </div>
            <div className="s-box">
                <h1 className="hr">Dados do documento</h1>
                <div className="grouped">
                    <div className="left">
                        <h2>Código:</h2>
                           <p className="dont">5fb739bad2e74133b04f4becf22607cf</p>
                        <h2>Nome:</h2>
                         <p className="dont">JAMES CHUKWUJEKWU</p>
                        <h2>Sobrenome:</h2>
                         <p className="dont">MMUOZOBA</p>
                        <h2>RNM:</h2>
                          <p className="dont">F178162O</p>
                        <h2>Data de nascimento:</h2>
                         <p className="dont">12/02/1987</p>
                        <h2>Nacionalidade:</h2>
                          <p className="dont">Nigéria</p>
                    </div>
                    <div className="right">
                        <p className="do">5fb739bad2e74133b04f4becf22607cf</p>
                        <p className="do">JAMES CHUKWUJEKWU</p>
                        <p className="do">MMUOZOBA</p>
                        <p className="do">F178162O</p>
                        <p className="do">12/02/1987</p>
                        <p className="do">Nigéria</p>
                    </div>


                </div>
                <div className="my">
                    <button>Voltar</button>
                </div>
            </div>
        </section>
    )
}

export default Validated;