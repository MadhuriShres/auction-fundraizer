# frozen_string_literal: true

# Provides created emails
class EmailsController < ApplicationController
  def index
    render json: Email.all
  end
end
