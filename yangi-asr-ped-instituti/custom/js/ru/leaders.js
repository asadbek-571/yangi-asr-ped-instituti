const BASE_PATH = "https://api.uniep.uz/api/v1/public"
let leaderWrapper = document.getElementById('leaders-ru')

async function fetchLeaders() {
    const response = await fetch(BASE_PATH + "/leadership");
    return await response.json()
}

async function fetchStaff(type) {
    const response = await fetch(BASE_PATH + `/staffs/position?staffEnum=${type}`);
    return await response.json()
}

fetchLeaders()
    .then(res => {
        res = res.data
        fetchStaff("LEADERSHIP")
            .then(staff => {
                staff = staff.data.sort(function (a, b) {
                    if (a.orders < b.orders) {
                        return -1;
                    }
                    if (a.orders > b.orders) {
                        return 1;
                    }
                    return 0;
                })

                for (let i = 0; i < staff.length; i++) {
                    let staffItem = staff[i]
                    let result = res.filter(e => e.id === staffItem.positionId)[0]

                    let teacherCard = document.createElement('div')
                    teacherCard.classList.add('teacher-card')

                    let cardHeader = document.createElement('div')
                    cardHeader.classList.add('card-header')
                    cardHeader.innerText = result.nameRu

                    let cardBody = document.createElement('div')
                    cardBody.classList.add('card-body')

                    let leftSide = document.createElement('div')
                    leftSide.classList.add('left-side')

                    let img = document.createElement('img')
                    img.src = staffItem === null ? '../../../assets/user.png' : staffItem.image
                    img.alt = 'uniep'

                    leftSide.appendChild(img)

                    let rightSide = document.createElement('div')
                    rightSide.classList.add('right-side')

                    let name = document.createElement('p')
                    name.classList.add('fw-bold')
                    name.innerText = staffItem === null ? '' : staffItem.fioRu

                    let position = document.createElement('p')
                    position.classList.add('font-italic')
                    position.innerText = staffItem === null ? '' : staffItem.academicDegreeRu

                    let acceptance = document.createElement('p')
                    let acceptanceB = document.createElement('b')
                    acceptanceB.innerText = 'Время приема: '
                    let acceptanceSpan = document.createElement('span')
                    acceptanceSpan.innerText = staffItem === null ? '' : staffItem.acceptanceRu

                    acceptance.appendChild(acceptanceB)
                    acceptance.appendChild(acceptanceSpan)

                    let contact = document.createElement('p')
                    let contactB = document.createElement('b')
                    contactB.innerText = 'Контакт: '
                    let contactSpan = document.createElement('span')
                    contactSpan.innerText = staffItem === null ? '' : staffItem.contact

                    contact.appendChild(contactB)
                    contact.appendChild(contactSpan)

                    let email = document.createElement('p')
                    let emailB = document.createElement('b')
                    emailB.innerText = 'Емаил: '
                    let emailA = document.createElement('a')
                    emailA.innerText = staffItem === null ? '' : staffItem.email
                    emailA.href = staffItem === null ? '' : staffItem.email

                    email.appendChild(emailB)
                    email.appendChild(emailA)

                    rightSide.appendChild(name)
                    rightSide.appendChild(position)
                    rightSide.appendChild(acceptance)
                    rightSide.appendChild(contact)
                    rightSide.appendChild(email)

                    cardBody.appendChild(leftSide)
                    cardBody.appendChild(rightSide)


                    teacherCard.appendChild(cardHeader)
                    teacherCard.appendChild(cardBody)
                    if (i === 0) {
                        let cardCertificate = document.createElement('div')
                        cardCertificate.classList.add('card-body-certificate')
                        let img1 = document.createElement('img')
                        img1.src = '../../assets/s-1.jpg'
                        img1.width = '350'
                        let img2 = document.createElement('img')
                        img2.src = '../../assets/s-2.jpg'
                        img2.width = '350'
                        let img3 = document.createElement('img')
                        img3.src = '../../assets/s-3.jpg'
                        img3.width = '450'
                        cardCertificate.appendChild(img1)
                        cardCertificate.appendChild(img2)
                        cardCertificate.appendChild(img3)
                        teacherCard.appendChild(cardCertificate)
                    }

                    leaderWrapper.appendChild(teacherCard)
                }
            })
    })
