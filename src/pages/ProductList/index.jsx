import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";
import NavBar from "../../components/NavBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { AddButton, Card, Content, Img } from "./styles";
function ProductList() {
  const { productsItems } = useContext(ProductsContext);

  const { addToCart, cart } = useContext(CartContext);

  const products_count = cart.length;

  const history = useHistory();
  return (
    <>
      <NavBar>
        <h1>Kenzieshop</h1>
        <div>
          {products_count > 0 && (
            <div className="count_cart">{products_count}</div>
          )}
          <button onClick={() => history.push("/cart")}>
            <AiOutlineShoppingCart className="icon" />
            Carrinho
          </button>
          <button>
            {" "}
            <FiLogIn className="icon" />
            Entrar
          </button>
        </div>
      </NavBar>
      <Content>
        <Card>
          {productsItems.map((item, index) => (
            <div key={index}>
              <Img src={item.img} alt={item.name}></Img>
              <li className="Name_product">{item.name}</li>
              <li className="Price_product">R$ {item.price.toFixed(2)}</li>
              <AddButton onClick={() => addToCart(item)}>
                Adicionar ao carrinho
              </AddButton>
            </div>
          ))}
        </Card>
      </Content>
    </>
  );
}

export default ProductList;
