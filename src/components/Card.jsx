import React, { useState } from "react";
import Api from "../Api/api";

export default function Card() {
  const [ultimo, setUltimo] = useState("");
  const [referencia, setReferencia] = useState("");

  setInterval(() => {
    Api.get("/produtos")
      .then(function (response) {
        // manipula o sucesso da requisição
        let ultimoPedido = response.data.shift(1);
        console.log(ultimoPedido);
        setReferencia(ultimoPedido.reference);
        setUltimo(ultimoPedido.status);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
  }, 9000);

  function comprarPDQ() {
    Api.post("produtos", {
      referencia: "Compra de Pão De Queijo",
      nome: "Pão De Queijo",
      preco: 90,
      nota: "Obrigado por Comprar aqui",
    });
  }
  function comprarCf() {
    Api.post("produtos", {
      referencia: "Compra de Café",
      nome: "Café",
      preco: 60,
      nota: "Obrigado por Comprar aqui",
    });
  }
  function comprarAg() {
    Api.post("produtos", {
      referencia: "Compra de Agua",
      nome: "Agua",
      preco: 20,
      nota: "Obrigado por Comprar aqui",
    });
  }

  return (
    <>
      <li>
        <div className="card">
          <div className="card-header">
            <h3>Pao De queijo</h3>
          </div>
          <div className="card-body">
            <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/07/01/31650768-shutterstock1268210182-768x575.jpg" />
            <div className="products-info">
              <label>R$0,90</label>
            </div>
            <button className="btn btn-buy" onClick={comprarPDQ}>
              Comprar
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="card">
          <div className="card-header">
            <h3>Cafe</h3>
          </div>
          <div className="card-body">
            <img src="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg" />
            <div className="products-info">
              <label>R$0,60</label>
            </div>
            <button className="btn btn-buy" onClick={comprarCf}>
              Comprar
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="card">
          <div className="card-header">
            <h3>Agua</h3>
          </div>
          <div className="card-body">
            <img src="https://www.minicash.com.br/image/cache/catalog/img/produtos_2021/agua-mineral-igarape-com-gas-500ml-550x550h.png" />
            <div className="products-info">
              <label>R$0,20</label>
            </div>
            <button className="btn btn-buy" onClick={comprarAg}>
              Comprar
            </button>
          </div>
        </div>
      </li>
      <li>
        Utima Compra, feito pela {referencia}{" "}
        {ultimo === "PAID" ? "Pago" : "Pendente"}
      </li>
    </>
  );
}
