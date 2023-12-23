import Card from "../components/Card"

const Body = () => {
  const fruits = [
    {
      id: 1,
      price: 3.99,
      name: "banana",
      description: "fresh bananas from thailand",
    },
    {
      id: 2,
      price: 4.32,
      name: "mango",
      description: "fresh mangoes from thailand",
    },
    {
      id: 3,
      price: 5.67,
      name: "apple",
      description: "fresh apples from thailand",
    },
    {
      id: 4,
      price: 9.99,
      name: "kiwi",
      description: "fresh kiwis from thailand",
    },
    {
      id: 5,
      price: 1200,
      name: "orange",
      description: "fresh oranges from thailand",
    },
  ];
  return (
    <div className="card-container">
      {fruits.map(fruit => {
        return <Card key={fruit.id} data={fruit} />;
      })}
    </div>
  )
}

export default Body