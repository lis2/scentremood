Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    get '/moods/:uid', to: 'moods#show'
    post '/moods', to: 'moods#create'
  end
  get '/history/:uid', to: 'history#show'
end
