import  {Routes,Route,} from "react-router-dom";
import PrivacyPolicy from "./privacy_policy";
import About from "./about";
import Contact from "./contact"
import Blogs from "./blogs"
import Marketplace from "./marketplace"
import Products from "./products"
import Dashboard from "./dashboard/Dashboard";
import Login from "./login";
import Signup from "./signup"



function Links(){   
    return(
        <div>
               <Routes>
                 <Route exact path="/"  Component={Login}/>
                 <Route path="signup" Component={Signup}/>
                 <Route path="dashboard" Component={Dashboard}/>
                 <Route path="blogs" Component={Blogs } />
                 <Route path="products" Component={Products} />
                 <Route path="marketplace" Component={Marketplace } />
                 <Route path='contact' Component={Contact} />
                 <Route path="about" Component={About } />
                 <Route path="privacy_policy" Component={PrivacyPolicy } />

               </Routes>  
        </div>
    )
}
export default Links;