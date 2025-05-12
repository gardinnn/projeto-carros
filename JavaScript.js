let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "https://i.pinimg.com/736x/da/81/4c/da814c490ecb1a206677990c4567d939.jpg",
        "descrição": "O Drako GTEé um sedã esportivo elétrico, capaz de atingir 402km/h(250mi) de alcance com uma unica carga."
    },
    {
        "nome": "De Tomaso P72",
        "img": "https://bloximages.chicago2.vip.townnews.com/ourwindsor.ca/content/tncms/assets/v3/editorial/7/4d/74d038b3-7db9-5f0b-889e-e371c5fac46e/64107f718d695.image.jpg",
        "descrição": "O De Tomaso P72 é um supercarro de edição limitada produzido pela marca italiana De Tomaso Automobili, inspirado no protótipo de corrida P70 dos anos 60. Baseado na Apollo Intensa Emozione, o P72 é uma homenagem à história da marca e ao espírito competitivo. "
    },
    {
        "nome": "Dodge Charger R/T de 1970",
        "img": "https://cdn.shopify.com/s/files/1/0826/5610/0692/files/dodge-charger-onroad-2.jpg?v=1731354561",
        "descrição": "O Dodge Charger R/T de 1970 é um carro clássico muito procurado, especialmente pela versão esportiva que era equipada com um motor V8 potente. Era um carro rápido e elegante, com destaque para sua estética marcante e interior luxuoso. "
    },
    {
        "nome": "Skyline R-34",
        "img": "https://www.disalconsorcio.com.br/blog/wp-content/uploads/2022/05/Nissan-Skyline-GT-R-R34-%E2%80%94-%E2%80%9CVelozes-Furiosos%E2%80%9D-Universal-Pictures-2003.jpg",
        "descrição": "O Nissan Skyline GT-R R34 é a quinta e última geração do icônico Skyline GT-R, conhecido por sua combinação de desempenho, tecnologia e design. O R34, produzido entre 1999 e 2002, é um dos carros mais procurados e admirados do mundo automotivo, especialmente pela comunidade de entusiastas de carros japoneses. "
    },
    {
        "nome": "Lamborghini Huracan",
        "img": "https://upload.wikimedia.org/wikipedia/commons/7/78/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg",
        "descrição": "O Lamborghini Huracán é um carro desportivo de luxo fabricado pela Lamborghini desde 2014, substituindo o Gallardo. O seu nome é inspirado num touro espanhol famoso, como é tradição na Lamborghini. O Huracán oferece diversas versões, incluindo a Tecnica e a STO, com motores V10 e características de desempenho impressionantes."
    },
    {
        "nome": "Koenigsegg Jesko Absolut",
        "img": "https://terrabrasilnoticias.com/wp-content/uploads/2024/07/image-214.png",
        "descrição": "O Koenigsegg Jesko Absolut é um supercarro sueco projetado para a máxima velocidade, sendo uma versão mais leve e aerodinâmica do Jesko. Ele possui um motor V8 biturbo de 5.0 litros que, ao usar bioetanol E85, pode gerar até 1.623 cavalos de potência. A velocidade máxima declarada é de 532,82 km/h, tornando-o um dos carros de produção mais rápidos do mundo. "
    }
    
]

listaCarros.map((carro, posicao)=> {
      let cardCarro = document.getElementById("cards")
      cardCarro.innerHTML += `
      <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top  alt="..." heigth: 735px width: 490px>
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary"  onclick = "zoomImg(${posicao})"><i class="bi bi-zoom-in"> </i></a>
                    </div>
                </div>
            </div>
      `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao]
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descrição
    document.getElementById("imgModal").src = carroSelecionado.img

    new bootstrap.Modal('#zoomImg').show()
}    


function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme")
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}