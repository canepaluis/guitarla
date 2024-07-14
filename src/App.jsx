import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Guitar from "./components/Guitar.jsx";

function App() {

  return (
      <>
          <Header />

          <main className="container-xl mt-5">
              <h2 className="text-center">Nuestra Colección</h2>

              <div className="row mt-5">
                  <Guitar />
                  <Guitar />
                  <Guitar />
                  <Guitar />
                  <Guitar />
                  <Guitar />
              </div>
          </main>

          <Footer />
      </>
  )
}

export default App
