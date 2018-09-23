Rails.application.routes.draw do
  resources :moods, only: [:post, :get]
end
