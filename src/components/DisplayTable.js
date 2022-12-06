import React from "react";
import { Table, Th,Td ,Tr, UserAvatar,
     UserName,Span,Sorting,DownArrow,UpArrow,
     CellHeader
    } from "./DisplayTableStyle";


class TableComponent extends React.Component{
     state ={
        sorted:"",
        reversed:false,
        data : this.props.data
     };
   SortingFunction = (header)=>{
    let UsersData = this.state.data;
    if(header.field === "person"){
        if(this.state.reversed){
            UsersData.sort((a,b)=>b["person"].name.localeCompare(a["person"].name)) 
        }
        else{
            UsersData.sort((a,b)=>a["person"].name.localeCompare(b["person"].name)) 
        }
      
    }else if (header.field === "joiningDate"){
        if(this.state.reversed){
            UsersData.sort((a,b)=>
            b.joiningDate.split('/').reverse().join().localeCompare(a.joiningDate.split('/').reverse().join()))
        }
        else{
            UsersData.sort((a,b)=>
            a.joiningDate.split('/').reverse().join().localeCompare(b.joiningDate.split('/').reverse().join()))
        }

    }
    else{
        if(this.state.reversed){
            UsersData.sort((a,b)=>b[header.field].localeCompare(a[header.field])) 
        }
        else{
            UsersData.sort((a,b)=>a[header.field].localeCompare(b[header.field])) 
        }
    }

    this.setState(prevState=>{
        return{
            sorted: header.field,
            reversed : !prevState.reversed,
   }});
   }
render(){   
    const {columns,sorting} = this.props;
    const {data} = this.state;
    return(
       <div>
         <Table>
            <thead>
                <tr>
                    {columns.map((headerCell)=>
                        <Th>
                            <CellHeader onClick={()=>this.SortingFunction(headerCell)}>
                            <span>
                                {headerCell.header}
                            </span>
                            {sorting.map((element)=>(() => 
                            {
                            if (element === "all"){
                                return (
                                    <Sorting>
                                    <DownArrow/>
                                    <UpArrow/>
                                    </Sorting>
                                )
                            }
                            else if(headerCell.field === element){
                                return (
                                    <Sorting>
                                    <DownArrow/>
                                    <UpArrow/>
                                    </Sorting>
                                )
                            }
                        
                                return null;
                            })())
                              }
                            </CellHeader>
                        </Th>
                        
                    )}
                </tr>
            </thead>
           <tbody>
            {data.map((row)=>
                
                <Tr>
                   {columns.map((col)=>
                        col.field === "person"
                        ?
                        <Td>
                            <UserName>
                            <UserAvatar backgroundImage={`url("profile.jpg")`}/>
                            <Span>{row[col.field].name}</Span>
                            </UserName>
                        </Td>
                        :
                        <Td>{col.field==="email"?<a href="none">{row[col.field]}</a>:<span>{row[col.field]}</span>}</Td>
                    )}
                </Tr>
            )}
           </tbody>
        </Table>
       </div>
    )
        
    
}
}
export default TableComponent;