function insert_Row() {
    //Write your code here
	let tr = document.createElement('tr');
	// tr.innerHTML = '<tr><td>New Cell1</td><td>New Cell2</td></tr>';
	let td1 = document.createElement('td')
	td1.innerHtml = '';
	td1.innerHTML = 'New Cell1';
	let td2 = document.createElement('td')
	td2.innerHtml = '';
	td2.innerHTML = 'New Cell2';
	tr.insertAdjacentElement('afterbegin', td1);
	tr.insertAdjacentElement('beforeend', td2);
	let table = document.getElementById('sampleTable');
	table.insertAdjacentElement('afterbegin', tr);
}
