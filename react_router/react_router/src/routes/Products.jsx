import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"



const Products = () => {
    const { id } = useParams()

    const url = "http://localhost:3000/products/" + id;

    const { data: product } = useFetch(url)

    if (!product) return <p>Carregando...</p>

    return (
        <div>
            <p>ID do produto: {id}</p>
            <div>
                <div>{product.name}</div>
                <p>{product.price}</p>
                {/* Nested route */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        </div>
    )
}

export default Products