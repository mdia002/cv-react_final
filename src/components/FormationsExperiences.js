import React from 'react'
import "./FormationsExperiences.css"
import DataFormations from '../datas/Formations'
import Formations from './Formations';
import dataExperiences from '../datas/Experiences';
import Experiences from './Experiences';

function FormationsExperiences() {

      return (
            <>
                  <Formations datas= {DataFormations}/>
                  <Experiences datas= {dataExperiences}/>
            </>
      )
    

}

export default FormationsExperiences
