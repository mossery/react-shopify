import React, { useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { collections as titles } from '../../config'
import { loadCollections } from '../../stores/actions'
import { Collection } from '../../interfaces'
import NavDropdownMenu from '../NavDropdownMenu'

function NavbarApp() {
  const dispatch = useDispatch()
  const collections = useSelector((state: RootStateOrAny) => state.collection.collections)
  useEffect(() => {
    dispatch(loadCollections(titles))
  },[dispatch])

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>HandyCrafties</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Collections" id="collasible-nav-dropdown">
          {collections && collections.length > 0
            && collections.map((collection: Collection) => <NavDropdownMenu key={collection.id} data={collection} /> )}
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarApp;