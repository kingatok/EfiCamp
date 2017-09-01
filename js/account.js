const getUrl = () => {
	$.get("https://efigence-camp.herokuapp.com/api/data/history", (data) => {

	const historyElements = data.content; 
		
	historyElements.forEach((element, index) => {
		console.log(`iteracja ${index}: `, element);
		const printing = document.querySelector(".history");
		console.log(printing);
			let historyTemplate = '';
			const template = `
			<ul class="menu">
				 <li class="histElem">${element.date}</li>
				 <li class="histElem">${element.description}</li>
				 <li class="histElem">${element.amount}</li>
				 <li class="histElem">${element.currency}</li>
			</ul>
			`;
			$(".history").append(template);
			});
	});
}
getUrl();


const getUrlProd = () => {
	$.get("https://efigence-camp.herokuapp.com/api/data/products", (data) => {

	const productsList = data.content;

	productsList.forEach((element, index) => {
		console.log(`iteracja ${index}: `, element);
		const printingProd = document.querySelector(".products");
		console.log(printingProd);
			let productTemplate = '';
			const templateProd = `
			<ul class="no-bullet">
				 <li>${element.type}</li>
				 <li>${element.amount}</li>
				 <li>${element.currency}</li>
			</ul>
			`;
			$(".products").append(templateProd);
			});
	});	
}
getUrlProd();