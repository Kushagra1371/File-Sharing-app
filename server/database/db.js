import mongoose from 'mongoose';
const MONODB_URI = `mongodb://user:Kushagrayadav1371@ac-1agpynz-shard-00-00.isayqdh.mongodb.net:27017,ac-1agpynz-shard-00-01.isayqdh.mongodb.net:27017,ac-1agpynz-shard-00-02.isayqdh.mongodb.net:27017/?ssl=true&replicaSet=atlas-arqn8y-shard-0&authSource=admin&retryWrites=true&w=majority`;
export const DBConnection= async () =>{
try{
   await mongoose.connect(MONODB_URI,{ useNewUrlParser: true });
   console.log('Database connected successfully');
}
catch(error){
    console.error(error.message);
}


}