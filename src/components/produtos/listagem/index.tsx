import { Layout} from 'components'
import Link from 'next/link'
import { TabelaProdutos} from './tabela'
import{ Produto} from 'app/models/produtos'

export const ListagemProdutos: React.FC = () => {

    const produto: Produto[] = [{
        id: "1", sku: "HGDGD", nome: "Impressora", preco: 2500
    },
    {
        id: "1", sku: "HGDGD", nome: "Impressora", preco: 2500
    },

    {
        id: "1", sku: "HGDGD", nome: "Impressora", preco: 2500
    },
    {
        id: "1", sku: "HGDGD", nome: "Impressora", preco: 2500
    }]

    return (
        <Layout titulo="Produtos">
            <Link href="/cadastros/produtos">
            <button className="button is-warning">Novo</button>
            </Link>
            <br />
            <TabelaProdutos produtos={produto} />
        </Layout>
    )
}