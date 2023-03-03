type Props = {
    "filterEvent": (txt:string) => void
}
const Filter = (props:Props) => {
    return <div>
        <input type="text" 
        placeholder="search by name" 
        onChange={(evt) => props.filterEvent(evt.target.value)}/>
    </div>
}

export default Filter;