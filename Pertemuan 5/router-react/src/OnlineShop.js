import dior from './dior.png';
import './OnlineShop.css';
import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

//tas
const tas = [
    {id: 1, img: 'https://media.dior.com/img/en_int/sku/couture/M1286ZRLP_M928_TU?imwidth=460', name: 'Large Dior Book Tote', price:'USD $7.200'},
    {id: 2, img: 'https://media.dior.com/img/en_int/sku/couture/M0565CMVO_M917_TU?imwidth=460', name: 'Medium Lady Dior Bag', price:'USD $8.500'},
    {id: 3, img: 'https://media.dior.com/img/en_int/sku/couture/M6202OOBR_M879_TU?imwidth=460', name: 'Medium Dior Vibe Zip Bowling Bag', price:'USD $4.700'},
    {id: 4, img: 'https://media.dior.com/img/en_int/sku/couture/1ESBA163CDP_H24E_TU?imwidth=460', name: 'Dior Hit the Road Backpack', price:'USD $5,196'},
    {id: 5, img: 'https://media.dior.com/img/en_int/sku/couture/1ADDU115CDP_H43E_TU?imwidth=460', name: 'Dior Lingot 50 Duffle Bag', price:'USD $3.300'},
    {id: 6, img: 'https://media.dior.com/img/en_int/sku/couture/1ESBO013YKY_H27E_TU?imwidth=460', name: 'Mini Rider Backpack', price:'USD $8.500'}
]

//jaket
const jaket = [
    {id: 1, img: 'https://media.dior.com/img/en_int/sku/couture/221V08A1166_X9000_T46X?imwidth=460', name: 'V08 Cropped Jacket with Dior Belt', price:'USD $4.600'},
    {id: 2, img: 'https://media.dior.com/img/en_int/sku/couture/157V38A2827_X1233_T46X?imwidth=460', name: 'Macrocannage Bar Jacket', price:'USD $3.900'},
    {id: 3, img: 'https://media.dior.com/img/en_int/sku/couture/214V50AM351_X0871_T46X?imwidth=460', name: 'CHRISTIAN DIOR 8 Bomber Jacket', price:'USD $2.450'},
    {id: 4, img: 'https://media.dior.com/img/en_int/sku/couture/023C261C4739_C131_T64X?imwidth=460', name: 'Double-Breasted Jacket', price:'USD $5.990'},
    {id: 5, img: 'https://media.dior.com/img/en_int/sku/couture/213M439AT453_C080_TXXSX?imwidth=460', name: 'DIOR AND SACAI Knit Hybrid Jacket', price:'USD $5.300'},
    {id: 6, img: 'https://media.dior.com/img/en_int/sku/couture/213C252A5113_C580_T64X?imwidth=460', name: 'Fabric Overlay Short Jacket', price:'USD $3.100'}
]

//footwear
const footwear = [
    {id: 1, img: 'https://media.dior.com/img/en_int/sku/couture/KCK330SZC_S29W_T425X?imwidth=460', name: 'Walk.n.Dior Star Sneaker', price:'USD $1.090'},
    {id: 2, img: 'https://media.dior.com/img/en_int/sku/couture/KDQ570LAM_S49K_T425X?imwidth=460', name: 'Dior Rhodes Heeled Sandal', price:'USD $1.150'},
    {id: 3, img: 'https://media.dior.com/img/en_int/sku/couture/KCB737SRX_S900_T425X?imwidth=460', name: 'D-Mension Lace-Up Ballerina Flat', price:'USD $1.390'},
    {id: 4, img: 'https://media.dior.com/img/en_int/sku/couture/3SH118YNT_H568_T51X?imwidth=460', name: 'B23 High-Top Sneaker', price:'USD $1.282'},
    {id: 5, img: 'https://media.dior.com/img/en_int/sku/couture/3DE334ZMO_H765_T375X?imwidth=460', name: 'Dior Explorer Boat Shoe', price:'USD $1.100'},
    {id: 6, img: 'https://media.dior.com/img/en_int/sku/couture/3BO278ZHO_H060_T365X?imwidth=460', name: 'DIOR AND SACAI Chelsea Boot', price:'USD $1.702'}
]

