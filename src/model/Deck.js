const uuid = require('uuid/v4');
const moment = require('moment');
export default class Deck {
    constructor(name, desc){
        this.id = uuid();
        this.name = name;
        this.desc = desc;
        this.studyCount = 0;
        this.creationDate = moment().format('DD-MM-YYYY [as] h:mm:ss a');
        this.lessons = [];
    }
}