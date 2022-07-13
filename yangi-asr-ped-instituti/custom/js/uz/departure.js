const BASE_PATH = "https://api.uniep.uz/api/v1/public"

let departureWrapper = document.getElementById('departure-content-uz')
let departureHeader = document.getElementById('departure-header-uz')
let departureId = localStorage.getItem('departureId') ? localStorage.getItem('departureId') : 0

async function fetchFaculty() {
    if (departureId === 0){
        window.location.href = "kafedralar.html"
    }else {
        const response = await fetch(BASE_PATH + "/departures/" + departureId);
        return await response.json()
    }
}

fetchFaculty()
    .then(res => {
        res = res.data
        departureHeader.innerText = res.nameUz
        departureWrapper.innerHTML = res.descriptionUz

})