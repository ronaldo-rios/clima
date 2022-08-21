document.querySelector('.busca').addEventListener('.submit', async(event)=>{
    event.preventDefault()

    //armazenar a informação digitada:
    let input = document.querySelector('#searchInput').value

    if(input !== ' '){

    }
    else {

    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encondeURI(input)}&appid=cb3cd9938feff1e6e485f19c6f7ffc56&units=metric&leng=pt_br`
    let results = await fetch(url)
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}