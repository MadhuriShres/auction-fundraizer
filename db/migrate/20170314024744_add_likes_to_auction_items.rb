class AddLikesToAuctionItems < ActiveRecord::Migration[5.0]
  def change
    add_column :auction_items, :likes, :integer, default: 0
  end
end
