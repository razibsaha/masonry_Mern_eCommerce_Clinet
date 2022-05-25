import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useProducts = ({id}) => {
//   const [products, setProducts] = useState([]);
  /* useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]); */

  const { data: products, isLoading, refetch } = useQuery(['available'], () => 
  fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json()))

  return [products];
};
export default useProducts;
