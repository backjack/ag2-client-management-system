var connection = require('../server/dbconnection');



var client = {
    getBasicInfo: function (clientId, req, res) {
        connection.query("select clientId, clientName,address,groupId,shortName,gstNo from client where clientId=?", [clientId],
            function (err, result, fields) {
                if (err) throw err;
                res.json(result);
            });
    },

    getAllClients: function (req, res) {
        connection.query("select clientId, clientName from client where groupId='alkefp'", function (err, result, fields) {
            res.json(result);
        });
    },

    getClientStats: function (clientId, fyYear, req, res) {
        connection.query("select clientId, sum(total.sumPay) as paidAmount, sum(totalAmt) as totalAmount,count(inv) as totalInvoice from (select clientId, sumPay,sales.invoiceId as inv, totalAmt from sales sales left join"+
        " (select invoiceId,sum(partPymt) as sumPay from partPayment where fyYear =? and groupId='alkefp' group by invoiceId) sumPymnet on sales.invoiceId = sumPymnet.invoiceId where sales.fyYear =? ) as total"
        +" where clientId =? group by clientId;", [fyYear, fyYear, clientId], function (err, result, fields) {
            if(result != undefined && result.length>0) {
               res.json(result[0]);
            }else {
                result = {paidAmount:0,totalAmount:0,totalInvoice:0};
                res.json(result);
            }
         });
    }
}

module.exports = client;