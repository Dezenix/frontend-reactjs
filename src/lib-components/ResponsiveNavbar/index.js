import React, { useEffect, useState } from 'react';
import { Alert,CNavbar,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavLink,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownDivider,CDropdownItem,CNavItem,CForm,CFormInput,CButton } from '@coreui/bootstrap-react'
import 'bootstrap/dist/css/bootstrap.min.css'


const ResponsiveNavbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Dezenix</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Option 1</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">More</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Option 2</CDropdownItem>
                  <CDropdownItem href="#">Option 3</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Other Option</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>

            </CNavbarNav>
            <CForm className="d-flex justify-content-end">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default ResponsiveNavbar
