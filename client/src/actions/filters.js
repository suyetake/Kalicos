const setNameFilter = (name = '') => ({
	type: 'SET_NAME_FILTER',
	name	
});

const setDescriptionFilter = (description = '') => ({
	type: 'SET_DESCRIPTION_FILTER',
	description
});

const setAddressFilter = (address = '') => ({
	type: 'SET_ADDRESS_FILTER',
	address
});

const setCategoryFilter = (category = '') => ({
	type: 'SET_CATEGORY_FILTER',
	category
});

export { setNameFilter, setDescriptionFilter, setAddressFilter, setCategoryFilter };