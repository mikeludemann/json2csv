function json2csv(objArray) {
	var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
	var txt = '';

	for (var i = 0; i < array.length; i++) {

		var line = '';

		for (var index in array[i]) {

			if (line != '') line += ','

			line += array[i][index];

		}

		txt += line + '\r\n';

	}

  return txt;
  
}

function exportCSVFile(headers, items, fileTitle) {
	if (headers) {

		items.unshift(headers);

	}

	var jsonObject = JSON.stringify(items);

	var csv = this.json2csv(jsonObject);

	var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

	var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

	if (navigator.msSaveBlob) {

		navigator.msSaveBlob(blob, exportedFilenmae);

	} else {

		var link = document.createElement("a");

		if (link.download !== undefined) {

			var url = URL.createObjectURL(blob);

			link.setAttribute("href", url);
			link.setAttribute("download", exportedFilenmae);
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

		}

	}

}
