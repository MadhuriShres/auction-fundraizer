# frozen_string_literal: true

# Handles all mailer action
class Notifier < ActionMailer::Base
  def item_purchased(item_id, item_name, buyer)
    mail(to: ['elissa@cloudfactory.com', 'madhuri@cloudfactory.com'],
         from: 'auction.fundraizer@gmail.com',
         subject: 'Item sold',
         body: "#{item_name} with id: #{item_id} was bought by #{buyer}")
  end
end
