const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const pageType = localStorage.getItem('pageType')
let pageHeader = document.getElementById('page-header-uz')
let pageBody = document.getElementById('page-body-uz')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/pages/" + pageType);
    return await response.json()
}

fetchNews().then(res=>{
    res = res.data
    pageHeader.innerText = res.titleUz
    pageBody.innerHTML = res.descriptionUz
})
