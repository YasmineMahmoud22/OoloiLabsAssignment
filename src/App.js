import './App.css';
import TableComponent from './components/DisplayTable';
const data = require("./tableTestData");

function App() {
  const columns1 =[
    {field:"person",header:"Name"},
    {field:"city",header:"City"},
    {field:"email",header:"Email Address"},
    {field:"joiningDate",header:"joining Date"},
    {field:"role",header:"Role"},

  ];
  const columns2 =[
    columns1[0],columns1[2],columns1[4]
  ];
  const columns3 =[
    columns1[2],columns1[3],columns1[4]
  ];
  const columns4 =[
    columns1[0],columns1[1],columns1[3],columns1[4]
  ];

  return (
    <div className="App">
      <TableComponent data={data} columns={columns1} sorting={["all"]}/>
      <TableComponent data={data} columns={columns2} sorting={["person"]}/>
      <TableComponent data={data} columns={columns3} sorting={["role","joiningDate"]}/>
      <TableComponent data={data} columns={columns4} sorting={["role","city"]}/>

    </div>
  );
}

export default App;
