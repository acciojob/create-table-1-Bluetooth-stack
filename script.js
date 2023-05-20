function insert_Row() {
    //Write your code here
	let tr = document.createElement('tr');
	tr.innerHTML = '<tr><td>New Cell1</td><td>New Cell2</td></tr>';
	// let td1 = document.createElement('td')
	// td1.innerHTML = 'New Cell1';
	// let td2 = document.createElement('td')
	// td2.innerHTML = 'New Cell2';
	// tr.appendChild(td1);
	// tr.appendChild(td2);
	let table = document.getElementById('sampleTable');
	table.insertAdjacentElement('afterbegin', tr);
}
