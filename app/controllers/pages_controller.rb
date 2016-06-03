class PagesController < ApplicationController

  def index
    @titre = 'Accueil'
  end

  def about
    @titre = 'À propos'
  end

  def cgu
    @titre = 'Charte d\'utilisation'
  end

end
