import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { FiLogIn } from "react-icons/fi";
import { SubButton, Card, Content, Img, Order } from "./styles";

function Cart() {
  const history = useHistory();

  const { cart, removeFromCart } = useContext(CartContext);

  const cartLength = cart.length;

  return (
    <>
      {cartLength ? (
        <>
          <NavBar>
            <Link to="/" className="Link_to_home">
              Kenzieshop
            </Link>
            <div>
              {cartLength > 0 && <div className="count_cart">{cartLength}</div>}
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
              {cart.map((item, index) => (
                <div key={index}>
                  <Img src={item.img} alt={item.name}></Img>
                  <li className="Name_product">{item.name}</li>
                  <div className="Price-Box">
                    <li className="Price_product">
                      R$ {item.price.toFixed(2)}
                    </li>
                    <SubButton onClick={() => removeFromCart(item)}>
                      x
                    </SubButton>
                  </div>
                </div>
              ))}
            </Card>
            <Order>
              <h2>Resumo do pedido</h2>
              <div>
                {cart.length === 1 ? (
                  <p>{cart.length} produto</p>
                ) : (
                  <p>{cart.length} produtos</p>
                )}
                <p>
                  {" "}
                  R$
                  {cart
                    .map(item => item.price)
                    .reduce(
                      (valorAnterior, valorAtual) => valorAnterior + valorAtual
                    )}
                </p>
              </div>
              <button>Finalizar o Pedido</button>
            </Order>
          </Content>
        </>
      ) : (
        <>
          <NavBar>
            <Link to="/" className="Link_to_home">
              Kenzieshop
            </Link>
            <div>
              {cartLength > 0 && <div className="count_cart">{cartLength}</div>}
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
          <div>
            <p>Você não adicionou nenhum produto ao seu carrinho :/</p>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
