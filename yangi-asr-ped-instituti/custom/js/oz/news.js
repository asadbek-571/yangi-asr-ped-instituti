const BASE_PATH = "https://api.uniep.uz/api/v1/public"
const pagination = document.getElementById('pagination')
let content = document.getElementById('content-oz')

async function fetchNews() {
    const response = await fetch(BASE_PATH + "/news");
    return await response.json()
}

fetchNews().then(res => {
    const news = res.data

    function getData() {
        pagination.innerHTML = ''
        content.innerHTML=''
        const currentPage = localStorage.getItem('current-page') ? Number.parseInt(localStorage.getItem('current-page')) : 1
        const pages = Number.parseInt(news.length / 15) + 1
        let li1 = document.createElement('li')
        li1.classList.add('page-item')
        let a1 = document.createElement('a')
        a1.classList.add('page-link')
        a1.style.cursor = 'pointer'
        let span1 = document.createElement('span')
        span1.innerHTML = '&laquo';

        a1.onclick = () => {
            if (currentPage > 1) {
                localStorage.setItem('current-page', currentPage - 1)
                getData()
            }
        }

        a1.appendChild(span1)
        li1.appendChild(a1)
        pagination.appendChild(li1)

        for (let i = 1; i <= 7 && i <= pages; i++) {
            let li2 = document.createElement('li')
            li2.classList.add('page-item')
            let a2 = document.createElement('a')
            a2.classList.add('page-link',)
            a2.style.cursor = 'pointer'
            if (currentPage <= 4) {
                if (i === 6) {
                    a2.innerText = '...'
                } else if (i === 7) {
                    a2.innerText = pages
                    a2.onclick = () => {
                        localStorage.setItem('current-page', pages)
                        getData()
                    }
                } else {
                    a2.innerText = i;
                    a2.onclick = () => {
                        localStorage.setItem('current-page', i)
                        getData()
                    }
                }
            } else if (currentPage + 3 >= pages) {
                if (i === 2) {
                    a2.innerText = '...'
                } else if (i === 1) {
                    a2.innerText = 1
                    a2.onclick = () => {
                        localStorage.setItem('current-page', 1)
                        getData()
                    }
                } else {
                    a2.innerText = pages + i - 7;
                    a2.onclick = () => {
                        localStorage.setItem('current-page', pages + i - 7)
                        getData()
                    }
                }
            } else {
                if (i === 2 || i === 6) {
                    a2.innerText = '...'
                } else if (i === 1) {
                    a2.innerText = 1
                    a2.onclick = () => {
                        localStorage.setItem('current-page', 1)
                        getData()
                    }
                } else if (i === 7) {
                    a2.innerText = pages
                    a2.onclick = () => {
                        localStorage.setItem('current-page', pages)
                        getData()
                    }
                } else {
                    a2.innerText = currentPage + i - 4
                    a2.onclick = () => {
                        localStorage.setItem('current-page', currentPage + i - 4)
                        getData()
                    }
                }
            }
            if (a2.innerText === currentPage + '') {
                a2.style.display = 'inline-block'
                a2.style.background = 'blue'
                a2.style.color = 'white'
            }
            li2.appendChild(a2)
            pagination.appendChild(li2)
        }

        let li3 = document.createElement('li')
        li3.classList.add('page-item')
        let a3 = document.createElement('a')
        a3.classList.add('page-link')
        let span3 = document.createElement('span')
        span3.innerHTML = '&raquo';
        a3.style.cursor = 'pointer'


        a3.onclick = () => {
            if (currentPage < pages) {
                localStorage.setItem('current-page', currentPage + 1)
                content.innerHTML=''
                getData()
            }
        }

        a3.appendChild(span3)
        li3.appendChild(a3)
        pagination.appendChild(li3)

        let res = news
        if (news.length > 15)
            res = news.slice(currentPage - 1, currentPage + 14)

        for (let i = 1; i <= res.length; i++) {
            let newItem = res[i-1]

            let colDiv = document.createElement('div')
            colDiv.classList.add("col-md-4", "col-sm-6", "col-12", "p-2")

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
            cardTextA.innerText = newItem.titleOz

            let cardTexBody = document.createElement("p")
            cardTexBody.classList.add("card-text-body")
            cardTexBody.innerText = newItem.textOz

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
            button.innerText = "Батафсил"

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
            content.appendChild(colDiv)
        }

    }

    getData()
})

