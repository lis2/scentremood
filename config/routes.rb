Rails.application.routes.draw do
  get '/moods/:id', to: 'moods#show'
  post '/moods', to: 'moods#create'
end
