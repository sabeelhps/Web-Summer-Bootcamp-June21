import { createContext,useState,useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UserContext = createContext();


export function UserContextProvider(props) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const [cart, setCart] = useState([]);

    const history = useHistory();

    async function getLoggedIn() {
        const res = await axios.get('/loggedIn');
        setIsLoggedIn(res.data)
    }
    
    async function getCart() {
        const res = await axios.get('/user/cart');
        console.log(res);
        setCart(res.data);
    }


    async function addToCart(product) {
        
        try {
            setCart((prevCart) => {
                return prevCart.concat(product);
            });
            await axios.post('/user/cart/add', { productid: product.id });
            console.log("Product Add Successfully in the cart")
        }
        catch (e) {
            console.log(e.message);
            history.push('/allproducts');
        }
    }

    async function removeFromCart(productid) {
        console.log("REMOVING");
        setCart((prevCart) => {
            return prevCart.filter((product) => product._id !== productid);
        });
        await axios.post('/user/cart/remove', { productid });
    }



    useEffect(() => {
        getLoggedIn();
        if (isLoggedIn === true) {
            getCart();
        }
    }, [isLoggedIn])
    

    const context = {
        isLoggedIn: isLoggedIn,
        getLoggedIn: getLoggedIn,
        cart: cart,
        addToCart: addToCart,
        cartLength: cart.length,
        removeFromCart:removeFromCart
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserContext;


