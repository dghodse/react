import React from 'react';
import Navbar from "./Components/Navbar"
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"

class App extends React.Component {
     render() {
          return (
               <div>
                    <Navbar />
                    <Gallery />
                    <Footer/>
               </div>
          )        
     }

}

export default App;