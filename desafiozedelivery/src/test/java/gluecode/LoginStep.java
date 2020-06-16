package gluecode;

import Pages.Login;
import Pages.SelecionarLocalizacao;
import Pages.TelaInicial;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class LoginStep {

    private TelaInicial telaInicial;
    private Login login;
    private SelecionarLocalizacao selecionarLocalizacao;

    public LoginStep(){
        this.telaInicial = new TelaInicial();
        this.login = new Login();
        this.selecionarLocalizacao = new SelecionarLocalizacao();
    }

    @Dado("que eu esteja na tela inicial do app Ze Delivery")
    public void que_eu_esteja_na_tela_inicial_do_app_Ze_Delivery() {

    }

    @Quando("clicar em Entrar")
    public void clicar_em_Entrar() {
        telaInicial.clicarBotaoEntrar();
    }

    @Quando("informar email {string} e senha {string}")
    public void informar_email_e_senha(String email, String senha) {
        login.inserirEmail(email).inserirSenha(senha).clicarBtnEntrar();
    }

    @Entao("eu irei logar no app com sucesso")
    public void eu_irei_logar_no_app_com_sucesso() {
        selecionarLocalizacao.validarSeLinkEstaNaTela();
    }

    @Entao("o app deve retornar erro informando que os dados estao incorretos")
    public void o_app_deve_retornar_erro_informando_que_os_dados_estao_incorretos() {
        login.validarMensagemEmailInvalido();
    }

    @Entao("o app deve retornar erro informando que os dados precisam ser preenchidos")
    public void o_app_deve_retornar_erro_informando_que_os_dados_precisam_ser_preenchidos() {
        login.validarMensagemEmailInvalido().validarMensagemSenhaInvalido();
    }
}
