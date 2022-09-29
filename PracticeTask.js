var MyArray = /** @class */ (function () {
    function MyArray() {
        var _this = this;
        this.addLast = function (item) {
            var nkeys = Object.keys(_this.entries).length;
            _this.entries[nkeys] = item;
        };
        this.addAt = function (index, item) {
            var entriesLength = Object.keys(_this.entries).length;
            // when index is greater than entries length, add to the last
            if (index > entriesLength) {
                return _this.addLast(item);
            }
            // when entries has alteast one element availabe
            if (entriesLength > 0) {
                var newArr = {};
                for (var i = 0; i <= entriesLength; i++) {
                    if (i === index) {
                        newArr[i] = item;
                        if (index < entriesLength) {
                            newArr[i + 1] = _this.entries[i];
                        }
                    }
                    else if (i > index) {
                        // conditon to check when index is negative number
                        newArr[i] = _this.entries[i - 1] ? _this.entries[i - 1] : item;
                    }
                    else {
                        newArr[i] = _this.entries[i];
                    }
                }
                if (Object.keys(newArr).length > 0) {
                    _this.entries = newArr;
                }
            }
            else {
                // when entries has alteast no element, add to the first index
                _this.entries[0] = item;
            }
        };
        this.removeAt = function (index) {
            if (_this.entries[index]) {
                delete _this.entries[index];
            }
            var newObjArr = {};
            for (var i = 0; i <= Object.keys(_this.entries).length; i++) {
                if (_this.entries[i]) {
                    if (i != 0 && !newObjArr[i - 1]) {
                        newObjArr[i - 1] = _this.entries[i];
                    }
                    else {
                        newObjArr[i] = _this.entries[i];
                    }
                }
            }
            _this.entries = newObjArr;
        };
        this.entries = {};
    }
    MyArray.prototype.getAt = function (index) {
        return this.entries[index];
    };
    return MyArray;
}());
var obj = new MyArray();
obj.addLast('a');
obj.addLast('b');
obj.addLast('c');
console.log("entries", obj.entries);
var res = obj.getAt(0);
console.log("getAt(0)", res);
var res1 = obj.removeAt(1);
console.log("removeAt(1)", obj.entries);
obj.addAt(1, 'd');
console.log("addAt(2, 'd')", obj.entries);
