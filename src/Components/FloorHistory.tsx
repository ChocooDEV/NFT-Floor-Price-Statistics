import { Table, CloseButton, Container, Group, Select, Button} from '@mantine/core';
import { useState, useEffect } from 'react';
import '../Styles/FloorHistory.scss';

const FloorHistory = () => {
/* --------------------------- useState ------------------------------ */

  type CollectionItem = {
    value: string;
    label: string;
    id: string;
  };

  type ElementItem = {
    position: number;
    value: string;
    label: string;
    id: string;
  };

  // the selected item in the Select
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  //const [selectedCollection, setSelectedCollection] =  useState<string | null>(null);

  const [gridElements, setGridElements] = useState<ElementItem[]>([
    { position: 1, value: 'Mad Lads', label: 'Mad Lads', id: '705b9b10d82a69e040b55419e0245cd6'},
    { position: 2, value: 'Famous Fox Federation', label: 'Famous Fox Federation', id: 'c0e56f7e5e8b0f32b1650499f215d000'},
  ]);

  const [availableCollections, setAvalaibleCollections] = useState([
    { value: 'Anon Evolved', label: 'Anon Evolved', id: 'd2dd1f047dff53a4e8d4703fba9ba4fc' },
    { value: 'AssetDash Vanta', label: 'AssetDash Vanta', id: '33296343b2e057e12bea18706628c17b' },
    { value: 'Aurory', label: 'Aurory', id: '4be376d480ea14267fb4e670f8419f42' },
    { value: 'Banx', label: 'Banx', id: '2b8e90add26bec2a5d0262c83ea78fbe' },
    { value: 'BoDoggos', label: 'BoDoggos', id: '5789abb4de19f619188df760ff4a5d55' },
    { value: 'Bozo Collective', label: 'Bozo Collective', id: 'e9abc1dda558fc1387351eed80ea684e' },
    { value: 'BroHalla', label: 'BroHalla', id: 'bbcd8e854cf054c233666854003438f1' },
    { value: 'CETS', label: 'CETS', id: 'fffdc85d030ddbcbb72919efee14a48b' },
    { value: 'Claynosaurz', label: 'Claynosaurz', id: '6b7652d1339722227c970e565dc6eaa2' },
    { value: 'Claynosaurz: The Call of Saga', label: 'Claynosaurz: The Call of Saga', id: '4e983e4ab2c60e4158046651b38d2e22' },
    { value: 'CryptoUndeads', label: 'CryptoUndeads', id: '02524f6e3b80f3fec861f884628229d1' },
    { value: 'Dead King Society (Kings)', label: 'Dead King Society (Kings)', id: '50043c71803c8171e39503de1c422e55' },
    { value: 'Degenerate Trash Pandas', label: 'Degenerate Trash Pandas', id: '802c870dada37d96c54f432461c26eee' },
    { value: 'Degods', label: 'Degods', id: '040de757c0d2b75dcee999ddd47689c4' },
    { value: 'Degen Ape Academy', label: 'Degen Ape Academy', id: 'cf31840df9ca44cd6e883f9bd21f8ac8' },
    { value: 'Degen Fat Cats', label: 'Degen Fat Cats', id: 'ca715b2d76c9970f3775d16ba32fe74f' },
    { value: 'Elixir: Ovols', label: 'Elixir: Ovols', id: '2abe87eecce396d9e136ee6d657fe51b' },
    { value: 'Famous Fox Federation', label: 'Famous Fox Federation', id: 'c0e56f7e5e8b0f32b1650499f215d000' },
    { value: 'Flash Trade', label: 'Flash Trade', id: 'b90b755ee6a4658e19006d6bca210ad1' },
    { value: 'GGSG: Galactic Geckos', label: 'GGSG: Galactic Geckos', id: 'f2c710274143244909ca0a66c7651046' },
    { value: 'Homeowners Association (Parcl)', label: 'Homeowners Association (Parcl)', id: 'c695b5cb7a1a797989e06e2d3feadc05' },
    { value: 'LILY', label: 'LILY', id: '85bb7fdb666a3ac8a899dbd055a013b4' },
    { value: 'Mad Lads', label: 'Mad Lads', id: '705b9b10d82a69e040b55419e0245cd6' },
    { value: 'Magic Ticket', label: 'Magic Ticket', id: '8456c4b195a3e4f8ed5a2ac5320283a9' },
    { value: 'Metame', label: 'Metame', id: '32a7b6f5023d5c095dc627b1ced16d73' },
    { value: 'Namaste', label: 'Namaste', id: '15f8daa6d89723da6e592498b8452f32' },
    { value: 'Okay Bears', label: 'Okay Bears', id: 'b39fcb65aae14fc33eefce63af1ead89' },
    { value: 'Photo Finish', label: 'Photo Finish', id: '5a50e7b4273d3691c071c5f876476cf1' },
    { value: 'Portals', label: 'Portals', id: '52985832f728ebfc4027ecdeb80fe2de' },
    { value: 'SMB Gen 2', label: 'SMB Gen 2', id: 'd515305e2b1de0026b5bf49fbb12e107' },
    { value: 'SMB Gen 3', label: 'SMB Gen 3', id: 'a5359309abb3533e38ada5902c51fd83' },
    { value: 'SolCasino', label: 'SolCasino', id: '6ba76b5c418f277bf2bb95c310f8dc7c' },
    { value: 'Stoned Ape Crew', label: 'Stoned Ape Crew', id: 'b8f49c79ee660542fa4f76c2f6e7febd' },
    { value: 'Subber K3Y', label: 'Subber K3Y', id: 'ef0f40251522d161a2acf927abd0f2a5' },
    { value: 'Smyths', label: 'Smyths', id: '63f9514c776fb8aca2b30e9c660f2ddc' },
    { value: 'Taiyo Pilots', label: 'Taiyo Pilots', id: 'd9edac1e38046e775e0b37487e0a51b8' },
    { value: 'Taiyo Robotics', label: 'Taiyo Robotics', id: '292937bc2e7f52f6fc5946026102c269' },
    { value: 'The Anon Club', label: 'The Anon Club', id: '93a0c144febc860deac3fa3a57c81e88' },
    { value: 'Transdimensional Fox Federation', label: 'Transdimensional Fox Federation', id: '40a15d82d971163be19841c1920bc1a1' }  
  ]);
/* -------------------------------------------------------------------- */
  // Function to remove a row by name
  const removeRow = (name: string) => {
    const updatedElements = gridElements.filter((gridElement) => gridElement.value !== name);
    setGridElements(updatedElements);
    localStorage.setItem('gridElements', JSON.stringify(updatedElements));
  };
  
  // Function to load elements from Localstorage on component mount
  useEffect(() => {
    const storedElements = localStorage.getItem('gridElements');
    if (storedElements) {
      setGridElements(JSON.parse(storedElements));
    }
  }, []);

  // Function to add data to the elements state
  const addToWatchlist = () => {
    if (selectedCollection) {
      console.log(selectedCollection)
      const newGridElement = {
        position: gridElements.length + 1,
        value: selectedCollection.value,
        label: selectedCollection.value,
        id: selectedCollection.id,
      };
      const updatedGridElements = [...gridElements, newGridElement];
      setGridElements(updatedGridElements);
      localStorage.setItem('gridElements', JSON.stringify(updatedGridElements));

      //get floor prices
      getFloorPrices(selectedCollection.id);
    }
  };


  // Function to call the backend and retrieve data from a collection
  const getFloorPrices = (collectionId:string) => {
    fetch(`http://localhost:80/getFloorPrices/${collectionId}/ONE_DAY`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ collectionId }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {  
      // Handle the received data here
    })
    .catch((error) => {
      console.error('Error while retrieving collection floor prices', error);
    });
  }


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

  const rows = gridElements.map((gridElement) => (
    <tr key={gridElement.value}>
      <td>{gridElement.value}</td>
      <td>price listing</td>
      <td>p+1h</td>
      <td>p+5h</td>
      <td>p+12h</td>
      <td>p+24h</td>
      <td>p+5d</td>
      <td>p+15d</td>
      <td>p+30d</td>
      <td><CloseButton title="Close popover" size="xl" iconSize={20} color='red' onClick={() => removeRow(gridElement.value)}/></td>
    </tr>
  ));

  return (
    <Container>
      <Group>
          <Select
            placeholder="Pick one"
            searchable
            maxDropdownHeight={280}
            data={availableCollections}
            value={selectedCollection?.value}
            onChange={(value) => {
              if (value) {
                const selected = availableCollections.find((item) => item.value === value);
                if (selected) setSelectedCollection(selected);
              } else {
                setSelectedCollection(null);
              }
            }}
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
