Rails.application.routes.draw do
  root 'home#index'

  get '/failures' => 'failures#index'

end
