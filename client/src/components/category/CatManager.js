import React from 'react'
import AddCat from './AddCat'
import { connect } from 'react-redux'
import { startDeleteCategory } from '../../redux/actions/categoriesAction'

class CatManager extends React.Component {
  handleRemove = (id) => {
    this.props.dispatch(startDeleteCategory(id))
  }
  render() {
    return (
      <div>
        <h1>List category</h1>
        {this.props.categories.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.categories.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleRemove(ele._id)
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        <AddCat />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(CatManager)
