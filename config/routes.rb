Rails.application.routes.draw do

  root :to => 'pages#index'
  match '/a-propos', :to => 'pages#about', via: :get
  match '/mentions-legales', :to => 'pages#cgu', via: :get
  match '/membres', :to => 'pages#membres', via: :get
  match '/magazines', :to => 'pages#magazines', via: :get
  match '/boutique', :to => 'pages#boutique', via: :get
  match '/series', :to => 'pages#series', via: :get
  match '/actu', :to => 'pages#actualites', via: :get

  get '/contact', to: 'contacts#new' , as: :new_contact
  post '/contact', to: 'contacts#create', as: :contacts


end
