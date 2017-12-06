const setMapCenter = ({ lat, lng}) => ({
	type: 'SET_MAP_CENTER',
	lat,
	lng
})
const setSelectedModal = (id) => ({
	type: 'SET_SELECTED_MODAL',
	id
})

export { setMapCenter, setSelectedModal }