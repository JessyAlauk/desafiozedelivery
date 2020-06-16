package gluecode;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.HashMap;
import java.util.Map;
import static org.junit.Assert.*;

public class APIStep {

    private RequestSpecification request;
    private Response response = null;

    @Dado("que eu queria consultar o clima")
    public void que_eu_queria_consultar_o_clima() {
        RestAssured.baseURI = "http://api.openweathermap.org/data/2.5/weather";
        Map<String, String> autenticacaoRequest = new HashMap<>();
//        request = RestAssured.given().relaxedHTTPSValidation();
        request = RestAssured.given();
        autenticacaoRequest.put("Content-Type", "application/json");
        request.headers(autenticacaoRequest);
    }

    @Quando("informo a cidade {string}")
    public void informo_a_cidade(String cidade) {
        request.param("q", cidade).param("APPID", "1aed4ee0aad9dd4a9bc3328cec7e2f24");
    }

    @Entao("o clima da cidade eh informado")
    public void o_clima_da_cidade_eh_informado() {
        response = request.get();
        System.out.println(response.prettyPrint());
    }

    @Entao("deve retornar o status {string}")
    public void deve_retornar_o_status(String status) {
        int statusNum = Integer.parseInt(status);
        assertEquals("Status ok", response.getStatusCode(),statusNum);
    }
}