const OnlineShop = () =>{
    return(
        <Router>
            <div className='OnlineShop'>
                <Navbar />
                <div className = 'container'>

                <AuthButton />
                    <Switch>
                        <Route exact path = '/'><Home /></Route>
                        <Route path = '/login'><Login /></Route>
                        <PrivateRoute path = '/producs'><NestProducts /></PrivateRoute>
                        <Route exact path = '/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Navbar ({title}){
    return(
        <nav className="navbar  bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/producs'>Producs</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps={
    title:'Dior Reseller Store'
};

function Home(){
    return(
        <div className = 'home'>
            <h1>Welcome to Dior Reseller Store</h1>
            <img src={dior} />
        </div>
    );
}

function About (){
    return(
        <div className = 'home'>
            <h1>DIOR</h1>
            <hr />
            <h4>
            Christian Dior was the designer of dreams. As soon as his House was founded in 1946, and consecrated by the revolution of the New Look, his visionary spirit never ceased to glorify women all over the world. “Fabric is the sole vehicle of our dreams (…). Fashion, in sum, comes from a dream, and dreaming is an escape,” he wrote. Season after season, this exceptional heritage is reinvented by the singular creative passion, force and modernity of the House’s Creative Directors who – from haute couture to perfumes – make the Dior magic live on with audacity, excellence of savoir-faire and its unique beauty of the gesture. Discover more of our unique history as well as our latest creations online.
            </h4>
            <hr />
            <br/><br/>
            <h3>Official Website : <a href='https://www.dior.com/' target="_blank">https://www.dior.com/</a></h3>
        </div>
    );
}

function NestProducts() {
    let { path, url } = useRouteMatch();
    return(
        <div>
            <br/><br/>
        <h2>Product Dior</h2>
        <ul>
            <li>
                <Link to = {`${url}/Bags`}>Bags</Link>
            </li>
            <li>
                <Link to = {`${url}/Footwears`}>Footwears</Link>
            </li>
            <li>
                <Link to = {`${url}/Jackets`}>Jackets</Link>
            </li>
        </ul>
        <br/><br/>

        <Switch>
            <Route exact path = {path}>
                <h3>Please select a Product.</h3>
            </Route>
            <Route path = {`${path}/Bags`}>  
                <Tas />
            </Route>
            <Route path = {`${path}/Footwears`}>  
                <Footwear />
            </Route>
            <Route path = {`${path}/Jackets`}>  
                <Jaket />
            </Route>
        </Switch>
        </div>
    );
}

// Tas
const ProductTas=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsTas =({prods})=>{
    return (
    <div>

    {prods.map(prod=>(
        <ProductTas img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Tas() {
    return(
            <Route exact path='/producs/Bags' render={(props)=>
                <Fragment>
                    <ProductsTas prods={tas}/>
                </Fragment>
                }
            />
    );
}
// End Tas

//Sepatu
const ProductFootwear=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsFootwear =({prods})=>{
    return (
    <div>

    {prods.map(prod=>(
        <ProductFootwear img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Footwear() {
    let { topicId } = useParams();
    <h3>{topicId}</h3>
    return(
        <Route exact path='/producs/Footwears' render={(props)=>
            <Fragment>
                <ProductsFootwear prods={footwear}/>
            </Fragment>
            }
        />
    );
}
//End Sepatu

//Jaket
const ProductJaket=(props)=> {
    return (
    <div className='product'>
        <center><img src={props.img} /></center>
        <h5>{props.name}</h5>
        <h6>Price: {props.price}</h6>
    </div>
    );
}

const ProductsJaket =({prods})=>{
    return (
    <div>

    {prods.map(prod=>(
        <ProductJaket img={prod.img} name={prod.name} price={prod.price} />
    ))
    }
    </div>
    )
};

function Jaket() {
    let { topicId } = useParams();
    <h3>{topicId}</h3>
    return(
            <Route exact path='/producs/Jackets' render={(props)=>
                <Fragment>
                    <ProductsJaket prods={jaket}/>
                </Fragment>
                }
            />
    );
}
//end jakeet
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
    fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/"} };
    return fakeAuth.isAuthenticated ? (
    <p>
        Welcome!{" "}
        <button className='button'
        onClick={() => {
        fakeAuth.signout(() => history.push(from));
        }}
        >
        Sign Out
        </button>
    </p>
    ) : (
    <p></p>
    );
}

function PrivateRoute({ children, ...rest}) {
    return(
        <Route
        {...rest}
        render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
        children
    ) : (
        <Redirect
        to = {{
            pathname: "/login",
            state: {from: location}
        }}
    />
    )
    }
    />
    );
}

function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/"} };
    let login = () => {
    fakeAuth.authenticate(() => {
        history.replace(from);
    });
    };

    return (
    <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button className = 'button' onClick = {login}>Log In</button>
    </div>
    );
}

export default OnlineShop;