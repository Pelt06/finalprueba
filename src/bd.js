const mysql=require('mysql');
const mysqlconexion=mysql.createConnection (
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'umes'
    }
);

mysqlconexion.connect(function(err)
{
    if(err)
    {
        console.log(err);
        return;
    }

    else
    {
        console.log('Base de datos conectada');
    }
});
module.exports=mysqlconexion;
