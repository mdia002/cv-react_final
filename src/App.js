import './App.css';
import User from "./components/User" 
import Skills from "./components/Skills" 
import Profil from "./components/Profil" 
import FormationsExperiences from './components/FormationsExperiences';

function App() {
  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <User/>
          <Skills/>
        </div>

        <div className="main">
          <Profil/>
          <FormationsExperiences/>
        </div>
      </div>

      {/*react, material ui react-html2pdf*/}
      {/*variables CSS*/}
      {/*colonne de gauche*/}

      {/*Contact*/}
      {/*Langues et niveaux - skills*/}
      {/*Compétences - skills*/}
      {/*Langages et Logiciels*/}
      {/*Centre d'intérêts- interests*/}

      {/*Colonne de droite*/}
      {/*Profil - profil*/}
      {/*formations - */}
      {/*exp - experiences*/}

      {/*light/dark mode*/}
      {/*generation pdf*/}
    </div>
  );
}

export default App;
