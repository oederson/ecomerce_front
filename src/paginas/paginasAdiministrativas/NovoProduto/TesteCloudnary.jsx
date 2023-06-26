import axios from 'axios'
import React, { useState } from 'react'

function TesteCloudnary() {
    const [imageSelected, setImageSelected] = useState("")
  const uploadImage =() =>{
    const formData = new FormData()
    formData.append("file", imageSelected) 
    formData.append("upload_preset", "p2xppgif")
    axios.post("https://api.cloudinary.com/v1_1/dsqvsavze/image/upload", formData).then((response) => setProduto.imagem(response.data.url))
    
  }
  return (
    <div>testeCloudnary
                <input type="file" onChange={(event) => setImageSelected(event.target.files[0]) }/>
        <button onClick={uploadImage()}> Upload cloudnary teste</button>
    </div>
    
  )
}

export default TesteCloudnary