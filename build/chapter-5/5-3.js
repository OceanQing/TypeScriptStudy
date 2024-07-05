"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
class Pay {
    // 支付父类
    constructor(bank_card_no, balance, cost, tokenid) {
        this.bank_card_no = bank_card_no;
        this.balance = balance;
        this.cost = cost;
        this.tokenid = tokenid;
    }
    pay() {
        console.log("银行卡号", this.bank_card_no);
    }
}
var PayType;
(function (PayType) {
    PayType[PayType["WeChat"] = 1] = "WeChat";
    PayType[PayType["AliPAy"] = 2] = "AliPAy";
    PayType[PayType["CloudFlashPayment"] = 3] = "CloudFlashPayment";
})(PayType || (PayType = {}));
// 银行卡支付
class BankPay extends Pay {
}
// 手机支付
class MobilePay extends Pay {
    constructor(bank_card_no, balance, cost, tokenid, type, change, opendid, appid) {
        super(bank_card_no, balance, cost, tokenid);
        this.type = type;
        this.change = change;
        this.opendid = opendid;
        this.appid = appid;
    }
    pay() {
        super.pay();
        console.log("支付完成");
    }
}
let wechatPay = new MobilePay('123', 200, 12, 'asd', 1, 2, 'sads', 'asasas');
wechatPay.pay();
