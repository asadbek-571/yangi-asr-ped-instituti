const BASE_PATH = "https://api.uniep.uz/api/v1/public"
let documentWrapper = document.getElementById('document-en')

async function fetchDocuments() {
    const response = await fetch(BASE_PATH + "/documents");
    return await response.json()
}

fetchDocuments()
    .then(res=>{
        res = res.data

        for (let i = 0; i < res.length; i++) {
            let tbody = document.createElement('tbody')
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            let a = document.createElement('a')
            a.href = res[i].linkEn
            a.target = "_blank"
            a.innerText = res[i].titleEn

            td.appendChild(a)
            tr.appendChild(td)
            tbody.appendChild(tr)
            documentWrapper.appendChild(tbody)
        }
    })
