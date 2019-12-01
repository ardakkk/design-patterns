class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance;
        }

        this._data = data;
        Database.instance = this;
        Database.exists = true;
        return this;
    }

    getData() {
        return this._data;
    }
    
    setData() {
        this._data = data;
    }
}

const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mongo.getData()); // mongo