class Mailer < ActionMailer::Base
  layout 'mailer'

  def contact_form(contact)
    @contact = contact
    @to = 'kippondream@gmail.com'
    @from = 'Kippon Dream'

    mail(to: @to, from: @from, subject: 'Nouveau contact depuis le site !') do |f|
      f.html
    end
  end
end