import React, 
      { 
        useState, 
        useEffect
      } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {
  // stavová proměnná, do které se uloží objekty se zvířaty
  const [zvirata, setZvirata] = useState([]);

  // stavová prooměnná, do které se uloží název zvířete, na které uživatel klikne v komponentě 'AnimalList'
  const [zvire, setZvire] = useState(null);

  // rodičovská funkce, pomocí které komponenta 'AnimalList' řekne komponentě 'App', na jaké zvíře uživatel klikl v menu, a tato hodnota se uloží do proměnné 'zvire'
  const vybraneZvire = (nazev) => {
    setZvire(nazev)
  };

  // stavová proměnná, do které se po načtení zvířat uloží první zvíře a s ním se pak pracuje, pokud uživatel nevybere žádné zvíře z 'AnimalList'
  const [prvniZvire, setPrvniZvire] = useState([]);

  // funkce, která se spustí při načtení stránky a natáhne si data o zvířatech z API
  useEffect(
    () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then((response) => response.json())
    .then((data) => {
        setZvirata(data.zvirata);
        setPrvniZvire(data.zvirata[0]);
        }
      )
    },
    []
  );

  // proměnná, do které si uložím vyhledaný objekt zvířete na základě výběru v komponentě 'AnimalList'
  let vybraneZvireProDetail = zvirata.find(z => z.nazev === zvire);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      { zvirata !== null &&
            <div className="container">
            <AnimalList
              zvirata={zvirata}
              zvireciNazev={vybraneZvire}/>
            
            { 
              zvire === null
                ? <AnimalDetail 
                  foto={prvniZvire.foto}
                  nazev={prvniZvire.nazev}
                  nazevLatinsky={prvniZvire.nazevLatinsky} 
                  popis={prvniZvire.popis} 
                  domovina={prvniZvire.domovina} 
                  biotop={prvniZvire.biotop} 
                  potrava={prvniZvire.potrava} 
                  velikost={prvniZvire.velikost}
                  zoo={prvniZvire.zoo}
                /> 
                : <AnimalDetail 
                    foto={vybraneZvireProDetail.foto}
                    nazev={vybraneZvireProDetail.nazev}
                    nazevLatinsky={vybraneZvireProDetail.nazevLatinsky} 
                    popis={vybraneZvireProDetail.popis} 
                    domovina={vybraneZvireProDetail.domovina} 
                    biotop={vybraneZvireProDetail.biotop} 
                    potrava={vybraneZvireProDetail.potrava} 
                    velikost={vybraneZvireProDetail.velikost}
                    zoo={vybraneZvireProDetail.zoo}
                  /> 

            }

    
          </div>

      }

    </>
  );
}

render(<App />, document.querySelector('#app'));
