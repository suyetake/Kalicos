import uuid from 'uuid';

const ds1 = {
		id: uuid(),
		lat: 40.0092191,
		lng: -105.27334489999998,
	    name: "CU Heritage Center",
		category: "Museum/Educational",
		description: "The Heritage Center at the University of Colorado of Boulder presents the history of the CU Boulder campus and its alumni. We are located on the third floor of Old Main and are operated by the CU Boulder Alumni Association.",
		address: "1600 Pleasant Street",
	}
const ds2 = {
		id: uuid(),
		lat: 40.0138998,
		lng: -105.28174660000002,
		name: "Boulder Public Library",
		category: "Museum/Educational",
		description: "The mission of the Boulder Public Library is to enhance the personal and professional growth of Boulder residents and contribute to the development and sustainability of an engaged community through free access to ideas, information, cultural experiences and educational opportunities.",
		address: "1001 Arapahoe Ave.",
	}
const ds3 = {
		id: uuid(),
		lat: 40.070986,
		lng: -105.19778450000001,
		name: "Voices for Children of Boulder County",
		category: "Non-Profit",
		description: "CASA is the only volunteer position that empowers everyday citizens to be appointed by the Court. In an overburdened social welfare system, abused and neglected children often slip through the cracks among hundreds of current cases.",
		address: "6672 Gunpark Drive",
	}


export { ds1, ds2, ds3 };