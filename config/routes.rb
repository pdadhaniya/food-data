Rails.application.routes.draw do
  root 'home#index'

  get '/failures' => 'failures#index'
  get '/failures/:id' => 'failures#show'
end
