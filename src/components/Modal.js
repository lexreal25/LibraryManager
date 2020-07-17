import React, {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Form = ({handleSubmit,handleInputChange, title, author, year, gist}) => {

      

        const [modalIsopen, setModalIsOpen] = useState(false)
        
        //function to open the modal when clicked
        const handleOpen = () => setModalIsOpen(true)

        //function to close the modal
        const handleClose = () => setModalIsOpen(false);

        //function to close the modal when clicked on the window and escape key 
        const clickAnyWhereToClose = () => setModalIsOpen(false)

        return (
          <div>
            <button onClick={handleOpen} style={{backgroundColor:'purple', color:'#fff'}}>Open Modal</button>

            <Modal className='modal-content' isOpen={modalIsopen} onRequestClose={clickAnyWhereToClose}>

              <div className='modal-header'>
                <span className='close' onClick={handleClose}> x </span>
                <h2>Update Library</h2>
              </div>

              <div className='modal-body'>
                <form className='form-data' onSubmit={handleSubmit}>
                
                   <label htmlFor='title'>Title:</label>
                   <input 
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                    placeholder='Book Title'/>

                   <label>Author Name:</label>
                   <input type='text' name='author'
                    value={author} 
                    onChange={handleInputChange}
                    placeholder='Authors Name'/>

                   <label>Published:</label>
                   <input type='date' 
                    name='year'onChange={handleInputChange}
                    value={year}
                    placeholder='Year of publication'/>

                   <label>Gist:</label>
                   <textarea col='50' name='gist' value={gist} onChange={handleInputChange}></textarea>

                   <button className='add'>Add Book</button>
                </form>
                
              </div>
            </Modal>
          </div>
        )      
}

export default Form;
