

/* Node.js stuff */
var AndrewLib = require("./AndrewLib.js");
/* END Node.js stuff */

//

function SearchProblem(){

    this.getStartState = function(){

    };

    this.isGoalState = function(node){
        return false;
    };

    this.getSuccessors = function(node){

    };
}
function DepthFirstSearch( problem ) {
    var closedSet = new AndrewLib.ASet();
    var fringe = new AndrewLib.ASet();

    // Place the start state on the fringe.
    fringe.push( problem.getStartState() );

    while(!fringe.isEmpty()){
        var node = fringe.pop();

        if( problem.isGoalState(node) ){
            // If we have reached a goal state, return the action list.
        }
        else if(!closedSet.isIn(node)) {
            closedSet.add(node)

            for( var child in problem.getSuccessors(node) ){
                fringe.push(child);
            }
        }
    }


}
