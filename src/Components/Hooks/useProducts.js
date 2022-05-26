import { useQuery } from "react-query";

const useProducts = ({id}) => {
//   const [products, setProducts] = useState([]);
  /* useEffect(() => {
    fetch(`https://nameless-springs-99722.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]); */

  const { data: products, isLoading, refetch } = useQuery(['available'], () => 
  fetch(`https://nameless-springs-99722.herokuapp.com/products/${id}`)
        .then(res => res.json()))

  return [products];
};
export default useProducts;
