// Set visible organizations
const getVisibleOrganizations = (organizations, { name, description, address, category }) => {
	return organizations.filter((organization) => {
		const nameMatch = organization.name.toLowerCase().includes(name)
		const descriptionMatch = organization.description.toLowerCase().includes(description)
		const addressMatch = organization.address.toLowerCase().includes(address)
		const categoryMatch = organization.category.toLowerCase().includes(category)

		return nameMatch && descriptionMatch && addressMatch && categoryMatch
	})
}


export default getVisibleOrganizations