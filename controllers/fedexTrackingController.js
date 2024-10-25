import axios from 'axios'

const authFedex = async() =>{
    console.log("Auth Fedex");
}

class FedexTrackingController{
    static trackFedexShipment= async (req,res) => {
        await authFedex()
        console.log("Tracking Fedex");
    }
}

export default FedexTrackingController