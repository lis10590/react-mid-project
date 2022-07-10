

const OtherData = (props) =>{

    return (
        <div>
            Street: <input type="text" value={props.details.address.street} readOnly></input> <br></br>
            City: <input type="text" value={props.details.address.city} readOnly></input> <br></br>
            Zip Code: <input type="text" value={props.details.address.zipcode} readOnly></input> <br></br>
        </div>
    )
}



export default OtherData;