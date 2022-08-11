export default class Neo{ //Essa classe foi criada dessa forma pois esse é o retorno da API da nasa
    constructor(id, name, averageEstimatedDiameter, isSentry){
        this.id = id;
        this.name = name;
        this.averageEstimatedDiameter = averageEstimatedDiameter;
        this.isSentry = isSentry;
    }
}