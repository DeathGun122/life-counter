import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from './utils'
import Portal from './components/Portal'
import Form from './components/Form'
import {useState, useEffect, use} from 'react'

function App() {
  
  const [name, setName] = useState('Rohan')
  const [birthDate, setBirthDate] = useState('2005-12-12')
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(calculateTimeLeft(birthDate, lifeExpectancy))
  
  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  function resetData() {
    setName('Rohan')
    setBirthDate('2005-12-12')
    setLifeExpectancy(80)
    localStorage.clear()
  }

  function handleUpdateData(n, b, e) {
    if (!n || !b || !e) { return }

    // save data to local storage so that i can read it in later
    localStorage.setItem('formData', JSON.stringify({ name: n, birthDate: b, lifeExpectancy: e }))

    setName(n)
    setBirthDate(b)
    setLifeExpectancy(parseInt(e))
    handleToggleModal()
  }

  useEffect(() => {
    if(!localStorage) { return }
    if(localStorage.getItem('formData')) {
      const { name: n, birthDate: b, lifeExpectancy: e } = JSON.parse(localStorage.getItem('formData'))
      setName(n)
      setBirthDate(b)
      setLifeExpectancy(parseInt(e))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(calculateTimeLeft(birthDate, lifeExpectancy))
    }, 1000)
    return () => {clearInterval(interval)}
  }, [birthDate, lifeExpectancy])
  

  return (
      <Layout>
        {showModal && (
          <Portal handleCloseModal={handleCloseModal}>
          <Form name={name} setName={setName} lifeExpectancy={lifeExpectancy} setLifeExpectancy={setLifeExpectancy} handleUpdateData={handleUpdateData} handleCloseModal={handleToggleModal} />
        </Portal>)}
          <Hero name={name} data={data} percentage={percentage} handleToggleModal={handleToggleModal} resetData={resetData}/>
          <Clocks data={data}/>
          <Calendar lifeExpectancy={lifeExpectancy} data={data}/>
          <Summary birthDate={birthDate} lifeExpectancy={lifeExpectancy}/>
      </Layout>
  )
}

export default App