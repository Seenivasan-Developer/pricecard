import React from "react";
import Card from "./Card";

const data=[
  {
    plan:"FREE",
    price:0,
    user:"Single User",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicproject:"Unlimited Public Projects",
    isPublicProject:true,
    access:"Community Access",
    isCommunityAccess:true,
    privateproject:"Unlimited Private Projects",
    isPrivateProject:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    subdomain:"Free Subdomain",
    isSubDomain:false,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PLUS",
    price:9,
    user:"5 Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicproject:"Unlimited Public Projects",
    isPublicProject:true,
    access:"Community Access",
    isCommunityAccess:true,
    privateproject:"Unlimited Private Projects",
    isPrivateProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubDomain:true,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PRO",
    price:49,
    user:"Unlimited Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicproject:"Unlimited Public Projects",
    isPublicProject:true,
    access:"Community Access",
    isCommunityAccess:true,
    privateproject:"Unlimited Private Projects",
    isPrivateProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubDomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }
]

function App(){
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card details={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App