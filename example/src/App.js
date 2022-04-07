import React from 'react'
import {
  Login,
  Register,
  ProductCard,
  ProgressBar,
  ComplexComponent,
  PortfolioHome,
  Table,
  TeamMembers,
  GroceryList,
} from 'dezenix-react'
import Home from './components/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import img1 from "./images/img01.png"
import user from "./images/user1.jpg"
import {members} from "./data/members.json"




const App = () => {
  let headers = ["Id","Name", "Email", "Password", "Mobile"];
  let bodys = [
    { Id: "1",
      Name: "disha",
      Email: "disha@gmail.com",
      Password: "disha",
      Mobile: "9810XXXXXX",
    },
    {
      Id: "2",
      Name: "disha",
      Email: "disha@gmail.com",
      Password: "disha",
      Mobile: "9810XXXXXX",
    },
    {
      Id: "3",
      Name: "disha",
      Email: "disha@gmail.com",
      Password: "disha",
      Mobile: "9810XXXXXX",
    },
    {
      Id: "4",
      Name: "disha",
      Email: "disha@gmail.com",
      Password: "disha",
      Mobile: "9810XXXXXX",
    },
  ];
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/progress_bar'
          element={<ProgressBar bgcolor='red' progress='60' height={30} />}
        />
        <Route
          path='/table'
          element={<Table header={headers} body={bodys} key={bodys.Id} /> }
        />
        <Route
          path='/product_card'
          element={
            <ProductCard
              img='https://i.ibb.co/SrRbQWb/img-1.png'
              title='Nike Jordan Air'
              price='$80'
              des='This is the best nike jordan air sneakers for basketball.'
            />
          }
        />
        <Route path='/complex' element={<ComplexComponent />} />
        <Route path='/portfoliohome' element={<PortfolioHome pic={img1} />} />
        <Route path='/team' element={<TeamMembers img={user} members={members}  />} />
        <Route path='/GroceryList' element={<GroceryList />} />
       
      </Routes>
    </HashRouter>
  )
}

export default App
