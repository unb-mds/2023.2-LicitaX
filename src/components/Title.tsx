"use client"
import { useState, useEffect } from "react"
import { Else, If, Then } from "react-if";

interface TitleProps {
  municipio: string;
  ano: string;
}

export default function Title({ municipio, ano }: TitleProps) {
  const [titleText, setTitleText] = useState("Ceará");
  const buildTitle = (municipio: string) => {
    if (municipio !== "geral") {
      fetch(`https://raw.githubusercontent.com/unb-mds/2023-2-Squad07/main/public/resultados.json`, {})
        .then((response) =>
          response.json()
        )
        .then((data) => {
          const title = data.nome as string;
          setTitleText(title);
        })
    }



  };
  useEffect(() => {
    buildTitle(municipio as string);
  }, []);
  return (
    <h1 className=" text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">
      <If condition={ano === "geral"}>
        <Then>
          Acompanhe a quantidade de avisos de licitação que ocorreram em
          <span className="text-[#4AA381]">{(" " + titleText) as string}</span>
        </Then>
        <Else>
        Acompanhe a quantidade de avisos de licitação que ocorreram em
          <span className="text-[#4AA381]">{(" " + titleText) as string} - {(" " + ano) as string}</span>
        </Else>
      </If>

    </h1>
  )
}