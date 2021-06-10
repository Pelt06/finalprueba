const express=require ('express');
const app=express();

app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(require('./rutas/cursos'));
app.use(require('./rutas/estudiantes'));
app.listen(app.get('port'),()=>
{
    console.log('Puerto del servidor: ', app.get('port'));
})