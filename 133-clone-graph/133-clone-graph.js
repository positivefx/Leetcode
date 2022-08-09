/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */




var cloneGraph = function(node) {
    
    const copied = {};
    
    const dfs= (node) => {
        if (!node) {
            return node;
        }
        
        if (copied[node.val]) {
            return copied[node.val]
        }
        
        const clonedNode = new Node(node.val);
        
        copied[node.val] = clonedNode;
        
        node.neighbors.map((eachNeighbor) => {
            clonedNode.neighbors.push(dfs(eachNeighbor));
            
        })
        
        return clonedNode;
    }
    
    
    return dfs(node);
};



