import React, {useCallback, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useHttp} from '../hooks/http.hook'
import {findFilmsByTitle} from '../helpers/findFilmsByTitle'
import {sortFilmsByArray} from '../helpers/sortFilmsByArray'
import {SearchBar} from "../components/SearchBar";
import {SortCard} from '../components/SortCard'
import {FilmsList} from "../components/FilmsList";
import {Loader} from '../components/Loader'

export const FilmsPage = () => {
  const {loading, request} = useHttp()
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [sortMethod, setSortMethod] = useState('')

  const fetchFilms = useCallback(async () => {
    try {
      const fetched = await request('/api/films', 'GET', null)
      setFilms(fetched)
    } catch (e) {
    }
  }, [request])

  const getSearch = value => {
    setSearchValue(value)
  }

  const getSortMethod = (method) => {
    setSortMethod(method)
  }

  const filterFilms = findFilmsByTitle(films, searchValue)

  const sortFilms = sortFilmsByArray(filterFilms, sortMethod)

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])


  if (loading) {
    return <Loader/>
  }

  return (
    <div>
      {!!films.length && (
        <>
          <SearchBar getSearch={getSearch}/>
          <SortCard getSortMethod={getSortMethod}/>
          <FilmsList items={sortFilms}/>
        </>
      )}

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

      {!filterFilms.length && films.length !== 0 && (
        <div>
          <h4 className='center-align'>No matching results!</h4>
        </div>
      )}
    </div>
  )
};