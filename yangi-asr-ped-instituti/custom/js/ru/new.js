const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const newId = localStorage.getItem('newId')
let newHeader = document.getElementById('new-header-ru')
let newBody = document.getElementById('new-body-ru')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/news/" + newId);
    return await response.json()
}

fetchNews().then(res=>{
    res = res.data
    newHeader.innerText = res.titleRu
    newBody.innerHTML = res.descriptionRu
})
