function verificar(){
   var data = new Date()
   var ano = data.getFullYear()//ano inteiro 
   var formAno = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if(formAno.value.length === 0 || Number(formAno.value) > ano){//se a caixa esta vazia e se o valor digitado for  maior que o ano atual
        window.alert('[ERRO]Verifique os dados e tente novamente!')
   }else{
       var fsex = window.document.getElementsByName('radsex')//[1]//seleciona elementos com mesmo nome - 0,1
       var idade = ano - Number(formAno.value)
       var gênero = ''

       var img = document.createElement('img')//cria o elemento sem precisar de HTML
       img.setAttribute('id','foto')//cria o elemento sem precisar de HTML

       if (fsex[0].checked){
           gênero = 'Mulher'
           if(idade >= 0 && idade < 10){
               img.setAttribute('src','img/criança-F.png')//coloca a imagem no atributo
            //criança
           }else if(idade < 21){
            img.setAttribute('src','img/adolescente-F.png')
               //jovem
           }else if(idade < 50){
            img.setAttribute('src','img/adulto-F.png')
               //Adulto
           }else{
            img.setAttribute('src','img/idoso-F.png')
               //idoso
           }

       }else if(fsex[1].checked){
           gênero = 'Homem'
           if(idade >= 0 && idade < 10){
            img.setAttribute('src','img/criança-M.png')
            //criança
           }else if(idade < 21){
            img.setAttribute('src','img/adolescente-M.png')
               //jovem
           }else if(idade < 50){
            img.setAttribute('src','img/adulto-M.png')
               //Adulto
           }else{
            img.setAttribute('src','img/idoso-M.png')
               //idoso
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)//vai adicionar a imagem depois da frase
   }


}