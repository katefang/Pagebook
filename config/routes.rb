Rails.application.routes.draw do
  resources :posts do 
    resources :comments 
  end 
  resources :users
  post '/auth/login', to: 'auth#login'
  get '/auth/verify', to: 'auth#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
