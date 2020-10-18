let arr = [
    {
    name: 'Jaden',
    surname: 'Smith',
    age: 16,
    average: 5.7
    },
    {
    name: 'Travis',
    surname: 'Scott',
    age: 18,
    average: 9.7
    },
    {
    name: 'Jack',
    surname: 'Harlow',
    age: 20,
    average: 7.2
    },
    {
    name: 'Young',
    surname: 'Thug',
    age: 17,
    average: 8.6
    },
    {
    name: 'Kendrick',
    surname: 'Lamar',
    age: 17,
    average: 8.6
    }
    ];
    
    const Student = (function() {
        
    
    const fill = (arr) => {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.appendChild(document.createElement('th'));
    tr.appendChild(document.createElement('th'));
    tr.appendChild(document.createElement('th'));
    tr.appendChild(document.createElement('th'));
    table.rows[0].cells[0].innerHTML = 'Name';
    table.rows[0].cells[1].innerHTML = 'Surname';
    table.rows[0].cells[2].innerHTML = 'Age';
    table.rows[0].cells[3].innerHTML = 'Average';
    
    document.body.appendChild(table);
    let i = 1;
    
    arr.forEach(elem => {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    table.rows[i].cells[0].textContent = elem.name;
    table.rows[i].cells[1].innerHTML = elem.surname;
    table.rows[i].cells[2].innerHTML = elem.age;
    table.rows[i].cells[3].innerHTML = elem.average;
    i++;
    });
    sumAverage();
    };
    
    
    function sumAverage() {
    const el = document.querySelector('table');
    const resultEl = document.querySelector('#result');
    let sum = 0;
    Array.from(el.children).forEach((child, index) => {
    if (index !== 0) {
    sum += +child.lastElementChild.textContent;
    }
    });
    
    resultEl.textContent = +(sum / arr.length).toFixed(2);
    }
    
    return {
    fill
    }
    })();
    
    Student.fill(arr);