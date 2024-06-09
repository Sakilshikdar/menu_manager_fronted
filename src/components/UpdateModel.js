import React, { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ review }) => {
  
  const baseUrl = "https://menu-manager-backend.onrender.com/api/";
  const [editReview, setEditReview] = useState({ comment: review.comment, rating: review.rating });
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const id = review.id;
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`${baseUrl}review_detail/${id}/`, {
      comment: editReview.comment,
      rating: editReview.rating,
      book: review.book_id,
      
    })
    .then(response => {
      window.location.reload();
    })
    .catch(error => console.error('Error updating review:', error));
  };

  return (
    <div className="modal fade" id={`updateModal-${review.id}`} tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateModalLabel">Update Review</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <input type="text" className="form-control" id="comment" name="comment" value={editReview.comment} onChange={handleEditChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="number" className="form-control" id="rating" name="rating" value={editReview.rating} onChange={handleEditChange} />
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
              <button type="button" className="btn btn-secondary ms-3" data-bs-dismiss="modal">cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
