import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
// Importing framer motion
// Adding the toast
import toast from "react-hot-toast";
import { useEffect } from "react";
// import Image from "next/image";

export default function ProductDetails() {
  // Fetch slug
  //   const router = useRouter();
  //   console.log(router);
  //   check this to know that you are working with.
  const { query } = useRouter();

  // Use State
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  // Reset Qty
  useEffect(() => {
    setQty(1);
  }, []);

  // Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  // console.log(data.products.data[0]);

  // check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  //   Extract our data
  const { title, description, image } = data.products.data[0].attributes;

  // Create a toast
  const notify = () => {
    toast.success(`${title} added to your cart`, {
      duration: 1500,
      icon: "👏",
    });
  };

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0], qty);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
