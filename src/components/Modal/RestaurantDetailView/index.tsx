import { Component } from 'react';
import { categoryIconFileName } from '../../../constants';
import { Restaurant } from '../../../types';

type RestaurantDetailViewProps = {
  restaurant: Restaurant;
};

export default class RestaurantDetailView extends Component<RestaurantDetailViewProps> {
  render() {
    const { category, name, distance, description, link } = this.props.restaurant;

    return (
      <div id="modal-detail-view" className="modal-detail-view">
        <div className="restaurant__category">
          <img src={categoryIconFileName[category]} alt={category} className="category-icon" />
        </div>
        <h2 className="modal-title text-title">{name}</h2>
        <div className="restaurant__info">
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="restaurant__link">
          {link}
        </a>
      </div>
    );
  }
}