import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from './utils'

function App() {
const birthDate = "1995-06-15"
const lifeExpectancy = 80
const data = calculateTimeLeft(birthDate, lifeExpectancy)
console.log(data)
const name = 'Rohan'
const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  return (
      <Layout>
        <Hero name={name} data={data} percentage={percentage} />
        <Clocks data={data}/>
        <Calendar/>
        <Summary/>
      </Layout>
  )
}

export default App