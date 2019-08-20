const uuid = require('uuid/v4');
export default class Lesson {
    constructor(front, back){
        this.id = uuid();
        this.front = front;
        this.back = back;
        this.learnCount = 0;
    }

    setLearnCount(learnCount){
        this.learnCount = learnCount;
    }

    /**
     * converte level para learn count
     * @param {string} level
     * @returns {number} retorna o valor em learnCount 
     */
    static levelToLearnCount(level){
        switch (level) {
            case 'easy':
                return 4;
            case 'medium':
                return 2;
            default:
                return 0;
        }
    }

    /**
     * converte level para learn count
     * @param {number} learnCount
     * @returns {string} retorna o valor em Level 
     */
    static LearnCountToLevel(learnCount){
        switch (learnCount) {
            case 4:
                return "easy";
            case 2:
                return "medium";
            default:
                return "hard";
        }
    }
}
