import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Header from "../Header";
  import Home from "../../pages/Home";
  import About from "../../pages/About";
  import ProductDetails from "../../pages/ProductDetails";
  
  const App = () => (
    <BrowserRouter>
      <main>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route
              path="*"
              element={
                <div className="no-page">
                  <p>Ooops! There is nothing here!</p>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
  
  export default App;
  