const BASE_PATH = "https://api.uniep.uz/api/v1/public"

let slideNews = document.getElementById('slide-news-ru')
let slideEvents = document.getElementById('slide-events-ru')
let slideDocs = document.getElementById('slide-docs-ru')
let sliderBody = document.getElementById('slider-body-ru')

let newsWrapper = document.getElementById('news-wrapper-ru')

let faculties = document.getElementById('faculties-ru')
let specialities = document.getElementById('specialities-ru')
let students = document.getElementById('students-ru')
let teachers = document.getElementById('teachers-ru')
let partners = document.getElementById('partners-ru')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/news");
    return await response.json()
}

async function fetchEvents() {
    const response = await fetch(BASE_PATH + "/events");
    return await response.json()
}

async function fetchDocuments() {
    const response = await fetch(BASE_PATH + "/documents");
    return await response.json()
}

async function fetchNumbers() {
    const response = await fetch(BASE_PATH + "/numbers")
    return await response.json()
}

function clearPage(){
    localStorage.removeItem('current-page')
}

setToBody(fetchNews(), "news/new.html", "newId")

function setToBody(promise, href, key) {
    promise.then(res => {
        res = res.data.slice(0, 3)
        sliderBody.innerHTML = ''
        for (let i = 0; i < res.length; i++) {
            const a = document.createElement("a")
            const img = document.createElement("img")
            const span = document.createElement('span')
            span.innerText = res[i].titleRu
            img.src = "../../assets/LOGO-SVG.svg"
            a.appendChild(img)
            a.appendChild(span)
            const div = document.createElement("div")
            a.href = href === "" ? res[i].linkRu : href
            if (key !== "")
                a.onclick = () => {
                    localStorage.setItem(key, res[i].id)
                }
            div.classList.add('square')
            div.appendChild(a)
            sliderBody.appendChild(div)
        }
    })
}

fetchNews().then(res => {
    res = res.data.slice(0, 4)
    for (let i = 0; i < res.length; i++) {
        let newItem = res[i]

        let colDiv = document.createElement('div')
        colDiv.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12", "px-4")

        let card = document.createElement('div')
        card.classList.add("card", "news-card")

        let imgWrapper = document.createElement("div")
        imgWrapper.classList.add("img-wrapper")

        let img = document.createElement("img")
        img.src = newItem.mainImage.fullPath
        img.classList.add("card-img-top")

        imgWrapper.appendChild(img)

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let cardText = document.createElement("div")
        cardText.classList.add("card-text")

        let cardTextA = document.createElement("a")
        cardTextA.classList.add("card-text-header")
        cardTextA.innerText = newItem.titleRu

        let cardTexBody = document.createElement("p")
        cardTexBody.classList.add("card-text-body")
        cardTexBody.innerText = newItem.textRu

        let more = document.createElement("div")
        more.classList.add("row", "justify-content-between", "mt-2", "align-items-center")

        let date = document.createElement("div")
        date.classList.add("col-6", "news-date")
        date.innerHTML = newItem.date.substring(0, 10)

        let buttonWrapper = document.createElement("div")
        buttonWrapper.classList.add("col-6")

        let button = document.createElement("a")
        button.classList.add("more")
        button.href = "news/new.html"
        button.onclick = () => {
            localStorage.setItem("newId", newItem.id)
        }
        button.innerText = "Далее"


        buttonWrapper.appendChild(button)
        more.appendChild(date)
        more.appendChild(buttonWrapper)
        cardText.appendChild(cardTextA)
        cardText.appendChild(cardTexBody)
        cardText.appendChild(more)
        cardBody.appendChild(cardText)
        card.appendChild(imgWrapper)
        card.appendChild(cardBody)
        colDiv.appendChild(card)
        newsWrapper.appendChild(colDiv)
    }
})

fetchNumbers()
    .then(res => {
        res = res.data
        for (let i = 0; i< res.length; i++) {
            switch (res[i].head) {
                case 'Fakultetlar':
                    faculties.innerText = res[i].body
                    break;
                case "Yo'nalishlar":
                    specialities.innerText = res[i].body
                    break;
                case "Talabalar":
                    students.innerText = res[i].body
                    break;
                case "O'qituvchilar":
                    teachers.innerText = res[i].body
                    break;
                case "Hamkorlar":
                    partners.innerText = res[i].body
                    break;
            }
        }
    })


slideNews.addEventListener("click", function () {
    slideNews.classList.add('active')
    slideEvents.classList.remove('active')
    slideDocs.classList.remove('active')

    setToBody(fetchNews(), "news/new.html", "newId")
})

slideEvents.addEventListener("click", function () {
    slideEvents.classList.add('active')
    slideDocs.classList.remove('active')
    slideNews.classList.remove('active')

    setToBody(fetchEvents(), "events/event.html", "eventId")
})

slideDocs.addEventListener("click", function () {
    slideDocs.classList.add('active')
    slideNews.classList.remove('active')
    slideEvents.classList.remove('active')

    setToBody(fetchDocuments(), "", "")
})


