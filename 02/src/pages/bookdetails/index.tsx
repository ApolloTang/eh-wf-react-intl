import React, {useContext} from 'react';
import { meanBy, round, sortBy } from 'lodash';
import {FormattedMessage, FormattedDate} from 'react-intl';
import {LangContext, LangContextType} from 'root/language/'
import {
  useParams
} from "react-router-dom";

import books from '../../books.json'

const Bookdetail = () => {
  const langContext = useContext(LangContext)
  const locale = langContext.locale
  const { bookId } = useParams()

  const book = books.find(book => book.id === parseInt(bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  const avgRating = book.reviews.length ? round(meanBy(book?.reviews, (r) => r.rating), 2) : 0;

  return (
  <div>
      <div className="BookDetail-meta">
        <img src={book?.image} width="200" height="275" alt={book?.title}/>
        <div className="BookDetail-metaBody">
          <h1>{book.title}</h1>
          <h3>
            <FormattedMessage
              id="detail.author"
              defaultMessage="Author: {author}"
              values={{author: book?.author}}
            />
          </h3>
          <div>
            <input type="checkbox" id="toggle" hidden/>
            <p>{book?.description}</p>
            <label className="BookDetail-descriptionToggle" htmlFor="toggle">
              <FormattedMessage
                id="detail.toggle"
                defaultMessage="Toggle"
              />
            </label>
          </div>
        </div>
      </div>
  </div>
);

}
export {Bookdetail};
