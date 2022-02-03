import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import SingleRecipe from './pages/SingleRecipe';
import ErrorPage from './pages/ErrorPage';
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipe />} />
        <Route path='/recipes/:id' element={<SingleRecipe />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
