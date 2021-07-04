import { useState, useEffect } from 'react'

import ReactTable from 'react-table-v6'

import 'react-table-v6/react-table.css'
import axios from 'axios'


const App = () => {
const [userState, setUserState]= useState({
users: [],
columns: [
{
Header: 'name',
accessor: 'name',
filterable: true

},
{
  Header: 'email',
  accessor: 'email',
  filterable: true,
},
{
Header: 'phone',
accessor: 'phone',
filterable: true

}

]
})

useEffect (()=> {

axios.get('https://randomuser.me/api?results=20')
.then(({data: { results } })=> {

  console.log(results)
const users = results.map(user=>({
  name: `${user.name.first} ${user.name.last}`,
  email: user.email,
  phone: user.phone

}))
//console.log(users)
setUserState({...userState, users})
})
.catch(err => console.error(err))
}, [])

return (


<ReactTable 
data={userState.users}
columns={userState.columns}
/>

)


}

export default App