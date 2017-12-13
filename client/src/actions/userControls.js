const setMapCenter = (mapCenter) => ({
	type: 'SET_MAP_CENTER',
	mapCenter
})
const setSelectedModal = (id) => ({
	type: 'SET_SELECTED_MODAL',
	id
})
const loadEditData = (num) => ({
	type: 'LOAD_EDIT_DATA',
	num
})


export { setMapCenter, setSelectedModal, loadEditData }