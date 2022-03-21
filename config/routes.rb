Rails.application.routes.draw do
  devise_for :users
  root to: "dietrecords#index"
  resources :dietrecords, only: [:index, :new, :create]
  resources :calculations, only: [:index, :new, :create]
end
