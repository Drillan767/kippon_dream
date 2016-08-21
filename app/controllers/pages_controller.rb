class PagesController < ApplicationController

  def index
    @titre = 'Accueil'
  end

  def membres
    @titre = 'Membres'
  end

  def magazines
    @titre = 'Magazines'
  end

  def series
    @titre = 'Séries'
  end

  def actualites
    @titre = 'Actualités'
  end

  def contact
    @titre = 'Contact'
  end

  def boutique
    @titre = 'Boutique'
  end

  def about
    @titre = 'À propos'
  end

  def cgu
    @titre = 'Charte d\'utilisation'
  end

end
