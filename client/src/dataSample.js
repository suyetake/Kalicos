import uuid from 'uuid';

const dataSample = [ 
	{
		id: uuid(),
	    name: "CU Heritage Center",
		type: "Museum/Educational",
		description: "The Heritage Center at the University of Colorado of Boulder presents the history of the CU Boulder campus and its alumni. We are located on the third floor of Old Main and are operated by the CU Boulder Alumni Association.",
		address: "1600 Pleasant Street",
	}, {
		id: uuid(),
		name: "Boulder Public Library",
		type: "Museum/Educational",
		description: "The mission of the Boulder Public Library is to enhance the personal and professional growth of Boulder residents and contribute to the development and sustainability of an engaged community through free access to ideas, information, cultural experiences and educational opportunities.",
		address: "1001 Arapahoe Ave.",
	},{
		id: uuid(),
		name: "Voices for Children of Boulder County",
		type: "Non-Profit",
		description: "CASA is the only volunteer position that empowers everyday citizens to be appointed by the Court. In an overburdened social welfare system, abused and neglected children often slip through the cracks among hundreds of current cases.",
		address: "6672 Gunpark Drive",
	}
]


export default dataSample;