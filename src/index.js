// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
};
const createNotEnumerableProperty = () => {
    return Symbol();
};
const createProtoMagicObject = () => {
    let animal = {
    };
    function magicObj() {
            }
    magicObj.prototype = animal;
    magicObj.__proto__ = animal;
    return magicObj;
};
let counter = 0;
const incrementor = () => {
       counter++;
        function iterator() {
            counter++;
            return iterator;
        }
        iterator.valueOf = function () {
            return counter;
        };
        return iterator;
};
let counterAsync = 0;
const asyncIncrementor = () => {
    counterAsync++;
    return counterAsync;
};
const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
};
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
};
const toBuffer = () => {
};
const sortByProto = () => {
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;