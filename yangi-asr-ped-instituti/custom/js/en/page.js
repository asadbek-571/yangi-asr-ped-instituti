const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const pageType = localStorage.getItem('pageType')
let pageHeader = document.getElementById('page-header-en')
let pageBody = document.getElementById('page-body-en')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/pages/" + pageType);
    return await response.json()
}

fetchNews().then(res=>{
    res = res.data
    pageHeader.innerText = res.titleEn
    pageBody.innerHTML = res.descriptionEn
})
