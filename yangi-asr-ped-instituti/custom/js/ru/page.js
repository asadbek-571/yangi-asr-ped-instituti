const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const pageType = localStorage.getItem('pageType')
let pageHeader = document.getElementById('page-header-ru')
let pageBody = document.getElementById('page-body-ru')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/pages/" + pageType);
    return await response.json()
}

fetchNews().then(res=>{
    res = res.data
    pageHeader.innerText = res.titleRu
    pageBody.innerHTML = res.descriptionRu
})
