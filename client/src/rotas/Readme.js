import React from "react";
import "../App.css";

export default function Readme() {
  return (
    <div className="readme">
      <h1 id="desafio_icts">Desafio_ICTS</h1>
      <blockquote>
        <p>Projeto feito para o grupo ICTS</p>
      </blockquote>
      <h2 id="pr-requisitos">Pré-Requisitos</h2>
      <pre>
        <code class="lang-sh">
          <span class="hljs-keyword">Node</span>.
          <span class="hljs-title">js</span> <span class="hljs-number">14</span>
          + NPM MYSQL <span class="hljs-number">5</span>+ (mysqld.exe)
        </code>
      </pre>
      <h2 id="instala-o">Instalação</h2>
      <p>
        <strong>ANTES INSTALAR</strong> veja os Pré-Requisitos
      </p>
      <p>Começe clonando o repositório em sua maquina:</p>
      <pre>
        <code class="lang-sh">
          $ git <span class="hljs-keyword">clone</span>{" "}
          <span class="hljs-title">https</span>
          ://github.com/andre-vg/Desafio_ICTS.git $ cd Desafio_ICTS
        </code>
      </pre>
      <blockquote>
        <p>
          Após clonar iniciar o mysqld.exe(mysqldemon), na pasta Sql do projeto
          contém as tabelas para uso
        </p>
      </blockquote>
      <p>
        Preferencialmente pelo VSCode usar os comandos para iniciar o React:
      </p>
      <pre>
        <code class="lang-sh">
          $ <span class="hljs-built_in">cd</span> client $ npm{" "}
          <span class="hljs-built_in">start</span>
        </code>
      </pre>
      <p>Em outro terminal para iniciar o Node usar:</p>
      <pre>
        <code class="lang-sh">
          $ cd server $ npm <span class="hljs-keyword">run</span>
          <span class="bash"> devStart</span>
        </code>
      </pre>
      <p>Após os passos o projeto esta pronto para testagem.</p>
      <blockquote>
        <p>Feito por André Victor Geronimo Gonçalves</p>
      </blockquote>
      <p>
        <img
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
          alt="image"
        />
        <img
          src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&amp;logo=mysql&amp;logoColor=white"
          alt="image"
        />
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB"
          alt="image"
        />
        <img
          src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white"
          alt="image"
        />
        <img
          src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white"
          alt="image"
        />
      </p>
      <a href="https://github.com/andre-vg">GitHub</a>
    </div>
  );
}
