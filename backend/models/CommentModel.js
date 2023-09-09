//const db = require("../db/connection");

class CommentModel{
    constructor (comment){
           this.comment = comment;
    }
    get id(){
        return this.comment.id;
    }
    get content(){
        return this.comment.content;
    }
    get date(){ 
        return this.comment.dmsg;
    }

    static moment(datem){
         let tmpNow = new Date();
         let tmpOld = datem;
         let day = tmpNow.getDay();
         let oday = tmpOld.getDay();
         let mins = tmpNow.getMinutes();
         let omins = tmpOld.getMinutes();
         let sec = tmpNow.getSeconds();
         let osec = tmpOld.getSeconds(); 
         let moment = {
            day: (day - oday)  > 0 ? (day - oday) : 0,
            mins: (mins - omins) > 0 ? (mins - omins) : 0,
            sec: (sec - osec) > 0 ? (sec - osec) : 0
         }
         let datestr = `since ${moment.day} days, ${moment.mins} mins and ${moment.sec} seconds`;
         return datestr;
    }

    static all(cb){
        /*db.query("SELECT * FROM messages ORDER BY dmsg DESC", (err, row) => {
           let data = null;
           let errMsg = null;
             if(err){
                // return_error_object
                 errMsg = {
                    status: "ERR_",
                    info: err
                 }
             }else{ 
                data = row.map(((row) => new CommentModel({
                    id: row.id,
                    content: row.content,
                    dmsg: this.moment(row.dmsg)
                })));
             }
             cb(data, errMsg);
        });*/
    }

    static create(msg, cb){ 
              let nmsg = msg.toString();
              let date = new Date(); 
              /*db.query("INSERT INTO messages SET content = ?, dmsg = ?", [nmsg, date], (err) => {
               let errMsg = null;
                if(err) {
                    errMsg = {
                        status: "ERR_",
                        info: err
                         };
                }else{
                    errMsg = {
                        status: 200,
                        info: "Message posted successfully !!!"
                         };
                }
                cb(errMsg);
              }); */
    }

}

module.exports = CommentModel;