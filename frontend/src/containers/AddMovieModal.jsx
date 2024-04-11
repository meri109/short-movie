import React from 'react'
import Backdrop from '../components/UI/Backdrop'


function AddMovieModal() {
    const [file, setFile] = React.useState(null)
    const fileInputRef = React.useRef()
    const fileSelectHandler = React.useCallback(() => {
        fileInputRef.current.click()
    }, [])
    const fileSelectedHandler = React.useCallback((e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }, [])
    const fileName = file ? file.name : 'not selected'

  return (
    <React.Fragment>
        <div className='add-movie-container'>
            <div className="title-content">Add Movie</div>
            <div className="body">
                <input className='title' type="text" placeholder='Title'/>
                <input className='imdb' type="number" placeholder='IMDB'/>
                <button className='control-button' onClick={fileSelectHandler}>Upload file ({fileName})</button>
                <input className='image' ref={fileInputRef} onChange={fileSelectedHandler} type="file" placeholder='Image'/>
            </div>

            <div className="controls">
                <button className='control-button-add'>Add</button>
                <button className='control-button-exit'>Exit</button>
            </div>
        </div>
        <Backdrop />
    </React.Fragment>
  )
}

export default AddMovieModal