import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import reviewstar from '../../asstes1/images/icon/review-star.png'

export default function StudentsReviews({teacherDetails,reviewData=[]}) {
    return (
        <>
            <div className="media-body">
                <h4 className="media-title">Students Reviews</h4>
                <h6>
                    {teacherDetails?.avgRating??""}<span className="review">({reviewData.length} reviews)</span>
                </h6>
                <div className="review-description">
                  {reviewData.map((item)=>{
                    return <div className="review-description-item" key={item.studentId}>
                    <div className="review-box">
                        <div className="review-section">
                            <img src={diannerussel} alt="" />
                        </div>
                        <div className="review-section">
                            <p className="review-name">{item?.studentData?.fristName} {item?.studentData?.lastName}</p>
                            <p className="review-start">
                                {item?.rating??""}
                                <img
                                    src={reviewstar}
                                    className="review-star"
                                    alt=""
                                />
                            </p>
                        </div>
                    </div>
                    <p className="review-details">
                        {item.review}.
                    </p>
                </div>
                  })}  
                    
                </div>
            </div>
        </>
    )
}