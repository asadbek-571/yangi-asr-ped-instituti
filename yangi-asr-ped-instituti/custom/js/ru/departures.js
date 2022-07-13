const BASE_PATH = "https://api.uniep.uz/api/v1/public"
let departureWrapper = document.getElementById('departure-wrapper-ru')

async function fetchDepartures() {
    const response = await fetch(BASE_PATH + "/departures");
    return await response.json()
}

fetchDepartures()
    .then(res=>{
        res = res.data

        for (let i = 0; i < res.length; i++) {
            let kafedraBox = document.createElement('div')
            kafedraBox.classList.add('kafedra-box')

            let a = document.createElement('a')
            a.innerText = res[i].nameRu
            a.onclick = ()=>{
                localStorage.setItem('departureId', res[i].id)
                window.location.href = 'kafedra.html'
            }

            kafedraBox.appendChild(a)

            departureWrapper.appendChild(kafedraBox)
        }
    })
