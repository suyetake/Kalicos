// Set visible companies
const getVisibleCompanies = (companies, { name, description, address, category }) => {
	return companies.filter((company) => {
		const nameMatch = company.name.toLowerCase().includes(name)
		const descriptionMatch = company.description.toLowerCase().includes(description)
		const addressMatch = company.address.toLowerCase().includes(address)
		const categoryMatch = company.category.toLowerCase().includes(category)

		return nameMatch && descriptionMatch && addressMatch && categoryMatch;
	})
};

export default getVisibleCompanies;