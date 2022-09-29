var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Exercise1 = /** @class */ (function () {
    function Exercise1() {
        var _this = this;
        this.checkReduceMethod = function () {
            var arr = ['a', 'b', 'c'];
            arr.splice(1, 1);
            var result = arr.reduce(function (accumulator, current, i) {
                var _a;
                return __assign(__assign({}, accumulator), (_a = {}, _a[i] = current, _a));
            }, {});
            return result;
        };
        // public checkReduceObjectsWithFilters = (index: number) => {
        //     // let test = {};
        //     // test[1] = "test1";
        //     // test[2] = "test2";
        //     // test[3] = "test3";
        //     // const { ['2']: value, ...test1} = test;
        //     const filteredEntries = Object.fromEntries(
        //         Object.entries(this.entries).filter(([key]) => key != index.toString())
        //     )
        //     const newEntries = {...this.entries, filteredEntries}
        //     return newEntries;
        // }
        this.addFirst = function (item) {
            // Object.keys(this.entries).unshift(item);
            _this.entries[0] = item;
        };
        this.addLast = function (item) {
            var nkeys = Object.keys(_this.entries).length;
            _this.entries[nkeys] = item;
        };
        this.addAt = function (index, item) {
            _this.entries[index] = item;
        };
        this.removeAt = function (index) {
            if (_this.entries[index]) {
                delete _this.entries[index];
            }
            Object.keys(_this.entries).sort();
        };
        this.entries = {};
    }
    Exercise1.prototype.getAt = function (index) {
        return this.entries[index];
    };
    return Exercise1;
}());
// let test = new Exercise1();
// test.addLast("test1");
// test.addLast("test2");
// test.addLast("test3");
// test.addLast("test4");
// test.addFirst("test7");
// console.log("entries", test.entries);
// test.removeAt(1);
// console.log("entries", test.entries);
// console.log("entries", test.checkReduceObjectsWithFilters(1));
// const res = test.getAt(0);
// console.log("getAt(0) response", res);
// test.removeAt(1);
// for(var a in test.entries) {
//     console.log(a);
// }
// const nkeys : Entries = Object.keys(test.entries);
// console.log("nkeys", nkeys);
// test.addFirst("test5");
// const res1 = test.getAt(0);
// console.log("getAt(0) response", res1);
// console.log("entries", test.entries);
// test.addAt(7, "test7");
// console.log("entries", test.entries);
var item = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
};
var result = __assign({}, Object.values(_.omit(item, 1)));
console.log(result);
