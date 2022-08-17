import React, { useEffect, useState } from "react";
import Api from "../Api/api";
import Select from "react-select";

export default function FormCompra() {
  const [referencia, setReferencia] = useState("Compra");
  const [nome, setNome] = useState("");
  const [price, setPrice] = useState(0);
  const [nota, setNota] = useState("Sem Observações");

  const products = [
    { value: "pao de queijo", label: "Pao De Queijo" },
    { value: "cafe", label: "Café" },
    { value: "agua", label: "Água" },
  ];
  const mesas = [
    { value: "mesa 1", label: "Mesa 1" },
    { value: "mesa 2", label: "Mesa 2" },
    { value: "mesa 3", label: "Mesa 3" },
    { value: "mesa 4", label: "Mesa 4" },
    { value: "mesa 5", label: "Mesa 5" },
  ];

  function comprar() {
    Api.post("produtos", {
      referencia: referencia,
      nome: nome,
      preco: price,
      nota: nota,
    });
  }

  return (
    <form className="form-add">
      <Select
        options={products}
        onChange={(product) => {
          setNome(product.value);
          console.log(nome);

          if (product.value === "pao de queijo") {
            setPrice(90);
          } else if (product.value === "cafe") {
            setPrice(60);
          } else if (product.value === "agua") {
            setPrice(20);
          } else {
            setPrice(0);
          }
        }}
      />
      <input
        required
        value={`R$0,${price}`}
        placeholder="preço"
        readOnly={true}
      />
      <input
        placeholder="Obs.:"
        onChange={(e) => {
          setNota(e.target.value);
        }}
        required={true}
      />
      <Select options={mesas} onChange={(mesa) => setReferencia(mesa.value)} />
      <button onClick={comprar}>Confirmar Compra</button>
    </form>
  );
}
