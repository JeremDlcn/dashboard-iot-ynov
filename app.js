

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
    
    line.dataset.nb = item.number;
    line.appendChild(number)
    line.appendChild(name)
    line.appendChild(date)
    document.querySelector('#robots').appendChild(line)
}    

setTimeout(() => {
    const trs = document.querySelectorAll('tr:not(table tr:first-child)');
    console.log(trs);
    
    trs.forEach(element => {
        const buttons = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
    
        editButton.className = 'edit';
        deleteButton.className = 'delete';
        editButton.innerText = 'Modifier'
        deleteButton.innerText = 'Supprimer'

        buttons.appendChild(editButton)
        buttons.appendChild(deleteButton)
    
        element.appendChild(buttons) 
    });

    // Controle
    const deletes = document.querySelectorAll('.delete');
    deletes.forEach(element => {
        element.addEventListener('click', (event)=> {
            const row = event.target.parentElement.parentElement
            storage = storage.filter(item => Number(item.number) !== Number(row.dataset.nb));
            row.remove();
        })
    });
}, 700);


