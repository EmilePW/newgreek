import React from 'react'

class ListFilter extends React.Component {
  onChangeFilter (e) {
    return this.props.onChangeFilter(e.target.value)
  }

  render () {
    return (
      <div className='ListFilter'>
        <select onChange={this.onChangeFilter.bind(this)}>
          <option value={this.props.filters.SHOW_ALL}>All</option>
          <option value={this.props.filters.SHOW_COMPLETED}>Completed</option>
          <option value={this.props.filters.SHOW_IN_PROGRESS}>In Progress</option>
        </select>
      </div>
    )
  }
}

ListFilter.propTypes = {}

export default ListFilter
