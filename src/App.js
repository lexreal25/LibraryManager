import React, { Component} from 'react'
import './App.css'
import Form from './components/Modal';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books : [],
        title : '',
        author: '',
        year: ' ',
        gist: ''
      
    }
    
     /* React Documentation recommends we do away with Ref if possible as
     //a replacement for state
   this.title = React.createRef();
    this.author = React.createRef();
    this.year = React.createRef();
    this.gist = React.createRef(); */
    
  }

  //handle input change
  handleInputChange = e =>
  {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value
    })
  }

  // using arrows functions does not require the use of bind(this)
  handleSubmit = e => {
     e.preventDefault()
      const book = this.state
      let newBook = {
        title: book.title, 
        author:book.author,
        year:book.year, 
        gist:book.gist
      }
      this.setState({books:[...book.books, newBook]})
     //Reset
    this.onReset()
  }

  //Reset form after submition
  onReset = () => this.setState({
      title: '',
      authtor: '',
      year:'',
      gist:''
    
  })

  render() {
    const current = this.state
    let books = current.books.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.year}</td>
          <td>{book.gist}</td>
        </tr>
      )
    })
    return (
      <div className='table'>
        <Form  
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          title ={current.title}
          authtor ={current.author}
          year={current.year}
          gist={current.gist}
        />

        <table>
          <thead>
            <tr>
              <th>#Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published</th>
              <th>Gist</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    )
  }
}
