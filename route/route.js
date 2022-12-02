const express = require('express');
const req = require('express/lib/request');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const modelCategoria = require('../model/modelcategoria');

const router = express.Router();

/* ROTA DE INSERÇÃO  post*/
router.post('/inserir', (req, res)=>{
        // res.send('texte de rota de inserção')
        let {nome_categoria} = req.body;
        modelCategoria.create(
            {nome_categoria}
        ).then(
            ()=>{
                return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:"Categoria Inserida Com Sucesso."
                })
            }
).catch( 
    (error)=>{
        return res.status(400).json({
            erroStatus:true,
            mensagemStatus:"Erro ao Cadastrar a Categoria.",
            errorObject: error
        });
    })

});

/* ROTA DE SELEÇÃO  get*/
router.get(
    '/listar', (req, res)=>{
        // res.send('texte de rota de seleção')
        modelCategoria.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus:"Categorias Listadas com Sucesso,",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao Listar as Categorias.",
                    errorObject:error
                });
            }
        );
    }
)

/* ROTA DE ALTERAÇÃO  put*/
router.put(
    '/alterar', (req, res)=>{
        res.send('texte de rota de alteração')
    }
)

/* ROTA DE EXCLUSÃO  delete*/
router.delete(
    '/excluir', (req, res)=>{
        res.send('texte de rota de exclusão')
    }
)

module.exports = router;