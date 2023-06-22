import { useState } from 'react'
export default function Searchfilter() {
  const [filterName, setFilterName] = useState('')
  let filterHandler = (e) = {
    var lowercase = e.target.value.toLowerCase();
    setFilterName(e.target.value.toLowerCase());
  };

return (
  <>
  <SearchName
  filterName = {filterName}
  onFilterTextChange = {setFilterName} />
  {/* <TableName = onFilterTextChange = {setFilterName}> */}
  <TableName/>
  </>

);
}

function SearchName ({filterName, onFilterTextChange}) {
  return (
  <form>
    <input type="text" value={filterName} placeholder="Search Name" onChange={(e) => onFilterTextChange(e.target.value)} />
  </form>
  )
}

function TableName() {
  const NAMES =
[{
    "id": 1,
    "text": "Devpulse"
}, {
    "id": 2,
    "text": "Linklinks"
}, {
    "id": 3,
    "text": "Centizu"
}, {
    "id": 4,
    "text": "Dynabox"
}, {
    "id": 5,
    "text": "Avaveo"
}, {
    "id": 6,
    "text": "Demivee"
}, {
    "id": 7,
    "text": "Jayo"
}, {
    "id": 8,
    "text": "Blognation"
}, {
    "id": 9,
    "text": "Podcat"
}, {
    "id": 10,
    "text": "Layo"
}]
  return (
    <ul>
      {NAMES.map((name) => (
        <li key={name.id}>{name.text}</li>
      ))}
    </ul>
  )
}
