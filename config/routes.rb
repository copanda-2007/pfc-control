Rails.application.routes.draw do
  devise_for :users
  root to: "dietrecords#index"
  resources :dietrecords, only: [:index, :new]
end
