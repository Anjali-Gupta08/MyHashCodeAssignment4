import React, { Component } from 'react'

 class Forms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            Education: 'Graduate',
            Gender: '',
            Tnc:false
        }
    }
    
        handleName = (event) => {
            this.setState({
                name:event.target.value
            })
        }
        handleEducation = (event) => {
            this.setState({
                Education:event.target.value
            })
        }
        handleTnC = (event) => {
            this.setState({
                Tnc:event.target.checked,
            })
        }
        handleGender = (event) => {
            this.setState({
                Gender:event.target.value
            })
        }  
       

        handleSubmit=(event) => {
        alert(` Hey,${this.state.name} :) Gender:${this.state.Gender} Education:${this.state.Education} Terms:${this.state.Tnc} .Your Form is submitted successfully `);
        event.preventDefault();
        }
    
    render() 
    {
        return (
                <>
                <h1>Student Details Form</h1>
                <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text"  onChange={this.handleName} />
                </label> <br />

                <div>   
                Education:
                <select onChange={this.handleEducation} >
                <option >Graduate</option>
                <option>Post-Graduate</option>
                <option >Matriculate</option>
                <option >Intermediate</option>
                </select> <br />
                </div>
                <div onChange={this.handleGender}>Gender
                <input type="radio" checked={this.state.Gender==='Male'} value='Male'  /> Male
                <input type="radio"  checked={this.state.Gender==='Female'} value='Female'  /> Female
                <input type="radio" checked={this.state.Gender==='Other'} value='Other'  /> Other
                </div> <br />
                <div>
                <input type="checkbox" onChange={this.handleTnC} />
                <span>Agree with the terms and condition</span><br />
                <input type="submit"  onChange={this.handleSubmit}/>
                </div>
                <br />
                </form>
            </>
            
        )
    }
}
 

export default Forms