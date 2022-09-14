import './App.scss';
import Header from "./component/header/header.component";
import Home from "./pages/home/home.page";
import Footer from "./component/footer/footer.component";
import Record from "./pages/record/record.page";
import Column from "./pages/column/column.page";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div style={{paddingTop: 60}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/column' element={<Column/>}/>
          <Route path='/record' element={<Record/>}/>
        </Routes>
      </div>
      <Footer/>
    
    </div>
  );
}

export default App;
