import React,{useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {Loader} from "../components/Loader";

export const AddPage = () => {
  const {request, loading, error, clearError} = useHttp();
  const message = useMessage()
  const [form, setForm] = useState({
    title: '', release: '', format : '', stars: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitHandler = async e => {
    // e.preventDefault()
    try {
      const data = await request('/api/films', 'POST', {...form})
      message(data.message)
      setForm({ title: '', release: '', format : '', stars: ''})
    } catch (e) {

    }
  }

  if(loading) {
    return <Loader/>
  }
  
  return (
    <div className="row" style={{paddingTop: 40}}>
      <form className="col s12" onSubmit={e => submitHandler(e)}>
        <div className="row">
          <div className="input-field col s6">
            <input id="film_title" type="text" name='name' onChange={e => changeHandler(e)}/>
            <label htmlFor="film_title">Title</label>
          </div>

          <div className="input-field col s3">
            <input id="release_data" type="text" name='release' onChange={e => changeHandler(e)}/>
            <label htmlFor="release_data">Release Data </label>
          </div>

          <div className="input-field col s3">
            <input id="films_format" type="text" name='format' onChange={e => changeHandler(e)}/>
            <label htmlFor="films_format">Format</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="films_stars" type="text" name='stars' onChange={e => changeHandler(e)}/>
            <label htmlFor="films_stars">Stars</label>
          </div>
        </div>

        <div className="row center" >
          <button className="btn darken-4 s3 " type='submit'>
            Add Film
          </button>

        </div>

      </form>
    </div>
  )
}