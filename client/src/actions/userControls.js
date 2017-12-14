const setMapCenter = (mapCenter) => ({
	type: 'SET_MAP_CENTER',
	mapCenter
})
const setSelectedModal = (id) => ({
	type: 'SET_SELECTED_MODAL',
	id
})


export { setMapCenter, setSelectedModal }