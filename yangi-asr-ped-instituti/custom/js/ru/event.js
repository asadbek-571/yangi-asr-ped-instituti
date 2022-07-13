const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const newId = localStorage.getItem('eventId')
let newHeader = document.getElementById('event-header-ru')
let newBody = document.getElementById('event-body-ru')

async function fetchEvent() {
    const response = await fetch(BASE_PATH + "/events/" + newId);
    return await response.json()
}

fetchEvent().then(res=>{
    res = res.data
    newHeader.innerText = res.titleRu
    newBody.innerHTML = res.descriptionRu
})
