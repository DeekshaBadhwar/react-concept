import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'
import ContextHookthree from './ContextHookthree'
export default function Contexthooktwo() {

  //another way of consuming use Context
  const user=useContext(UserContext)
  const name=useContext(ChannelContext)
  return (
    <div>Contexthooktwo

       <h1>hi {user}  {name} </h1>
    </div>
  )
}
