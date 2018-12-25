import axios from 'axios'
import React, { Component } from 'react'

class NewCaseStudy extends Component {
      constructor (props) {
        super(props)
        this.state = {
          title: '',
          case_description: '',
          case_solution: '',
          doctor_name: '',
          pharmacy_name: '',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewCaseStudy = this.handleCreateNewCaseStudy.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCreateNewCaseStudy (event) {
        event.preventDefault()

        const { history } = this.props

        const casestudy = {
          title: this.state.title,
          case_description: this.state.case_description,
          case_solution: this.state.case_solution,
          doctor_name: this.state.doctor_name,
          pharmacy_name: this.state.pharmacy_name
        }

        axios.post('/api/casestudies', casestudy)
          .then(response => {
            // redirect to the homepage
            history.push('/')
          })
          .catch(error => {
            error= resonpose.data.error
            this.setState({
              errors: error.response.data.errors
            })
          })
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new Casestudy</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewCaseStudy}>
                      <div className='form-group'>
                        <label htmlFor='title'>Case name</label>
                        <input
                          id='title'
                          type='text'
                          className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
                          name='title'
                          value={this.state.title}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('title')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='car_description'>Case description</label>
                        <textarea
                          id='description'
                          className={`form-control ${this.hasErrorFor('case_description') ? 'is-invalid' : ''}`}
                          name='case_description'
                          type='text'
                          rows='10'
                          value={this.state.case_description}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('case_description')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='case_solution'>Case Solution</label>
                        <textarea
                          id='case_solution'
                          className={`form-control ${this.hasErrorFor('case_solution') ? 'is-invalid' : ''}`}
                          name='case_solution'
                          rows='10'
                          value={this.state.case_solution}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('case_solution')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Project name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('doctor_name') ? 'is-invalid' : ''}`}
                          name='doctor_name'
                          value={this.state.doctor_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('doctor_name')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='pharmacy_name'>Pharmacy name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('pharmacy_name') ? 'is-invalid' : ''}`}
                          name='pharmacy_name'
                          value={this.state.pharmacy_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('pharmacy_name')}
                      </div>
                      <button className='btn btn-primary'>Create</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

export default NewCaseStudy
