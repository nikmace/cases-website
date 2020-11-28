const cases = [
    {
        name: 'Case One',
        price: 59.99,
        description: 'Custom graffiti case',
        imageUrl: '/assets/images/image-27-11-20-07-14.png',
        quantity: '3',
        inCart: 0,
    },
    {
        name: 'Case One',
        price: 59.99,
        description: 'Custom graffiti case',
        imageUrl: '/assets/images/image-27-11-20-07-14.png',
        quantity: '3',
        inCart: 0,
    },
    {
        name: 'Case One',
        price: 59.99,
        description: 'Custom graffiti case',
        imageUrl: '/assets/images/image-27-11-20-07-14.png',
        quantity: '3',
        inCart: 0,
    },  
]

function appendCases(cases) {
    getTemplate()
    .then((templateSource) => {
        const template = Handlebars.compile(templateSource);
        const htmlResult = template({ cases });
        const newContainerDiv = document.getElementById('newContainer');
        newContainerDiv.innerHTML = htmlResult;
    })
}


function getTemplate() {
    return fetch('/services/cases.hbs')
    .then((r) => r.text())
    .catch(e => {
        console.log(e);
    }) 
}

appendCases(cases);