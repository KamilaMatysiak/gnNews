import React, {useEffect} from 'react'
import './Sidebar.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchCountries, CountryType } from '../../features/countriesSlice'

const Sidebar = () => {
  const countries = useAppSelector((state) => state.countries)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  console.log(countries.countries);

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
      {countries.countries.map((country : CountryType) => (
        <a className='country-item' href={`/country/${country.name.common}`}>
          <img className="country-item__img" src={country.flags.svg}/> 
          <p className="country-item__name">{country.name.common}</p>
        </a>
      ))}
      </div>
    </div>
  )
}

export default Sidebar