/** AndrewLib.js
 * Andrew Ribeiro
 * March 4, 2015
 * Version 1.0
 ******** About AndrewLib.js ************
 * A bunch of data-types and functions
 * that I have found useful in my musings
 ****************************************
 */

function ASet()
{
    this.hashTable = new Array();

    this.add = function(item){
        this.hashTable[item] = true;
    };

    this.isIn = function(item) {
        if (this.hashTable[item] == undefined) {
            return false;
        }
        return true;
    };

    this.union = function(rht){

        var keys1 = Object.keys(rht.hashTable)
        var keys2 = Object.keys(this.hashTable)
        var outArray = new Array();

        for( var i in keys1 ) {
            outArray[i]=true;
        }

        for(var i in keys2){
            outArray[i]=true;
        }

        return outArray;

    };
}

function AStack(){

    self.list = [];

    self.push = function(item){
        self.list.push(item);
    };

    self.pop = function(item){
        self.list.pop();
    };

    self.isEmpty = function(){
        return self.list.length == 0;
    };

    self.peak = function(){
        return self.list[0];
    };

}

/* Node JS Stuff */
module.exports.ASet = ASet;
module.exports.AStack = AStack;