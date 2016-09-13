class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new params[:contact]

    if @contact.valid?
      Mailer.contact_form(@contact).deliver # Je vais expliquer cette ligne juste après...
      redirect_to new_contact_path, flash: {success: 'Message envoyé'}
    else
      render :new
    end
  end

end