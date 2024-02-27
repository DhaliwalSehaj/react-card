 import { Products } from './components/products';
 import contents from './content';
 import StoreImageTextFirebase from 'react';
 //import './App.css';

 export default function App() {
     return(
            <div className='App'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
     )
 }