import React, {Component} from 'react';
import './Login.css';
import ChoreIMG from './../../chores.jpg';




export default class Login extends Component{
    render(){
        return(
            <div className='App3'>
                
                <div className='LoginSidebar1'>
                    {/* <div>
                        <script type="text/javascript"
                        	amzn_assoc_ad_type = "banner"
	                        amzn_assoc_marketplace = "amazon"
	                        amzn_assoc_region = "US"
	                        amzn_assoc_placement = "assoc_banner_placement_default"
	                        amzn_assoc_campaigns = "homegarden"
	                        amzn_assoc_banner_type = "category"
	                        amzn_assoc_p = "12"
	                        amzn_assoc_isresponsive = "false"
	                        amzn_assoc_banner_id = "15WYPVWSKYTMXSQ0T082"
	                        amzn_assoc_width = "300"
	                        amzn_assoc_height = "250"
	                        amzn_assoc_tracking_id = "andrewcunning-20"
	                        amzn_assoc_linkid = "7eda964fe9a7872e03f6d8191e9090e4"
                         src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>
    </div> */}

                    
                </div>
                <div className='LoginSidebar2'>
                    
                </div>
                <div className='LoginHeader'>
                    <br/>
                    <div>What is ChoreIt?</div>
                    
                    <ul>
                        <li>ChoreIt is here to help you, by making it fast easy and efficient to assign chores </li>
                    </ul>
                    <div className="container">
                        <img src={ChoreIMG} className="IMGChore" />
                        <div className="middle">
                        <div className="text">Join ChoreIt!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}