import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {Loader} from "../components/Loader";

export const StatisticsPage = () => {
  const {request, loading} = useHttp()
  const [films, setFilms] = useState([]);
  const message = useMessage()

  const fetchFilms = useCallback(async () => {
    try {
      const fetched = await request('/api/films', 'GET', null)
      setFilms(fetched)
    } catch (e) {
    }
  }, [request])

  const deleteAll = async () => {
    try {
      const data = await request('/api/deleteall', 'DELETE', null)
      message(data.message)
      fetchFilms()
    } catch (e) {
    }
  }

  const deleteHandler = async (film) => {
    try {
      const data = await request(`/api/films/${film._id}`, 'DELETE')
      message(data.message)
      fetchFilms()
    } catch (e) {
    }
  }

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])


  if (loading) {
    return <Loader/>
  }

  return (

    <div>
      {!films.length &&
      (
        <div>
          <h4 className='center-align'>No movies yet!
            <Link to={'/upload'}> Upload.. </Link>
            or
            <Link to={'/create'}> Add... </Link>
          </h4>
        </div>
      )}

      {!!films.length &&
      (
        <div style={{padding: 40}}>
          <p className='left'>Films : <strong> {films.length}</strong></p>
          <button
            className="btn grey lighten-1 black-text right"
            onClick={deleteAll}
          >
            Delete All Film
          </button>

          <table>
            <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Release Year</th>
              <th>Format</th>
              <th>Open</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {films.map((el, i) => {
              return (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.release}</td>
                  <td>{el.format}</td>
                  <td>
                    <Link to={`/films/${el._id}`}>open</Link>
                  </td>
                  <td>
                    <button
                      className="btn darken-4"
                      disabled={loading}
                      onClick={e => deleteHandler(el)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      )
      }
    </div>
  )
}