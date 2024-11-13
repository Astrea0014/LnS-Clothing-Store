import './App.css';

import NavigationRouter from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.105050354793!2d11.949015277259935!3d57.697685040540605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff38104f4376b%3A0x91488156d35ec684!2sL%26S%20Butiken%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1728897978130!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/

export default function App() {
  return (
    <>
      <NavigationRouter/>
      <Footer/>
    </>
  );
}