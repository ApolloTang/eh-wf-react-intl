import React, {useContext} from 'react'
import {meanBy, round, sortBy} from 'lodash'
import {FormattedMessage, FormattedNumber, FormattedTime, FormattedRelativeTime} from 'react-intl'
import {LangContext, LangContextType} from 'root/language/'
import {useParams} from 'react-router-dom'
import {selectUnit} from '@formatjs/intl-utils';


import books from '../../books.json'
type merchantType = {
  price: {
    'en-US': number
    'es-ES': number
    'fr-FR': number
  }
}

interface ParamTypes {
  bookId: string
}

const Bookdetail = () => {
  const langContext = useContext(LangContext)
  const locale = langContext.locale as 'en-US' | 'es-ES' | 'fr-FR'
  const {bookId} = useParams<ParamTypes>()

  const book = books.find(book => book.id === parseInt(bookId, 10))
  const sortedReviews = sortBy(book?.reviews, 'date').reverse()
  const avgRating = book?.reviews.length
    ? round(
        meanBy(book?.reviews, r => r.rating),
        2,
      )
    : 0
  return (
    <div>
      <div className="BookDetail-meta">
        <img src={book?.image} width="200" height="275" alt={book?.title} />
        <div className="BookDetail-metaBody">
          <h1>{book?.title}</h1>
          <h3>
            <FormattedMessage
              id="detail.author"
              defaultMessage="Author: {author}"
              values={{author: book?.author}}
            />
          </h3>
          <div>
            <input type="checkbox" id="toggle" hidden />
            <p>{book?.description}</p>
            <label className="BookDetail-descriptionToggle" htmlFor="toggle">
              <FormattedMessage id="detail.toggle" defaultMessage="Toggle" />
            </label>
          </div>
        </div>
      </div>

      <h3 className="BookDetail-merchantHeading">
        <FormattedMessage
          id="detail.purchase"
          defaultMessage="Purchase this book from:"
        />
      </h3>

      <div className="BookDetail-merchants">
        {book?.merchants.map(merchant => {
          const m = (merchant as unknown) as merchantType
          const priceLocale = m?.price?.[locale]

          return (
            <a
              href={merchant.link}
              className="Merchant"
              target="_blank"
              key={merchant.name}>
              <img
                src={merchant.icon}
                width="32"
                height="32"
                alt={merchant.name}
              />
              <strong>{merchant.name}</strong>
              <p>
                <FormattedNumber
                  value={priceLocale}
                  style="currency"
                  currency={locale === 'en-US' ? 'USD' : 'EUR'}
                  currencyDisplay="symbol"
                />
              </p>
            </a>
          )
        })}
      </div>

      <FormattedMessage
        id="detail.window"
        values={{numMerchants: book?.merchants.length}}
        defaultMessage="number of merchants: {numMerchants}"
      />

      <h2>
        <FormattedMessage
          id="detail.reviewsHeading"
          defaultMessage="review heading"
        />
      </h2>

      <h3>
        <FormattedMessage
          id="detail.averageRating"
          values={{avgRating: avgRating, count: book?.reviews?.length}}
          defaultMessage="Ave Rating: {avgRating}, num of review: {count}"
        />
      </h3>

      <div className="BookDetail-reviews">
        {sortedReviews.map(review => {
          const {value, unit} = selectUnit(Date.now()- new Date(review.date).getTime());

          return (
            <div className="Review" key={review.date}>
              <div className="Review-meta">
                <img src={review.avatar} alt="Avatar" />
                <p>
                  <FormattedMessage
                    id="detail.userRating"
                    values={{
                      name: <strong>{review.name}</strong>,
                      rating: review.rating,
                    }}
                  />
                  <br />
                  {/*<FormattedDate
                  value={new Date(review.date)}
                  year='2-digit'
                  month='2-digit'
                  day='2-digit' />*/}
                  <FormattedTime
                    value={new Date(review.date)}
                    year="2-digit"
                    month="2-digit"
                    day="2-digit"
                  />
                  <br />
                    <FormattedRelativeTime value={value} unit={unit} />
                  <br />
                </p>
              </div>
              <p>{review.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export {Bookdetail}
