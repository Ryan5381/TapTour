import React from 'react'




const CampaignCardItem = ({ campaign, className }) => {
  return (
      <div className={`campaign-card ${className}`}>
        <img src={campaign.image} alt={campaign.name} />
      </div>
  )
}

export default CampaignCardItem
