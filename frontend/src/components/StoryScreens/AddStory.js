import React, { useRef, useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import '../../Css/AddStory.css'
import { toast } from 'react-toastify';

const AddStory = () => {

    const { config } = useContext(AuthContext)
    const imageEl = useRef(null)
    const editorEl = useRef(null)
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const clearInputs = () => {
        setTitle('')
        setContent('')
        setImage('')
        editorEl.current.editor.setData('')
        imageEl.current.value = ""
    }
    const handleFileChange=(event)=>{
        setImage(event.target.files[0])
      }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        const formdata = new FormData(form);
        const payload={
            title:formdata.get('title'),
            image:formdata.get("image"),
            content:content
        }
        
        try {
            const { data } = await axios.post("http://localhost:4500/api/story/addstory", payload,
            {headers: {
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${localStorage.getItem("authToken")}`,
              }})
            toast.success("Blog Uploaded Successfully")

            clearInputs()
            setTimeout(() => {
                setSuccess('')
            }, 7000)

        }
        catch (error) {
            toast.error("Unable to add story")
            setTimeout(() => {
                setError('')

            }, 7000)
            console.log(error)
            setError(error.response.data.error)

        }

    }
    return (

        <div className="Inclusive-addStory-page ">
            <Link to={'/blog'} >
                <FiArrowLeft />
            </Link>
            <form onSubmit={handleSubmit} className="addStory-form" encType="multipart/form-data">

                {error && <div className="error_msg">{error}</div>}
                {success && <div className="success_msg">
                    <span>
                        {success}
                    </span>
                    <Link to="/blog">Go home</Link>
                </div>}

                <input
                    type="text"
                    required
                    id="title"
                    placeholder="Title"
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <CKEditor
                    editor={ClassicEditor}
                    onChange={(e, editor) => {
                        const data = editor.getData();
                        setContent(data)
                    }}
                    ref={editorEl}
                    name="content"
                />
                <div class="StoryImageField">
                    <AiOutlineUpload />
                    <div class="txt">
                        {image ? image.name :
                            " Include a high-quality image in your story to make it more inviting to readers."
                        }
                    </div>
                    <input
                        name="image"
                        type="file"
                        ref={imageEl}
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                    />
                </div>
                <button type='submit' disabled={image ? false : true} className={image ? 'addStory-btn' : 'dis-btn'}
                >Publish </button>
            </form>

        </div>

    )
}

export default AddStory


