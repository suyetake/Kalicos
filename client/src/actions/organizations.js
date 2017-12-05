import uuid from 'uuid';

const addOrganization = ({
	id = uuid(),
	lat = 0,
	lng = 0,
	name = '',
	category = '',
	description = '',
	address = ''
}) => ({
	type: 'ADD_ORGANIZATION',
	organization: {
		id,
		lat,
		lng,
		name,
		category,
		description,
		address
	}
})

const editOrganization = (id, updates) => ({
	type: 'EDIT_ORGANIZATION',
	id,
	updates
})

export { addOrganization, editOrganization }

