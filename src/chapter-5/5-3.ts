// 

class Pay {
    // 支付父类
    constructor(bank_card_no: string, balance: number, cost: number, tokenid: string) {
        this.bank_card_no = bank_card_no;
        this.balance = balance;
        this.cost = cost;
        this.tokenid = tokenid;
    }
    bank_card_no: string // 银行卡号
    balance: number // 银行卡余额
    cost: number // 消费费用
    tokenid: string // 登录id
    pay() {
        console.log("银行卡号", this.bank_card_no)
    }
}

enum PayType {
    WeChat = 1, // 微信支付
    AliPAy = 2, // 支付宝
    CloudFlashPayment = 3, // 云闪付
}

// 银行卡支付
class BankPay extends Pay {
    bank_network!: string; // 银行网点
    bankno_ttype!: string; // 银行卡类型
    bank_card_psw!: string; // 银行卡密码
    custname!: string; // 客户姓名
}

// 手机支付
class MobilePay extends Pay {
    constructor(bank_card_no: string, balance: number, cost: number, tokenid: string, type: PayType, change: number, opendid: string, appid: string) {
        // 此处 super表示父类的构造函数 
        super(bank_card_no, balance, cost, tokenid)
        this.type = type;
        this.change = change;
        this.opendid = opendid;
        this.appid = appid;
    }
    type: PayType
    change: number // 支付平台零钱
    opendid: string // 用户识别身份id
    appid: string // 微信小程序 appid
    pay() {
        // super 表示父类 调用父类的方法
        super.pay()
        console.log("支付完成")
    }
}

let wechatPay = new MobilePay('123', 200, 12, 'asd', 1, 2, 'sads', 'asasas')
wechatPay.pay()

// 作业 阅读5-3的js源码
export { }