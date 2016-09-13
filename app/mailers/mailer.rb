class Mailer < ActionMailer::Base
  layout 'mailer'

  def contact_form(contact)
    @contact = contact
    @to = "kippon@dream.com" #modifier

    mail(to: @to, subject: 'Nouveau contact depuis le site !') do |f|
      f.html
    end
  end
end