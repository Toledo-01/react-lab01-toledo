import Header  from "./components/Header";
import Greeting from "./components/Greeting";
import { PrimaryButton, IconButton  } from "./components/Buttons";
import Footer from "./components/Footer";
import JsxDemo from "./components/JsxDemo";



function App() {
  return(
  <div>
    <Header />
    <Greeting />
    <PrimaryButton />
    <IconButton />
    <Footer />
    <JsxDemo />

  </div>
  )
}

export default App;