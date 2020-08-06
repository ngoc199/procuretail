import React, { useState } from 'react'
import logo from './logo.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Import Components
import SidebarLink from './components/SidebarLink'
import TopMenu from './components/TopMenu'
import SearchBar from './components/SearchBar'
import Item from './components/Item'
import Bill from './components/Bill'
import Button from './components/Button'

function App() {

  // List of bought items
  const [itemList, setItemList] = useState([])

  // Update Item List
  // // const updateitemlist = () => {
  // //   if (this.quantity > 0) {
  // //     setitemlist(prevstate => {
  // //       return [...prevstate, this]
  // //     })
  // //   } else {
  // //     setitemlist(prevstate.splice(prevstate.find(this), 1))
  // //   }
  // }

  const renderMultipleItems = (numbers) => {
    let arr = []
    for (let i = 0; i < numbers; i++) {
      arr.push(i + 1)
    }
    return arr.map((item, index) => {
      return (
        <div className="col-4">
          <Item key={index} name='Lays Packets onion flavour - 150g' price={20} />
        </div>
      )
    })
  }

  return (
    <div className='row'>
    {/* Dashboard Navbar */}
    <nav className='col-2 navbar-light bg-white vh-100'>
      <a href="/" className="font-weight-bold navbar-brand">Procuretail</a>
      <ul className="navbar-nav">
        <li className="nav-item"><SidebarLink content='Billing' icon='fa fa-file-invoice' /></li>
        <li className="nav-item"><SidebarLink content='Dashboard' icon='fa fa-th-large' /></li>
        <li className="nav-item"><SidebarLink content='Inventory' icon='fa fa-shopping-cart' /></li>
        <li className="nav-item"><SidebarLink content='Purchase' icon='fa fa-shopping-bag' /></li>
        <li className="nav-item"><SidebarLink content='Customer' icon='fa fa-credit-card' /></li>
        <li className="nav-item"><SidebarLink content='Support' icon='fa fa-headphones' /></li>
      </ul>
    </nav>
    {/* End Dashboard Navbar */}
    <div className="col-md-10 bg-secondary p-0">
      <TopMenu />
      {/* End Top Menu */}

      <div className='container d-flex flex-row justify-content-between align-items-center'>
        <SearchBar placeholderText='Enter customer number' submitText='Go' />
        <div className='w-50 text-right container'>
          <Button className="mr-3 btn btn-outline-danger">Hold this bill</Button>
          <Button className='btn btn-outline-dark'>Clear this bill</Button>
        </div>
      </div>
      {/* End Bill Action */}
      <div className="container row">
        <section className='col-8 bg-white'>
          <SearchBar fullWidth={true} placeholderText='Search Products' submitText='Find' />
          <div className="row">
            {renderMultipleItems(12)}
          </div>
        </section>
        {/* End Products */}
        <section className="col-4 pl-5">
          <Bill itemList={itemList} />
        </section>
        {/* End Bill */}
      </div>
    </div>
    {/* End Right Screen */}
    </div>
  )
}

export default App
