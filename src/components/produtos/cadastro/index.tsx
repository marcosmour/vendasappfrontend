import { useState} from 'react'
import { Layout, Input } from 'components'
import { } from 'app/services'
import { useProdutoService } from 'app/services/produto.service'
import { Produto } from 'app/models/produtos'

export const CadastroProdutos: React.FC = () =>{

    const service = useProdutoService();
    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const submit = () => {
        const produto: Produto = {
            sku, 
            preco: parseFloat(preco), 
            nome, 
            descricao
        }

        service
        .salvar(produto)
        .then(produtoResposta => console.log(produtoResposta))
        
    }

    return (
        <Layout titulo='Produtos'>
            <div className="columns">
                <Input label="SKU: *" 
                    columnClasses="is-half"
                    onChange={setSku}
                    value={sku}
                    id="inputSku"
                    placeholder="Digite o SKU do produto"
                    />

                <Input label="Preco: *" 
                    columnClasses="is-half"
                    onChange={setPreco}
                    value={preco}
                    id="inputPreco"
                    placeholder="Digite o Preço do produto"
                    />

            </div>
            
            <div className="columns">
            <Input label="Nome: *" 
                    columnClasses="is-full"
                    onChange={setNome}
                    value={nome}
                    id="inputNome"
                    placeholder="Digite o Nome do produto"
                    />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea"
                            id="inputDesc" value={descricao}
                            onChange={ event=>setDescricao(event.target.value)}
                            placeholder="Digite a Descrição detalhada do produto" />

                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                     <button onClick={submit} className="button is-link">Submit</button>
                         </div>
                          <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                 </div>
            </div>
        </Layout>
    )
}