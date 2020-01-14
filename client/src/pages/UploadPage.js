import React from "react";
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {handleFileSelect} from "../helpers/handleFileSelect";
import {getArrayContents} from "../helpers/getArrayContents";


export const UploadPage = () => {
  const {request} = useHttp()
  const message = useMessage()

  const createFilmFromArray =  (array) => {
    try {
      array.map(el => {
        const fn = async () => {
          const createObj = {
            name: el['Title'],
            release: el['Release Year'],
            format: el['Format'],
            stars: el['Stars'],
          }
          const data = await request('/api/films', 'POST', {...createObj});
          message(data.message)
        }
        return fn()
      })
    } catch (e) {
    }
  }


  const uploadFile = async (e) => {
    e.persist()
    const fileContents = await handleFileSelect(e);
    const arrayContents = getArrayContents(fileContents);
    createFilmFromArray(arrayContents)
  }


  return (
    <div>
      <form action="#">
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input
              type="file"
              accept=".txt"
              onChange={e => uploadFile(e)}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
          </div>
        </div>
      </form>
    </div>
  )
};