import { createSlice } from "@reduxjs/toolkit";


const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState:{
        produtos:[],
        quantidade: 0,
        total: 0,
    },
    reducers:{
        adicionarProduto:(state, action) =>{
            const payload = action.payload;
            const produtoExistente = state.produtos.find(produto => produto.id === payload.id);
            if (produtoExistente) {
                produtoExistente.quantidade += payload.quantidade;
            } else {
                state.produtos.push(payload);
            }
            state.quantidade +=1;
            state.total += action.payload.preco * action.payload.quantidade; 
       },
       removerProduto:(state, action) =>{
        const produtoId = action.payload;
        const produtoRemovido = state.produtos.find(produto => produto.id === produtoId);

        if (produtoRemovido) {
            state.produtos = state.produtos.filter(produto => produto.id !== produtoId);
            state.quantidade -= produtoRemovido.quantidade;
            state.total -= produtoRemovido.preco * produtoRemovido.quantidade;
        }
       },
        aumentarQuantidade :(state, action) =>{
        const produtoIdAumentar = action.payload;
        const produtoAumentar = state.produtos.find(produto => produto.id === produtoIdAumentar);
  
        if (produtoAumentar) {
            produtoAumentar.quantidade += 1;
            state.quantidade += 1;
            state.total += produtoAumentar.preco;
        };
        },
        diminuirQuantidade :(state, action) =>{
            const produtoIdDiminuir = action.payload;
            const produtoDiminuir = state.produtos.find(produto => produto.id === produtoIdDiminuir);
  
            if (produtoDiminuir && produtoDiminuir.quantidade > 1) {
                produtoDiminuir.quantidade -= 1;
                state.quantidade -= 1;
                state.total -= produtoDiminuir.preco;
        };
        },
        limparCarrinhoo:(state) => {
            state.produtos = [],
            state.quantidade = 0,
            state.total = 0
       }
    }
});


export const {adicionarProduto , limparCarrinhoo , removerProduto, aumentarQuantidade, diminuirQuantidade} = carrinhoSlice.actions
export default carrinhoSlice.reducer;