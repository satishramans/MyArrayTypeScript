class MyArray {
    public entries: {[index: string]: string};

    constructor () {
        this.entries = {};
    }

    public addLast = (item: string) => {
        const nkeys = Object.keys(this.entries).length;
        this.entries[nkeys] = item;
    }

    public addAt = (index: number, item: string) => {
        const entriesLength = Object.keys(this.entries).length;
        
        // when index is greater than entries length, add to the last
        if(index > entriesLength) {
            return this.addLast(item);
        }

        // when entries has alteast one element availabe
        if(entriesLength > 0) {
            const newArr: {[index: number]: string} = {};
            for(var i=0; i<= entriesLength; i++) {
                if(i === index) {
                    newArr[i] = item;
                    if(index < entriesLength) {
                        newArr[i+1] = this.entries[i];
                    }
                } else if(i > index) {
                    // conditon to check when index is negative number
                    newArr[i] = this.entries[i-1] ? this.entries[i-1] : item;
                } else {
                    newArr[i] = this.entries[i];
                }
            }

            if(Object.keys(newArr).length > 0) {
                this.entries = newArr;
            }
        } else {
            // when entries has alteast no element, add to the first index
            this.entries[0] = item
        }
    }

    public removeAt = (index: number) => {
        if(this.entries[index]) {
            delete this.entries[index];
        }
        const newObjArr : {[index: number]: string} = {};
        for(var i=0; i<= Object.keys(this.entries).length; i++) {
            if(this.entries[i]) {
                if(i !=0 && !newObjArr[i-1]) {
                    newObjArr[i-1] = this.entries[i];    
                } else {
                    newObjArr[i] = this.entries[i];
                }
            }
            
        }
        this.entries = newObjArr;
    }

    public getAt(index: number) {
        return this.entries[index];
    }
}

let obj = new MyArray();
obj.addLast('a');
obj.addLast('b');
obj.addLast('c');
console.log("entries", obj.entries);
const res = obj.getAt(0);
console.log("getAt(0)", res);
const res1 = obj.removeAt(1);
console.log("removeAt(1)", obj.entries);
obj.addAt(1, 'd');
console.log("addAt(2, 'd')", obj.entries);
