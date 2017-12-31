var db = require("../server/dbconnection");


var invoices = {


     getInvoices:function(clientId,req,res,callback) {
        return db.query("select invoiceId, invoiceDate, totalAmt from sales where clientId= ? and fyYear=2017",[clientId],
        function (err, result, fields) {
            if (err) throw err;
              res.json(result);
          });
    },
};


module.exports = invoices;