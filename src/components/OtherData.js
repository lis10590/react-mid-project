import styles from "../components/styles/OtherData.css"

const OtherData = (props) =>{


    return (
        <div className="other-data">
            Street: <input className="other-data-input" type="text" value={props.details.address.street} readOnly></input> <br></br>
            City: <input className="other-data-input" type="text" value={props.details.address.city} readOnly></input> <br></br>
            Zip Code: <input className="other-data-input" type="text" value={props.details.address.zipcode} readOnly></input> <br></br>
        </div>
    )
}



export default OtherData;