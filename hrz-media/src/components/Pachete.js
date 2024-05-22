'use client'
import React from 'react'
import ComponentPachete from './ComponentPachete'
import Titlu from './Titlu'
const Pachete = () => {
  return (
    <div className='h-auto  pt-16 mx-auto pachete'>
      <Titlu scris='Pachetele noastre'/>
      <div className='max-w-[1250px] flex flex-wrap justify-center content-evenly gap-8 mx-auto pb-16 pt-20'>
      <ComponentPachete pachet="Consultanta" pret="200€/luna" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#663aa9" buton="Afla mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="Consultanta" pret="200€/luna" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#413750" buton="Afla mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="Consultanta" pret="200€/luna" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#663aa9" buton="Afla mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="Consultanta" pret="200€/luna" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#663aa9" buton="Afla mai multe" url="/servicii" ></ComponentPachete>
      <ComponentPachete pachet="Consultanta" pret="Cere o oferta" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#413750" buton="Contact" url="/contact" ></ComponentPachete>
      <ComponentPachete pachet="Consultanta" pret="Cere o oferta" serviciu1="Audit cont" serviciu2="Audit cont" serviciu3="Audit cont" serviciu4="Audit cont" serviciu5="Audit cont" culoare="#663aa9" buton="Contact" url="/contact" ></ComponentPachete>
      </div>
    </div>
  )
}

export default Pachete
