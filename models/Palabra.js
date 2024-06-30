class Palabra{

  palabras = [];

getAll = async () =>{
  return this.palabras.join(" ")
}
getById = async (id) =>{
  const index = id;
  return this.palabras[index];
}
create = async (newPalabra) =>{
  if(newPalabra.length < 8){
    throw error
  }
  return this.palabras.push(newPalabra)
}
edit = async (index, newPalabra) =>{
  if(index < 0 || !newPalabra){
    throw error
  }
  return this.palabras.splice(index, 1, newPalabra);
}
delete = async (index) =>{
  if(index < 0){
    throw error
  }
  return this.palabras.splice(index, 1);
}
}
export default Palabra