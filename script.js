const pesoUser   = document.querySelector('#peso')
const alturaUser = document.querySelector('#altura')
const container  = document.querySelector(".conteinerFormulario")
const txt        = document.querySelectorAll(".txt")



function calcular() {
        // calculo realizado no Software 
    let resultado = pesoUser.value / alturaUser.value ** 2 
    let res = ``
    
        // validação do input
    if(txt[0].value.length === 0 || txt[1].value.length === 0 ) {
        alert('Ops, esta faltando algo. verifique e tente novamente.')
    } 
else {
        // verificação do peso
        if(resultado < 18.5) {
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p> IMC ${resultado.toFixed(2)} - Você está abaixo do ideal. Manter um peso saudável é crucial para o seu bem-estar geral e pode impactar sua energia, imunidade e qualidade de vida. Recomendo que procure um profissional de saúde para avaliar sua situação e receber orientações adequadas para alcançar um equilíbrio saudável.</p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            container.innerHTML = res 

        }else if (resultado > 18.5 && resultado < 24.9) {
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p>IMC ${resultado.toFixed(2)} - seu peso normal! É uma conquista incrível que reflete seu compromisso com a saúde e o bem-estar. Celebrar esse marco é importante, pois mostra não apenas a sua dedicação, mas também o cuidado consigo mesmo. Você está indo muito bem!</p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            
            container.innerHTML = res 
        }
        else if (resultado > 25 && resultado < 29.9) {
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p>IMC ${resultado.toFixed(2)} - você está com excesso de peso, pois isso pode ter implicações significativas para sua saúde a longo prazo. Manter um peso saudável é crucial para prevenir uma série de problemas de saúde, como doenças cardíacas, diabetes e hipertensão.</p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            container.innerHTML = res 
        }else if (resultado > 30 && resultado < 34.9){
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p>IMC ${resultado.toFixed(2)} - você está em estado de obesidade de primeiro grau, o que pode aumentar o risco de problemas de saúde como hipertensão e diabetes. Recomendo fortemente que você consulte um profissional de saúde para uma avaliação detalhada e para receber orientações sobre como adotar mudanças saudáveis na dieta e na atividade física. </p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            
            container.innerHTML = res

        }else if (resultado > 35 && resultado < 39.9){
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p>IMC ${resultado.toFixed(2)} - você está em estado de obesidade de segundo grau, o que eleva significativamente o risco de complicações graves, como doenças cardíacas, diabetes tipo 2 e problemas articulares. </p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            
            container.innerHTML = res 
        }else if (resultado > 40){
            res = `
            <div class='resposta'>
                <h1>Olá Campeões</h1>
                <p>IMC ${resultado.toFixed(2)} - Você está com obesidade de terceiro grau, o que aumenta o risco de doenças graves como insuficiência cardíaca, diabetes tipo 2 e hipertensão. É essencial procurar ajuda médica para uma avaliação completa e criar um plano de tratamento que inclua mudanças na dieta, aumento da atividade física e suporte especializado. </p>
                <button class="btn_refazer"onclick="location.reload()">Novo Calculo</button>
            </div>
            `
            
            container.innerHTML = res 
        }else {

        }
}}
 