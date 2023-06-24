// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul>
      {blogList.map(eachItem => (
        <BlogItem blogItem={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
