import './App.css';
import ProductPage from './Screens/ProductPage';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import CollectForm from './Screens/CollectForm';
import ProductSelling from './Screens/ProductSelling';
import ProductViewCart from './Screens/ProductViewCart';
import AboutUs from './Screens/AboutUs';
// import ContactUs from './Screens/ContactUs';
import Dashboard from './AdminPanel/AdminComponents/Admin/Dashboard';
import ProductSale from './AdminPanel/AdminComponents/Admin/ProductSale';
import CollectionView from './AdminPanel/AdminComponents/Admin/CollectionView';
import UserView from './AdminPanel/AdminComponents/Admin/UserView';
import ProductCartPage from './Screens/ProductCartPage';
import Contact from './Screens/Contact';
import AddProduct from './AdminPanel/AdminComponents/Admin/AddProduct';
import Employee from './AdminPanel/AdminComponents/Admin/Employee';
import EmployeeWork from './AdminPanel/AdminComponents/Admin/EmployeeWork';
import Order from './AdminPanel/AdminComponents/Admin/Order';
import ViewProduct from './AdminPanel/AdminComponents/Admin/ViewProduct';

function App() {
  return (
   <div>
    <Router>
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Dashboard/ProductSale' element={<ProductSale/>}/>
      <Route path='/Dashboard/CollectionView' element={<CollectionView/>}/>
      <Route path='/Dashboard/UserView' element={<UserView/>}/>
      <Route path='/Dashboard/AddProduct' element={<AddProduct/>}/>
      <Route path='/Dashboard/Employee' element={<Employee/>}/>
      <Route path='/Dashboard/EmployeeWork' element={<EmployeeWork/>}/>
      <Route path='/Dashboard/ViewProduct' element={<ViewProduct/>}/>
      <Route path='/Dashboard/Order' element={<Order/>}/>


      <Route path='/register' element={<Registration/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/ContactUs' element={<Contact/>}/>
      <Route path="/ProductPage" element={<ProductPage/>}/>
      <Route path="/ProductPage/CollectForm" element={<CollectForm/>}/>
      <Route path='/ProductSelling' element={<ProductSelling/>}/>
      <Route path='/ProductSelling/ProductViewCart' element={<ProductViewCart/>}/>
      <Route path='/ProductSelling/ProductCartPage' element={<ProductCartPage/>}/>
   

    </Routes>
    </Router>
   </div>
  );
}

export default App;
