"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["MANAGER_AUDIT_FAIL"] = -1] = "MANAGER_AUDIT_FAIL";
    Status[Status["NO_AUDIT"] = 0] = "NO_AUDIT";
    Status[Status["MANAGER_AUDIT_SUCCESS"] = 1] = "MANAGER_AUDIT_SUCCESS";
    Status[Status["FINAL_AUDIT_SUCCESS"] = 2] = "FINAL_AUDIT_SUCCESS";
})(Status || (Status = {}));
class MyAudit {
    // 用number定义status的类型，status不能具体化，降低了代码的可阅读性，可维护性
    getAuditStatus(status) {
        if (status === Status.NO_AUDIT) {
            console.log("没有审核");
        }
        else if (status === Status.MANAGER_AUDIT_SUCCESS) {
            console.log("经理审核通过");
        }
        else if (status === Status.FINAL_AUDIT_SUCCESS) {
            console.log("财务审核通过");
        }
        else if (status === Status.MANAGER_AUDIT_FAIL) {
            console.log("经理审核不通过");
        }
    }
}
const audit = new MyAudit();
audit.getAuditStatus(Status.NO_AUDIT);
