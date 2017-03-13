Rails.application.routes.draw do
  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  resources :auction_items, only: [:index, :show, :update]

  match '/clothes', to: 'home#index', via: :get
  match '/accessories', to: 'home#index', via: :get
  match '/faq', to: 'home#index', via: :get
  match '/delivery', to: 'home#index', via: :get
  match '/size', to: 'home#index', via: :get
end
