import React from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const DetailFilms = ({film}) => {
  const {request, loading} = useHttp();
  const history = useHistory()
  const message = useMessage()

  const deleteHandler = async (e) => {
    try {
      const data = await request(`/api/films/${film._id}`, 'DELETE')
      message(data.message)
      e.preventDefault()
      history.goBack()
    } catch (e) {}
  }

  const handlerBack = () => {
    history.goBack()
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">About Film</span>
            <p>Title: <strong> {film.name}</strong></p>
            <p>Release Year: <strong> {film.release}</strong></p>
            <p>Format: <strong> {film.format}</strong></p>
            <p>Stars: <strong> {film.stars}</strong></p>
          </div>
          <div className="card-action">
            <button
              className="btn grey lighten-1 black-text"
              onClick={e => deleteHandler(e)}
              disabled={loading}
            >
              Delete film
            </button>
            {/*<NavLink to={`/films`}  className="btn darken-4 right">Back</NavLink>*/}
            <button
              className="btn darken-4 right"
              onClick={handlerBack}
              disabled={loading}
            >
              Back
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}
