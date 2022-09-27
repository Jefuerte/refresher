let data = [
    { 
        name: 'Alice', 
        age: '21'
    },
    { 
        name: 'Jordan', 
        age: '22'
    },
    { 
        name: 'Emma', 
        age: '21'
    },
    { 
        name: 'Greg', 
        age: '27'
    },
    { 
        name: 'David', 
        age: '24'
    },
    { 
        name: 'Bee', 
        age: '21'
    },
    { 
        name: 'Sophie', 
        age: '21'
    },
    { 
        name: 'Max', 
        age: '24'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n');
