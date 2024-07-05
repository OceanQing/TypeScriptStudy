// ts相关js：ES5 原型继承升级

function Vechlie(brandNo, price) {
    // 父类
    console.log("this", this)

    this.brandNo = brandNo // 品牌;
    this.price = price // 价格
}

Vechlie.prototype.sale = function () {
    console.log("this", this)
}

function Bus(brandNo, price, seatNo) {
    // 子类
    // 子类的对象借用父类的构造函数
    Vechlie.apply(this, [brandNo, price]) // 借用构造函数继承
    // 子类的属性
    this.seatNo = seatNo
}

// 寄生式组合继承
function protoExtendsWithMdl(parentClass, sonClass) {
    function Middle() {
        this.constructor = sonClass
    }
    Middle.prototype = parentClass.prototype
    sonClass.prototype = new Middle()
}

protoExtendsWithMdl(Vechlie, Bus)

// 组合继承：配和使用借用构造函数继承和原型链继承
let bus = new Bus("大巴", 20, 64)
bus.sale()
console.log(bus)