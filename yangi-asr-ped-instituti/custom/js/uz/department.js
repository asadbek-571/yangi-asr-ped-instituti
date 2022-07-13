const BASE_PATH = "https://api.uniep.uz/api/v1/public"
let departmentHeader = document.getElementById('department-header-uz')
let departmentBody = document.getElementById('department-body-uz')

let departmentId = localStorage.getItem('departmentId') ? localStorage.getItem('departmentId') : 0

async function fetchDepartment() {
    if (departmentId === 0) {
        window.location.href = "../markaz-bolimlar.html"
    } else {
        const response = await fetch(BASE_PATH + "/departments/" + departmentId);
        return await response.json()
    }
}

async function fetchStaff(type, id) {
    const response = await fetch(BASE_PATH + `/staffs/position/${id}?staffEnum=${type}`);
    return await response.json()
}

fetchDepartment()
    .then(res => {
        res = res.data
        departmentHeader.innerText = res.nameUz

        fetchStaff(res.staffEnum, res.id)
            .then(result => {
                if (result.data.length > 0) {
                    result = result.data[0]

                    let teacherCard = document.createElement('div')
                    teacherCard.classList.add('teacher-card')

                    let cardHeader = document.createElement('div')
                    cardHeader.classList.add('card-header')
                    cardHeader.innerText = res.nameUz

                    let cardBody = document.createElement('div')
                    cardBody.classList.add('card-body')

                    let leftSide = document.createElement('div')
                    leftSide.classList.add('left-side')

                    let img = document.createElement('img')
                    img.src = result === null ? '../../../assets/user.png' : result.image
                    img.alt = 'uniep'

                    leftSide.appendChild(img)

                    let rightSide = document.createElement('div')
                    rightSide.classList.add('right-side')

                    let name = document.createElement('p')
                    name.classList.add('fw-bold')
                    name.innerText = result === null ? '' : result.fioUz

                    let position = document.createElement('p')
                    position.classList.add('font-italic')
                    position.innerText = result === null ? '' : result.academicDegreeUz

                    let acceptance = document.createElement('p')
                    let acceptanceB = document.createElement('b')
                    acceptanceB.innerText = 'Qabul vaqti: '
                    let acceptanceSpan = document.createElement('span')
                    acceptanceSpan.innerText = result === null ? '' : result.acceptanceUz

                    acceptance.appendChild(acceptanceB)
                    acceptance.appendChild(acceptanceSpan)

                    let contact = document.createElement('p')
                    let contactB = document.createElement('b')
                    contactB.innerText = 'Bog\'lanish uchun: '
                    let contactSpan = document.createElement('span')
                    contactSpan.innerText = result === null ? '' : result.contact

                    contact.appendChild(contactB)
                    contact.appendChild(contactSpan)

                    let email = document.createElement('p')
                    let emailB = document.createElement('b')
                    emailB.innerText = 'Email: '
                    let emailA = document.createElement('a')
                    emailA.innerText = result === null ? '' : result.email
                    emailA.href = result === null ? '' : result.email

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

                    let cardBody2 = document.createElement('div')
                    cardBody2.classList.add('card-body', 'border-top', 'p-3', 'd-block')
                    let p = document.createElement('p')
                    p.classList.add('text-center')
                    let pb = document.createElement('b')
                    pb.innerText = 'Bo‘lim va uning faoliyati haqida ma’lumot'

                    let span = document.createElement('span')
                    span.innerText = result.descriptionUz

                    p.appendChild(pb)
                    cardBody2.appendChild(p)
                    cardBody2.appendChild(span)

                    teacherCard.appendChild(cardBody2)
                    departmentBody.appendChild(teacherCard)

                }

            })
    })
