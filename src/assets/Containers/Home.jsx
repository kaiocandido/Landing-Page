import { Footer, Header, Section, SectionTwo } from "./styles"

export function Home() {
    return (
        <>
            <Header id="event-subscription">
                <div id="disclaimer">
                    <h2>DecorarT</h2>
                    <p className="about-event">
                        Um evento para revolucionar a sua criatividade
                    </p>
                    <p>Data do Evento:</p>
                    <p className="event-date">Domingo, 28 de Maio, a partir das 14hrs</p>
                </div>
                <div id="subscription-form">
                    <p>Prrencha o formulario para receber os detalhes do evento</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" placeholder="Digite Seu Nome" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" placeholder="Digite Seu E-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone</label>
                            <input type="text" placeholder="Digite Seu Numero" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="interest">Principal interesse</label>
                            <select name="interest">
                                <option value="" disabled selected>Selecione</option>
                                <option value="apartment">Apartamentos</option>
                                <option value="house" >Casas</option>
                                <option value="garden" >Jardins</option>
                                <option value="other" >Outros</option>
                            </select>
                        </div>
                        <input type="submit" className="btn" value="Quero me inscrever" />
                    </form>
                </div>
            </Header>

            <Section id="key-benefits">
                <h2>Oque voce vai aprender: </h2>
                <div className="benefits">
                    <div className="benefit">
                        <div className="benefit-img" id="benefit-1"></div>
                        <p>Alguma coisa muito legal, que vai fazer a diferença na vida do
                            participante.</p>
                    </div>
                    <div className="benefit">
                        <div id="benefit-2" className="benefit-img"></div>
                        <p>Alguma coisa muito legal, que vai fazer a diferença na vida do
                            participante.</p>
                    </div>

                    <div className="benefit">
                        <div id="benefit-3" className="benefit-img"></div>
                        <p>Alguma coisa muito legal, que vai fazer a diferença na vida do
                            participante.</p>
                    </div>
                </div>
            </Section>

            <SectionTwo id="location">
                <div id="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div id="address-details">
                        <p>Rua do evento, 1333</p>
                        <p>Abertura: 14h</p>
                    </div>
                </div>
                <div id="about-location">
                    <h3>Local de destaque</h3>
                    <p>
                        O evento será realizado em um local prestigiado pelos amantes de
                        Design de Interiores, onde teremos exemplos de vários ambientes, tanto
                        internos como externos.
                    </p>
                </div>
            </SectionTwo>

            <Section id="details">
                <div className="detail" id="detail-1">
                    <img src="#" alt="#" />
                    <div className="detail-description">
                        <h3>conheça os ambiente que voce vai aprender a decorar</h3>
                    </div>
                </div>
                <div className="detail" id="detail-2">
                    <div className="detail-description">
                        <h3>Detalhes</h3>
                        <ul>
                            <li>Posicionamento</li>
                            <li>Aproveitamento de espaço</li>
                            <li>Combinação de cores</li>
                            <li>Organização</li>
                            <li>E muito mais...</li>
                        </ul>
                    </div>
                    <img src="#" alt="#" />
                </div>
                <div className="detail" id="detail-3">
                    <img src="#" alt="#" />
                    <div className="detail-description">
                        <h3>Objetos</h3>
                        <ul>
                            <li>Cadeiras</li>
                            <li>Mesas</li>
                            <li>Espelhos</li>
                            <li>Plantas</li>
                            <li>Cortinas</li>
                            <li>E muito mais...</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section>
                <h3>Gostou? Então se Inscreva: </h3>
                <button className="btn">Solicitar Inscrição</button>
            </Section>

            <Footer>
                <h3>DecorarT</h3>
                <p>A evolução da decoração de interiores</p>
                <p><span>Entre em contato: </span>kaio.candf@gmail.com</p>
                <p><span>Ou pelo Telefone: </span>9999648533</p>
            </Footer>

        </>
    )
}

export default Home


