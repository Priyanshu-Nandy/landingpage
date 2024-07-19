import "./ProductDesc.css"
import Card from "../Card/Card"
import BigCard from "../Card/BigCard"
const ProductDesc = () => {
  return (
    <div className='productdesc'>
        <div className="text-desc">
            <h3>Automate Your Social Media</h3>
            <h5>Proactiv houses a rich set of features to automate your marketing efforts across all social medias</h5>
        </div>
        <div className="card-size">
            <BigCard/>
            <Card title="Analytics for everything" desc="Check analytics, track your posts, and get insights into your audience."/>
            <Card title="Integrated AI" desc="Proactiv uses AI to help you create engaging content."/>
            <Card title="Easy Collaboration" desc="Proactive can integrate with Zapier, Slack and every other popular integration tools."/>
            <Card title="Know your audience" desc="Based on your audience, create funnels and drive more traffic."/>
        </div>
        </div>
    
  )
}

export default ProductDesc