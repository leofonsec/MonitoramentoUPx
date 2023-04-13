/*
canal teste: 1743428
Tomate cereja 60 - 80
Alface 60 - 80
Pimenta do reino 80 - 88
 */
divOut = document.getElementById("output")
divOut.style.display = "none"

imagem = document.getElementById("logo")
imagem.src = 'https://mlogu6g7z5ex.i.optimole.com/cb:RF8R~518a6/w:500/h:159/q:90/https://facens.br/wp-content/uploads/2021/03/logo-f-b.png'
imagem.style.width = 30 + "%"

/*Funçao async p procurar o canal no thingspeak*/
document.getElementById("funcAll").addEventListener('click', async(e)=>{
    e.preventDefault()
    let numeroEsp = document.getElementById("canal").value
    if (numeroEsp != "")
    {
        document.getElementById("espR").innerText = `${numeroEsp}`
        const ApiThingSpeak = 'https://api.thingspeak.com/channels/'+ numeroEsp +'/feeds/last.json'
        const resApi = await fetch(ApiThingSpeak) 
        const data = await resApi.json() 

        if (data.erro == true)
        {
            alert("Erro ao procurar o ESP")
        }
        else
        {
            divOut.style.display = "block"
            document.getElementById("humidity").innerText = `${data.field1}`
            document.getElementById("temp").innerText = `${data.field2}`
        }

        icone = document.getElementById("icon")
        planta = document.querySelector("#hortalicas").value
        if(planta == 1 || planta == 2)
        {
            document.getElementById("exp-humidity").innerText = "60 - 80"
            if(data.field1 < 60)
            {
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade menor que a esperada"
                icone.classList.remove("fa-check")
                icone.classList.add("fa-solid", "fa-exclamation", "fa-beat", "fa-2xl")
                icone.style.color = '#ff0000'
            }
            else
            {
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade maior ou igual a esperada"
                icone.classList.remove("fa-exclamation")
                icone.classList.add("fa-solid", "fa-check", "fa-beat", "fa-2xl")
                icone.style.color = '#25e40c'
            }
        }
        else if(planta == 3)
        {
            document.getElementById("exp-humidity").innerText = "80 - 88"
            if(data.field1 < 80)
            {
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade menor que a esperada"
                icone.classList.remove("fa-check")
                icone.classList.add("fa-solid", "fa-exclamation", "fa-beat", "fa-2xl")
                icone.style.color = '#ff0000'
            }
            else
            {
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade maior ou igual a esperada"
                icone.classList.remove("fa-exclamation")
                icone.classList.add("fa-solid", "fa-check", "fa-beat", "fa-2xl")
                icone.style.color = '#25e40c'
            }
        }
    }
    else
        alert("Erro ao procurar o ESP")

    })