import uuid from 'uuid';

const addCompany = ({
	latitude = 0,
	longitude = 0,
	name = '',
	category = '',
	description = '',
	address = ''
}) => ({
	type: 'ADD_COMPANY',
	company: {
		id: uuid(),
		latitude,
		longitude,
		name,
		category,
		description,
		address
	}
});

export { addCompany };

