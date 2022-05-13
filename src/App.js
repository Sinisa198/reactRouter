import {Routes,Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Products} from './components/Products';
import { AuthProvider } from './components/auth';
import {About} from './components/About';
import {Navbar} from './components/Navbar';
import {OrderSummary} from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import {FeaturedProducts} from './components/FeaturedProducts';
import {NewProducts} from './components/NewProducts';
import {Users} from './components/Users';
import {UsersDetails} from './components/UsersDetails';
import {Admin} from './components/Admin';
import Profile from './components/Profile';



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="auth" element={<AuthProvider/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='*' element={<Profile/>}/>
      <Route path='profile' element={<NoMatch/>}/>
      <Route path='users' element={<Users />}>
        <Route path=':userId' element={<UsersDetails/>}/>
        <Route path='admin' element={<Admin />}/> 
      </Route>
      <Route path='/products' element={<Products />}> 
        <Route index element={<FeaturedProducts/>} />
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>
     
    </Routes>
    </>
  );
}

export default App;
