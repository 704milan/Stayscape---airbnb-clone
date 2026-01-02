module.exports = class expressErrorClass extends Error{
    constructor(status,message){
        super();
        this.status = status;
        this.message = message;
    };
};