import Router from './routes';
import { Header } from './components';


function App() {
  return (
    <>
      <main style={{height: '100vh', width:'100vw'}}>
        <Header/>
        <Router />
      </main>
    </>
  )
}

export default App
