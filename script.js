document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault()

    //armazenar a informação digitada:
    let input = document.querySelector('#searchInput').value

    if(input !== ''){
        showWarning('Carregando...')
        // requisição pela api:
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=cb3cd9938feff1e6e485f19c6f7ffc56&units=metric&lang=pt_br`;
        let results = await fetch(url)
        let json = await results.json()
        
        if(json.cod === 200){
            clearInfo()
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }
        else {
            clearInfo()
            showWarning('Não encontramos esta localização :(')
        }
    }
    else {
        clearInfo()
    }
      
})

//Exibição dos resultados da requisição:
function showInfo(json){
    showWarning('')

    document.querySelector('.resultado').style.display = 'block'
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('ventoInfo').innerHTML = `${json.windSpeed} <span> km/h </span>`
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`
}

//Exibição de um aviso:
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}

// Para limpar a tela antes de apresentar um novo resultado:
function clearInfo(){
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}