const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const pageType = localStorage.getItem('pageType')
let pageHeader = document.getElementById('page-header-oz')
let pageBody = document.getElementById('page-body-oz')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/pages/" + pageType);
    return await response.json()
}

fetchNews().then(res=>{
    res = res.data
    pageHeader.innerText = res.titleOz
    pageBody.innerHTML = res.descriptionOz
})
