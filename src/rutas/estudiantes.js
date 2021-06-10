const express=require('express');
const router=express.Router();
module.exports=router;
const mysqlconexion=require('../bd');
router.get('/estudiante',(req,res)=>
{
    mysqlconexion.query('Select * from estudiante',(err,
        rows,fields)=>
    {
        if(!err)
        {
            res.json(rows);
        }

        else
        {
            console.log(err);
        }
    }
)});

router.get('/estudiante/:id',(req,res)=>{
    const{id}=req.params;
    console.log(id);
    mysqlconexion.query('Select * from estudiante where id=?',[id],(err,
        rows,fields)=>
    {
        if(!err)
        {
            res.json(rows);
        }

        else
        {
            console.log(err);
        }
    }
    
)});

router.post('/estudiante',(req,res)=>{
    const{id, name,direccion,telefono,fecha_nacimiento}=req.body;
    const query='CALL ins_estudiante(?,?,?,?,?);';
    mysqlconexion.query(query,[id,name,direccion,telefono,fecha_nacimiento], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Estudiante Almacenado'});
            }
            else{
                console.log(err);
            }
        }); 
});
    
router.put('/estudiante/:id',(req,res)=>{
    const{ name}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    const{fecha_nacimiento}=req.body;
    const{id}=req.params;
    const query='CALL up_estudiante(?,?,?,?,?)';
    mysqlconexion.query(query,[id,name,direccion,telefono,fecha_nacimiento], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Estudiante Actualizado'});
            }
            else{
                console.log(err);
            }
        }); 
});

router.delete('/estudiante/:id',(req,res)=>{
        const{id}=req.params;
        console.log(id);
    mysqlconexion.query('Delete from curso where id=?',[id], (err,
        rows, fields)=>{
            if(!err)
            {
                res.json({Status:'Curso eliminado'});
            }
            else{
                console.log(err);
            }
        }); 
});
module.exports=router;