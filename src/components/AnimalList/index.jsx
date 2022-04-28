import React from 'react';

import Animal from './../Animal';

const AnimalList = ({zvirata, zvireciNazev}) => {

  return (
    <div className="animal-list">
      {
        zvirata.map(
          zvire => (
            <li 
              key={zvire.id}
              onClick={
                () => {zvireciNazev(zvire.nazev)}
              }>
                <Animal 
                  foto={zvire.foto} 
                  nazev={zvire.nazev} 
                  nazevLatinsky={zvire.nazevLatinsky}
                />
            </li>
          )
        )
      }
    </div>
  );
}

export default AnimalList;