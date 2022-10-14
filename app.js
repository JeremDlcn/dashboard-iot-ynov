let storage = [
    {
        number: 1,
        name: 'D3',
        date: '2020-11-26'
    },
    {
        number: 2,
        name: 'Robot',
        date: '2020-11-26'
    },
    {
        number: 3,
        name: 'Appareil',
        date: '2020-11-26'
    },
    
]

// init line data
for (const item of storage) {
    const line = document.createElement('tr');
    
    const number = document.createElement('td');
    const name = document.createElement('td');
    const date = document.createElement('td');
    console.log(item);
    number.innerHTML = item.number;
    name.innerHTML = item.name;
    date.innerHTML = item.date;
    
    line.appendChild(number)
    line.appendChild(name)
    line.appendChild(date)
    document.querySelector('#robots').appendChild(line)
}    

