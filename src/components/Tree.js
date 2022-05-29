import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import downArrow from "../images/down-arrow.png";
import './Tree.css';

const Tree =({data=[]})=>{
   return(
    <>
    <ul className='tree-container'>
            {data.map((tree)=> (
                <TreeNode 
                node={tree}
                />
            )
            )}
        </ul>
        </>
   )
}

const TreeNode = ({node}) => {
    console.log(node)
    console.log(node.items)
const [showChild, setShowChild] = useState(false);
const haschild = node.items ? true: false

  return (
    <li className='tree-node-container'>
        <div className='d-flex' onClick={e => setShowChild(v =>!v)}>
            {haschild && (
                <div className={`d-tree-toggler ${showChild ? "active" : ""}`}>
                    <img src={downArrow} height='30px' />
                </div>
            )}
            <div className='col d-tree-head'>
                {node.title}
            </div>
        </div>
        {haschild && showChild && <div className='d-tree-content'>
            <ul className='d-flex d-tree-container flex-coloumn'>
                <Tree data={node.items}/></ul></div>}
    </li>
  )
}

export default Tree