import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useDispatch } from "react-redux";

const DropDown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Dropdown className='drop-top' isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{ fontWeight: "bolder" }} caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Selections</DropdownItem>
          <DropdownItem onClick={() => dispatch({ type: "PEOPLE" })}>
            People
          </DropdownItem>
          <DropdownItem onClick={() => dispatch({ type: "PLANETS" })}>
            Planets
          </DropdownItem>
          <DropdownItem onClick={() => dispatch({ type: "STARSHIPS" })}>
            Starships
          </DropdownItem>
          <DropdownItem onClick={() => dispatch({ type: "VEHICLES" })}>
            Vehicles
          </DropdownItem>
          <DropdownItem onClick={() => dispatch({ type: "SPECIES" })}>
            Species
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
