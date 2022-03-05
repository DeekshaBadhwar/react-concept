import logo from './logo.svg';
import './App.css';
import Datafet from './components/data.fetching';
import Contexthook from './components/context.hook';
import React from 'react';
import Reducerone from './components/reducerone';
import ReducerTwo from './components/reducerTwoo';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {

  return (
    <div className="App">
      {/* <Reducerone/>
       */}
<ReducerTwo/>
      <UserContext.Provider value={'Vishav'}>
        <ChannelContext.Provider value={'evolion'}>
        <Contexthook />
        </ChannelContext.Provider>
        
      </UserContext.Provider>
     <Datafet/>
    </div>
  );
}

export default App;
