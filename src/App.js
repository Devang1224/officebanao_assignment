import React from 'react';
import TabsScreen from './components/tabscreen/TabsScreen';
import "./app.css"
import Header from './components/ui/header/Header';


function App() {
  return (
    <div className='container'>
      <Header/>
      <TabsScreen/>

    </div>
  );
}

export default App;
