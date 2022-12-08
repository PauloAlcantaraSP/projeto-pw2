const express = require('express');
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
                    erroStatus:false,
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
        const {id_categoria, nome_categoria} = req.body;

        modelCategoria.update(
            {nome_categoria},
            {where:{id_categoria}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"Categoria Alterada com Sucesso."
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"Erro ao Alterar Categoria.",
                    errorObject: error
                });
            }
        );
       
    }
)

/* ROTA DE EXCLUSÃO  delete*/
router.delete(
    '/excluir/:id_categoria', (req, res)=>{
        console.log(req.params);
        let {id_categoria} = req.params

        modelCategoria.destroy(
            {where:{id_categoria}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"Categoria Excluída com Sucesso."
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"Erro ao Excluir Categoria.",
                    errorObject: error
                });
            }
        );
        
    }
)

module.exports = router;