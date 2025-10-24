import {useState} from'react';

function BookCard({ title, author, image, description,extraContent}) {
  const [showMore, setShowMore] = useState(false);
  
  const handleSeeLess = () => {
    setShowMore(false);
  };


  const onSeeMore = () => {
    console.log("See More clicked");
    setShowMore(true);
  };



  return (
    <div className="card m-2 p-2" style={{ width: "18rem" }}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>Author:</strong> {author}</p>
        <p className="card-text">{description}</p>
        
       {!showMore && (
          <button onClick={onSeeMore} className="btn btn-primary">
            See More
          </button>
        )}
{showMore && (
          <>
            <div className="card-text mt-2">
              <p>{extraContent}</p>
            </div>
            <button onClick={handleSeeLess} className="btn btn-secondary mt-2">
              See Less
            </button>
          </>

        
        )}


      </div>
    </div>
  );
}

export default BookCard;