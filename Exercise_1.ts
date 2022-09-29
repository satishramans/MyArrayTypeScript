// class Exercise1{
//     public entries:{};

//     constructor () {
//         this.entries = {};
//     }

//     public checkReduceMethod = () => {
//         const arr = ['a', 'b', 'c'];

//         type ReduceReturnType = Record<number, string>;
//         arr.splice(1, 1);
//         const result = arr.reduce<ReduceReturnType>(
//             (accumulator, current, i) => {
//               return { ...accumulator, [i]: current };
//             },
//             {},
//           );

//           return result;
//     }

//     // public checkReduceObjectsWithFilters = (index: number) => {
//     //     // let test = {};
//     //     // test[1] = "test1";
//     //     // test[2] = "test2";
//     //     // test[3] = "test3";

//     //     // const { ['2']: value, ...test1} = test;

        
//     //     const filteredEntries = Object.fromEntries(
//     //         Object.entries(this.entries).filter(([key]) => key != index.toString())
//     //     )
//     //     const newEntries = {...this.entries, filteredEntries}
//     //     return newEntries;

//     // }

//     public addFirst = (item: string) => {
//         // Object.keys(this.entries).unshift(item);
//         this.entries[0] = item;
//     }

//     public addLast = (item: string) => {
//         const nkeys = Object.keys(this.entries).length;
//         this.entries[nkeys] = item;
//     }

//     public addAt = (index: number, item: string) => {
//         this.entries[index] = item;
//     }

//     public removeAt = (index: number) => {
//         if(this.entries[index]) {
//             delete this.entries[index];
//         }
//         Object.keys(this.entries).sort();
//     }

//     public getAt(index: number) {
//         return this.entries[index];
//     }
// }

// let test = new Exercise1();
// test.entries = {
//     0 : "a",
//     1: "b",
//     2: "c"
// };
// // test.addLast("test1");
// // test.addLast("test2");
// // test.addLast("test3");
// // test.addLast("test4");
// // test.addFirst("test7");

// // console.log("entries", test.entries);
// const val = test.entries[0];
// test.removeAt(0);
// console.log("entries", test.entries);

// // console.log("entries", test.checkReduceObjectsWithFilters(1));

// // const res = test.getAt(0);
// // console.log("getAt(0) response", res);
// // test.removeAt(1);
// // for(var a in test.entries) {
// //     console.log(a);
// // }

// // const nkeys : Entries = Object.keys(test.entries);
// // console.log("nkeys", nkeys);

// // test.addFirst("test5");
// // const res1 = test.getAt(0);
// // console.log("getAt(0) response", res1);
// // console.log("entries", test.entries);
// // test.addAt(7, "test7");
// // console.log("entries", test.entries);


