import React, {useEffect} from 'react'
import './Sidebar.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchCountries, CountryType } from '../../features/countriesSlice'

const Sidebar = () => {
  const countries = useAppSelector((state) => state.countries)
  const language = useAppSelector((state) => state.language.language)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
      {countries.countries.map((country : CountryType, i) => (
        <a key={i} className='country-item' href={`/country/${country.cca2}`}>
          <img className="country-item__img" src={country.flags.svg}/> 
          <p className="country-item__name">{language === "pl" ? country.translations.pol.common : country.name.common}</p>
        </a>
      ))}
      </div>
    </div>
  )
}

export default Sidebar