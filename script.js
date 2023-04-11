/*
Tomate cereja 60 - 80
Alface 60 - 80
Pimenta do reino 80 - 88
 */
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
            document.getElementById("humidity").innerText = `${data.field1}`
            document.getElementById("temp").innerText = `${data.field2}`
        }

        planta = document.querySelector("#hortalicas").value
        if(planta == 1 || planta == 2)
        {
            document.getElementById("exp-humidity").innerText = "60 - 80"
            if(data.field1 < 60)
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade menor que a esperada"
            else
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade maior ou igual a esperada"
        }
        else if(planta == 3)
        {
            document.getElementById("exp-humidity").innerText = "80 - 88"
            if(data.field1 < 80)
            {
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade menor que a esperada"
            }
            else
                document.getElementById("ans").innerText = "Sua planta encontra-se com umidade maior ou igual a esperada"
        }
    }
    else
        alert("Erro ao procurar o ESP")

    })