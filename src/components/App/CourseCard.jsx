"use client"

import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const CourseCard = ({ id, title, price, image, courseType, linkTo = `/courses/${id}`, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md ${className}`}
    >
      <Link to={linkTo}>
        <div className="relative">
          <img
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            className="w-full h-40 object-cover"
          />
          {courseType && (
            <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded-md">{courseType}</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-2 line-clamp-2 h-12">{title}</h3>
          <p className="text-lg font-semibold">
            ${price}
            <span className="text-sm font-normal">.00</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

CourseCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string,
  courseType: PropTypes.string,
  linkTo: PropTypes.string,
  className: PropTypes.string,
}

export default CourseCard
