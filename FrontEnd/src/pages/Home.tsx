import CardProjeto from "../components/CardProjeto"
import Container from "../components/Container"
import {Plus} from "@phosphor-icons/react";

const cards = [
    {titulo:"php", status:""},
    {titulo:"Pi", status:"alerta"},
    {titulo:"AGIOTA!", status:"atrasado"},
    {titulo:"Sem dinheiro para pagar agiota", status:""}
  ]
  const cards2 = [
    {titulo:"php", status:""},
    {titulo:"dinher", status:"alerta"},
    {titulo:"Horas de pesquisa", status:"atrasado"},
    {titulo:"Largar a Faculdade", status:"atrasado"},
  ]

  const cards3 = [
    {titulo:"php", status:""},
    {titulo:"dinher", status:"alerta"},
    {titulo:"Agora!", status:"atrasado"},
    {titulo:"Pensa melhor sobre largar a Faculdade", status:""},
  ]

export default function Home(){
    return (
        <>
            
              <div className="flex justify-end items-center">
                  <button type="submit" className="bg-slate-200 px-1 py-1 rounded-2xl text-sm flex items-center border border-black">
                      Adicionar projeto
                      <Plus size={24} className="ml-2" />
                  </button>
              </div>
      

              <div className="h-44 bg-cyan-900 rounded-xl bg-opacity-50 relative">
                <Container titulo="Projetos recentes" corTitulo={'bg-red-300'} className="h-full">
                  {cards.map((card) => {
                    return <CardProjeto titulo={card.titulo} status={card.status}/>
                  })}
                </Container>
                <figure className="absolute bottom-0 right-0 mb-4 mr-4 flex ">
                  <img
                    src="https://media.gazetadopovo.com.br/2024/02/23175636/lula-3-1280x720.jpg"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://conteudo.imguol.com.br/c/noticias/20/2022/07/09/urubu-do-pix-e-novo-golpe-na-praca-1657379024808_v2_450x450.jpg"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://http2.mlstatic.com/D_Q_NP_671372-MLU74274688600_022024-R.webp"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <h1 className="text-sm">3+</h1>
                </figure>
              </div>



              <div className="h-44 bg-cyan-900 rounded-xl bg-opacity-50 relative">   
                <Container titulo="Projetos recentes" corTitulo={'bg-blue-300'}>
                {cards2.map((item) => {
                  return <CardProjeto titulo={item.titulo} status={item.status}/>
                })}
                </Container>
                <figure className="absolute bottom-0 right-0 mb-4 mr-4 flex ">
                  <img
                    src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic_1933300.webp?w=1450&h=966&q=100"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/001-visayan-warty-pigs-nationalgeographic_2720551.webp?w=1450&h=816"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://www.olhoclinico.com.br/wp-content/uploads/2020/03/dogs-have-color-eyes--1080x630.jpg"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <h1 className="text-sm">3+</h1>
                </figure>
              </div>
               
              <div className="h-44 bg-cyan-900 rounded-xl bg-opacity-50 relative"> 
                <Container titulo="Projetos recentes" corTitulo={'bg-green-300'}>
                {cards3.map((item) => {
                  return <CardProjeto titulo={item.titulo} status={item.status}/>
                })}
                </Container>
                <figure className="absolute bottom-0 right-0 mb-4 mr-4 flex ">
                  <img
                    src="https://cinegeektech.com.br/wp-content/uploads/2024/01/luffy.png"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t39.30808-6/307125844_147447017986405_6425193064719939346_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ID-_RHbj7vcAb5y5jyb&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCSudqOluxOyLs_YhXeuBW79QqnDrV2UKRA2k6ylkBfAA&oe=663617CC"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <img
                    src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/1979084_216433435233677_1882037277_o.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jgW_KsY38lgAb5LY0dN&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfBo-KCiE12XGh5f-x4z68Ch_wRY9TzuK_7xYhz-HGpmXQ&oe=66579C36"
                    className="rounded-full w-6 h-6"
                    alt="Descrição da imagem"
                  />
                  <h1 className="text-sm">3+</h1>
                </figure>
              </div>
        </> 
    )
}