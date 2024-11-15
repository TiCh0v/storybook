import './App.css';
import Button from './components/Button/Button';
import FormWithButtons from './components/Form/FormButtons';

import { Card } from './components/Card/Card';
import { BadgeProps } from './components/Card/helpers/Bage/Badge';

function App() {
  const badge: BadgeProps = {
    content: 'Действующий',
    class: 'success',
  };

  return (
    <>
      <div>Test storybook</div>
      <div className="button-container">
        <Button label="button" />
        <Button label="button" variant="secondary" />
        <Button label="button" variant="outline" />
      </div>
      <FormWithButtons successMessage="чиназес" buttonText="я кнопка" />
      
     
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          rowGap: '60px', 
          columnGap: '20px',
          padding: '16px',
          
        }}
      >
        <Card name="Аэробика плюс" price={200} badges={[badge]} />
        <Card name="Карточка 2" price={150} badges={[badge]} />
        <Card name="Карточка 3" price={250} badges={[badge]} />
        <Card name="Карточка 4" price={300} badges={[badge]} />
        <Card name="Карточка 5" price={350} badges={[badge]} />
        <Card name="Карточка 6" price={100} badges={[badge]} />
        <Card name="Карточка 7" price={400} badges={[badge]} />
        <Card name="Карточка 8" price={450} badges={[badge]} />
      </div>
    </>
  );
}

export default App;
