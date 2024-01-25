import MainView from './views/mainView'
import config from './config.json'

const App = () => {
  return (
    <main>
      <MainView characterSet={config.characters} polybiusSquare={config.polybiusSquare} homophonicMap={config.homophonicMap} />
    </main>
  )
}

export default App
