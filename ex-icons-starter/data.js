const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector(".container");
const tplIcons = document.querySelector("#tpl-icons");

	// const iconHTML = tplIcons.cloneNode(true);
	// const {name, prefix, type, family, color} = icons[i];

	// iconHTML.document.querySelector(".font").classList(`${prefix}solid ${prefix}${name}`);
	// iconHTML.document.querySelector(".name").innerHTML = name;
	// iconHTML.document.querySelector(".icon").innerHTML = type;
	// iconHTML.document.querySelector(".icon").innerHTML = family;
	// iconHTML.document.querySelector(".icon").innerHTML = color;
	
	

// funzione per stampare le icone
function printIcons(icons, container) {
	container.innerHTML = "";
	for (let i = 0; i < icons.length; i++) {
		
		const iconHTML = `
		<div class="icon">
            <i class="${icons[i].prefix}solid ${icons[i].prefix}${icons[i].name}" style="color : ${icons[i].color}"></i>
            <span class="name">${icons[i].name}</span>
        </div>
	`;
	container.innerHTML += iconHTML;
};
};

printIcons(icons, container);

const select = document.querySelector("#sl-icons");
select.addEventListener("change", 
	function() {
		const selectValue = select.value;
		const selectFilter = icons.filter(elm => elm.type === selectValue || selectValue === "");
		printIcons(selectFilter,container);
	}
);


