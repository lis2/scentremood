Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    get '/moods/:id', to: 'moods#show'
    post '/moods', to: 'moods#create'
  end
end
