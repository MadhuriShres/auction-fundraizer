# frozen_string_literal: true

# Handles all action related to items
class AuctionItemsController < ApplicationController
  def index
    category = params['category']
    render json: category.present? ? AuctionItem.where(category: category) : AuctionItem.all
  end

  def show
    render json: AuctionItem.find_by!(id: params['id'])
  end

  def update
    update_params = permitted_params.merge(sold: true)
    auction_item = AuctionItem.find_by!(id: params['id'])
    render json: auction_item.update!(update_params)
  end

  def like
    auction_item = AuctionItem.find_by!(id: params['id'])
    render json: auction_item.increment!(:likes)
  end

  private

  def permitted_params
    params.require(:sold_to)
  end
end
