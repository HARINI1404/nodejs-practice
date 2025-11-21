const fs=require('fs');

if(!(fs.existsSync('./docs'))){
    fs.mkdir('./docs', (err) =>{
        if(err){
            console.log('err.message');
        }
        else console.log('Folder created');
    }) 
}
fs.writeFile('./docs/file.txt','hi harini',(err) =>{
    if(err){
        console.log('file exist');
    }else{
        console.log('file created')
    }
})

if(fs.existsSync('./docs/file.txt')){
    fs.readFile('./docs/file.txt',    (err,data) => {
    if(err){
        console.log('err.message');
    }
    else{
        console.log(data.toString());
    }
})
}