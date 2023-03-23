import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Modal from "./Modal";
import { Rating } from "react-simple-star-rating";
import { UPDATE_BOOK_RATING } from "../utils/mutations";
import Auth from '../utils/auth'

export default function RatingModal(props) {

  const button = "Rate Me!";
  const ratingTitle = "Rate This Book:";
  const rateIt = "Rate It!";

  const [updateBookRating, { bookRatingError }] = useMutation(UPDATE_BOOK_RATING);
  // rating state has information
  const [rating, setRating] = useState(0);


  const activeUser = Auth.getProfile()


  const handleRating = async (value, index) => {
    console.log("handlerating value: ",value)
    setRating(value);
  };
  const onPointerMove = (value, index) => /*console.log(value, index)*/ {};

  const styles = {
    display: "flex",
    flexDirection: "row",
  };

  const saveRating = async () => {
    console.log("bookId", props.book._id)
    console.log("rating", rating)
    const a = await updateBookRating({
      variables: {
        bookId: props.book._id,
        bookRating: rating
      }
    })
    // window.location.reload();
  };

  return (
    <>
      <Modal
        buttonName={button}
        modalTitle={ratingTitle}
        modalFunction={rateIt}
        modalInformation={() => (
          <div
            style={{
              display: "inline",
            }}
          >
            <Rating
              onClick={handleRating}
              onPointerMove={onPointerMove}
              // style={styles}
            />
          </div>
        )}
        onClickInfo={saveRating}
      />
    </>
  );
}

export function BookRating(props) {
  // rating state has information
  const [rating, setRating] = useState(0);

  const handleRating = (value, index) => {
   
    setRating(index);
  };
  const onPointerMove = (value, index) => /*console.log(value, index);*/ {}

  const styles = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div
      style={{
        direction: "ltr",
        fontFamily: "sans-serif",
        touchAction: "none",
      }}
    >
      {/* read only rating stars */}
      <Rating
        initialValue={props.book.bookRating}
        onClick={handleRating}
        onPointerMove={onPointerMove}
      />
    </div>
  );
}