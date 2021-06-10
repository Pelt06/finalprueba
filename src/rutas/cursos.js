const express=require('express');
const router=express.Router();
module.exports=router;
const mysqlconexion=require('../bd');
router.get('/curso',(req,res)=>
{
    mysqlconexion.query('Select * from curso',(err,
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

router.get('/curso/:id',(req,res)=>{
    const{id}=req.params;
    console.log(id);
    mysqlconexion.query('Select * from curso where id=?',[id],(err,
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

router.post('/curso',(req,res)=>{
    const{id, name,description}=req.body;
    const query='CALL ins_curso(?,?,?);';
    mysqlconexion.query(query,[id, name,description], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Curso Almacenado'});
            }
            else{
                console.log(err);
            }
        }); 
 });
    
 router.put('/curso/:id',(req,res)=>{
    const{ name}=req.body;
    const{description}=req.body;
    const{id}=req.params;
    const query='CALL up_curso(?,?,?)';
    mysqlconexion.query(query,[id, name,description], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Curso Actualizado'});
            }
            else{
                console.log(err);
            }
        }); 
});

   
 router.delete('/curso/:id',(req,res)=>{
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