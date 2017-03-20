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
    update_params = permitted_params
    update_params.merge(sold: true) unless [66, 67, 68, 69].include? params['id']
    auction_item = AuctionItem.find_by!(id: params['id'])
    render json: auction_item.update!(update_params)
  end

  def like
    auction_item = AuctionItem.find_by!(id: params['id'])
    render json: auction_item.increment!(:likes)
  end

  private

  def permitted_params
    params.slice(:sold_to, :id)
  end
end
