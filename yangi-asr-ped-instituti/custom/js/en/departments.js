const BASE_PATH = "https://api.uniep.uz/api/v1/public"
let departmentWrapper = document.getElementById('department-wrapper-en')

async function fetchDepartures() {
    const response = await fetch(BASE_PATH + "/departments");
    return await response.json()
}

fetchDepartures()
    .then(res=>{
        res = res.data

        for (let i = 0; i < res.length; i++) {
            let a = document.createElement('a')
            let kafedraBox = document.createElement('div')
            kafedraBox.classList.add('kafedra-box')
            kafedraBox.innerText = res[i].nameEn

            a.onclick = ()=>{
                localStorage.setItem('departmentId', res[i].id)
                window.location.href = 'sections/department.html'
            }

            a.appendChild(kafedraBox)

            departmentWrapper.appendChild(a)
        }
    })
