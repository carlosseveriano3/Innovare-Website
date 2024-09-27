import MainPage from "./pages/main-page/MainPage"
import Header from "./components/header/Header"

function App() {

  return (
    <main className="app">
        <Header />
      <div className="layout-app">
        <MainPage />
      </div>
    </main>
  )
}

export default App
