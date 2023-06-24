// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item">
      <div className="blog-item-sec-1">
        <h1 className="blog-item-title"> {title} </h1>
        <p className="blog-item-date"> {publishedDate} </p>
      </div>
      <div>
        <p className="blog-item-description"> {description} </p>
      </div>
    </li>
  )
}

export default BlogItem
