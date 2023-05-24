import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

function ImageUpload({ setImageData }) {
    const [image, setImage] = useState([])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        acceptedFiles: 'image/*',
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            );
            setImageData(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )

        }

    })

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ? <p>drag and drop your image here..</p> : <p>drag and drop your image here or click to upload</p>
                }
            </div>
            <div>
                {image.map((upFile) => {
                    return (
                        <img src={upFile.preview} alt="preview" className='image-preview' />
                    )
                })}
            </div>

        </>
    )

}
export default ImageUpload