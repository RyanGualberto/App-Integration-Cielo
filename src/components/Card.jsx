import React, { useState } from "react";
import Api from "../Api/api";

export default function Card() {
  return (
    <>
      <li >
        <div className="card">
          <div className="card-header">
            <h3>Pao De queijo</h3>
            <label>R$0,90</label>
          </div>
          <div className="card-body">
            <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/07/01/31650768-shutterstock1268210182-768x575.jpg" />
          </div>
        </div>
      </li>
      <li>
        <div className="card">
          <div className="card-header">
            <h3>Cafe</h3>
            <label>R$0,60</label>
          </div>
          <div className="card-body">
            <img src="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg" />
          </div>
        </div>
      </li>
      <li>
        <div className="card">
          <div className="card-header">
            <h3>Agua</h3>
            <label>R$0,20</label>
          </div>
          <div className="card-body">
            <img src="https://www.minicash.com.br/image/cache/catalog/img/produtos_2021/agua-mineral-igarape-com-gas-500ml-550x550h.png" />
          </div>
        </div>
      </li>
    </>
  );
}
