const BASE_PATH = "https://api.uniep.uz/api/v1/public"

let facultyWrapper = document.getElementById('faculty-wrapper-ru')

async function fetchFaculties() {
    const response = await fetch(BASE_PATH + "/faculties");
    return await response.json()
}

async function fetchStaff(type, id) {
    const response = await fetch(BASE_PATH + `/staffs/position/${id}?staffEnum=${type}`);
    return await response.json()
}



fetchFaculties()
    .then(res => {
        res = res.data.sort(function (a,b) {
            if (a.nameRu < b.nameRu){
                return -1;
            }
            if (a.nameRu > b.nameRu){
                return 1;
            }
            return 0;
        })

        for (let i = 0; i < res.length; i++) {
            let item = res[i]

            fetchStaff(item.staffEnum, item.id)
                .then(res=>{
                    let staff = null
                    if (res.data.length > 0){
                        staff = res.data[0]
                    }

                    let teacherCard = document.createElement('div')
                    teacherCard.classList.add('teacher-card')

                    let cardHeader = document.createElement('div')
                    cardHeader.classList.add('card-header')
                    cardHeader.innerText = item.nameRu

                    let cardBody = document.createElement('div')
                    cardBody.classList.add('card-body')

                    let leftSide = document.createElement('div')
                    leftSide.classList.add('left-side')

                    let img = document.createElement('img')
                    img.src = staff ===null ? '../../../assets/user.png' : staff.image
                    img.alt = 'uniep'

                    leftSide.appendChild(img)

                    let rightSide = document.createElement('div')
                    rightSide.classList.add('right-side')

                    let name = document.createElement('p')
                    name.classList.add('fw-bold')
                    name.innerText = staff===null? '': staff.fioRu

                    let position = document.createElement('p')
                    position.classList.add('font-italic')
                    position.innerText= staff===null? '': staff.academicDegreeRu

                    let acceptance = document.createElement('p')
                    let acceptanceB = document.createElement('b')
                    acceptanceB.innerText = '?????????? ????????????: '
                    let acceptanceSpan = document.createElement('span')
                    acceptanceSpan.innerText = staff===null? '': staff.acceptanceRu

                    acceptance.appendChild(acceptanceB)
                    acceptance.appendChild(acceptanceSpan)

                    let contact = document.createElement('p')
                    let contactB = document.createElement('b')
                    contactB.innerText = '??????????????: '
                    let contactSpan = document.createElement('span')
                    contactSpan.innerText = staff===null? '': staff.contact

                    contact.appendChild(contactB)
                    contact.appendChild(contactSpan)

                    let email = document.createElement('p')
                    let emailB = document.createElement('b')
                    emailB.innerText = '??????????: '
                    let emailA = document.createElement('a')
                    emailA.innerText = staff===null? '': staff.email
                    emailA.href = staff===null? '': staff.email

                    email.appendChild(emailB)
                    email.appendChild(emailA)

                    let button = document.createElement('button')
                    button.classList.add('btn', 'btn-primary', 'float-end')
                    button.innerText = '????????????????'
                    button.onclick = ()=>{
                        localStorage.setItem('facultyId', item.id)
                        window.location.href = "fakultet.html"
                    }

                    rightSide.appendChild(name)
                    rightSide.appendChild(position)
                    rightSide.appendChild(acceptance)
                    rightSide.appendChild(contact)
                    rightSide.appendChild(email)
                    rightSide.appendChild(button)

                    cardBody.appendChild(leftSide)
                    cardBody.appendChild(rightSide)

                    teacherCard.appendChild(cardHeader)
                    teacherCard.appendChild(cardBody)

                    facultyWrapper.appendChild(teacherCard)
                })

        }
    })