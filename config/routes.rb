Rails.application.routes.draw do

  root :to => 'pages#index'
  match '/a-propos', :to => 'pages#about', via: :get
  match '/mentions-legales', :to => 'pages#cgu', via: :get
  match '/nos-membres', :to => 'pages#membres', via: :get

end
