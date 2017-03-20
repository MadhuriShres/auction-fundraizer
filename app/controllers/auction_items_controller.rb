# frozen_string_literal: true

# Handles all action related to items
class AuctionItemsController < ApplicationController
  def index
    category = params['category']
    auction_items = if category == 'all' || category.blank?
                      AuctionItem.all
                    else
                      AuctionItem.where(category: category)
                    end
    render json: auction_items
  end

  def show
    render json: AuctionItem.find_by!(id: params['id'])
  end

  def update
    update_params = { 'sold_to' => params['sold_to'], 'id' => params['id'] }
    update_params['sold'] = true unless AuctionItem::MADEONORDER.include? params['id']
    auction_item = AuctionItem.find_by!(id: params['id'])
    updated_auction_item = auction_item.update!(update_params)
    Notifier.item_purchased(auction_item['id'],
                            auction_item['name'],
                            auction_item['sold_to']).deliver
    render json: updated_auction_item
  end

  def like
    auction_item = AuctionItem.find_by!(id: params['auction_item_id'])
    render json: auction_item.increment!(:likes)
  end
end
