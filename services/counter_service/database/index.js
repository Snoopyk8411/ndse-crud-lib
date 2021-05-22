
const {
    getFromDBFile,
    addToDBFile,
} = require('./utils');

class CounterDatabase {
    constructor() {
        this.counterList = getFromDBFile() || {};
    }
    targetExists = (id) => !!this.counterList[id]
    syncWithFile = () => {
        addToDBFile(this.counterList);
    }

    getTargetCount = (id) => {
        if (!this.targetExists(id)) {
            this.counterList[id] = 0;
            this.syncWithFile();
        }
        return this.counterList[id];
    }
    incrementTargetCount = (id) => {
        if (!this.targetExists(id)) {
            this.counterList[id] = 1;
        } else {
            this.counterList[id] += 1;
        }
        this.syncWithFile();
        return this.counterList[id];
    }
    
}

const counterDB = new CounterDatabase();

module.exports = {
    counterDB,
};