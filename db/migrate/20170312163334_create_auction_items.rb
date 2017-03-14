class CreateAuctionItems < ActiveRecord::Migration[5.0]
  def change
    create_table :auction_items do |t|
      t.string :image_url
      t.string :name
      t.string :description
      t.integer :price
      t.boolean :sold, default: false
      t.string :sold_to
      t.string :category

      t.timestamps
    end
  end
end
