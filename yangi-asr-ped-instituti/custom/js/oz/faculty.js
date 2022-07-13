const BASE_PATH = "https://api.uniep.uz/api/v1/public"

let facultyWrapper = document.getElementById('faculty-content-oz')
let facultyHeader = document.getElementById('faculty-header-oz')
let facultyId = localStorage.getItem('facultyId') ? localStorage.getItem('facultyId') : 0

async function fetchFaculty() {
    if (facultyId === 0){
        window.location.href = "fakultetlar.html"
    }else {
        const response = await fetch(BASE_PATH + "/faculties/" + facultyId);
        return await response.json()
    }
}

fetchFaculty()
    .then(res => {
        res = res.data
        facultyHeader.innerText = res.nameOz
        facultyWrapper.innerHTML = res.descriptionOz

})