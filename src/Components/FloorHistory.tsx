import { Table, CloseButton, Container, Group, Select, Button} from '@mantine/core';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../Styles/FloorHistory.scss';

const FloorHistory = () => {
/* --------------------------- useState ------------------------------ */

  const [elements, setElements] = useState([
    { position: 1, name: 'Okay Bears'},
    { position: 2, name: 'Famous Fox Federation'},
  ]);

  const [collection, setCollection] = useState([
    { value: 'Mad Lads', label: 'Mad Lads' },
    { value: 'Tensorians', label: 'Tensorians' },
  ]);

  const [selectedCollection, setSelectedCollection] =  useState<string | null>(null);

/* -------------------------------------------------------------------- */
  // Function to remove a row by name
  const removeRow = (name: string) => {
    const updatedElements = elements.filter((element) => element.name !== name);
    setElements(updatedElements);
    Cookies.set('elements', JSON.stringify(updatedElements));
  };
  
  // Function to load elements from cookie on component mount
  useEffect(() => {
    const storedElements = Cookies.get('elements');
    if (storedElements) {
      setElements(JSON.parse(storedElements));
    }
  }, []);

  // Function to add data to the elements state
  const addToWatchlist = () => {
    const selectedData = selectedCollection;
    if (selectedData) {
      const newElement = {
        position: elements.length + 1,
        name: selectedData
      };
      const updatedElements = [...elements, newElement];
      setElements(updatedElements);
      Cookies.set('elements', JSON.stringify(updatedElements));
    }
  };

  const tableElement = (
    <tr>
      <th>Collection</th>
      <th>Price at listing</th>
      <th>+1 hour</th>
      <th>+5 hours</th>
      <th>+12 hours</th>
      <th>+24 hours</th>
      <th>+5 days</th>
      <th>+15 days</th>
      <th>+30 days</th>
      <th>Remove</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>price listing</td>
      <td>p+1h</td>
      <td>p+5h</td>
      <td>p+12h</td>
      <td>p+24h</td>
      <td>p+5d</td>
      <td>p+15d</td>
      <td>p+30d</td>
      <td><CloseButton title="Close popover" size="xl" iconSize={20} color='red' onClick={() => removeRow(element.name)}/></td>
    </tr>
  ));

  return (
    <Container>
      <Group>
          <Select
            placeholder="Pick one"
            searchable
            maxDropdownHeight={280}
            data={collection}
            value={selectedCollection}
            onChange={setSelectedCollection}
          />
          <Button 
            color="grape"
            onClick={() => addToWatchlist()}
          >Add to watchlist</Button>
      </Group>
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Table withBorder style={{marginTop: '15px', borderColor: '#8a2be2', borderWidth: '3px'}}>
            <thead>{tableElement}</thead>
            <tbody>{rows}</tbody>
        </Table>
      </div>
    </Container>
  );
};

export default FloorHistory;
