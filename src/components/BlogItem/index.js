// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-container">
      <div className="top-container">
        <h1 className="title-heading">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
