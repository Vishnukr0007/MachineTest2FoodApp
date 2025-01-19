import React, { useState } from 'react';
import './Menu.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Menu() {
  // State to manage the selected menu category
  const [selectedMenu, setSelectedMenu] = useState('FOOD');

  // Define menu items for each category
  const foodItems = [
    { name: 'Pizza', price: '$12.99' },
    { name: 'Burgers', price: '$8.99' },
    { name: 'Pasta', price: '$10.99' },
    { name: 'Salads', price: '$7.99' },
    { name: 'Desserts', price: '$5.99' },
  ];

  const drinkItems = [
    { name: 'Coke', price: '$2.99' },
    { name: 'Pepsi', price: '$2.99' },
    { name: 'Lemonade', price: '$3.99' },
    { name: 'Water', price: '$1.99' },
  ];

  const brunchItems = [
    { name: 'Egg Sandwich', price: '$7.99' },
    { name: 'Pancakes', price: '$5.99' },
    { name: 'Omelette', price: '$8.99' },
    { name: 'Coffee', price: '$2.50' },
  ];

  // Determine the menu to display based on the selected category
  let itemsToDisplay;
  if (selectedMenu === 'FOOD') {
    itemsToDisplay = foodItems;
  } else if (selectedMenu === 'DRINKS') {
    itemsToDisplay = drinkItems;
  } else if (selectedMenu === 'BRUNCH') {
    itemsToDisplay = brunchItems;
  }

  return (
    <div className="Listmenu">
      <div className="menu">
        <Button className='buttons'  onClick={() => setSelectedMenu('FOOD')}>FOOD</Button>
        <Button  className='buttons' onClick={() => setSelectedMenu('DRINKS')}>DRINKS</Button>
        <Button className='buttons' onClick={() => setSelectedMenu('BRUNCH')}>BRUNCH</Button>
      </div>

      {/* New box div */}
      <Container>
        {/* Box with menu items */}
        <Row className="justify-content-center">
          <Col md={6} className="box p-4">
            <ul className="list-unstyled">
              {itemsToDisplay.map((item, index) => (
                <li key={index} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="price">{item.price}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;
