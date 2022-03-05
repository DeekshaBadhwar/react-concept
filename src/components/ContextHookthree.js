import React from 'react'
import {ChannelContext, UserContext} from  '../App'

export default function ContextHookthree() {
  return (
    <div>
      <UserContext.Consumer>

           {user =>(
            
           <ChannelContext.Consumer>
               {name=>
               {
                 console.log(name,"l",user,"opo")
                  return <h1>hi {user}{name}</h1>
               }}
                </ChannelContext.Consumer>
           )}
          
        </UserContext.Consumer>
    </div>
  )
}
