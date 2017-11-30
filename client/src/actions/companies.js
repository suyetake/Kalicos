import uuid from 'uuid';

const addCompany = ({
	lat = 0,
	lng = 0,
	name = '',
	category = '',
	description = '',
	address = ''
}) => ({
	type: 'ADD_COMPANY',
	company: {
		id: uuid(),
		lat,
		lng,
		name,
		category,
		description,
		address
	}
});

export { addCompany };

