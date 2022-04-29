import React, {useState, useEffect} from 'react';
import './style.css';

import Zoo from './../Zoo';

const AnimalDetail = ({foto, nazev, nazevLatinsky, popis, domovina, biotop, potrava, velikost, zoo}) => {

  const [zooPrehled, setZooPrehled] = useState([]);

  useEffect(
    () => {
    fetch('https://lrolecek.github.io/zviratka-api/zoo.json')
    .then((response) => response.json())
    .then((data) => {
        setZooPrehled(data.zoo);
        }
      )
    },
    [zoo]
  );

  return (
    <div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={`${foto}`} alt="xxx" />
					<div className="detail__title">
						<h2 className="detail__name"><span>{nazev}</span></h2>
						<div className="detail__latin"><span>{nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{popis}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{domovina}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{potrava}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{velikost}</p>
						</div>
					</div>
          <hr />
					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
            <p>Přehled všech zoo z API</p>
            {
              zooPrehled.map(
                z => (
                  <Zoo key={z.id} jmeno={z.jmeno} />
                )
              )
            }
            <hr/>
            <p>Tady bude přehled zoo zvířete: {console.log(zoo)}</p>
						
					</div>
				</div>

			</div>
		</div>
  );
}

export default AnimalDetail;