import { Grid, Container} from "@material-ui/core";
import Product from "../Product";
import Banner from "../Banner";
import Banner2 from "../Banner2";
import "./style.css";

const Products = ({ products, addProduct }) => {
    console.log("products ===", products);

    return (
     <div>
         <Banner />
         <Banner2 />
         <Container id="products">
             <Grid container spacing={4}>
        {products.map(product => {
         return (
            <Grid key={product.id} item xs={12} sm={6} md={3}>  
             <Product product={product} addProduct={addProduct} />
         </Grid>
         
         );
        })}
        </Grid>
        </Container>
    </div>
        
    
    ); 
};

export default Products;