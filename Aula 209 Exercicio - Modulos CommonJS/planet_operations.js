module.exports = {
    get AU_IN_KILOMETERS(){ //criação de um metodo get para que ele interprete essa função como se fosse uma variável
        return 149587870
    },
    convertAuToKm(au){
        return au * this.AU_IN_KILOMETERS
    }
}