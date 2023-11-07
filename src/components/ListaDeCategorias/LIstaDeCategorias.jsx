import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        if(e.key == 'Enter'){
            let valorCategoria = e.target.value;
         this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() {
        return (
            <section className='lista-categorias'>
                <ul className='lista-categoria_lista'>
                    {this.props.categorias.map((categoria, index)=>{
                        return <li key={index} className='lista-categoria_item'>{categoria}</li>
                    })}
                    
                </ul>
                <input 
                    type='text' 
                    className='lista-categoria_input' 
                    placeholder='Adicionar Categoria'
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;