function insert_Row() {
    //Write your code here
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.innerHTML = 'New Cell1';
	let td2 = document.createElement('td')
	td2.innerHTML = 'New Cell2';
	tr.insertAdjacentElement('afterbegin', td1);
	tr.insertAdjacentElement('beforeend', td2);
	let table = document.getElementById('sampleTable');
	table.insertAdjacentElement('afterbegin', tr);
}
