import React, { useEffect, useState } from "react";
import Api from "../Api/api";

export default function ListaCompras() {
  const [ultimoPed, setUltimoPed] = useState("");
  const [pedidos, setPedidos] = useState(null);
  useEffect(buscaProdutos, []);

  function buscaProdutos() {
    Api.get("produtos")
      .then(function (response) {
        let todosPedidos = response.data;
        let ultimoPedido = todosPedidos.shift(1);

        setPedidos(response.data);
        setUltimoPed(ultimoPedido);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
  }
  console.log(pedidos);

  return (
    <table className="view-pedidos">
      <tbody>
        <tr className="title">
          <td>Ultimo Produto</td>
        </tr>
        <tr>
          <td>nome</td>
          <td>Valor</td>
          <td>status</td>
        </tr>

        {!ultimoPed.reference === null ? (
          <tr>
            <td>Carregando</td>
          </tr>
        ) : (
          <tr>
            <td>{ultimoPed.reference}</td> <td>R$0,{ultimoPed.price}</td>
            <td>{ultimoPed.status === "PAID" ? "PAGO" : "PENDENTE"}</td>
          </tr>
        )}
        <tr>
          <td className="title">Todos Os Pedidos</td>
        </tr>
        <tr>
          <td>Nome</td>
          <td>Valor</td>
          <td>status</td>
        </tr>
        {pedidos
          ? pedidos.map((produto, index) => {
              return (
                <tr key={index}>
                  <td>{produto.reference}</td>
                  <td>R$0,{produto.price}</td>
                  <td>{produto.status === "PAID" ? "PAGO" : "PENDENTE"}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
