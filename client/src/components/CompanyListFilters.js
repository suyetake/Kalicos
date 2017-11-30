import React from 'react'
import { connect } from 'react-redux'
import { setNameFilter, setDescriptionFilter, setAddressFilter, setCategoryFilter } from '../actions/filters'
import selectCompanies from '../selectors/companies'


const CompanyListFilters = (props) => (
    <div>
		<p>Filters by:</p>
		<input 
			type="text"
			placeholder="Name Filter"
			defaultValue={props.filters.name}
			onChange={((e) => {
			  props.dispatch(setNameFilter(e.target.value.toLowerCase()))
			})}
		/>
		<input 
			type="text"
			placeholder="Description Filter"
			defaultValue={props.filters.description}
			onChange={((e) => {
			  props.dispatch(setDescriptionFilter(e.target.value.toLowerCase()))
			})}
		/>
		<input 
			type="text"
			placeholder="Address Filter"
			defaultValue={props.filters.address}
			onChange={((e) => {
			  props.dispatch(setAddressFilter(e.target.value.toLowerCase()))
			})}
		/>
		<input 
			type="text"
			placeholder="Category Filter"
			defaultValue={props.filters.category}
			onChange={((e) => {
			  props.dispatch(setCategoryFilter(e.target.value.toLowerCase()))
			})}
		/>
    </div>
)


const mapStateToProps = (state, props) => {
  return {
    companies: state.companies,
    filters: state.filters,
    visibleCompanies: selectCompanies(state.companies, state.filters)
  }
}

export default connect(mapStateToProps)(CompanyListFilters)