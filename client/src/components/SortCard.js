import React from "react";

export const SortCard = ({getSortMethod}) => {

  const handlerMethod = (e) => {
    getSortMethod(e.target.name)
  }
  return (
    <div className="row">
          <div className="card-action">
            <button
              className="btn waves-effect grey lighten-1 right"
              style={{margin:10}}
              name = 'title'
              onClick={handlerMethod}
            >
              Sort by Title
            </button>

            <button
              className="btn waves-effect grey lighten-1 right"
              style={{margin:10}}
              name = 'release'
              onClick={handlerMethod}
            >
              Sort by Release Year
            </button>
      </div>
    </div>
  )
}