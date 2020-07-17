import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        //ReactDom recommend that refs should be avoided in most cases as a
        //replacement for states and props

        this.myRef = React.createRef();
        this.passRef = React.createRef();
        this.confPassRef = React.createRef();      }

      //fucntion to handle input changes
      onInputChange = (e) => {
        console.log(e.target.value)
      }
      //event to handle input change
      handleClick = (e) => {
          //e.target.reset()
          e.preventDefault();
          this.myRef.current.focus();
          //this.passRef.current.focus();
          //this.confPassRef.current.focus();
          if(this.passRef == null || this.passRef !== this.confPassRef){
              console.log('password do not match')
          } else{
            return 'succesful';
          }
         // this.clearForm();
      }
      /*clearForm = () => {
        this.setState({
            
        })
      } */

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type='text'
                        name='username'
                        ref={this.myRef}
                        onChange={this.onInputChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type='password'
                        name='password'
                        ref={this.passRef}
                        onChange={this.onInputChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type='password'
                        name='confirm_password'
                        ref={this.confPassRef}
                        onChange={this.onInputChange}
                    />
                    <button onClick= {this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}
