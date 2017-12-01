import uuid from 'uuid';

const addOrganization = ({
	lat = 0,
	lng = 0,
	name = '',
	category = '',
	description = '',
	address = ''
}) => ({
	type: 'ADD_ORGANIZATION',
	organization: {
		id: uuid(),
		lat,
		lng,
		name,
		category,
		description,
		address
	}
});

export { addOrganization }

