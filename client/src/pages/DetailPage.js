import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {DetailFilms} from '../components/DetailFilms'

export const DetailPage = () => {
  const {request, loading} = useHttp()
  const [film, setFilm] = useState(null)
  const filmId = useParams().id

  const getFilm = useCallback(async () => {
    try {
      const fetched = await request(`/api/films/${filmId}`, 'GET', null)
      setFilm(fetched)
    } catch (e) {
    }
  }, [filmId, request])

  useEffect(() => {
    getFilm()
  }, [getFilm])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && film && <DetailFilms film={film}/>}
    </>
  )
};